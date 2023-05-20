import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const path: string = window.location.pathname;

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          Luis.
        </Link>
        <ul>
          <li>
            <Link to="/" className={path === "/" ? styles.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={path === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={path === "/projects" ? styles.active : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={path === "/contact" ? styles.active : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
