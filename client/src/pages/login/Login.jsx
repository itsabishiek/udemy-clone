import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="actionBtns">
        <h3>Log in to your Udemy account</h3>
        <button className="loginBtn">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          <span>Continue with Google</span>
        </button>
        <button className="loginBtn">
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png"
            alt=""
          />
          <span>Continue with Facebook</span>
        </button>
        <button className="loginBtn">
          <img
            src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
            alt=""
          />
          <span>Continue with Apple</span>
        </button>

        <input type="text" placeholder="Email" className="authInput" />
        <input type="password" placeholder="Password" className="authInput" />

        <button className="submitBtn">Log in</button>

        <div className="helperTextWrapper">
          <span className="helperText">
            or <Link to="/">Forgot Password</Link>
          </span>

          <hr />

          <span className="helperText">
            {`Don't have an account?`} <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
