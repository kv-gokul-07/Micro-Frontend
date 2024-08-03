import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Home = React.lazy(() => import("./pages/home/Home"));

const App = () => (
  <div className="container">
    <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)