import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ListLayer } from "./context/ListContext";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <ListLayer initialState={initialState} reducer={reducer}>
      <App />
    </ListLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
