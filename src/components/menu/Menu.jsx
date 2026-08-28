import React from 'react'
import scrollToSection from '../../utils/scrollToSection'
import "./menu.scss"

function Menu({ menuOpen, setMenuOpen }) {
  const go = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      id="main-menu"
      className={`menu ${menuOpen ? "active" : ""}`}
      aria-label="Sections"
    >
      <ul>
        <li>
          <a href="#introduction" onClick={go("introduction")}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={go("about")}>About</a>
        </li>
        <li>
          <a href="#portfolio" onClick={go("portfolio")}>Portfolio</a>
        </li>
        <li className="photos-link">
          <a href="#photos" onClick={go("photos")}>Photos</a>
        </li>
        <li>
          <a href="#contact" onClick={go("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
