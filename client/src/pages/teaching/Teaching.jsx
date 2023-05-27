import React from "react";
import "./Teaching.css";
import { Link } from "react-router-dom";

const Teaching = () => {
  return (
    <div className="teaching">
      <div className="teachingBannerBox">
        <h1>Come teach with us</h1>
        <p>Become an instructor and change lives — including your own</p>
        <Link to="/instructor/courses">
          <button>Get started</button>
        </Link>
      </div>
      <div className="bannerImg">
        <img src="/img/banner1.png" alt="" />
      </div>
    </div>
  );
};

export default Teaching;
