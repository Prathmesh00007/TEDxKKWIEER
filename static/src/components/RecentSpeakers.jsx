import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useHistory hook for navigation
import { Twitter, Linkedin, Instagram } from 'lucide-react'; // Import icons

const speaker_card = [
    {
        img: "/bajaj.jpg",
        id: 1,
        name: "Ranjit Bajaj",
        position: "Founder of Minerva Punjab FC",
        description: "Ranjit Bajaj is the founder of Minerva Punjab FC, a prominent football team in India.",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/ranjitbajaj?igsh=MXN0ZTV1cHlhbjV1aQ==" },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/ranjit-bajaj-6855675a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <Twitter />, link: "https://x.com/THE_RanjitBajaj" },
        ]
    },
    {
        img: "/Kanwar.jpg",
        id: 2,
        name: "Col. Shivender Pratap Singh Kanwar",
        position: "Founder of Team Global Security Solutions",
        description: "Col. Shivender Pratap Singh Kanwar is a seasoned leader in the security industry.",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/shivender.kanwar?igsh=ejMwZDdndDlvMWsz" },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/shivender-pratap-singh-kanwar-27320612a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
        ]
    },
    {
        img: "/Isha.jpeg",
        id: 3,
        name: "Ms. Isha Chande",
        position: "Woman Entrepreneur, Business Leader",
        description: "Isha Chande is a successful entrepreneur and a leader in business development.",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/isha.0505?igsh=cjh2ODk5OWVibXZy" },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/isha-chande-6171a6158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
        ]
    },
    {
        img: "/Zeeshan.jpeg",
        id: 4,
        name: "Mr. Zesshan Ali Syed",
        position: "Tech-Influencer and Entrepreneur",
        description: "Zeeshan Ali Syed is a renowned tech influencer and entrepreneur in the tech space.",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/nz.for.genz?igsh=NXkzNzRtcjkwMzE0" },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/zeeshan-ali-562109131?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
        ]
    },
    {
        img: "/Iqlipse.png",
        id: 5,
        name: "Mr. Iqlipse Nova",
        position: "Musician",
        description: "",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/iqlipse_nova/" },
            { icon: <Twitter />, link: "https://x.com/iqlipse_nova?t=l8NrTjNahbXf_mq3thKXpQ&s=09" }
        ]
    },
{
        img: "/Karnik.png",
        id: 6,
        name: "Hon.Shri Sandeepji Karnik(I.P.S.)",
        position: "Commissioner of Police, Nashik City",
        description:  "",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/sandeep_karnik_ips/" },
          
        ]
    },
   
];

const Speaker = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
    const [visibleCount, setVisibleCount] = useState(6); // State to track visible cards
    const navigate = useNavigate(); // Using useHistory for navigation

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 6); // Load more cards
    };

    const handleKnowMore = () => {
        navigate('/speakers-details');  // Navigate to the details page
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
                                    className={`relative flex flex-col rounded-t-[15px] overflow-hidden ${hoveredCard === e.id ? '' : 'bg-[#2d2d2d]'}`
                                    }
                                >
                                    <img
                                        src={e.img}
                                        alt={e.name}
                                        className={`w-full rounded-tl-[15px] rounded-tr-[15px] transition-opacity duration-300 ${hoveredCard === e.id ? 'opacity-50' : 'opacity-100'}`}
                                    />
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 flex justify-center space-x-4 transition-transform duration-500 ease-in-out ${hoveredCard === e.id ? 'translate-y-0 py-2' : 'translate-y-full'}`
                                        }
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
                    <div className="text-center mt-8">
                        <button
                            onClick={handleKnowMore}
                            className="bg-[#e62b1e] text-white py-2 px-6 rounded-md shadow-lg"
                        >
                            Know More About Speakers
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Speaker;
