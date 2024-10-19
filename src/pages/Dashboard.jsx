import React from "react";
import { BarChart } from "../components/Bar";
import { LineGraph } from "../components/Line";



const barChartData ={
    labels: ['Top', 'Middle', 'Bottom'],
    datasets: [{
        label: 'plagas',
        data: [65, 59, 80],
        backgroundColor: 'rgb(248, 239, 234)',
        borderColor: 'rgba(163, 132, 85, 0.9)',
        borderWidth: 2
    }]
};
const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Meses",
        data: [40, 42, 40, 55, 56, 65, 75],
         borderColor: 'rgb(163, 132, 84)'

      },
    ],
  };

const options = {};

export const Dashboard = () => {
  return (
    <>
      <main>
        <div className="pt-6 px-4 text-2xl font-bold">Dashboard</div>
        <div className="pt-6 px-4">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-md p-4 sm:p-6 xl:p-8  ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-shrink-0">
                  <span className="text-base font-normal text-gray-600">
                    Area de Detección
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Plagas mas comunes
                  </h3>
                  <span className="text-base font-normal text-gray-400">
                    Actual
                  </span>
                </div>
              </div>
              <div id="main-chart">
                <BarChart options={options} data={barChartData} />
              </div>
            </div>
            <div className="bg-white shadow rounded-md p-4 sm:p-6 xl:p-8 ">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-base font-normal text-gray-600">
                    La salud de las plantas a lo largo del tiempo
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Tendencia de salud
                  </h3>
                  <span className="text-base font-normal text-gray-400">
                    Ultimos meses
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                        <LineGraph options={options} data={lineChartData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-md mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">
                  Gestionar Datos
                </h3>
                <button
                  href="#"
                  className="text-sm text-white font-medium bg-green-600 border border-green-600  hover:text-green-600 hover:bg-transparent rounded-lg inline-flex active:text-green-500  items-center p-2 focus:ring"
                >
                  Ir a gestionar datos
                </button>
              </div>
              <div>
                <p className="text-[#9c8349]">Acceso a herramientas de administracion de predicciones</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
