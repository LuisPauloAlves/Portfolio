import React from "react";
import styles from "./Footer.module.css";
const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>{`© ${year} by Luis Paulo`}</span>
      </div>
    </footer>
  );
};

export default Footer;
