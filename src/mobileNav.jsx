import React from "react";
import { useTranslation } from "react-i18next";

function MobileNav({ toggleMobileNav }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div id="mobile-nav">
      <nav>
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
      <button id="close-btn" onClick={toggleMobileNav}>
        X
      </button>
    </div>
  );
}
export default MobileNav;
