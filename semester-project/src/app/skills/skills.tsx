"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Skills.module.scss";
import { Modal, Filter, Skill } from "@/components";

import type { Skills } from "@/types/schema-types";

const filterOptions = {
  All: "All",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Language: "Language",
};

const SkillSection = ({ skills }: { skills: Skills[] }) => {
  const [showSkillModal, setShowSkillModal] = useState<boolean>(false);
  const [modalDesc, setModalDesc] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [activeFilter, setFilter] = useState<string>("All");
  const [filteredSkills, setFilteredSkills] = useState<Skills[]>(skills);

  const handleShowSkillModal = (skill_id: string) => {
    const currentSkill = skills.find((skill) => skill._id === skill_id)!;
    setModalDesc(currentSkill.description);
    setModalTitle(currentSkill.name);
    setShowSkillModal(true);
  };

  useEffect(() => {
    const filteredProjects = skills.filter(
      (skill) => skill.tags.includes(activeFilter) || activeFilter === "All"
    );
    setFilteredSkills(filteredProjects);
  }, [activeFilter]);

  const filters = Object.entries(filterOptions);

  return (
    <>
      {showSkillModal && (
        <Modal
          title={modalTitle}
          description={modalDesc}
          setShowModal={setShowSkillModal}
        />
      )}
      <Filter
        filters={filters}
        activeFilter={activeFilter}
        setFilter={setFilter}
      />
      <div className={styles.app__skills_container}>
        <div className={styles.app__skills_list}>
          {filteredSkills?.map((skill) => {
            return (
              <Skill
                key={skill._id}
                handleShowSkillModal={handleShowSkillModal}
                skill={skill}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillSection;
