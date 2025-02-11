import React, { useEffect, useState } from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'; // Import icons

const speaker_card = [
    {
        img: "/bajaj.jpg",
        id: 1,
        name: "Ranjit Bajaj",
        position: "Founder of Minerva Punjab FC",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" },
        ]
    },
    {
        img: "Kanwar.jpg",
        id: 2,
        name: "Col. Shivender Pratap Singh Kanwar",
        position: "Founder of Team Global Security Solutions",
        social: [
            { icon: <Twitter />, link: "#" },
            { icon: <Linkedin />, link: "#" },
            { icon: <Facebook />, link: "#" }
        ]
    },
    {
        img: "/unknown2.jpeg",
        id: 3,
        name: "? ? ?",
        // position: "Author, Poet, Lyricist, Screenwriter",
        social: [
            // { icon: <Twitter />, link: "#" },
            // { icon: <Instagram />, link: "#" }
        ]
    },
    {img: "/unknown2.jpeg",
        id: 4,
        name: "? ? ?",
        // position: "Author, Poet, Lyricist, Screenwriter",
        social: [
            // { icon: <Twitter />, link: "#" },
            // { icon: <Instagram />, link: "#" }
        ]
    },
    {
        img: "/unknown2.jpeg",
        id: 5,
        name: "? ? ?",
        // position: "Author, Poet, Lyricist, Screenwriter",
        social: [
            // { icon: <Twitter />, link: "#" },
            // { icon: <Instagram />, link: "#" }
        ]
    },
    {
        img: "/unknown2.jpeg",
        id: 6,
        name: "? ? ?",
        // position: "Author, Poet, Lyricist, Screenwriter",
        social: [
            // { icon: <Twitter />, link: "#" },
            // { icon: <Instagram />, link: "#" }
        ]
    },
];

const Speaker = () => {
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
                        <h2 className="text-4xl font-bold text-white animate__animated animate__fadeInUp">
                            <span className="text-[#e62b1e]">OUR </span> SPEAKERS
                        </h2>
                        <p className="text-lg text-white mt-4 animate__animated animate__fadeInUp animate__delay-1s">
                            Our all speakers are yet to be disclosed, but stay tuned for some extraordinary minds!
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {speaker_card.slice(0, visibleCount).map((e) => (
                            <div
                                className={`relative w-[230px] rounded-[20px] bg-black p-[5px] overflow-hidden shadow-lg transition duration-500 ease-in-out m-2.5 ${hoveredCard === e.id ? 'scale-105' : ''
                                    }`}
                                key={e.id}
                                onMouseEnter={() => setHoveredCard(e.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`relative flex flex-col rounded-t-[15px] overflow-hidden ${hoveredCard === e.id ? '' : 'bg-[#2d2d2d]'
                                        }`}
                                >
                                    {/* Image with opacity change on hover */}
                                    <img
                                        src={e.img}
                                        alt={e.name}
                                        className={`w-full rounded-tl-[15px] rounded-tr-[15px] transition-opacity duration-300 ${hoveredCard === e.id ? 'opacity-50' : 'opacity-100'
                                            }`}
                                    />
                                    {/* Icons displayed on hover */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 flex justify-center space-x-4 transition-transform duration-500 ease-in-out ${hoveredCard === e.id ? 'translate-y-0 py-2' : 'translate-y-full'
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

                </div>
            </section>
        </div>
    );
};

export default Speaker;
