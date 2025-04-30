
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
