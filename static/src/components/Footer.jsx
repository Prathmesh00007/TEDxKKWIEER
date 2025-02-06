import React,{useState} from "react";
import logo from "../assets/TED_Logo_New.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(true?scrolled>300:false)
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      <footer id="footer">
  <div className="footer-top">
    <div className="container">
      {/* Logo and text section */}
      <div className="row" style={{ padding:"0px", margin: "0px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <img src={logo} className="img-fluid footer-logo" alt="logo" />
      </div>

      {/* Footer links */}
      <div className="row mb-3">
        <ul className="d-flex justify-content-center footer-links flex-row flex-wrap" style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><a href="#homespeakers">Speakers</a></li>
         
          <li><a href="#about">About</a></li>
        </ul>
      </div>

      {/* Social media links */}
      <div className="row text-center social-links">
        <a href="https://www.instagram.com/tedxkkwieer/" target="_blank" rel="noreferrer" className="instagram" style={{ marginRight: '10px' }}>
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://in.linkedin.com/company/tedxkkwieer" target="_blank" rel="noreferrer" className="linkedin">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@TEDxKKWIEER" target="_blank" rel="noreferrer" className="linkyoutubeedin">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>

      {/* Footer text */}
      <div className="row mt-5 text-center footer-text">
        <p style={{ color: "grey", margin: '0' }}>
          <span style={{ color: "red" }}>TED<sup>x</sup></span><span>KKWIEER</span> 2025 . THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENCE FROM <span style={{color:"#e62b1e"}}>TED</span> | 
          <Link to={"/terms"}> TERMS & CONDITIONS</Link>
        </p>
      </div>
    </div>
  </div>

  {/* Copyright portion */}
  <div className="container py-4">
    <div className="text-center">
      <div className="copyright">
        <strong><span>TED<sup>x</sup>KKWIEER</span></strong>
      </div>
      <div>Designed and Developed by <Link to="./"> TED<sup>x</sup>KKWIEER</Link></div>
    </div>
  </div>

  {/* Scroll to top button */}
  <button onClick={scrollToTop} className="back-to-top" style={{ display: visible ? 'inline' : 'none' }}>
    <i className="bi bi-arrow-up-short"></i>
  </button>
</footer>

    </>
  );
};

export default Footer;
