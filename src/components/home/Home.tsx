import React, { useState } from "react";
import styles from "./Home.module.css";
import { Footer, Header } from "../Index";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <section id="home" className={styles.home}>
        <div className={styles.homeContent}>
          <h1>Hi, I'm Luis Paulo</h1>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure modi
            magnam cum, saepe magni inventore dignissimos nihil? Quam ipsa,
            debitis sint cumque, omnis placeat deserunt incidunt laboriosam amet
            vitae tempora.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
