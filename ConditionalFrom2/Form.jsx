import React from "react";

function Form(prem) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {prem.isRegistered === false ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      <button type="submit">{prem.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
