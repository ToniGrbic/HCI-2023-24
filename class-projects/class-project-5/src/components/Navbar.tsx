import { Pages } from "@/app/layout";
import Link from "next/link";
import React from "react";

interface NavbarProps {
    pages: Pages;   
}

const Navbar = ({ pages }: NavbarProps) => {
  return (
    <nav>
      <ul className="flex justify-center gap-10 text-lg">
        {Object.entries(pages).map(([name, path]) => {
          return (
            <li key={name}>
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
