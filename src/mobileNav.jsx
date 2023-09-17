import React, { useState } from "react";

function MobileNav() {
  return (
    <div id="mobile-nav">
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <li>
              <a href="/reservation.html" target="_blank">
                Online Reservation
              </a>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MobileNav;
