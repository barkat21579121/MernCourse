import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TokenProvider } from "./Context__Store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TokenProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TokenProvider>
);
