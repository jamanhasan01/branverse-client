import {
    createBrowserRouter,
  } from "react-router";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home";
  
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
      ]
    },

  ]);
  
 export default router