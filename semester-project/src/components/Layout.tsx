"use client";
import React, { ReactNode, useState } from "react";
import { Navbar, Footer } from ".";

const Layout = ({ children }: { children: ReactNode }) => {
  const [currentLink, setCurrentLink] = useState<string>("");

  return (
    <div className="wrapper">
      <div>
        <header>
          <Navbar currentLink={currentLink} setCurrentLink={setCurrentLink} />
        </header>
        <main className="container">{children}</main>
      </div>
      <footer>
        <Footer setCurrentLink={setCurrentLink} />
      </footer>
    </div>
  );
};

export default Layout;
