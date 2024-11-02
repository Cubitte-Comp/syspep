import {Radar } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <>
        <div className="flex items-center justify-between h-16 p-5 bg-transparent border-b">
          <div className="flex gap-2">
          <Radar />
            <b>Detector de plagas y Enfermedades</b>


          </div>
          <div className="flex items-center space-x-4 ">
            <Link className="hover:bg-transparent hover:text-green-600 hover:cursor-pointer " to="/">Home</Link>
            <Link className="hover:bg-transparent hover:text-green-600 hover:cursor-pointer " to="/nosotros">Nosotros</Link>
            <Link className="hover:bg-transparent hover:text-green-600 hover:cursor-pointer " to="/contacto">Contacto</Link>
            <button to="/deteccion" className="px-3 py-2 w-full text-center text-white bg-green-600 border border-green-600 rounded-lg active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
            >
              Detectar
            </button>
            
          </div>
  
          
        </div>
       
      </>
    );
};
