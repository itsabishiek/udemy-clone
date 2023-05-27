import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcMenu } from "react-icons/fc";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <nav className="navbar">
      <div className="hammenu" onClick={toggleSidebar}>
        <FcMenu fontSize="20px" />
      </div>

      <Link to="/">
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
      <div className="authBtn">
        <Link to="/login">Log in</Link>
        <Link to="/signup" className="black">
          Sign up
        </Link>
        <Link to="/">
          <GrLanguage fontSize="17px" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
