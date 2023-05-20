import React from "react";
import styles from "./Contact.module.css";
import { Footer, Header } from "../Index";
const Contact: React.FC = () => {
  return (
    <>
      <Header />
    <section id="Contact" className={styles.contact}>
      Contact
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
