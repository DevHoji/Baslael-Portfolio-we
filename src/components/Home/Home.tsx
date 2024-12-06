// Home.tsx
import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      {/* Left part with text */}
      <div className={styles.leftPart}>
        <div className={styles.textSection}>
          <h1>Hello, I'm</h1>
          <h3 className={styles.name}>Baslael Workineh</h3>
          <h3>I'm a Web Developer</h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className={styles.contactButton}>Contact Me</button>
        </div>
      </div>

      {/* Right part with animated visual */}
      <div className={styles.rightPart}>
        <div className={styles.animatedVisual}>
          <div className={styles.animatedCircle}>
            <div className={styles.innerCircle}></div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=500&h=500&q=80"
              alt="Your Image"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
