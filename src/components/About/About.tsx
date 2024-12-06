"use client"; // Make sure this is a client component

import React from "react";
import Image from "next/image"; // Import Image from next/image
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.profile}>
        {/* Image with styled shadow and dots */}
        <div className={styles.imageWrapper}>
          <div className={styles.shadowFrame}>
            <div className={styles.dots}></div>
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=500&h=700&q=80"
              alt="Profile"
              className={styles.profileImage}
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>

      {/* About Text Section */}
      <div className={styles.details}>
        <h3 className={styles.biography}>BIOGRAPHY</h3>
        <h2 className={styles.whoAmI}>Who am I?</h2>
        <h4 className={styles.aboutMe}>About Me</h4>
        <p className={styles.subDetails}>Baslalel Workineh's Details</p>
        <p className={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          ligula vel lorem pharetra tincidunt. Quisque at eros ac dui efficitur
          dictum.
        </p>

        {/* Name, Email, Address, Phone No. in Boxes */}
        <div className={styles.inputWrapper}>
          <div className={styles.inputBox}>
            <p className={styles.fieldInfo}>Baslael Workineh</p>
          </div>
          <div className={styles.inputBox}>
            <p className={styles.fieldInfo}>example@email.com</p>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputBox}>
            <p className={styles.fieldInfo}>Addis Ababa</p>
          </div>
          <div className={styles.inputBox}>
            <p className={styles.fieldInfo}>+0964932815</p>
          </div>
        </div>

        {/* Download CV Button */}
        <div className={styles.downloadCV}>
          <button className={styles.downloadButton}>Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
