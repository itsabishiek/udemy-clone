import React, { useState } from "react";
import { AiOutlineBell, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";

import "./Navbar.css";
import NavMenu from "./NavMenu";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = getCurrentUser();

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
      {!currentUser?.isInstructor ? (
        <Link to="/teaching">Teach on Udemy</Link>
      ) : (
        <a href="/instructor/courses">Instructor</a>
      )}
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
        <>
          <div className="navItems">
            <AiOutlineHeart fontSize="22px" />
            <AiOutlineBell fontSize="22px" />
            <div
              className="navAvatar"
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}
            >
              {currentUser?.name[0]}
            </div>
          </div>

          <NavMenu showMenu={showMenu} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
