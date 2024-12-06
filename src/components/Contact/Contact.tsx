"use client"; // Make sure this is a client component

import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me!</p>
      <a href="mailto:your-email@example.com" className={styles.contactButton}>
        Email Me
      </a>
    </section>
  );
};

export default Contact;
