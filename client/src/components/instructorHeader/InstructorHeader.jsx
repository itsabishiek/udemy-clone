import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FiAirplay } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { Link } from "react-router-dom";

import "./InstructorHeader.css";
import { FcMenu } from "react-icons/fc";

const InstructorHeader = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="instructorHeader">
      <div className="instructorHeaderLeft">
        <Link to="/">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
            className="navLogo"
          />
        </Link>
      </div>

      <div className="instructorHeaderCenter">
        <Link to="/" className="instructorHeaderItem">
          <FiAirplay fontSize="23px" />
          <h3>Courses</h3>
        </Link>
        <Link to="/" className="instructorHeaderItem">
          <MdOutlineMessage fontSize="23px" />
          <h3>Communication</h3>
        </Link>
        <Link to="/" className="instructorHeaderItem">
          <IoStatsChart fontSize="23px" />
          <h3>Performance</h3>
        </Link>
        <Link to="/" className="instructorHeaderItem">
          <VscTools fontSize="23px" />
          <h3>Tools</h3>
        </Link>
      </div>

      <div className="instructorHeaderRight">
        <Link to="/">Student</Link>
        <AiOutlineBell fontSize="25px" />
        <div className="instructorAvatar">A</div>
        <div className="hammenu" onClick={toggleSidebar}>
          <FcMenu fontSize="20px" />
        </div>
      </div>
    </div>
  );
};

export default InstructorHeader;
