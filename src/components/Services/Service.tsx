"use client";

import React, { useState } from "react";
import styles from "./Service.module.css";

const Service = () => {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  // Handle showing the full text on Read More click
  const handleReadMore = (boxId: number) => {
    setActiveBox(boxId);
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>SERVICES</h2>
        <h3 className={styles.subtitle}>What I Do?</h3>
        <div className={styles.verticalLine}></div>
      </div>

      <div className={styles.servicesContainer}>
        {/* UI/UX Design Service */}
        <div
          className={`${styles.serviceBox} ${
            activeBox === 1 ? styles.activeBox : ""
          }`}
          onMouseEnter={() => setActiveBox(1)}
          onMouseLeave={() => setActiveBox(null)}
        >
          <div className={styles.icon} style={{ color: "#00bcd4" }}>
            🖥️
          </div>
          <h4 className={styles.serviceTitle}>UI/UX Design</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {activeBox === 1 && (
            <div className={styles.readMore}>
              <hr />
              <button onClick={() => handleReadMore(1)}>Read More</button>
            </div>
          )}
        </div>

        {/* App Development Service */}
        <div
          className={`${styles.serviceBox} ${
            activeBox === 2 ? styles.activeBox : ""
          }`}
          onMouseEnter={() => setActiveBox(2)}
          onMouseLeave={() => setActiveBox(null)}
        >
          <div className={styles.icon} style={{ color: "#ff9800" }}>
            💻
          </div>
          <h4 className={styles.serviceTitle}>App Development</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {activeBox === 2 && (
            <div className={styles.readMore}>
              <hr />
              <button onClick={() => handleReadMore(2)}>Read More</button>
            </div>
          )}
        </div>

        {/* Web Development Service */}
        <div
          className={`${styles.serviceBox} ${
            activeBox === 3 ? styles.activeBox : ""
          }`}
          onMouseEnter={() => setActiveBox(3)}
          onMouseLeave={() => setActiveBox(null)}
        >
          <div className={styles.icon} style={{ color: "#4caf50" }}>
            🌐
          </div>
          <h4 className={styles.serviceTitle}>Web Development</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {activeBox === 3 && (
            <div className={styles.readMore}>
              <hr />
              <button onClick={() => handleReadMore(3)}>Read More</button>
            </div>
          )}
        </div>
      </div>

      {/* Additional Services Section */}
      <div className={styles.servicesContainer}>
        {/* Digital Marketing Service */}
        <div
          className={`${styles.serviceBox} ${
            activeBox === 4 ? styles.activeBox : ""
          }`}
          onMouseEnter={() => setActiveBox(4)}
          onMouseLeave={() => setActiveBox(null)}
        >
          <div className={styles.icon} style={{ color: "#9c27b0" }}>
            📈
          </div>
          <h4 className={styles.serviceTitle}>Digital Marketing</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {activeBox === 4 && (
            <div className={styles.readMore}>
              <hr />
              <button onClick={() => handleReadMore(4)}>Read More</button>
            </div>
          )}
        </div>

        {/* Content Writing Service */}
        <div
          className={`${styles.serviceBox} ${
            activeBox === 5 ? styles.activeBox : ""
          }`}
          onMouseEnter={() => setActiveBox(5)}
          onMouseLeave={() => setActiveBox(null)}
        >
          <div className={styles.icon} style={{ color: "#ff5722" }}>
            ✍️
          </div>
          <h4 className={styles.serviceTitle}>Content Writing</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {activeBox === 5 && (
            <div className={styles.readMore}>
              <hr />
              <button onClick={() => handleReadMore(5)}>Read More</button>
            </div>
          )}
        </div>

        {/* SEO Optimization Service */}
        <div
          className={`${styles.serviceBox} ${
            activeBox === 6 ? styles.activeBox : ""
          }`}
          onMouseEnter={() => setActiveBox(6)}
          onMouseLeave={() => setActiveBox(null)}
        >
          <div className={styles.icon} style={{ color: "#009688" }}>
            📊
          </div>
          <h4 className={styles.serviceTitle}>SEO Optimization</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {activeBox === 6 && (
            <div className={styles.readMore}>
              <hr />
              <button onClick={() => handleReadMore(6)}>Read More</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
