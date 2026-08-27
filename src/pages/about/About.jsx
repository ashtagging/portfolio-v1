import React from "react";
import "./about.scss";

const skills = ["C#", ".NET", "React"];

function About() {
  const viewCV = () => {
    window.open("Ashley_Littlewood_CV_Main.pdf", "_blank", "fullscreen=yes");
  };

  return (
    <div className="about" id="about">
        <div className="about-container">
          <div className="imgContainer">
            <img src="assets/profile.png" alt="Ashley Littlewood" />
          </div>
          <div className="wrapper">
            <h1>About Me</h1>
            <p>
              Hi 🙋‍♂️, I'm Ashley — a Software Developer from the UK
              specialising in C#, .NET and React. I currently build
              applications for the sports betting industry.
            </p>
            <p>
              Outside of work you'll typically find me taking photos 📷,
              travelling ✈️, or hiking 🥾. Take a look at my portfolio below 🙂.
            </p>
            <ul className="skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="cv-button-wrapper">
              <div className="cv-button">
                <button onClick={viewCV} className="view-button cv-button">
                  View CV
                  <div className="icon">
                    <i className="fa-solid fa-file-lines"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
