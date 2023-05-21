import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcMenu } from "react-icons/fc";
import "./Navbar.css";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <nav className="navbar">
      <div className="hammenu" onClick={toggleSidebar}>
        <FcMenu fontSize="20px" />
      </div>

      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt=""
        className="navLogo"
      />
      <span>Categories</span>

      <div className="searchInput">
        <AiOutlineSearch fontSize="20px" />
        <input type="text" placeholder="Search for anything" />
      </div>
      <span>Udemy Business</span>
      <span>Teach on Udemy</span>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div className="search">
          <AiOutlineSearch fontSize="20px" />
        </div>
        <div className="navCart">
          <HiOutlineShoppingCart fontSize="22px" />
        </div>
      </div>
      <div className="authBtn">
        <button>Log in</button>
        <button className="black">Sign up</button>
        <button>
          <GrLanguage fontSize="17px" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
