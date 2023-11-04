import React from "react";
import "../assets/styles/Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const handleNavLinkClick = (e, target) => {
    e.preventDefault();
    smoothScroll(target);
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <a onClick={(e) => handleNavLinkClick(e, "#home")} href="#home">
              Home
            </a>
          </li>
          <li className="items">
            <a onClick={(e) => handleNavLinkClick(e, "#about")} href="#about">
              About
            </a>
          </li>
          <li className="items">
            <a
              onClick={(e) => handleNavLinkClick(e, "#portfolio")}
              href="#portfolio"
            >
              Services
            </a>
          </li>
          <li className="items">
            <a
              onClick={(e) => handleNavLinkClick(e, "#contact")}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        ☰
      </button>
    </nav>
  );
}
