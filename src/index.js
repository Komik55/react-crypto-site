import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalCSS from "./GlobalCSS";

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
