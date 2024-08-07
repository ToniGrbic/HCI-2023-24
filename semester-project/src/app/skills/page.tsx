import SkillSection from "./skills";
import { client } from "@/lib/client";
import type { Skills } from "@/types/schema-types";

async function getSkills(): Promise<Skills[]> {
  const query = '*[_type == "skills"]';
  return await client.fetch<Skills[]>(query);
}

export default async function Page() {
  const skills = await getSkills();

  return (
    <>
      <h1 className="hand-script-headline">My Skills</h1>
      <h4 style={{ marginTop: "20px" }}>Select filter option:</h4>
      <SkillSection skills={skills} />
    </>
  );
}
