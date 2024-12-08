"use client"; // Ensures this is a client-side component

import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for burger and cancel

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close menu when a link is clicked
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
                href={`#${tab}`}
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
