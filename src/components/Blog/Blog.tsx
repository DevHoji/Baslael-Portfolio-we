import React from "react";
import styles from "./Blog.module.css";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description:
      "Learn the basics of React hooks and how they help manage state and side effects in functional components.",
    link: "/blog/understanding-react-hooks",
    date: "21 January, 2024",
    backgroundImage: "url('/images/html-image.png')",
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox",
    description:
      "A deep dive into CSS Grid and Flexbox to build modern, responsive layouts without much hassle.",
    link: "/blog/mastering-css-grid-and-flexbox",
    date: "18 January, 2024",
    backgroundImage: "url('/images/html-image.png')",
  },
  {
    id: 3,
    title: "Building Your First Next.js App",
    description:
      "An easy-to-follow guide on setting up your first Next.js application and understanding its file structure.",
    link: "/blog/building-your-first-nextjs-app",
    date: "15 January, 2024",
    backgroundImage: "url('/images/html-image.png')",
  },
];

const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.heading}>
        <h2 className={styles.latestPost}>Latest Post</h2>
        <h1 className={styles.blogTitle}>BLOGS</h1>
      </div>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={styles.blogItem}
            style={{ backgroundImage: blog.backgroundImage }}
          >
            <div className={styles.date}>
              <p>{blog.date}</p>
            </div>
            <div className={styles.blogContent}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.link} className={styles.readMore}>
                Read More
              </a>
              <hr className={styles.horizontalLine} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
