import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App"; //component
//it can be './App.js', if you don't specify, the default is .js file
import * as serviceWorker from "./serviceWorker";
// for pwa
import "tachyons";
import App from "./containers/App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
