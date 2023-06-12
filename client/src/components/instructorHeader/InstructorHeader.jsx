import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FiAirplay } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import getCurrentUser from "../../utils/getCurrentUser";

import "./InstructorHeader.css";
import NavMenu from "../navbar/NavMenu";

const InstructorHeader = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = getCurrentUser();

  return (
    <div className="instructorHeader">
      <div className="instructorHeaderLeft">
        <Link to="/instructor/courses">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
            className="navLogo"
          />
        </Link>
      </div>

      <div className="instructorHeaderCenter">
        <Link to="/instructor/courses" className="instructorHeaderItem">
          <FiAirplay fontSize="23px" />
          <h3>Courses</h3>
        </Link>
        <Link to="/instructor/courses" className="instructorHeaderItem">
          <MdOutlineMessage fontSize="23px" />
          <h3>Communication</h3>
        </Link>
        <Link to="/instructor/courses" className="instructorHeaderItem">
          <IoStatsChart fontSize="23px" />
          <h3>Performance</h3>
        </Link>
        <Link to="/instructor/courses" className="instructorHeaderItem">
          <VscTools fontSize="23px" />
          <h3>Tools</h3>
        </Link>
      </div>

      <div className="instructorHeaderRight">
        <a href="/">Student</a>
        <AiOutlineBell fontSize="25px" />
        <div
          className="instructorAvatar"
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(!showMenu);
          }}
        >
          {currentUser?.name[0]}
        </div>
        <div className="hammenu" onClick={toggleSidebar}>
          <FcMenu fontSize="20px" />
        </div>
      </div>

      <NavMenu showMenu={showMenu} />
    </div>
  );
};

export default InstructorHeader;
