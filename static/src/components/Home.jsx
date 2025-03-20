import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import CountDown from "./Event/CountDown/CountDown.jsx";
import Testimonial from "./Testimonial";
import RecentSpeaker from "./RecentSpeakers";
import Team from "./Team";
import "../index.css";
import "./homepage/home.css";
import Homie from "./homepage/Homie.jsx";
import AboutSection from "./About.jsx";
import ButtonToStart from "./homepage/buyButton.js";
import TimeLine from "./TimeLine.jsx";
import Sponsors from "./sponsors.jsx";


// import { Link } from "react-router-dom";

const Home = () => {
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollLimit = 500;
      if (scrollLocked && window.scrollY > scrollLimit) {
        window.scrollTo(0, scrollLimit);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLocked]);

  const unlockScroll = () => {
    setTimeout(() => {
      setScrollLocked(false);
    }, 3000);
  };

  useEffect(() => {
    unlockScroll();
  }, []);


  return (
    <>
      
      <div id="home max-w-screen overflow-x-hidden">

        <section id="header">
          <Homie />
        </section>

        <section >
          <AboutSection />
        </section>

        <section id="about" className="relative h-fit max-w-full overflow-x-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(/TEDx-Shows.jpg)' }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Container */}
      <div className="container mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center z-10">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            data-aos="fade-down"
          >
            HELLO THERE
          </h1>
          <p
            className="text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Are you ready to unravel the unexplored?
          </p>

          {/* Event Details */}
          <div>
            <div
              className={`m-6 text-white text-4xl md:text-6xl font-bold text-center transition-opacity duration-100`}
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
              data-aos="zoom-in" data-aos-delay="200"
            >
              Rise <span className="text-[#e62b1e]">Through</span> Resonance
            </div>
            <p
              className="text-lg md:text-xl mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join us on <span className="font-bold text-[#e62b1e]">March 5, 2025</span>{' '}
              for an electrifying day of inspiration, innovation, and connection.
            </p>
            <p
              className="text-lg md:text-xl mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Location:{' '}
              <a
                href="https://maps.app.goo.gl/1uiwVFwZA8Gir8RH8"
                className="font-bold text-[#e62b1e] hover:underline"
              >
                Gurudakshina Auditorium, Nashik
              </a>
            </p>
            <p
              className="text-lg md:text-xl mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Doors Open: <span className="font-bold text-[#e62b1e]">8:00 AM</span>
            </p>
            
          </div>

          {/* Countdown Timer */}
          <div data-aos="fade-up" data-aos-delay="400">
            <CountDown deadline="2025-03-05T08:00:00Z" />
          </div>

          {/* Event Description */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
            <p className="text-lg md:text-xl mb-4">
              Unlock boundless opportunities and embark on a journey of growth
              with TEDxKKWIEER. An electrifying energy fills the air, inspiring
              us to rise through meaningful connections, innovative ideas, and
              shared purpose. This is your invitation to step beyond the ordinary
              and explore a realm where possibilities resonate far and wide.
            </p>
            <p className="text-lg md:text-xl mb-4">
              <span className="text-[#e62b1e] font-bold">TEDxKKWIEER:</span> "Rise
              Through Resonance." <br /> Let’s come together to spark ideas that
              inspire, elevate, and transform our world!
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <ButtonToStart />
          </div>
        </div>
      </div>
    </section>

      </div>

      <div id="homespeakers">
        <RecentSpeaker />
      </div>
      <section>
        <TimeLine/>
      </section>
      <section id="homesponsors">
        <Sponsors/>
      </section>

      <Testimonial />
      <Contact />
    </>

  );
};

export default Home;
