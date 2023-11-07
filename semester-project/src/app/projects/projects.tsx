"use client";
import React, { useState } from "react";
import styles from "../../styles/Projects.module.scss";
import { Modal, Project } from "../../components";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../lib/client";
import { NextSanityImage } from "../skills/skills";
import { Works } from "../../types/schema-types";

export type ModalObject = {
  description: string;
  title: string;
  tags?: string[];
  codeLink?: string;
  projectLink?: string;
};

const Projects = ({ projects }: { projects: Works[] }) => {
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<ModalObject>({
    description: "",
    title: "",
    tags: [],
    codeLink: "",
    projectLink: "",
  });
  const nextSanityImage = useNextSanityImage;

  const handleShowModal = (projectId: string) => {
    const currentProject = projects.find(
      (project) => project._id === projectId
    ) as Works;
    const { title, description, projectLink, codeLink, tags } = currentProject;

    setModalProject({
      title,
      description,
      projectLink,
      codeLink,
      tags,
    });
    setShowProjectModal(true);
  };

  return (
    <div className={styles.app__project_portfolio}>
      {showProjectModal && (
        <Modal {...modalProject} setShowModal={setShowProjectModal} />
      )}

      {projects?.map((project) => {
        const imageProps: NextSanityImage = nextSanityImage(
          client,
          project.imgUrl
        );

        return (
          <Project
            key={project._id}
            imageProps={imageProps}
            project={project}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
};

export default Projects;
