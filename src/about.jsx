import React, { useState, useEffect } from "react";
import "./css/about.css";

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "venue1.jpg",
    "venue1.jpg",
    "venue3.jpg",
    "venue4.jpg",
    "venue5.jpg",
  ];
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = `/images/venue/${image}`;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('/images/venue/${images[currentImageIndex]}')`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
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
        <div className="venue-background" style={backgroundImageStyle}></div>
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
