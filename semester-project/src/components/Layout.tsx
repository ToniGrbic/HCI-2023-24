import React from "react";
import { Navbar, Footer } from ".";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div>
        <header>
          <Navbar />
        </header>
        <main className="container">{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
