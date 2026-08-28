import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact">
      <h2 className="visually-hidden">Contact</h2>
      <ul className="icon-list" aria-label="Social and contact links">
        <li className="icon-item">
          <a
            href="https://www.linkedin.com/in/ashley-littlewood-a2233310a/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </li>
        <li className="icon-item">
          <a
            href="https://github.com/ashtagging"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="icon-item">
          <a
            href="mailto:taggingash@gmail.com"
            className="icon-link"
            aria-label="Email me"
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li className="icon-item">
          <a
            href="https://www.instagram.com/ashtagging/?hl=en"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
