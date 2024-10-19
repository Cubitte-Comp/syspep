import { Camera, CloudUpload, Paperclip, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const Detector = () => {
  const [mode, setMode] = useState("file"); // 'file' or 'camera'
  const [imageData, setImageData] = useState(null); // Almacena la imagen capturada o cargada
  const videoRef = useRef(null);
  const streamRef = useRef(null); // Ref para almacenar el stream de la cámara
  const fileInputRef = useRef(null);

  // Encender la cámara cuando se selecciona el modo "camera"
  useEffect(() => {
    if (mode === "camera" && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          streamRef.current = stream; // Guardar el stream
        })
        .catch((err) => console.log("Error al acceder a la cámara", err));
    }

    // Apagar la cámara cuando se cambia de modo
    if (mode !== "camera" && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop()); // Detener el stream
      streamRef.current = null;
    }
  }, [mode]);

  // Función para capturar la imagen desde la cámara
  const captureImage = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL("image/png");
    setImageData({ type: "camera", name: "captured-image.png", src: image });
  };

  // Manejar la carga de archivos
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageData({
        type: "file",
        name: file.name,
        src: URL.createObjectURL(file),
      });
      toast.success("Imagen cargada exitosamente");
    }
  };

  return (
    <>
      <div className="flex flex-col h-full items-center ">
        <div className="text-2xl font-bold p-5">
          <h3 className="">Area de Detección</h3>
        </div>

        <div className="bg-white w-9/12  p-4">
          {/* Botón para alternar entre subir archivo y cámara */}
          <div className="mb-4 flex justify-center">
            <button
              onClick={() => setMode("file")}
              className={`mx-2 p-2 rounded-full ${
                mode === "file" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              <Paperclip />
            </button>
            <button
              onClick={() => setMode("camera")}
              className={`mx-2 p-2 rounded-full ${
                mode === "camera" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              <Camera />
              <i className="fas fa-camera"></i> {/* Icono de cámara */}
            </button>
          </div>
          {/* Modo Subir Archivo */}
          {mode === "file" && (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-9/12 h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <CloudUpload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}
          {/* Modo Cámara */}
          {mode === "camera" && (
            <div className="flex flex-col items-center">
              <video
                ref={videoRef}
                autoPlay
                className=" w-9/12 h-80 mb-2 rounded-md border-2 border-dashed"
              ></video>
              <button
                onClick={captureImage}
                className="px-4 py-2 bg-blue-500  text-white rounded-md"
              >
                Capturar Imagen
              </button>
            </div>
          )}
        </div>

        {/* Sección oculta que se muestra al capturar/cargar una imagen */}

        <div className="flex flex-col gap-2 p-5 justify-center items-center">
          {imageData ? (
            <div class="mb-5 rounded-md bg-[#f8efea] py-4 px-8">
              <div class="flex items-center justify-between">
                <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                  {imageData.name}
                </span>
                <button class="text-[#07074D]">
                  <X />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className={`text-white font-bold p-3 border rounded-lg w-80 ${
              imageData
                ? "bg-green-600 hover:bg-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Analizar
          </button>
        </div>
        <div className="mt-5">
          <span className="text-gray-600">
            Sube una imagen de tu planta y recibe comentarios instantáneos sobre
            posibles infestaciones de plagas.
          </span>
        </div>
      </div>
    </>
  );
};
