import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import newRequest from "../../utils/newRequest";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);

      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
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

          <input
            name="email"
            type="text"
            placeholder="Email"
            className="authInput"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="authInput"
            onChange={handleChange}
          />

          {error && <span className="authError">{error}</span>}

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
        </form>
      </div>
    </div>
  );
};

export default Login;
