import React from "react";

export default function ButtonToStart() {
  return (
    <div className="flex justify-center">
      <a
        href="https://konfhub.com/tedxkkwieer"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-300 ease-in-out border-2 border-white rounded-full shadow-inner bg-red-600 overflow-hidden group"
      >
        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
          BUY TICKETS
        </span>

        {/* Circle Animation */}
        <span className="absolute top-[20rem] left-1/2 w-72 h-72 bg-white rounded-full transition-all duration-700 ease-in-out transform -translate-x-1/2 group-hover:-top-10"></span>

        <style jsx>{`
          .group:hover span.absolute {
            transition-delay: 0.1s;
          }
        `}</style>
      </a>
    </div>
  );
}
