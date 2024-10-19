import { Database, LayoutDashboard, Leaf, LogOut, ScanLine, Settings, User } from "lucide-react";
import React from "react";

export const Sidebar = () => {
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
                Douglas Cac
              </h4>
              <span className="text-sm tracking-wide flex items-center space-x-1">
                <svg
                  className="h-4 text-green-500"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                    <Leaf />
                </svg>
                <span className="text-gray-600">Administrador</span>
              </span>
            </div>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#f8efea] focus:shadow-outline"
              >
                <span className="text-gray-600">
                <LayoutDashboard />
                </span>
                <span>Dashboard</span>
              </a>
            </li>
           
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  
                <ScanLine/>
                </span>
                <span>Area de Detección</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className=" text-gray-600">
                    
                    <Database />
                </span>
                <span>Data Managment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#f8efea] bg-[#f8efea] focus:shadow-outline"
              >
                <span className="text-gray-600">
                  
                <User />
                </span>
                <span>User Managment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                    <Settings />
                </span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                <LogOut/>
                </span>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>

  );
};
