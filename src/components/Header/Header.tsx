"use client"; // Ensures this is a client-side component

import React, { useState, useRef } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for burger and cancel

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close menu when a link is clicked

    // Scroll to the respective section
    switch (tab) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resumeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonial":
        testimonialRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "blog":
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.name}>Baslael</span>
      </div>
      <nav>
        {/* Burger Menu Icon */}
        <div className={styles.burgerIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          {/* Cancel Icon inside the menu */}
          {isMenuOpen && (
            <div className={styles.cancelIcon} onClick={toggleMenu}>
              <FaTimes />
            </div>
          )}

          {[
            "home",
            "about",
            "resume",
            "services",
            "portfolio",
            "testimonial",
            "blog",
            "contact",
          ].map((tab) => (
            <li key={tab}>
              <a
                href="#"
                onClick={() => handleTabClick(tab)}
                className={activeTab === tab ? styles.active : ""}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
