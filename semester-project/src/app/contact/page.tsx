import React from "react";
import styles from "@/styles/Contact.module.scss";
import Contact from "./contact";

const page = () => {
  return (
    <div className={styles.contact__form_container}>
      <h1>Feel free to contact me</h1>
      <Contact />
    </div>
  );
};

export default page;
