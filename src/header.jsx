import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";

function Header({ toggleMobileNav }) {
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
              Home
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
              About
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
              Menu
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
              Contact Us
            </a>
          </li>
          <li>
            <a href="/reservation.html" target="_blank">
              Online Reservation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
