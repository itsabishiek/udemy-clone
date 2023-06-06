import React from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";
import "./Teaching.css";

const Teaching = () => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const teachOnUdemy = async () => {
    try {
      await newRequest.post("/instructor", {
        userId: currentUser?._id,
        teachOnUdemy: true,
      });

      currentUser["isInstructor"] = true;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      navigate("/instructor/courses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="teaching">
      <div className="teachingBannerBox">
        <h1>Come teach with us</h1>
        <p>Become an instructor and change lives — including your own</p>
        <button onClick={teachOnUdemy}>Get started</button>
      </div>
      <div className="bannerImg">
        <img src="/img/banner1.png" alt="" />
      </div>
    </div>
  );
};

export default Teaching;
