"use client";

import React from "react";
import styles from "@/styles/Contact.module.scss";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (const inputValue of formData.values()) {
      if (!inputValue) {
        toast.error("Please fill all the fields");
        return;
      }
    }
    const data = Object.fromEntries(formData.entries());

    e.currentTarget.reset();
    toast.success("Message sent successfully");
  };

  return (
    <>
      <Toaster />
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.contact__text_input}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.contact__text_input}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className={styles.contact__textarea_input}
        />
        <button type="submit" className={styles.contact__submit_btn}>
          Send
        </button>
      </form>
    </>
  );
};

export default Contact;
