import React from "react";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";

const NavMenu = ({ showMenu }) => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");

      navigate("/");
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

      <Link to="/instructor/courses" className="menuItem">
        Instructor Dashboard
      </Link>
      <Link to="#" className="menuItem" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default NavMenu;
