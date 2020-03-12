import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default function renderEntireTree(state, ...funcs) {
  ReactDOM.render(
    <App state={state} addPost={funcs[0]} watch={funcs[1]} />,
    document.getElementById("root")
  );
}
