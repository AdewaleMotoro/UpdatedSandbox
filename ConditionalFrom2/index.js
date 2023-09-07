import React from "react";
import ReactDOM from "react-dom";
import App from "../ConditionalFrom2/App";
import "../ConditionalFrom2/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
