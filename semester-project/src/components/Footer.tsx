"use client";
import React, { Dispatch, SetStateAction } from "react";
import styles from "@/styles/Footer.module.scss";
import { SocialLinks } from ".";
import Link from "next/link";
import { links } from "@/components/Navbar";

const Footer = ({
  setCurrentLink,
}: {
  setCurrentLink: Dispatch<SetStateAction<string>>;
}) => {
  const year: string = new Date().getFullYear().toString();
  const linksArr: [string, string][] = Object.entries(links);
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
        <p>{year} Created by Toni Grbić</p>
      </div>
      <div>
        Sitemap:{" "}
        {linksArr.map(([name, path]) => {
          return (
            <p>
              <Link href={path} onClick={() => setCurrentLink(path)}>
                {name}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
