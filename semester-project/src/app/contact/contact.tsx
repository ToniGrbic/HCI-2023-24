"use client";
import React, { useEffect, useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";
import styles from "@/styles/Contact.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { submitFormAction } from "./actions";

const Contact = () => {
  const [state, action] = useFormState(submitFormAction, {
    message: "",
    status: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <Toaster />
      <form className={styles.contact__form} action={action} ref={formRef}>
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
        <SubmitButton />
      </form>
    </>
  );
};

const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button type="submit" className={styles.contact__submit_btn}>
      {status.pending ? "Sending..." : "Send"}
    </button>
  );
};

export default Contact;
