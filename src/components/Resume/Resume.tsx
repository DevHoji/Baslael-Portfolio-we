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

      {/* Resumes Section */}
      <div className={styles.resumeBoxesContainer}>
        {/* Left Column with Vertical Line */}
        <div className={styles.column}>
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
            <h3 className={styles.resumeTitle}>Master's Degree</h3>
            <h4 className={styles.degree}>Harvard University</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget leo in purus interdum dignissim.
            </p>
          </div>
        </div>

        {/* Right Column with Vertical Line */}
        <div className={styles.column}>
          <div className={styles.verticalLine}>
            <span className={styles.circle} style={{ top: "0%" }}></span>
            <span className={styles.circle} style={{ top: "33%" }}></span>
            <span className={styles.circle} style={{ top: "66%" }}></span>
          </div>

          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.resumeBox}>
              <h3 className={styles.resumeTitle}>Bachelor's Degree</h3>
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
            { skill: "HTML", percentage: 90 },
            { skill: "CSS", percentage: 80 },
            { skill: "JavaScript", percentage: 85 },
            { skill: "React", percentage: 75 },
            { skill: "Node.js", percentage: 70 },
            { skill: "Python", percentage: 80 },
          ].map((item, index) => (
            <div key={index} className={styles.skillItem}>
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

      {/* New Stats Section */}
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
