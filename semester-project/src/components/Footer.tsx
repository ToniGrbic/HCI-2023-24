"use client";
import React from "react";
import styles from "@/styles/Footer.module.scss";
import { SocialLinks } from ".";

const Footer = () => {
  const year: string = new Date().getFullYear().toString();

  return (
    <div className={styles.app__footer}>
      <div className={styles.app__footer_social}>
        <p>My socials:</p>
        <div className={styles.app__footer_icons}>
          <SocialLinks showIconText />
        </div>
      </div>
      <div className={styles.app__footer_text}>
        <p>Gmail: tonigrbic.5@gmail.com</p>
        <p>{year} Created by Toni Grbić, all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
