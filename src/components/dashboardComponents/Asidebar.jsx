import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiFileText,
  FiMail,
  FiLogOut,
} from "react-icons/fi";



import light_logo from '/light_logo.png'
const Asidebar = () => {
  return (
    <aside className="bg-main w-70 h-screen flex flex-col">
      <div className="p-4 flex-1 flex flex-col justify-between">
        <ul className="menu w-full gap-2 text-white">
          <h4 className="text-3xl  border-b pb-3 text-center">Branverse</h4>
          <li>
            <NavLink 
              to="/dashboard/dashboard_home"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiHome className="w-5 h-5" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/manage_users"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiUsers className="w-5 h-5" />
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/manage_projects"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiBarChart2 className="w-5 h-5" />
              Manage Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/manage_services"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiCalendar className="w-5 h-5" />
              Manage Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/add_moderator"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiFileText className="w-5 h-5" />
              Add Moderator
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/messages"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiMail className="w-5 h-5" />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/settings"
              className={({ isActive }) => 
                isActive ? "active bg-white/20 text-white" : "hover:bg-white/10"
              }
            >
              <FiSettings className="w-5 h-5" />
              Settings
            </NavLink>
          </li>
        </ul>
        
        <div className="p-4">
          <button className="button  w-full flex items-center justify-center text-main bg-white/95 border">
            <FiLogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Asidebar;