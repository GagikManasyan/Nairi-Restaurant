import React from "react";
import "./css/menu.css";

function Menu() {
  return (
    <div className="section" id="menu">
      <h2>Menu</h2>

      <div id="menu-list">
        <span className="menu-heading">BBQ</span>
        <ul>
          <li>
            <span className="menu-item"> Pork BBQ (mixed piaces)</span>
            <b className="menu-price">3000 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Pork Chops BBQ</span>
            <b className="menu-price">3300 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Pork Ribs BBQ</span>
            <b className="menu-price">3200 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Pork Ikibir BBQ</span>
            <b className="menu-price">1500 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Lamb BBQ (mixed piaces)</span>
            <b className="menu-price">3700 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Lamb Chops BBQ</span>
            <b className="menu-price">4200 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Lamb Ribs BBQ</span>
            <b className="menu-price">4200 AMD</b>
          </li>
          <li>
            <span className="menu-item"> Lamb Ikibir BBQ</span>
            <b className="menu-price">1700 AMD</b>
          </li>
        </ul>
        <span className="menu-heading">BBQ</span>
        <ul>
          <li></li>
        </ul>
        <span className="menu-heading">BBQ</span>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
