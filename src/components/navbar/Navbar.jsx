import React from "react";
import scrollToSection from "../../utils/scrollToSection";
import "./navbar.scss";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen ? "active" : ""}`}>
      <nav className="navbar" aria-label="Primary">
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
          <button
            type="button"
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
