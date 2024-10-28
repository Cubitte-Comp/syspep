import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Dashboard } from "./Dashboard";
import { Detector } from "./Detector";
import { Managment } from "./Managment";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <Header />

        <div className="flex flex-wrap  w-full h-screen">
          <Sidebar />

          <div className="w-10/12 ">
            {/* <div className="p-4 text-gray-500">Content here...</div> */}
            {/* <Dashboard /> */}
            {/* <Detector/> */}
            {/* <Managment/> */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
