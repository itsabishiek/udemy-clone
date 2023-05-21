import React from "react";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerTopInner">
          <div className="footerTopItem">
            <Link to="/">Udemy Business</Link>
            <Link to="/">Teach on Udemy</Link>
            <Link to="/">Get the app</Link>
            <Link to="/">About us</Link>
            <Link to="/">Contact us</Link>
          </div>

          <div className="footerTopItem">
            <Link to="/">Careers</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Help and Support</Link>
            <Link to="/">Affiliate</Link>
            <Link to="/">Investors</Link>
          </div>

          <div className="footerTopItem">
            <Link to="/">Terms</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Cookie settings</Link>
            <Link to="/">Sitemap</Link>
            <Link to="/">Accessibility statement</Link>
          </div>
        </div>

        <div className="footerLang">
          <span>
            <MdLanguage color="#fff" /> English
          </span>
        </div>
      </div>

      <div className="footerBottom">
        <img
          src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt=""
        />
        <span>&copy; {new Date().getFullYear()} Udemy, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
