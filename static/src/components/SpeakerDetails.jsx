import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react'; // Import icons

const speaker_card = [
    {
        img: "/bajaj.jpg",
        id: 1,
        name: "Ranjit Bajaj",
        position: "Founder of Minerva Punjab FC",
        description: "Ranjit Bajaj is a visionary in Indian football, widely recognized for his groundbreaking contributions to the sport. As the founder of Minerva Punjab FC, he led the club to its crowning achievement—winning the I-League title in the 2017-18 season, a testament to his leadership and strategic foresight. With a passion for nurturing young talent, Bajaj has been a driving force behind elevating grassroots football in India. His influence extends beyond the pitch, as he served as the Chairman of the AIFF Advisory Committee, where his expertise helped steer the future of Indian football, ensuring a more prosperous and transparent path forward.",
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
        description: "Colonel Shivender Kanwar—a battle-hardened warrior, elite strategist, and master of resilience. As a veteran of the Para Special Forces, he has led high-stakes missions, navigated the world of counter-terrorism, and trained some of the finest soldiers. With an unbreakable spirit forged in the toughest conditions, he now channels his expertise into shaping leaders, instilling discipline, and empowering individuals with tactical wisdom. A force to be reckoned with—his journey is nothing short of legendary.",
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
        description: "Isha Chande is a dynamic leader driving innovation and strategic growth across multiple industries. With a keen eye for business development, she has successfully forged key partnerships, expanding her ventures into new markets and sectors. Beyond her corporate success, Isha is deeply passionate about empowering women entrepreneurs, creating opportunities for economic and social growth. A strategist, a mentor, and a changemaker—she continues to redefine leadership with her bold vision and relentless drive.",
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
        description: "Zeeshan is the Co-founder of  @nz.for.genz, a platform dedicated to transforming career guidance, coding education, and placements for aspiring tech professionals. Zeeshan, a visionary mentor and industry expert, has revolutionized the way students approach career planning and skill development. With his game-changing insights, structured roadmaps, and engaging content, he has empowered countless individuals to navigate the competitive tech industry with confidence. His strategic approach bridges the gap between theoretical knowledge and real-world applications, equipping aspiring professionals with the skills needed to secure top opportunities. Passionate about making quality mentorship accessible, Zeeshan continues to inspire and guide the next generation of tech leaders.",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/nz.for.genz?igsh=NXkzNzRtcjkwMzE0" },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/zeeshan-ali-562109131?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
        ]
    },
    {
        img: "/Iqlipse.png",
        id: 5,
        name: "Mr.Deepanshu Raj (Iqlipse Nova)",
        position: "Musician",
        description:  "Deepanshu Raj, known as Iqlipse Nova, is an IIT Delhi graduate who transitioned from engineering to becoming a successful independent musician. Blending soulful melodies, poetry, and experimental sounds, he has built a strong fanbase with over 112 million YouTube streams. His viral hits, including Mera Safar, Dil Savera, and Khwab, have deeply resonated with audiences. A masterful lyricist and visionary creator, he pushes creative boundaries with thought-provoking storytelling and modern soulful music. His journey from IIT Delhi to viral music stardom reflects self-belief, perseverance, and artistic expression. Embodying Rise Through Resonance, he inspires individuals to follow unconventional paths and redefine success on their own terms.",
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
        description:  "Deepanshu Raj, known as Iqlipse Nova, is an IIT Delhi graduate who transitioned from engineering to becoming a successful independent musician. Blending soulful melodies, poetry, and experimental sounds, he has built a strong fanbase with over 112 million YouTube streams. His viral hits, including Mera Safar, Dil Savera, and Khwab, have deeply resonated with audiences. A masterful lyricist and visionary creator, he pushes creative boundaries with thought-provoking storytelling and modern soulful music. His journey from IIT Delhi to viral music stardom reflects self-belief, perseverance, and artistic expression. Embodying Rise Through Resonance, he inspires individuals to follow unconventional paths and redefine success on their own terms.",
        social: [
            { icon: <Instagram />, link: "https://www.instagram.com/sandeep_karnik_ips/" },
          
        ]
    },
    
];

const SpeakerDetails = () => {
    return (
        <div className="bg-black min-h-screen p-6 lg:p-20">
            <div className="container mx-auto">
                <div className="section-title text-center mb-8">
                <h2 className="text-4xl font-bold text-white animate__animated animate__fadeInUp">
                            <span className="text-[#e62b1e]">OUR </span> SPEAKERS
                        </h2>
                </div>
                {/* Updated grid to display 2x2 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {speaker_card.map((e) => (
                        <div className="bg-[#2d2d2d] p-5 rounded-md" key={e.id}>
                            <img
                                src={e.img}
                                alt={e.name}
                                className="w-full rounded-tl-[15px] rounded-tr-[15px] mb-4"
                            />
                            <h3 className="text-xl text-white font-semibold">{e.name}</h3>
                            <p className="text-sm text-gray-400 mb-4">{e.position}</p>
                            <p className="text-sm text-gray-300 mb-4">{e.description}</p>
                            <div className="flex space-x-4">
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpeakerDetails;
