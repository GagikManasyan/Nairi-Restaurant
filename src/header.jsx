import { useState } from "react";
import "./css/header.css";

function Header() {
  return (
    <header className="home-header">
      <div className="left-nav">
        <nav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Menu</button>
            </li>
          </ul>
        </nav>
      </div>
      <a href="" className="logo">
        <img src="/images/logo.png" alt="" />
      </a>
      <div className="right-nav">
        <nav>
          <ul>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>Online Reserve</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
