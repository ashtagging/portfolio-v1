import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <ul className="icon-list">
        <li className="icon-item">
          <a
            href="https://www.linkedin.com/in/ashley-littlewood-a2233310a/"
            className="icon-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="icon-item">
          <a href="https://github.com/ashtagging" className="icon-link">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="icon-item">
          <a href="mailto:taggingash@gmail.com" className="icon-link">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li className="icon-item">
          <a
            href="https://www.instagram.com/ashtagging/?hl=en"
            className="icon-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
