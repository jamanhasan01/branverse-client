import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../Root";
  
  let router = createBrowserRouter([
    {
      path: "/",
      Component: <Root/>,
    
    },
  ]);
  
 export default router