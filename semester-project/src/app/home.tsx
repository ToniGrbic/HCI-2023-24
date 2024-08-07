"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import type { About } from "@/types/schema-types";
import {
  MILISEC_IN_YEAR,
  YEARS_IN_100_MILISEC,
  DATE_OF_BIRTH,
} from "@/lib/constants";

const getAge = (): number => {
  let currentTime = new Date().getTime();
  let birthTime = new Date(DATE_OF_BIRTH).getTime();
  return (currentTime - birthTime) / MILISEC_IN_YEAR;
};

function Home({ about }: { about: About }) {
  const [age, setAge] = useState<number>(getAge());
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge((age) => age + YEARS_IN_100_MILISEC);
    }, 100);
    setIsLoading(false);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="home-content-container">
      <div className="description-div">
        <h1>
          Hello my name is
          <span className="hand-script-headline">{about.name}</span>
        </h1>
        <h2>{about.description}</h2>
        <h2 className="age-text">{age.toFixed(8)} years old</h2>
      </div>
      <button
        onClick={() => setShowAbout((prev) => !prev)}
        className={`about-btn ${showAbout ? "btn-active-dark-red" : ""}`}
      >
        Learn more
      </button>
      <div className={`about ${!showAbout ? "fade" : ""}`}>
        <p>{about.paragraph}</p>
      </div>
    </div>
  );
}
export default Home;
