import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Student Information Form</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={this.state.age}
          onChange={this.handleAgeChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
