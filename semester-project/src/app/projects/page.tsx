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
      <h1 className="hand-script-headline">My Projects</h1>
      <Projects projects={projects} />
    </>
  );
}
