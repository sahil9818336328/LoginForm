import React, { useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const App = () => {
  //passing an object as an intitial value.
  const [state, setState] = useState({ uname: "", pass: "", cpass: "" });

  // triggers when the value of the input field changes.
  const changeHandler = (e) => {
    const fieldName = e.target.name; //getting the value of the name attribute.
    const value = e.target.value; //getting the values on the input field

    // console.log(fieldName, value);

    // HANDLING MULTIPLE INPUT FIELDS.
    setState({ ...state, [fieldName]: value }); //updating the state.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (state.pass !== state.cpass) {
      alertify.alert(
        `Hey ,
        your password does'nt match, please try again  &#x1F61E !`,
        function () {
          alertify.success("Sorry !");
        }
      );
    } else if (state.uname === "" || state.pass === "" || state.cpass === "") {
      alertify.alert(
        `Sorry,
        please enter the below fields to continue &#128064 !`,
        function () {
          alertify.success("Sorry !");
        }
      );
    } else {
      alertify.alert(
        `Welcome ${state.uname},
        you have logged in successfully &#128525 !`,
        function () {
          alertify.success("Wohoo !");
        }
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="uname"
            value={state.uname}
            onChange={changeHandler}
          />
          <label>Username</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pass"
            value={state.pass}
            onChange={changeHandler}
          />
          <label>Password</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="cpass"
            value={state.cpass}
            onChange={changeHandler}
          />
          <label>Confirm Password</label>
        </div>

        <a href="#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default App;
