"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Projects.module.scss";
import { Modal, Project, SearchBar, Filter } from "@/components";
import { Works } from "@/types/schema-types";

export type ModalObject = {
  description: string;
  title: string;
  tags?: string[];
  codeLink?: string;
  projectLink?: string;
};

export const filterOptions = {
  All: "All",
  React: "ReactJS",
  NextJS: "NextJS",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
};

const Projects = ({ projects }: { projects: Works[] }) => {
  const filters = Object.entries(filterOptions);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [filteredProjects, setFilteredProjects] = useState<Works[]>(projects);

  const [modalProject, setModalProject] = useState<ModalObject>({
    description: "",
    title: "",
    tags: [],
    codeLink: "",
    projectLink: "",
  });

  useEffect(() => {
    const filteredProjects = projects
      .filter(
        (project) =>
          project.tags.includes(activeFilter) || activeFilter === "All"
      )
      .filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
      );
    setFilteredProjects(filteredProjects);
  }, [activeFilter, search]);

  const handleShowModal = (projectId: string) => {
    const currentProject = projects.find(
      (project) => project._id === projectId
    ) as Works;
    const { title, description, projectLink, codeLink, tags } = currentProject;

    setModalProject({ title, description, projectLink, codeLink, tags });
    setShowProjectModal(true);
  };

  return (
    <div className={styles.app__project_portfolio}>
      {showProjectModal && (
        <Modal {...modalProject} setShowModal={setShowProjectModal} />
      )}
      <SearchBar setSearch={setSearch} />
      <h4 style={{ marginTop: "20px" }}>Select filter option:</h4>
      <Filter
        filters={filters}
        setFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <div className={styles.app__projects}>
        {filteredProjects.map((project) => {
          return (
            <Project
              key={project._id}
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
