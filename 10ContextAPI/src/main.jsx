import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./Context/Context"; // Import Context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>  {/* Wrap App inside Context */}
      <App />
    </Context>
  </React.StrictMode>
);
