import React from "react";
import styles from "@/styles/Skills.module.scss";
import Image from "next/image";
import { client } from "@/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { NextSanityImage } from "@/types/return-types";
import { DetailsBtn } from "@/components";
import { Skills } from "@/types/schema-types";

type SkillProps = {
  handleShowSkillModal: (skill_id: string) => void;
  skill: Skills;
};

const Skill = ({ handleShowSkillModal, skill }: SkillProps) => {
  const imageProps: NextSanityImage = useNextSanityImage(client, skill.icon);
  return (
    <div
      className={`${styles.app__skills_item} app__flex`}
      key={skill._id}
      onClick={() => handleShowSkillModal(skill._id)}
    >
      <div className="app__flex">
        <Image
          {...imageProps!}
          width={50}
          height={50}
          alt={skill.name}
          priority
        />
        <p>{skill.name}</p>
        <DetailsBtn handleShowModal={handleShowSkillModal} id={skill._id} />
      </div>
    </div>
  );
};

export default Skill;
