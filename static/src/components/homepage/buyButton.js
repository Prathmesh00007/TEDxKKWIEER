import React, { useState } from "react";
// import "./buyButton.css";

export default function ButtonToStart() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="inline-block">
            <a
                href="https://konfhub.com/tedxkkwieer">
                <button
                    className="button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    BUY TICKETS
                    
                </button>
            </a>

            <style jsx>{`
        .button {
          display: flex;
          overflow: hidden;
          position: relative;
          justify-content: center;
          align-items: center;    
          width: 10rem;
          padding: 0.5rem 0;
          border-radius: 1.875rem;
          cursor: pointer;
          font-size: 1.1em;
          font-weight: bold;
          border: 2px solid white;
          transition: all 0.5s ease-in-out;
          z-index: 3;
          color: rgb(255, 255, 255);
          box-shadow: inset 0px 0px 4px #e62b1e;
          background-color: red;
        }

        .button::before {
          content: "";
          display: inline-block;
          transform: translateY(80%);
          left: 0;
          position: absolute;
          width: 11.25rem;
          height: 11.25rem;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
          z-index: -1;
          transition: transform ease 1s;
        }

        .button:hover::before {
          transform: translateY(0%);
        }

        .button:hover {
          color: black;
          border: 2px solid black;
          box-shadow: 0 0 10px rgb(255, 255, 255); /* Add a white shadow on hover */
          transition: color 0.1s ease;
          transition-delay: 0.2s;
        }

        .ml-2 {
          margin-left: 0.5rem;
        }
      `}</style>
        </div>
    );
}
