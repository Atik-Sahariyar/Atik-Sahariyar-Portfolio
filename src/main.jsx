import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ThemeProvider from "./Provider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ThemeProvider>
   <div className="">
      <RouterProvider router={routes} />
    </div>
   </ThemeProvider>
  </React.StrictMode>
);