import React from "react";
import styles from "../styles/Projects.module.scss";

type FilterProps = {
  filters: [string, string][];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ filters, setFilter }: FilterProps) => {
  return (
    <div className={styles.app__filter_parent}>
      {filters.map(([_, filter]) => (
        <button
          key={filter}
          className={styles.app__filter_btn}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
