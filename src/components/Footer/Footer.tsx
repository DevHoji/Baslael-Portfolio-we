"use client"; // Make sure this is a client component

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 [Your Name]. All rights reserved.</p>
    </footer>
  );
};

export default Footer;