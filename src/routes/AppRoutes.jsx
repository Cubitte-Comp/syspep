import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Managment } from "../pages/Managment";
import { Registro } from "../pages/Registro";
import { Login } from "../pages/Login";
import { Detector } from "../pages/Detector";
import { Logout } from "../pages/Logout";
import { Nosotros } from "../pages/Nosotros";
import { Contacto } from "../pages/Contacto";
import { Data } from "../pages/Data";
import { Historicos } from "../pages/Historicos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/managment",
            element: <Managment />,
          },
          {
            path: "/deteccion",
            element: <Detector />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/nosotros",
            element: <Nosotros />,
          },
          {
            path: "/contacto",
            element: <Contacto />,
          },
          {
            path: "/data",
            element: <Historicos />,
          },
        ],
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};