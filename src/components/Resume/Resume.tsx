"use client"; // Ensure it's a client component

import React from "react";
import Image from "next/image";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      {/* Title Section */}
      <div className={styles.titleContainer}>
        <h2 className={styles.myResume}>My Resume</h2>
        <h1 className={styles.backgroundText}>RESUME</h1>
      </div>

      {/* Resume Section with Two Columns */}
      <div className={styles.resumeMainContainer}>
        {/* Left Column */}
        <div className={styles.resumeColumn}>
          <div className={styles.verticalLine}>
            <span className={styles.circle} style={{ top: "0%" }}></span>
            <span className={styles.circle} style={{ top: "33%" }}></span>
            <span className={styles.circle} style={{ top: "66%" }}></span>
          </div>

          <div className={styles.resumeBox}>
            <h3 className={styles.resumeTitle}>Education</h3>
            <h4 className={styles.degree}>Computer Science</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.resumeBox}>
            <h3 className={styles.resumeTitle}>Bachelor&apos;s Degree</h3>
            <h4 className={styles.degree}>University of Addis Ababa</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              posuere, turpis non pretium feugiat.
            </p>
          </div>

          <div className={styles.resumeBox}>
            <h3 className={styles.resumeTitle}>Master&apos;s Degree</h3>
            <h4 className={styles.degree}>Harvard University</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget leo in purus interdum dignissim.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.resumeColumn}>
          <div className={styles.verticalLine}>
            <span className={styles.circle} style={{ top: "0%" }}></span>
            <span className={styles.circle} style={{ top: "33%" }}></span>
            <span className={styles.circle} style={{ top: "66%" }}></span>
          </div>

          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.resumeBox}>
              <h3 className={styles.resumeTitle}>Bachelor&apos;s Degree</h3>
              <h4 className={styles.degree}>Sample University</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                posuere, turpis non pretium feugiat.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        {/* Title Section */}
        <div className={styles.titleContainer}>
          <h2 className={styles.mySkills}>My Skills</h2>
          <h1 className={styles.backgroundText}>SKILLS</h1>
        </div>

        {/* Skills List */}
        <div className={styles.skillsList}>
          {[
            { skill: "HTML", percentage: 90, img: "/path-to-html-image.png" },
            { skill: "CSS", percentage: 80, img: "/path-to-css-image.png" },
            { skill: "JavaScript", percentage: 85, img: "/path-to-js-image.png" },
            { skill: "React", percentage: 75, img: "/path-to-react-image.png" },
            { skill: "Node.js", percentage: 70, img: "/path-to-node-image.png" },
            { skill: "Python", percentage: 80, img: "/path-to-python-image.png" },
          ].map((item, index) => (
            <div key={index} className={styles.skillItem}>
              {/* Optimized image with Next.js's Image */}
              <div className={styles.skillIcon}>
                <Image
                  src={item.img}
                  alt={item.skill}
                  width={30}
                  height={30}
                  layout="responsive"
                />
              </div>
              <div className={styles.skillName}>{item.skill}</div>
              <div className={styles.progressContainer}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <div className={styles.percentage}>{item.percentage}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.number}>3K</div>
          <div className={styles.label}>Projects Done</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.number}>98+</div>
          <div className={styles.label}>Happy Clients</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.number}>13</div>
          <div className={styles.label}>Awards Won</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.number}>10+</div>
          <div className={styles.label}>Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
