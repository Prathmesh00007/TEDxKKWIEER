import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("homie1");

    if (!aboutSection) {
      console.warn("About section not found. Make sure the ID is correct.");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const onToggle = () => {
    const navbarid = document.getElementById("navbar");
    navbarid.classList.toggle("navbar-mobile");
  };

  const ToggleButton = () => {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      const navbarToggle = document.getElementById("toggle-button");
      navbarToggle.classList.add("bi-list");
    }
  };

  const ToggleDropDown = (e) => {
    e.preventDefault();
    const dropDownActive = e.currentTarget.nextElementSibling;
    dropDownActive.classList.toggle("dropdown-active");
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <header
        id="header"
        className={`fixed-top d-flex align-items-center ${isVisible ? "navbar-visible" : "navbar-hidden"
          }`}
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto primary">
            <Link to="./">
              <img src="logo-white.png" alt="" width={230} />
              {/* <p className="logo_underx text-white">
                            
                            <span style={{ color: "red" }}>x</span>=independently organized event
                        </p> */}
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
                      href="https://www.kkwagh.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>TED<sup>x</sup>KKWIEER</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li onClick={ToggleButton}>
                <a href="./#speaker">
                  <span>Speakers</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link tickets-link"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setShowPopup(true); // Show the popup
                  }}
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
      {showPopup && (
        <div className="popup-overlay" onClick={handlePopupClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Tickets</h2>
            <p>Tickets will be released soon!</p>
            <button className="close-btn" onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

