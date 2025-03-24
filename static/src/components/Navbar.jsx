import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const aboutSection = document.getElementById("homie1");

    if (!aboutSection) {
      console.warn("About section not found. Make sure the ID is correct.");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const onToggle = () => {
    document.getElementById("navbar").classList.toggle("navbar-mobile");
  };

  const ToggleButton = () => {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      document.getElementById("toggle-button").classList.add("bi-list");
    }
  };

  const ToggleDropDown = (e) => {
    e.preventDefault();
    e.currentTarget.nextElementSibling.classList.toggle("dropdown-active");
  };

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        isVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto primary">
          <Link to="./">
            <img src="logo-white.png" alt="" width={230} />
          </Link>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li onClick={ToggleButton}>
              <Link className="nav-link scrollto" to="./">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" onClick={ToggleDropDown}>
                <span>About</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li onClick={ToggleButton}>
                  <a href="/#about">
                    <span>About</span>
                  </a>
                </li>
                <li onClick={ToggleButton}>
                  <a
                    href="https://www.ted.com/tedx/events/60823"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>TED<sup>x</sup>KKWIEER</span>
                  </a>
                </li>
                <li onClick={ToggleButton}>
                  <a
                    href="https://www.kkwagh.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>KK Wagh Education Society</span>
                  </a>
                </li>
                <li onClick={ToggleButton}>
                  <a
                    href="https://www.kkwagh.edu.in/engineering/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>K.K Wagh Institute Of Engineering Education and Research</span>
                  </a>
                </li>
              </ul>
            </li>
            <li onClick={ToggleButton}>
              <a href="./#homespeakers">
                <span>Speakers</span>
              </a>
            </li>
            <li onClick={ToggleButton}>
              <a href="./#homesponsors">
                <span>Sponsors</span>
              </a>
            </li>
            <li onClick={ToggleButton}>
              <a
                href="https://konfhub.com/tedxkkwieer"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link tickets-link"
              >
                Tickets
              </a>
            </li>
            <li onClick={ToggleButton}>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={onToggle}
            id="toggle-button"
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
