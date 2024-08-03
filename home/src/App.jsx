import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppLayout from "./layout/Layout";
import Home from "./pages/home/Home";

const App = () => (
  <div className="container">
    <Home />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />);