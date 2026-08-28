import React, { useEffect, useRef } from "react";
import 'animate.css';
import "./introduction.scss";
import { init } from "ityped";
import scrollToSection from "../../utils/scrollToSection";

function Introduction() {
  const textRef = useRef();

  // Ityped npm package for typing animation
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Traveller", "Photographer"],
    });
  }, []);

  return (
    <section className="introduction" id="introduction" aria-label="Introduction">
      <div className="left">
        <div className="imgContainer animate__animated animate__fadeInLeft">
          <img src="assets/hashtag-logo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <p
            className="eyebrow animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Hi There, I'm
          </p>
          <h1
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Ashley Littlewood
          </h1>
          <p
            className="role animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            <span ref={textRef}></span>
          </p>
        </div>
      </div>
      <a
        className="scroll-down"
        href="#about"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
      >
        <img src="assets/down.png" alt="" />
      </a>
    </section>
  );
}

export default Introduction;
