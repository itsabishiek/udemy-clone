import React from "react";
import { AiOutlineBell, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcMenu } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";

import "./Navbar.css";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);
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
    <nav className="navbar">
      <div className="hammenu" onClick={toggleSidebar}>
        <FcMenu fontSize="20px" />
      </div>

      <Link to="/" className="navLogo">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt=""
          className="navLogo"
        />
      </Link>
      <Link to="/">Categories</Link>

      <div className="searchInput">
        <AiOutlineSearch fontSize="20px" />
        <input type="text" placeholder="Search for anything" />
      </div>
      <Link to="/">Udemy Business</Link>
      <Link to="/teaching">Teach on Udemy</Link>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div className="search">
          <AiOutlineSearch fontSize="20px" />
        </div>
        <div className="navCart">
          <HiOutlineShoppingCart fontSize="22px" />
        </div>
      </div>
      {!currentUser ? (
        <div className="authBtn">
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="black">
            Sign up
          </Link>
          <Link to="/">
            <GrLanguage fontSize="17px" />
          </Link>
        </div>
      ) : (
        <div className="navItems">
          <AiOutlineHeart fontSize="22px" />
          <AiOutlineBell fontSize="22px" />
          <div className="navAvatar" onClick={handleLogout}>
            {currentUser?.name[0]}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
