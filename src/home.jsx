import React, { useState, useEffect } from "react";
import "./css/home.css";
import Header from "./header.jsx";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["food1.webp", "food2.webp", "food3.webp"];
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = `/images/foods-slider/${image}`;
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
    backgroundImage: `url('/images/foods-slider/${images[currentImageIndex]}')`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };

  return (
    <div className="section" id="home">
      <Header />
      <div className="home-background" style={backgroundImageStyle}></div>
      <div className="overlay">
        <h1>
          traditional <br /> armenian food
        </h1>
        <button id="home-btn">Discover More</button>
      </div>
    </div>
  );
}

export default Home;
