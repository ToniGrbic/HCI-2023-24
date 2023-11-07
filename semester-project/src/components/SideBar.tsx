"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import useClickOutside from "../hooks/custom/useClickOutside";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

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
        <div>
          <div ref={wrapperRef}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <h3>portfolio</h3>
              {links.map(([name, path]) => {
                return (
                  <li key={name}>
                    <Link
                      href={path}
                      key={`link-${name}`}
                      onClick={() => handleMenuClick(path)}
                      className={
                        currentLink === path
                          ? styles.app__navbar_menulink_color
                          : ""
                      }
                    >
                      {name}
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
