import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const SocialLinks = () => {
  return (
    <>
      <div>
        <a
          aria-label="github"
          href="https://github.com/ToniGrbic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={30} />
        </a>
      </div>
      <div>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/toni-grbi%C4%87-6aa509249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
      </div>
      <div>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/toni.grbic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={30} />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
