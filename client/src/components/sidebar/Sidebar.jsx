import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { sidebarData } from "../../utils/SidebarData";
import { FiChevronRight } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { FiAirplay } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={showSidebar ? "sidebar active" : "sidebar"}>
      {showSidebar && (
        <div className="sidebarClose" onClick={() => setShowSidebar(false)}>
          <GrFormClose fontSize="25px" />
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

        {window.location.pathname !== "/instructor/courses" ? (
          <>
            <span>Most Popular</span>
            {sidebarData.map((data) => (
              <li key={data.id} className={data.cName}>
                <Link to="/">
                  {data.item} <FiChevronRight />
                </Link>
              </li>
            ))}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "15px 0px",
            }}
          >
            <Link to="/" className="instructorHeaderItem">
              <FiAirplay fontSize="25px" />
              <h3>Courses</h3>
            </Link>
            <Link to="/" className="instructorHeaderItem">
              <MdOutlineMessage fontSize="25px" />
              <h3>Communication</h3>
            </Link>
            <Link to="/" className="instructorHeaderItem">
              <IoStatsChart fontSize="25px" />
              <h3>Performance</h3>
            </Link>
            <Link to="/" className="instructorHeaderItem">
              <VscTools fontSize="25px" />
              <h3>Tools</h3>
            </Link>
          </div>
        )}

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
