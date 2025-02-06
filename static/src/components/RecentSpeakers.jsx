import React, { useEffect, useState } from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'; // Import icons
import '../index.css';

const speaker_card = [
    {
        img: "/unknown2.jpeg",
        id: 1,
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" },
        ]
    },
    {
        img: "/unknown2.jpeg",
        id: 2,
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Instagram />, link: "#" },
        ]
    },
    {
        img: "/unknown2.jpeg",
        id: 3,
        social: [
            { icon: <Facebook />, link: "#" },
            { icon: <Linkedin />, link: "#" },
        ]
    },
    {
        img: "/unknown2.jpeg",
        id: 4,
        social: [
            { icon: <Instagram />, link: "#" },
            { icon: <Linkedin />, link: "#" },
        ]
    },
];

const Speaker = () => {
    const [visibleCount, setVisibleCount] = useState(4); // State to track visible cards

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 4); // Load more cards
    };

    return (
        <div id='speaker' className="bg-black max-w-screen overflow-x-hidden relative">
            {/* Section Background and Overlay */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/background-image.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-40" />
            </div>

            <section className="team mt-5 relative z-10 py-12">
                <div className="container mx-auto px-4">
                    {/* Title Section with Animation */}
                    <div className="section-title text-center mb-12">
                        <h2 className="text-4xl font-bold text-white animate__animated animate__fadeInUp">
                            <span className="text-[#e62b1e]">OUR </span> SPEAKERS
                        </h2>
                        <p className="text-lg text-white mt-4 animate__animated animate__fadeInUp animate__delay-1s">
                            Our speakers are yet to be disclosed, but stay tuned for some extraordinary minds!
                        </p>
                    </div>

                    {/* Speakers Card Grid */}
                    <div className="flex flex-wrap justify-center">
                        {speaker_card.slice(0, visibleCount).map((e) => (
                            <div
                                className="relative w-[230px] rounded-[20px] bg-black p-[5px] overflow-hidden shadow-lg m-2.5 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                                key={e.id}
                            >
                                <div className="relative flex flex-col rounded-t-[15px] overflow-hidden bg-[#2d2d2d]">
                                    <img
                                        src={e.img}
                                        alt={`Speaker ${e.id}`}
                                        className="w-full rounded-tl-[15px] rounded-tr-[15px] transition-opacity duration-300"
                                    />
                                    {/* Social Icons Placeholder */}
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 py-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        {e.social.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-gray-200 text-lg"
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                
                    {visibleCount < speaker_card.length && (
                        <div className="text-center mt-8">
                            <button
                                onClick={handleViewMore}
                                className="bg-[#e62b1e] text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-[#ff4f56]"
                            >
                                View More Speakers
                            </button>
                        </div>
                    )}
               
                </div>
            </section>
        </div>
    );
};

export default Speaker;
