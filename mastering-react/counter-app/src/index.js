import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

// BANK OF AMERICA

// With these components we are extending the html vocabulary, so
// wherever we have a counter element, we'll get the output
// of the counter component, which is determined by what is
// returned from the render method.
ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
