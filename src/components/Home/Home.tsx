// Home.tsx
import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      {/* Left Section: Text Introduction */}
      <div className={styles.leftPart}>
        <div className={styles.textSection}>
          <h1>Hello, I&apos;m</h1> {/* Escape the single quote here */}
          <h3 className={styles.name}>Baslael Workineh</h3>
          <h3>I&apos;m a Web Developer</h3> {/* Escape the single quote here */}
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className={styles.contactButton}>Contact Me</button>
        </div>
      </div>

      {/* Right Section: Animated Visual */}
      <div className={styles.rightPart}>
        <div className={styles.animatedVisual}>
          <div className={styles.animatedCircle}>
            <div className={styles.innerCircle}></div>
            {/* Using Next.js optimized Image component */}
            <Image
              src="/images/html-image.png"
              alt="Your Portrait"
              className={styles.image}
              width={150} // Set an appropriate image width
              height={150} // Set an appropriate image height
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
