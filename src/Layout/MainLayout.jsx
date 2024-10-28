import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { SidebarMenu } from "../utils/SidebarMenu";

export const MainLayout = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-wrap  w-full h-screen">
        <SidebarMenu />

        <div className="w-10/12 ">
          {/* <div className="p-4 text-gray-500">Content here...</div> */}
          {/* <Dashboard /> */}
          {/* <Detector/> */}
          {/* <Managment/> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

