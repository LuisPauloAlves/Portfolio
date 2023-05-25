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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            praesentium doloribus reprehenderit. Excepturi, quasi iste
            voluptatem recusandae sit sunt id in itaque blanditiis vitae sint
            laudantium veniam rerum vero repellendus.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
