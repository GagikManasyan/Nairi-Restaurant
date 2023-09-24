import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
          {t("making armenian traditional food for over 13 years")};
        </span>
        <h2>
          {t("welcome to")} <br /> {t("nairi restaurant")}
        </h2>
        <p>
          {t(
            "Nairi restaurant has been operating and providing its services to our customers for over 13 years. We are masters at Armenian cuisine and providing excelent services for our guests. The restaurant was founded in 2010 at Jrvezh Street. From the day of its foundation we have always held ourselves to high standarts of kitchen and customer service.We have wonderful venue that can be a great place for special events. Nairi restaurant has two main halls. The big hall can hold events for up to 150 people and the small hall for up to 30 people."
          )}
        </p>
      </div>
      <div className="venue">
        <div className="venue-background" style={backgroundImageStyle}></div>
        <div className="venue-info">
          <span className="org-text">
            {t("our venue is the perfect place for special events")}
          </span>
          <h3>
            {t("nairi restaurant")} <br /> {t("venue")}
          </h3>
          <button className="mn-btn" id="venue-btn">
            <a href="tel:096100096">{t("reserve now")}</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
