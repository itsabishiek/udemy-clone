import React, { useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post(
        "/auth/register",
        { ...user },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="actionBtns">
        <h3>Log in to your Udemy account</h3>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Full name"
            className="authInput"
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="authInput"
            onChange={handleChange}
          />
          <div style={{ width: "100%" }}>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="authInput"
              onChange={handleChange}
            />

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

          {error && <span className="authError">{error}</span>}

          <button className="submitBtn" type="submit">
            Sign up
          </button>

          <div className="helperTextWrapper">
            <span style={{ fontSize: "12px" }}>
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </span>

            <hr />

            <span className="helperText">
              {`Don't have an account?`} <Link to="/login">Log in</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
