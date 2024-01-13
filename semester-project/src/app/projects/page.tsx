import { client } from "@/lib/client";
import { Works } from "@/types/schema-types";
import Projects from "./projects";

const getProjects = async (): Promise<Works[]> => {
  const query = '*[_type == "works"]';
  return await client.fetch<Works[]>(query);
};

export default async function Page() {
  const projects = await getProjects();
  return (
    <>
      <h1 className="projects-skills">My Projects</h1>
      <h4 style={{ marginTop: "20px" }}>Select filter option:</h4>
      <Projects projects={projects} />
    </>
  );
}
