import Header from "./header.jsx";
import MobileNav from "./mobileNav.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Menu from "./menu.jsx";
import Contact from "./contact.jsx";
import React, { useState } from "react";

import "./css/App.css";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <Header toggleMobileNav={toggleMobileNav} />
      {isMobileNavOpen && <MobileNav toggleMobileNav={toggleMobileNav} />}{" "}
      <Home />
      <About />
      <Menu />
      <Contact />
    </>
  );
}

export default App;
