import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { NextSanityImage } from "../app/skills/skills";
import { Works } from "../types/schema-types";

type ProjectProps = {
  project: Works;
  handleShowModal: (projectId: string) => void;
  imageProps: NextSanityImage;
};

const Project = ({ project, handleShowModal, imageProps }: ProjectProps) => {
  return (
    <div className={styles.app__project_item}>
      <div className={`${styles.app__project_img} app__flex`} key={project._id}>
        <Image {...imageProps!} alt={project.title} priority />
        <div className={`${styles.app__project_hover} app__flex`}>
          <a href={project.projectLink} target="_blank" rel="noreferrer">
            <div className="app__flex">
              <AiFillEye />
            </div>
          </a>
          <a href={project.codeLink} target="_blank" rel="noreferrer">
            <div className="app__flex">
              <AiFillGithub />
            </div>
          </a>
        </div>
      </div>
      <div className={`${styles.app__project_content} app__flex`}>
        <h4 className="app__bold-text">{project.title}</h4>
        <p className="app__p-text" style={{ marginTop: 10 }}>
          <button
            className="openModalBtn"
            onClick={() => handleShowModal(project._id)}
          >
            Description
          </button>
        </p>
        <div className={`${styles.app__project_tag} app__flex`}>
          <p className="app__p-text">{project.tags[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
