import React, { useState } from "react";
import "../Form/styles.css";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handlechange() {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handlechange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
