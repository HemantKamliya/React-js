import React from "react";
import { AiOutlineInstagram, AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";  // Gmail icon

const SocialMedia = () => {
    const socialLinks = [
        { href: "https://www.instagram.com/hemant_kamliya/", icon: <AiOutlineInstagram /> },
        { href: "https://www.facebook.com/hemant.kamliya.716", icon: <AiFillFacebook /> },
        { href: "https://github.com/HemantKamliya", icon: <AiFillGithub /> },
        { href: "https://www.linkedin.com/in/hemant-kamliya-1ab088222/", icon: <AiFillLinkedin /> },
        { href: "hemantkamliya87@gmail.com", icon: <FaGoogle /> },  // Gmail icon with mailto link
    ];

    return (
        <div className="flex justify-center flex-wrap gap-6 mt-6 py-6">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-[rgb(135,32,158)] text-3xl rounded-full 
                    bg-[#fbd9ad] hover:shadow-[0px_0px_50px_rgb(135,32,158,0.9)]"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
