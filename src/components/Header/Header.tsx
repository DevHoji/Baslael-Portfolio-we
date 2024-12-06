"use client"; // Make sure this is a client component

import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"
          alt="My Portfolio Logo"
          className={styles.logoImage}
        />
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
