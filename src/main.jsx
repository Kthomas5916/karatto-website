
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PropertyManagement from "./PropertyManagement";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "");

const CurrentPage =
  path === "/property-management"
    ? PropertyManagement
    : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentPage />
  </React.StrictMode>
);
