import React from "react";
import styles from "./Header.module.css";
import NavBar from "./Navbar";
const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
