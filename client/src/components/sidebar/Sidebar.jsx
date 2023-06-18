import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/SidebarData";
import { FiChevronRight } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { FiAirplay } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import "./Sidebar.css";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const currentUser = getCurrentUser();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={showSidebar ? "sidebar active" : "sidebar"}>
      {showSidebar && (
        <div className="sidebarClose" onClick={() => setShowSidebar(false)}>
          <GrFormClose fontSize="25px" />
        </div>
      )}
      <ul className="sidebarItems" onClick={() => setShowSidebar(false)}>
        {!currentUser ? (
          <>
            <li className="sidebarItem">
              <Link to="/login" style={{ color: "#5624d0" }}>
                Log in
              </Link>
            </li>
            <li className="sidebarItem">
              <Link to="/signup" style={{ color: "#5624d0" }}>
                Sign in
              </Link>
            </li>
          </>
        ) : (
          <>
            <div className="menuItemHeader">
              <div className="navAvatar">{currentUser?.name[0]}</div>
              <div className="menuInfo">
                <h3>{currentUser?.name}</h3>
                <p>{currentUser?.email}</p>
              </div>
            </div>
            {window.location.pathname !== "/instructor/courses" ? (
              <a
                href="/instructor/courses"
                style={{ color: "#5624d0", fontWeight: 500, fontSize: "14px" }}
              >
                Switch to Instructor view
              </a>
            ) : (
              <a
                href="/"
                style={{ color: "#5624d0", fontWeight: 500, fontSize: "14px" }}
              >
                Switch to Student view
              </a>
            )}
          </>
        )}

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
        {!currentUser?.isInstructor && (
          <li className="sidebarItem">
            <Link to="/teaching">Teaching on Udemy</Link>
          </li>
        )}
        <li className="sidebarItem">
          <Link to="/">Invite friends</Link>
        </li>
        <li className="sidebarItem">
          <Link to="/">Help</Link>
        </li>

        <hr />

        <li className="sidebarItem" onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
