import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-button.scss"

function MenuButton() {
let navigate = useNavigate();
  return (
    <div className="menu-button-container">
      <button
        className="menu-button"
        onClick={() => {
          navigate("/productive");
        }}
      ><i className="fa-solid fa-bars"></i>Menu</button>
    </div>
  );
}

export default MenuButton;
