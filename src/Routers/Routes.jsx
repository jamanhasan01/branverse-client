import { createBrowserRouter } from "react-router";
// main website routes
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import Portfolio from "../pages/portfolio/Portfolio";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";

// dashbord routes
import DashboardHome from "../pages/Dashboard/DashboardHome ";
import ManageServices from "../pages/Dashboard/ManageServices ";
import ManageProjects from "../pages/Dashboard/ManageProjects ";
import ManageUsers from "../pages/Dashboard/ManageUsers ";
import AddModerator from "../pages/Dashboard/AddModerator ";
import Settings from "../pages/Dashboard/Settings";
import Messages from "../pages/Dashboard/Messages";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard_home",
        element: <DashboardHome />,
      },
      {
        path: "manage_services",
        element: <ManageServices />,
      },
      {
        path: "manage_projects",
        element: <ManageProjects />,
      },
      {
        path: "manage_users",
        element: <ManageUsers />,
      },
      {
        path: "add_moderator",
        element: <AddModerator />,
      },
      {
        path: "settings",
        element: <Settings />,
        
      },
      {
        path:'messages',
        element:<Messages/>
      }
    ],
  },
]);

export default router;
