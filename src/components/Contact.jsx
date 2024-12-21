import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    { href: "https://www.instagram.com", icon: <FaInstagram /> },
    { href: "https://www.facebook.com", icon: <CiFacebook /> },
    { href: "https://www.linkedin.com", icon: <CiLinkedin /> },
    { href: "https://www.twitter.com", icon: <FaSquareXTwitter /> },
    { href: "https://www.github.com", icon: <FaSquareGithub /> },
    { href: "mailto:hassanjawad858@gmail.com", icon: <SiGmail /> },
  ];

  return (
    <div className="container contact" id="contact">
      <h1 data-aos="fade-right" data-aos-duration="2000">CONTACT ME</h1>
      <div className="contact-icons">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-item"
            data-aos={`fade-${index < 3 ? "right" : "left"}`}
            data-aos-duration={`${1000 + index * 500}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
