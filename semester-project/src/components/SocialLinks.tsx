import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const SocialLinks = ({ showIconText = false }: { showIconText?: boolean }) => {
  return (
    <>
      <div>
        <a
          aria-label="github"
          href="https://github.com/ToniGrbic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-link-container">
            <AiFillGithub size={30} />

            {showIconText ? <p className="social-link-text">Github</p> : ""}
          </div>
        </a>
      </div>
      <div>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/toni-grbi%C4%87-6aa509249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-link-container">
            <AiFillLinkedin size={30} />
            {showIconText ? <p className="social-link-text">Linkden</p> : ""}
          </div>
        </a>
      </div>
      <div>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/toni.grbic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-link-container">
            <AiOutlineInstagram size={30} />
            {showIconText ? <p className="social-link-text">Instagram</p> : ""}
          </div>
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
