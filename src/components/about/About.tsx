import React from "react";
import styles from "./About.module.css";
import { Footer, Header } from "../Index";
const About: React.FC = () => {
  return (
    <>
      <Header />
      <section id="About" className={styles.about}>
        About
      </section>
      <Footer/>
    </>
  );
};

export default About;
