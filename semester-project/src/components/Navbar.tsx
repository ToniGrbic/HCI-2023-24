"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { SocialLinks, SideBar } from ".";
import Image from "next/image";
import icon from "../assets/favicon-2.png";

const Navbar = () => {
  const links = {
    home: "/",
    projects: "/projects",
    skills: "/skills",
    experiences: "/experiences",
  };
  const linksArr: [string, string][] = Object.entries(links);
  const [currentLink, setCurrentLink] = useState<string>("");
  const pathname: string = usePathname();

  useEffect(() => {
    setCurrentLink(pathname);
  }, []);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__icon_div} aria-hidden="true">
        <Image src={icon} alt="icon" width={32} height={32} />
        <h3>portfolio</h3>
      </div>
      <div>
        <ul className={styles.app__navbar_links}>
          {linksArr.map(([name, path]) => {
            return (
              <li key={`link-${name}`}>
                <Link
                  href={path}
                  onClick={() => setCurrentLink(path)}
                  className={`${styles.app__navbar_link}
                    ${
                      currentLink === path ? styles.app__navbar_link_color : ""
                    }`}
                >
                  {name}
                  <div
                    className={
                      currentLink === path
                        ? `${styles.app__navbar_link_underline}`
                        : ""
                    }
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.app__navbar_social_media}>
        <SocialLinks />
      </div>

      <div className={styles.app__navbar_menu}>
        <SideBar
          links={linksArr}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        />
      </div>
    </nav>
  );
};

export default Navbar;
