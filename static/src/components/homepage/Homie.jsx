import React, { useRef, useEffect, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import debounce from "lodash.debounce"; // Install lodash.debounce
import ButtonToStart from "./buyButton";

const Homie = () => {
  const [isTextVisible, setTextVisibility] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sunRef = useRef(null);
  const foreframeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = debounce(() => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY / 800;

      // Scale elements
      if (sunRef.current) {
        sunRef.current.style.transform = `scale(${1 + scrollFactor * 0.8})`;
      }
      if (foreframeRef.current) {
        foreframeRef.current.style.transform = `scale(${1 + scrollFactor * 0.5})`;
      }

      // Toggle text visibility
      setTextVisibility(scrollY > 150); // Adjust threshold as needed
    }, 100);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="relative h-screen w-screen overflow-hidden">
        <video
          src="video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        ></video>

        <a
          href="https://konfhub.com/tedxkkwieer"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 "
        >        <ButtonToStart />
        </a>
      </div>
    );
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover overflow-hidden bg-center select-none"
      style={{ backgroundImage: "url(6.png)" }}
    >
      {/* Header */}
      <h1 className="text-3xl flex flex-wrap justify-center md:text-5xl font-bold text-white text-center mt-16">
        <span className="text-[#e62b1e]">Welcome&nbsp;</span>
        to
        <span className="text-[#e62b1e]">&nbsp;TEDx&nbsp;</span>KKWIEER
      </h1>

      {/* Sun */}
      <MouseParallax strength={0.05}>
        <div
          ref={sunRef}
          className="absolute z-0 top-[25%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-500 ease-in-out"
        >
          <img src="sun.svg" alt="" className="w-24 h-24 md:w-32 md:h-32" />
        </div>
      </MouseParallax>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <MouseParallax strength={0.1}>
          <ScrollParallax strength={0.8}>
            {/* Mid Mountains */}
            <div className="relative z-0 w-[110vw] mid-mountains">
              <img
                src="4.png"
                className="w-full h-full object-cover sm:scale-110 lg:scale-100 transition-transform duration-300"
                alt="Mid Mountains"
                loading="lazy"
              />
            </div>
          </ScrollParallax>
        </MouseParallax>

        {/* Text */}
        <div
          ref={textRef}
          className={`absolute text-white text-4xl md:text-6xl font-bold text-center transition-opacity duration-100 px-4 ${isTextVisible ? "opacity-100" : "opacity-0"
            }`}
          style={{
            top: "70%",
            transform: "translateY(-80%)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Rise <span className="text-[#e62b1e]">Through</span> Resonance
        </div>

        <ScrollParallax>
          {/* Back Mountains */}
          <div className="relative z-0 w-full back-mountains">
            <img
              src="mountain.png"
              className="w-full h-full object-cover sm:scale-110 md:scale-100 transition-transform duration-300"
              alt="Back Mountains"
              loading="lazy"
            />
          </div>
        </ScrollParallax>
      </div>

      {/* Buy Ticket Button for Desktop & Mobile */}
      <a
        href="https://konfhub.com/tedxkkwieer"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 "
      >        <ButtonToStart />
      </a>
    </div>
  );
};

export default Homie;
