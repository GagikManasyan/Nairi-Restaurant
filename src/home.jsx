import React, { useState, useEffect } from "react";
import "./css/home.css";
import Header from "./header.jsx";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["food1.webp", "food2.webp", "food3.webp"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('/images/foods/${images[currentImageIndex]}')`,
    transition: "background-image 1s ease-in-out",
  };

  return (
    <div className="home">
      <Header />
      <div className="home-background" style={backgroundImageStyle}></div>
      <div className="overlay">
        <h1>
          try traditional <br /> armenian food
        </h1>
        <button id="discover-button">Discover More</button>
      </div>
    </div>
  );
}

export default Home;
