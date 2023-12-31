import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./css/home.css";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["food1.webp", "food2.webp", "food3.webp"];
  const { t } = useTranslation();

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
      <div className="home-background" style={backgroundImageStyle}></div>
      <div className="overlay">
        <h1>
          {t("traditional")} <br /> {t("armenian food")}
        </h1>
        <button id="home-btn" className="mn-btn">
          <a href="https://www.facebook.com/nairirestaurant1" target="_blank">
            {t("discover more")}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
