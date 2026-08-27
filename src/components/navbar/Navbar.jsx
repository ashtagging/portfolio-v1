import React from "react";
import scrollToSection from "../../utils/scrollToSection";
import "./navbar.scss";
// import {Person, Mail} from '@mui/icons-material';

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="navbar">
        <div className="left">
          <a
            href="#introduction"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("introduction");
            }}
          >
            <span>#</span>
            TAG
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
