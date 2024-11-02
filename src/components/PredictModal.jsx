import { Percent, Shapes, SquareAsterisk } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BarChart } from "./Bar";
import { Maps } from "./Maps";
import { predictImage, savePredict } from "../services/Predict";
import { useUser } from "../hooks/useUser";
import { toast } from "react-toastify";

const options = {};

const base64ToBlob = (base64, mimeType) => {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};



export const PredictModal = ({ onClose, image }) => {
  const [imageData, setImageData] = useState(null);
  const [predict, setPredicts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [hasResults, setHasResults] = useState(false);

  const auth = useUser();
  const user = auth.getUser();

  const handleLocationSelect = (position, name) => {
    setLocation(position);
    setLocationName(name);
  };

  const runPredictData = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await predictImage(formData);
    if (response.ok) {
      const data = await response.json();


      // Crear una URL de la imagen en base64
      const imageSrc = `data:${data.mimeType};base64,${data.image}`;

      // Guardar la imagen y otros datos en el estado
      setImageData(imageSrc);
      setPredicts(data.results);
      setHasResults(data.results.length > 0);

      // Extraer las etiquetas y los datos
      const predict_labels = data.results.map((item) => item.class);
      const predict_data = data.results.map((item) => item.confidence * 100); // Convertir confianza en porcentaje si es necesario

      setData(predict_data);
      setLabels(predict_labels);
    }

    setIsLoading(false); // Cambiar el estado de carga a false después de obtener los datos
  };

  useEffect(() => {
    runPredictData();
  }, [image]);


  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "plagas",
        data: data,
        backgroundColor: "rgb(248, 239, 234)",
        borderColor: "rgb(163, 122, 84)",
        borderWidth: 2,
      },
    ],
  };

  const handleSaveChanges = async () => {
    if (imageData) {
      setIsSaving(true);
      const mimeType = imageData.split(';')[0].split(':')[1];
      const base64Data = imageData.split(',')[1];
      const blob = base64ToBlob(imageData, mimeType);

      const formData = new FormData();
      formData.append("image", blob, "image.png");
      formData.append("altitud", location.lat);
      formData.append("latitud", location.lng);
      formData.append("ubicacion", locationName);
      formData.append("operador", user.name || "Invitado");
      formData.append("results", JSON.stringify(predict));

      try {
        const response = await savePredict(formData);

        if (response.ok) {
          toast.success("Imagen subida correctamente");
          // Limpiar los estados después de guardar los cambios
          setImageData(null);
          setPredicts(null);
          setData(null);
          setLabels(null);
          setLocation(null);
          setLocationName("");
          setHasResults(false);
          onClose();
          onClose();
        } else {
          console.error("Error al subir la imagen");
        }
      } catch (error) {
        console.error("Error al subir la imagen", error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 h-full">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:max-w-screen-xl mx-auto">
        <Header />
        <Body
          isLoading={isLoading}
          imageData={imageData}
          predict={predict}
          data={data}
          labels={labels}
          lineChartData={lineChartData}
          handleLocationSelect={handleLocationSelect}
          location={location}
          locationName={locationName}
        />
        <ActionButtons
          onClose={onClose}
          handleSaveChanges={handleSaveChanges}
          hasResults={hasResults}
          isSaving={isSaving}
        />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="border-b border-gray-200 mb-3">
    <h2 className="text-xl font-semibold text-gray-600">
      Resultado de la predicción
    </h2>
  </div>
);

const Body = ({
  isLoading,
  imageData,
  predict,
  data,
  labels,
  lineChartData,
  handleLocationSelect,
  location,
  locationName,
}) => (
  <div className="flex aling-center justify-center gap-2 bg-gra-200 p-3 rounded px-4 py-3 h-4/5">
    {isLoading ? (
      <Loading />
    ) : data.length === 0 ? (
      <NoResults />
    ) : (
      <Results
        imageData={imageData}
        predict={predict}
        lineChartData={lineChartData}
        handleLocationSelect={handleLocationSelect}
        location={location}
        locationName={locationName}
      />
    )}
  </div>
);

const Loading = () => (
  <div className="flex items-center justify-center">
    <button
      type="button"
      className="bg-gray-400 w-max rounded-lg text-white font-bold hover:cursor-not-allowed duration-[500ms,800ms]"
      disabled
    >
      <div className="flex items-center justify-center m-[10px]">
        <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
        <div className="ml-2"> Processing... </div>
      </div>
    </button>
  </div>
);

const NoResults = () => (
  <div>
    <h1 className="text-center bg-gray-100 py-8 px-4 rounded-lg shadow-md">
      No se encontraron resultados
    </h1>
  </div>
);

const Results = ({
  imageData,
  predict,
  lineChartData,
  handleLocationSelect,
  location,
  locationName,
}) => (
  <>
    <div className="border border-[#9c8349] rounded-md w-full h-[450px] overflow-hidden">
      <img
        className="w-full object-contain max-h-full"
        src={imageData}
        alt=""
      />
    </div>

    <div className="box-border w-full overflow-y-auto border border-[#9c8349] rounded-md h-[450px] p-1">
      {predict &&
        predict.map((item, index) => (
          <div className="flex flex-col w-full mb-1" key={index}>
            <div className="border-b border-[#9c8349] bg-gray-50 hover:bg-gray-100 p-4 transition-colors duration-300">
              <div className="mt-1 fill-current flex gap-2">
                <SquareAsterisk className="bg-green-100 rounded" />
                <span>Id Clase:</span>
                <span className=" bg-purple-400/25 bg-opacity-10 px-4 rounded">
                  {" "}
                  {item.class_id}
                </span>
              </div>
              <div className="mt-1 fill-current flex gap-2">
                <Shapes className="bg-green-100 rounded" />
                <span>Clase:</span>
                <span className=" bg-purple-400/25 bg-opacity-10 px-4 rounded">
                  {item.class}
                </span>
              </div>
              <div className="mt-1 fill-current flex gap-2">
                <Percent className="bg-green-100 round" />
                <span>Confidence:</span>
                <span className=" bg-purple-400/25 bg-opacity-10 px-4 rounded">
                  {" "}
                  {item.confidence}
                </span>
              </div>
            </div>
          </div>
        ))}
      <div className="border-b border-[#9c8349] mb-1">
        <BarChart options={options} data={lineChartData} />
      </div>
      <div className="p-2">
        <h1 className="text-center">Selecciona una ubicación en el mapa</h1>
        <div>
          <Maps onLocationSelect={handleLocationSelect} />
          <p>
            Coordenadas seleccionadas:{" "}
            {location ? `${location.lat}, ${location.lng}` : "Ninguna"}
          </p>
          <p>Nombre de la ubicación: {locationName}</p>
        </div>
      </div>
    </div>
  </>
);

const ActionButtons = ({ onClose, handleSaveChanges, hasResults, isSaving }) => (
  <div className="flex justify-end space-x-2 border-t border-gray-200 px-4 py-3 mt-3">
    <button
      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
      onClick={onClose}
    >
      Cancelar
    </button>

    <button
      className={`${hasResults ? "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" : "hidden"
        }`}
      onClick={handleSaveChanges}
      disabled={isSaving}
    >
      {isSaving ? (
        <div className="flex items-center justify-center">
          <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
          <div className="ml-2">Guardando...</div>
        </div>
      ) : (
        "Guardar Cambios"
      )}
    </button>
  </div>
);

