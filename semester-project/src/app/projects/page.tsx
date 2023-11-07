import { client } from "../../lib/client";
import Projects from "./projects";
import { Works } from "../../types/schema-types";

const getProjects = async (): Promise<Works[]> => {
  const query = '*[_type == "works"]';
  return await client.fetch<Works[]>(query);
};

export default async function Page() {
  const projects = await getProjects();
  return (
    <>
      <h1 className="projects-skills">My Projects</h1>
      <Projects projects={projects} />
    </>
  );
}
