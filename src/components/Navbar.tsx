import React from "react";
import styles from "./Navbar.module.css";
import navLinks from "../constants/navLinks";

const NavBar = () => {
  return (
    <nav>
      <a href="#" className={styles.logo}>Luis.dev</a>
      <ul>
        {navLinks.map((nav, index) => (
          <li key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
