"use client";
import { useState, useEffect } from "react";
import React from "react";
import Loading from "./loading";
import localFont from "next/font/local";
import { About } from "../types/schema-types";
import {
  MILISEC_IN_YEAR,
  YEARS_IN_100_MILISEC,
  DATE_OF_BIRTH,
} from "../lib/constants";

const getAge = (): number => {
  let currentTime = new Date().getTime();
  let birthTime = new Date(DATE_OF_BIRTH).getTime();
  return (currentTime - birthTime) / MILISEC_IN_YEAR;
};

const myFont = localFont({ src: "../assets/hand_script.woff2" });

function Home({ about }: { about: About }) {
  const [age, setAge] = useState<number>(0);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setAge(getAge());

    const intervalId = setInterval(() => {
      setAge((age) => age + YEARS_IN_100_MILISEC);
    }, 100);
    setIsLoading(false);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="descriptionDiv">
        <h1>
          Hello my name is
          <span className={myFont.className}>{about.name}</span>
        </h1>
        <h2>{about.description}</h2>
        <h2>{age.toFixed(8)} years old</h2>
      </div>
      <button
        onClick={() => setShowAbout((prev) => !prev)}
        className="aboutBtn"
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
