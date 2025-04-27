import {
    createBrowserRouter,
  } from "react-router";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import Portfolio from "../pages/portfolio/Portfolio";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
  
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/services',
          element:<Services/>
        },
        {
          path:'/portfolio',
          element:<Portfolio/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
      ]
    },

  ]);
  
 export default router