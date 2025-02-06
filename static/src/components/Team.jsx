import React, { useEffect, useState } from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'; // Import icons

const speaker_card = [
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Aniket+More",
        id: 8,
        name: "Aniket More",
        position: "Tech Head",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" },
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Prathmesh",
        id: 6,
        name: "Kiran Verma",
        position: "Community Leader and Change Maker - Founder Simply Blood",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" },
            { icon: <Facebook />, link: "#" }
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Akshat+Gupta",
        id: 2,
        name: "Akshat Gupta",
        position: "Author, Poet, Lyricist, Screenwriter",
        social: [
          { icon: <Twitter />, link: "#" },
          { icon: <Instagram />, link: "#" }
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Aman+Goel",
        id: 3,
        name: "Aman Goel",
        position: "CEO & Co-founder Cogno AI, Angel Investor",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" }
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Dr.+Kuldeep+Singh",
        id: 4,
        name: "Dr. Kuldeep Singh",
        position: "Public Health Expert Dean Academics, AIIMS Jodhpur",
        social: [
            { icon: <Linkedin />, link: "#" }
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Ruma+Devi",
        id: 5,
        name: "Ruma Devi",
        position: "Social Activist - Recipient of Highest Civilian Honour for Women in India, Nari Shakti Puraskar",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Facebook />, link: "#" },
             { icon: <Instagram />, link: "#" }
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Abhishek+Surana",
        id: 7,
        name: "Abhishek Surana",
        position: "IAS CEO, Zila Parishad Jodhpur",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" }
        ]
    },
    {
        img: "https://dummyimage.com/400x300/fff/f00&text=Licypriya+Kangujam",
        id: 1,
        name: "Licypriya Kangujam",
        position: "India's Youngest Climate Activist",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Instagram />, link: "#" },
             { icon: <Facebook />, link: "#" }
        ]
    },
];

const Team = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
    const [visibleCount, setVisibleCount] = useState(4); // State to track visible cards

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleViewMore = () => {
      setVisibleCount(prevCount => prevCount + 4); // Load more cards
    };

    return (
      <div id="team" className="bg-black max-w-screen overflow-x-hidden">
          <section className="team mt-5">
              <div className="container mx-auto px-4">
                  <div className="section-title text-center mb-8">
                      <h2 className="text-2xl font-bold text-white">
                          <span className="text-[#e62b1e]">MEET OUR</span> TEAM
                      </h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                      {speaker_card.slice(0, visibleCount).map((e) => (
                          <div
                              className={`relative w-[230px] rounded-[20px] bg-black p-[5px] overflow-hidden shadow-lg transition duration-500 ease-in-out m-2.5 ${
                                  hoveredCard === e.id ? 'scale-105' : ''
                              }`}
                              key={e.id}
                              onMouseEnter={() => setHoveredCard(e.id)}
                              onMouseLeave={() => setHoveredCard(null)}
                          >
                              <div
                                  className={`relative flex flex-col rounded-t-[15px] overflow-hidden ${
                                      hoveredCard === e.id ? 'bg-[#e62b1e]' : 'bg-[#2d2d2d]'
                                  }`}
                              >
                                  {/* Image with opacity change on hover */}
                                  <img
                                      src={e.img}
                                      alt={e.name}
                                      className={`w-full rounded-tl-[15px] rounded-tr-[15px] transition-opacity duration-300 ${
                                          hoveredCard === e.id ? 'opacity-50' : 'opacity-100'
                                      }`}
                                  />
                                  {/* Icons displayed on hover */}
                                  <div
                                      className={`absolute bottom-0 left-0 right-0 flex justify-center space-x-4 transition-transform duration-500 ease-in-out ${
                                          hoveredCard === e.id ? 'translate-y-0 py-2' : 'translate-y-full'
                                      }`}
                                  >
                                      {e.social.map((social, index) => (
                                          <a
                                              key={index}
                                              href={social.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-white hover:text-gray-200"
                                          >
                                              {social.icon}
                                          </a>
                                      ))}
                                  </div>
                              </div>
                              <div className="mt-2.5 p-2.5 relative">
                                  <span className="block text-sm font-bold text-white text-center">{e.name}</span>
                                  <span className="block text-xs text-gray-400 text-center">{e.position}</span>
                              </div>
                          </div>
                      ))}
                  </div>
                  {/* View More Button */}
                  {visibleCount < speaker_card.length && (
                      <div className="text-center mt-4">
                          <button 
                              onClick={handleViewMore}
                              className="bg-[#e62b1e] text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                          >
                              View More
                          </button>
                      </div>
                  )}
              </div>
          </section>
      </div>
  );
};

export default Team;
