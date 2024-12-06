"use client"; // Make sure this is a client component

import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectItem}>
          <img src="/images/project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>A description of the project.</p>
        </div>
        <div className={styles.projectItem}>
          <img src="/images/project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>A description of the project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
