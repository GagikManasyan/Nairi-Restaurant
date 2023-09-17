import React from "react";
import "./css/about.css";

function About() {
  return (
    <div className="section" id="about">
      <div className="welcome">
        <span className="org-text">
          making armenian traditional food for over 13 years
        </span>
        <h2>
          WELCOME TO <br /> NAIRI RESTAURANT
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          fugit unde exercitationem ipsum ab magni suscipit eaque quae!
          Cupiditate minus debitis facilis hic nam maxime explicabo. Laborum
          ducimus provident odio cum tempore voluptates suscipit animi ipsa? Sed
          id illum rem?
        </p>
      </div>
      <div className="venue">
        <div className="venue-background"></div>
        <div className="venue-info">
          <span className="org-text">
            Our venue is the perfect place for special events.
          </span>
          <h3>
            Nairi Restaurant <br /> Venue
          </h3>
          <button className="mn-btn" id="venue-btn">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
