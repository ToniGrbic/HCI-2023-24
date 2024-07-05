"use client";
import React, { useState } from "react";
import styles from "@/styles/Projects.module.scss";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setSearch }: SearchBarProps) => {
  const [textValue, setTextValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(textValue);
  };

  return (
    <div className={styles.app__search_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title"
          className={styles.app__search_bar}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button className={styles.app__search_button} type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
