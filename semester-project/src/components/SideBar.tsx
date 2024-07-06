"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import useClickOutside from "@/hooks/custom/useClickOutside";
import styles from "@/styles/Navbar.module.scss";
import Image from "next/image";
import icon from "@/assets/favicon-2.png";

type SidebarProps = {
  links: [string, string][];
  setCurrentLink: Dispatch<SetStateAction<string>>;
  currentLink: string;
};

const SideBar = ({ links, currentLink, setCurrentLink }: SidebarProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleMenuClick = (link: string) => {
    setCurrentLink(link);
    setToggle(false);
  };

  const handleClickOutside = () => {
    setToggle(false);
  };

  useClickOutside(wrapperRef, handleClickOutside);

  return (
    <>
      <HiMenu onClick={() => setToggle(true)} />
      {toggle && (
        <div className={styles.app__menu_wrapper}>
          <div className={styles.app__menu_container} ref={wrapperRef}>
            <HiX onClick={() => setToggle(false)} />
            <div
              className={`${styles.app__icon_div} ${styles.app__center_container}`}
            >
              <Image src={icon} alt="icon" width={32} height={32} priority />
              <h3>portfolio</h3>
            </div>

            <ul className={styles.app__navbar_links}>
              {links.map(([name, path]) => {
                return (
                  <li key={`link-${name}`}>
                    <Link
                      href={path}
                      onClick={() => handleMenuClick(path)}
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
        </div>
      )}
    </>
  );
};

export default SideBar;
