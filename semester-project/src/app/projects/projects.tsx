"use client";
import React, { useState } from "react";
import styles from "../../styles/Projects.module.scss";
import { Modal, Project } from "../../components";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../lib/client";
import { NextSanityImage } from "../skills/skills";
import { Works } from "../../types/schema-types";
import Filter from "../../components/Filter";

export type ModalObject = {
  description: string;
  title: string;
  tags?: string[];
  codeLink?: string;
  projectLink?: string;
};

export const filterOptions = {
  All: "All",
  React: "React",
  NextJS: "NextJS",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
};

const Projects = ({ projects }: { projects: Works[] }) => {
  const nextSanityImage = useNextSanityImage;
  const filters = Object.entries(filterOptions);

  const [filter, setFilter] = useState<string>("All");
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<ModalObject>({
    description: "",
    title: "",
    tags: [],
    codeLink: "",
    projectLink: "",
  });

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
      <Filter filters={filters} setFilter={setFilter} />
      <div className={styles.app__projects}>
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
    </div>
  );
};

export default Projects;
