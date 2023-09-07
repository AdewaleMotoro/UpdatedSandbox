import React from "react";
import "../ConditionalForm/styles.css";
import Form from "../ConditionalForm/Form";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Form />}
    </div>
  );
}

export default App;
