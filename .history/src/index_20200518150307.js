import "./index.css";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addPost } from "./redux/state";
import { textPostChange } from "./redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} textPostChange={textPostChange} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

rerenderEntireTree(state);