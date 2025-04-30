import { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiFileText,
  FiMail,
  FiLogOut,
  FiMenu,
  FiX,
  FiBell,
} from "react-icons/fi";
import Asidebar from "../components/dashboardComponents/Asidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Asidebar />
      {/* main content */}
    <div className="p-4">
    <Outlet />
    </div>
    </div>
  );
};

export default DashboardLayout;
