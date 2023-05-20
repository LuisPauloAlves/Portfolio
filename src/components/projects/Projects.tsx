import React from "react";
import styles from "./Projects.module.css";
import { Footer, Header } from "../Index";
const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <section id="Projects" className={styles.projects}>
        Projects
      </section>
      <Footer/>
    </>
  );
};

export default Projects;
