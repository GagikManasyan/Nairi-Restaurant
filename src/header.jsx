import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./css/header.css";

function Header({ toggleMobileNav }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header id="home-header">
      <button id="nav-btn" onClick={toggleMobileNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="logo">
        <a href="">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <nav id="reg-nav">
        <ul>
          <li>
            <a
              onClick={() => {
                document
                  .querySelector("#home")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .querySelector("#about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .querySelector("#menu")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("menu")}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .querySelector("#contact-us")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("contact us")}
            </a>
          </li>
          <li>
            <a href="/reservation.html" target="_blank">
              {t("online reservation")}
            </a>
          </li>
        </ul>
      </nav>
      <nav id="lng-nav">
        <ul>
          <li>
            <button onClick={() => changeLanguage("en")}>
              <span>ENG</span>
            </button>
          </li>
          <li>
            <button onClick={() => changeLanguage("hy")}>
              <span>ARM</span>
            </button>
          </li>
          <li>
            <button onClick={() => changeLanguage("ru")}>
              <span>RUS</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
