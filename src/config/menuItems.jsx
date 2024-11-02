import React from "react";
import {
  LayoutDashboard,
  Settings,
  LifeBuoy,
  ScanLine,
  Database,
  User,
  LogOut,
  
} from "lucide-react";


const menuItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard />,
    children: null,
    path: "/dashboard",
  },
  {
    label: "Detección",
    icon: <ScanLine />,
    children: null,
    path: "/deteccion",
  },
  {
    label: "Data Managment",
    icon: <Database />,
    children: null,
    path: "/data",
  },
  {
    label: "User Managment",
    icon: <User />,
    children: null,
    path: "/managment",
  },
  {
    label: "Settings",
    icon: <Settings />,
    children: null,
    path: "/",
  },
  {
    label: 'Logout',
    icon: <LogOut />,
    children: null,
    path: '/logout'
  }
  // Más elementos del menú aquí
];

export default menuItems;
