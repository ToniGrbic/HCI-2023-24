import React from "react";
import SkillSection from "./skills";
import { Skills } from "../../types/schema-types";
import { client } from "../../lib/client";

async function getSkills(): Promise<Skills[]> {
  const query = '*[_type == "skills"]';
  return await client.fetch<Skills[]>(query);
}

export default async function Page() {
  const skills = await getSkills();

  return (
    <>
      <h1 className="projects-skills">My Skills</h1>
      <h4 style={{ marginTop: "20px" }}>
        click on each skill to view description
      </h4>
      <SkillSection skills={skills} />
    </>
  );
}
