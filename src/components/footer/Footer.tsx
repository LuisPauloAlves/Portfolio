import React from "react";
import styles from "./Footer.module.css";
import { GithubIcon, LinkedinIcon } from "../icons/Icons";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>{`© ${year} by Luis Paulo`}</span>
        <ul>
          <LinkedinIcon />
          <GithubIcon />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
