import React, { useState, useEffect } from "react";
import "./css/home.css";
import Header from "./header.jsx";
import MobileNav from "./mobileNav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["food1.webp", "food2.webp", "food3.webp"];
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="section" id="home">
      <Header />
      <button id="nav-btn" onClick={toggleMobileNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button id="close-btn" onClick={toggleMobileNav}>
        X
      </button>
      {isMobileNavOpen && <MobileNav />}{" "}
      <div className="home-background" style={backgroundImageStyle}></div>
      <div className="overlay">
        <h1>
          traditional <br /> armenian food
        </h1>
      </div>
    </div>
  );
}

export default Home;
