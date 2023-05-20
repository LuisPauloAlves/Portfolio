import React from "react";
import styles from "./Header.module.css";
import NavBar from "../navbar/Navbar";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
