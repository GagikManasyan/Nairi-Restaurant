import React from "react";

function MobileNav({ toggleMobileNav }) {
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
      <button id="close-btn" onClick={toggleMobileNav}>
        X
      </button>
    </div>
  );
}
export default MobileNav;
