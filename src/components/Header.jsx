import {Radar } from "lucide-react";
import React from "react";

export const Header = () => {
    return (
      <>
        <div className="flex items-center justify-between h-16 p-5 bg-white border-b">
          <div className="flex gap-2">
          <Radar />
            <b>Detector de plagas y Enfermedades</b>


          </div>
          <div className="flex items-center space-x-4 ">
            <a className="hover:bg-transparent hover:text-green-600 hover:cursor-pointer " href="">Home</a>
            <a className="hover:bg-transparent hover:text-green-600 hover:cursor-pointer " href="">Nosotros</a>
            <a className="hover:bg-transparent hover:text-green-600 hover:cursor-pointer " href="">Contacto</a>
            <button className="px-3 py-2 w-full text-center text-white bg-green-600 border border-green-600 rounded-lg active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
            >
              Detectar
            </button>
            
          </div>
  
          
        </div>
       
      </>
    );
};
