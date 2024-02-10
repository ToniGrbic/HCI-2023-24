"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
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

const myFont = localFont({ src: "../assets/hand_script.woff2" });

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
    <>
      <div className="description-div">
        <h1>
          Hello my name is
          <span className={myFont.className}>{about.name}</span>
        </h1>
        <h2>{about.description}</h2>
        <h2>{age.toFixed(8)} years old</h2>
      </div>
      <button
        onClick={() => setShowAbout((prev) => !prev)}
        className="about-btn"
      >
        Learn more
      </button>
      <div className={`about ${!showAbout ? "fade" : ""}`}>
        <p>{about.paragraph}</p>
      </div>
    </>
  );
}
export default Home;
