import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    icon: <AiFillGithub size={30} />,
    link: "https://github.com/ToniGrbic",
    name: "Github",
  },
  {
    icon: <AiFillLinkedin size={30} />,
    link: "https://www.linkedin.com/in/toni-grbi%C4%87-6aa509249/",
    name: "Linkedin",
  },
  {
    icon: <AiOutlineInstagram size={30} />,
    link: "https://www.instagram.com/toni.grbic/",
    name: "Instagram",
  },
];

const SocialLinks = ({ showIconText = false }: { showIconText?: boolean }) => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const { icon, link, name } = socialLink;
        return (
          <div>
            <a
              aria-label={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-link-container">
                {icon}
                {showIconText ? <p className="social-link-text">{name}</p> : ""}
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SocialLinks;
