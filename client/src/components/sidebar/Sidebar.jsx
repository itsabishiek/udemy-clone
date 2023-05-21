import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { sidebarData } from "../../utils/SidebarData";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={showSidebar ? "sidebar active" : "sidebar"}>
      {showSidebar && (
        <div className="sidebarClose" onClick={() => setShowSidebar(false)}>
          <AiOutlineClose fontSize="24px" color="white" />
        </div>
      )}
      <ul className="sidebarItems" onClick={() => setShowSidebar(false)}>
        <li className="sidebarItem" color="#a435f0">
          <Link to="/login" style={{ color: "#a435f0" }}>
            Log in
          </Link>
        </li>
        <li className="sidebarItem">
          <Link to="/signup" style={{ color: "#a435f0" }}>
            Sign in
          </Link>
        </li>

        <hr />

        <span>Most Popular</span>
        {sidebarData.map((data) => (
          <li key={data.id} className={data.cName}>
            <Link to="/">
              {data.item} <FiChevronRight />
            </Link>
          </li>
        ))}

        <hr />

        <span>More from Udemy</span>
        <li className="sidebarItem">
          <Link to="/">Udemy Business</Link>
        </li>
        <li className="sidebarItem">
          <Link to="/">Get the app</Link>
        </li>
        <li className="sidebarItem">
          <Link to="/">Invite friends</Link>
        </li>
        <li className="sidebarItem">
          <Link to="/">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
