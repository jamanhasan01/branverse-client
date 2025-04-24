import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import router from "./Routers/Routes.jsx";
import Root from "./Root.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter router={router}>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
