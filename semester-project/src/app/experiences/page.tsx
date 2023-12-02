import React from "react";
import styles from "../../styles/Experiences.module.scss";
import { client } from "../../lib/client";
import { Experiences } from "../../types/schema-types";

async function getExperiences(): Promise<Experiences[]> {
  const query = '*[_type == "Experiences"] | order(_createdAt desc)';
  return await client.fetch<Experiences[]>(query);
}

const Page = async () => {
  const experiences = await getExperiences();

  return (
    <div className={styles.timeline}>
      {experiences.map((experience, index) => {
        return (
          <div
            className={`${index % 2 == 0 ? styles.left : styles.right}
               ${styles.container} `}
          >
            <div className={`${styles.content} app__modalLinks`}>
              <h2>{experience.timePeriod}</h2>
              <p>
                {experience.title} at {experience.department}
              </p>
              <p>
                <a
                  target="_blank"
                  href={experience.website}
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
