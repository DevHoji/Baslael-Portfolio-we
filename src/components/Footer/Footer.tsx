"use client"; // Ensure it's a client component

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <h2 className={styles.contactHeading}>CONTACT INFO</h2>
        <h3 className={styles.subHeading}>Get in Touch</h3>
        <div className={styles.contactContainer}>
          {/* Profile Image (Large Rectangle) */}
          <div className={styles.profileImageContainer}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusts-cYt8474IiM1dT3rmknutp6_3wS3SJw&s"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>

          {/* Right side content */}
          <div className={styles.messageSection}>
            <p className={styles.messageHeading}>Message</p>
            <p className={styles.writeMessage}>Write Me Something</p>
            <div className={styles.contactDetails}>
              <p>Call Me: +251 964932815</p>
              <p>E-Mail: baslael@email.com</p>
            </div>

            {/* Input Fields */}
            <div className={styles.inputFields}>
              <input
                type="text"
                placeholder="Name"
                className={styles.inputBox}
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.inputBox}
              />
              <input
                type="text"
                placeholder="Subject"
                className={styles.inputBox}
              />
              <textarea
                placeholder="Your Message"
                className={styles.textarea}
              />
            </div>

            {/* Send Message Button */}
            <button className={styles.sendMessageButton}>Send Message</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
