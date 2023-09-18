import React from "react";
import "./css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <footer id="contact-us">
      <ul id="contact-menu">
        <li>
          <div className="logo">
            <a href="">
              <img src="/images/wlogo.png" alt="" />
            </a>
          </div>
        </li>
        <li>
          <ul id="socials">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </li>
        <li>
          <ul id="address">
            <span className="footer-heading">Our Address</span>
            <li>
              <a
                href="https://maps.app.goo.gl/EXxbzb1cNLtBytJA9"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Kotayk Region, T-6-29</span>
              </a>
            </li>
            <li>
              <a href="tel:096100096">
                <FontAwesomeIcon icon={faPhone} />
                <span>096100096</span>
              </a>
            </li>
            <li>
              <a href="mailto:isakhanyana55@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>isakhanyana55@gmail.com</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
export default Contact;
