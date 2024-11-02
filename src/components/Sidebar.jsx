import {
  Leaf,
} from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";



const MenuItems = ({ icon, text, active, children, path }) => {

  const toggleSidebar = (e) => {
    const text  = e.target.textContent;
    if(text == 'Logout'){

      localStorage.removeItem('user');
      window.location.reload();
    }
  };
  return (
       <li>
          <Link
            onClick = {toggleSidebar}
            to={children ? "" :path}
            className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium  hover:bg-gray-200  focus:shadow-outline
            bg-transparent focus:bg-[#f8efea]`}
          >
            <span className="text-gray-600">
            {icon}
            </span>
            <span>{text}</span>
          </Link>
      </li>
  );
};


export const Sidebar = ({menuItems}) => {
  const auth = useUser() ;   
  const user = auth.getUser();

  return (
    <div className="w-2/12 bg-white rounded p-3 shadow-lg">
      <div className="flex items-center space-x-4 p-2 mb-5">
        <img
          className="h-12 rounded-full"
          src="./src/img/user.png"
          alt="James Bhatta"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
            {(user) ? user.name : "Invitado"}

          </h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            <svg
              className="h-4 text-green-500"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <Leaf />
            </svg>
            <span className="text-gray-600">
              {user.typeUser === 1
                ? "Invitado"
                : user.typeUser === 2
                ? "Administrador"
                : "Técnico"}
            </span>
          </span>
        </div>
      </div>


      <ul className="space-y-2 text-sm">

        {menuItems.map((item, index) => (
          <MenuItems 
          key={index}
          icon={item.icon}
          text={item.label}
          children={item.children}
          path={item.path}/>
        ))}

      </ul>
    </div>
  );
};
