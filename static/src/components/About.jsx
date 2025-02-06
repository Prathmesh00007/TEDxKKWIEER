import React, { useEffect, useRef, useState } from "react";
import './About.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]); // Track visibility for each section
  const sectionRefs = useRef([React.createRef(), React.createRef(), React.createRef()]); // Store references to the sections

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true; // Mark the corresponding section as visible
              return newVisibility;
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section.current) {
        observer.observe(section.current); // Observe each section
      }
    });

    return () => {
      observer.disconnect(); // Clean up observer when the component is unmounted
    };
  }, []);

  return (
    <div className="relative flex mt-[5rem] flex-col items-start justify-center h-max overflow-clip p-3 sm:p-5 bg-black">
      {/* First Section */}
      <div
        ref={sectionRefs.current[0]} // First section reference
        className={`relative z-10 flex flex-col items-start justify-center w-[95%] pl-10 sm:pl-20 mb-20 ${
          isVisible[0] || isVisible[1] || isVisible[2] ? "animate-slide-right" : "invisible"
        }`}
      >
        <svg
          className="absolute left-0 transform translate-x-[0%] h-[100%]"
          width="50"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0 L25 100"
            stroke="red"
            strokeWidth="2"
            fill="none"
            style={{ strokeDasharray: "100", strokeDashoffset: "0" }}
          />
          <circle cx="25" cy="50" r="5" fill="red" />
        </svg>
        <div className="text-left">
          <h2 className="text-xl sm:text-3xl text-tedred font-bold mb-2">
            What is TED?
          </h2>
          <p className="text-white text-left sm:text-justify tracking-tight sm:text-xl">
            TED is a global platform dedicated to spreading ideas, typically
            through short, impactful talks. TED stands for Technology, Entertainment,
            and Design, reflecting its broad focus. TED Talks are engaging
            presentations delivered by experts and thought leaders from various
            fields. Each talk is designed to inspire, educate, and provoke thoughtful
            discussions, making complex topics accessible to a wide audience.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div
        ref={sectionRefs.current[1]} // Second section reference
        className={`relative z-10 flex flex-col items-start justify-center w-[95%] pl-10 sm:pl-20 mb-20 ${
          isVisible[0] || isVisible[1] || isVisible[2] ? "animate-slide-right" : "invisible"
        }`}
      >
        <svg
          className="absolute left-0 transform translate-x-[0%] h-[100%]"
          width="50"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0 L25 100"
            stroke="red"
            strokeWidth="2"
            fill="none"
            style={{ strokeDasharray: "100", strokeDashoffset: "1.3443" }}
          />
          <circle cx="25" cy="50" r="5" fill="red" />
        </svg>
        <div className="text-left">
          <h2 className="text-xl sm:text-3xl text-tedred font-bold mb-2">
            What is TEDx?
          </h2>
          <p className="text-white text-left sm:text-justify tracking-tight sm:text-xl">
            TEDx is a grassroots initiative inspired by TED’s mission to research
            and share “ideas worth spreading.” TEDx events bring the spirit of TED to
            local communities around the world. Organized by passionate individuals,
            these events aim to uncover new ideas and share the latest research,
            sparking conversations within their communities.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div
        ref={sectionRefs.current[2]} // Third section reference
        className={`relative z-10 flex flex-col items-start justify-center w-[95%] pl-10 sm:pl-20 mb-20 ${
          isVisible[0] || isVisible[1] || isVisible[2] ? "animate-slide-right" : "invisible"
        }`}
      >
        <svg
          className="absolute left-0 transform translate-x-[0%] h-[100%]"
          width="50"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0 L25 100"
            stroke="red"
            strokeWidth="2"
            fill="none"
            style={{ strokeDasharray: "100", strokeDashoffset: "1.3443" }}
          />
          <circle cx="25" cy="50" r="5" fill="red" />
        </svg>
        <div className="text-left">
          <h2 className="text-xl sm:text-3xl text-tedred font-bold mb-2">
            What is TEDxKKWIEER?
          </h2>
          <p className="text-white text-left sm:text-justify tracking-tight sm:text-xl">
          Our event is called TEDxKKWIEER, where x = independently organized TED event. At our TEDxKKWIEER event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized. Our event TEDx KKWIEER aims to empower local communities to connect, learn, and inspire one another, contributing to TED’s overarching goal of spreading impactful ideas worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
