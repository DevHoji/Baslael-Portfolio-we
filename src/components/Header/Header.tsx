"use client"; // Ensures this is a client-side component

import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for burger and cancel

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close menu when a link is clicked

    // Scroll to the corresponding section
    const section = document.getElementById(tab);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = (): void => {
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
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleTabClick(tab);
                }}
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
