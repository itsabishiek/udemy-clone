import React from "react";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";

const NavMenu = ({ showMenu }) => {
  const currentUser = getCurrentUser();
  const { courseId } = useParams();

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
    <div
      className="menuItems"
      style={showMenu ? { display: "flex" } : { display: "none" }}
    >
      <div className="menuItemHeader">
        <div className="navAvatar">{currentUser?.name[0]}</div>
        <div className="menuInfo">
          <h3>{currentUser?.name}</h3>
          <p>{currentUser?.email}</p>
        </div>
      </div>

      <hr />

      <a href="/instructor/courses" className="menuItem">
        {window.location.pathname === "/instructor/courses" ||
        window.location.pathname === "/course/create" ||
        window.location.pathname === `/course/create/${courseId}`
          ? "Student"
          : "Instructor Dashboard"}
      </a>
      <a href="#" className="menuItem" onClick={handleLogout}>
        Logout
      </a>
    </div>
  );
};

export default NavMenu;
