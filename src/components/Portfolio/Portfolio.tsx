"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const projects = [
    {
      id: 1,
      category: "design",
      title: "Project 1",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 2,
      category: "mobile",
      title: "Mobile App 1",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 3,
      category: "web",
      title: "Web App 1",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 4,
      category: "school",
      title: "School Project 1",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 5,
      category: "personal",
      title: "Personal Project 1",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 6,
      category: "design",
      title: "Design Project 2",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 7,
      category: "mobile",
      title: "Mobile App 2",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 8,
      category: "web",
      title: "Web App 2",
      imgUrl: "/images/html-image.png",
    },
    {
      id: 9,
      category: "personal",
      title: "Personal Project 2",
      imgUrl: "/images/html-image.png",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      {/* Header Section */}
      <div className={styles.textSection}>
        <h2 className={styles.latestWork}>Latest Work</h2>
        <h3 className={styles.portfolioText}>PORTFOLIO</h3>
        <div className={styles.tabs}>
          {["all", "design", "mobile", "web", "school", "personal"].map(
            (category) => (
              <div
                key={category}
                className={`${styles.tab} ${
                  activeTab === category ? styles.active : ""
                }`}
                onClick={() => handleTabClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            )
          )}
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectsContainer}>
        {projects
          .filter(
            (project) => activeTab === "all" || project.category === activeTab
          )
          .map((project) => (
            <div className={styles.projectBox} key={project.id}>
              <div className={styles.projectImage}>
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className={styles.projectImg}
                />
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>
                    GitHub
                  </a>
                  <a href="#" className={styles.projectLink}>
                    View Site
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
