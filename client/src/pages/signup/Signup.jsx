import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="actionBtns">
        <h3>Log in to your Udemy account</h3>

        <input type="text" placeholder="Full name" className="authInput" />
        <input type="text" placeholder="Email" className="authInput" />
        <div style={{ width: "100%" }}>
          <input type="password" placeholder="Password" className="authInput" />

          <div className="difficultIndicator">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>

        <div className="sendme">
          <input type="checkbox" />
          <span>
            Send me special offers, personalised recommendations, and learning
            tips.
          </span>
        </div>

        <button className="submitBtn">Sign up</button>

        <div className="helperTextWrapper">
          <span style={{ fontSize: "12px" }}>
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </span>

          <hr />

          <span className="helperText">
            {`Don't have an account?`} <Link to="/login">Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
