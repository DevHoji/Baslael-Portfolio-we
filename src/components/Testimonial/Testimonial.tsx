"use client"; // Ensure the component is client-side for hooks like useState

import React, { useState } from "react";
import styles from "./Testimonial.module.css";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex John",
      role: "UI Designer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiH359Pmpd_9buQNQ81cci3TYGxZcussxwg&s",
      testimonial:
        "Working with this team was an amazing experience. They delivered beyond my expectations and were super easy to work with.",
      rating: 5,
      feedbackCount: 42,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Frontend Developer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      testimonial:
        "The team was extremely professional and brought innovative ideas to the table. I couldn’t be happier with the results.",
      rating: 4,
      feedbackCount: 35,
    },
    {
      id: 3,
      name: "John Doe",
      role: "Back-end Developer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
      testimonial:
        "Exceptional work! The team understood our needs and provided an amazing solution that elevated our brand.",
      rating: 5,
      feedbackCount: 50,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.heading}>
        <h1>TESTIMONIAL</h1>
        <h2>Client Review</h2>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <h3>What Clients Say?</h3>
          <h4>Read My Clients Feedback</h4>
          <p>
            "I had the best experience working with this team. Their attention
            to detail and commitment to excellence made all the difference."
          </p>
          <p>
            "They were not only professional but also friendly. I highly
            recommend their services."
          </p>
          <button className={styles.hireButton}>
            <span className={styles.icon}>👤</span> Hire Me Now
          </button>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className={styles.profileImage}
              />
              <div className={styles.profileDetails}>
                <div className={styles.profileInfo}>
                  <h5>{currentTestimonial.name}</h5>
                  <p className={styles.role}>{currentTestimonial.role}</p>
                </div>
                <p className={styles.testimonialText}>
                  "{currentTestimonial.testimonial}"
                </p>
                <div className={styles.rating}>
                  {[...Array(currentTestimonial.rating)].map((_, index) => (
                    <FaStar key={index} className={styles.star} />
                  ))}
                  <span className={styles.ratingCount}>
                    {" "}
                    / {currentTestimonial.feedbackCount} feedbacks
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.navigation}>
              <FaArrowLeft className={styles.arrow} onClick={prevTestimonial} />
              <FaArrowRight
                className={styles.arrow}
                onClick={nextTestimonial}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
