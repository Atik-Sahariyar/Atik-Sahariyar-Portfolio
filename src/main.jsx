import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import ThemeProvider from "./Provider/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ThemeProvider>
   <div className="">
      <RouterProvider router={routes} />
    </div>
   </ThemeProvider>
  </React.StrictMode>
);