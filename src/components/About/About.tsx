"use client"; // Make sure this is a client component

import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.profile}>
        <img
          src="/images/profile.jpg"
          alt="My Profile"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.details}>
        <h2>About Me</h2>
        <p>
          Hello, I'm [Your Name]. I'm a passionate developer with experience in
          web development and design. I love creating interactive, user-friendly
          websites and applications.
        </p>
      </div>
    </section>
  );
};

export default About;
