"use client";
import React, { useEffect, Dispatch, SetStateAction } from "react";
import styles from "@/styles/Navbar.module.scss";
import icon from "@/assets/favicon-2.png";
import { usePathname } from "next/navigation";
import { SocialLinks, SideBar } from ".";
import Link from "next/link";
import Image from "next/image";

export const links = {
  Home: "/",
  Projects: "/projects",
  Skills: "/skills",
  Experiences: "/experiences",
  Contact: "/contact",
};

type NavbarProps = {
  setCurrentLink: Dispatch<SetStateAction<string>>;
  currentLink: string;
};

const Navbar = ({ setCurrentLink, currentLink }: NavbarProps) => {
  const linksArr: [string, string][] = Object.entries(links);
  const pathname: string = usePathname();

  useEffect(() => {
    setCurrentLink(pathname);
  }, []);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__icon_div} aria-hidden="true">
        <Image src={icon} alt="icon" width={32} height={32} priority />
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
