import React from "react";
import ReactDOM from "react-dom";
import App from "../Skillharvest/App"


ReactDOM.render(

<div>
<App/>


</div>

  ,document.getElementById("root")
);


const name = "name"
const age = "age "
const email = "email"


  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', this.state.name, this.state.age, this.state.email);
    // You can send the data to a server here
  };

  
}

