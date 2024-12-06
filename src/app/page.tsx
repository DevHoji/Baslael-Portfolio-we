// src/pages/Page.tsx (or App.tsx)
import React from "react";
import Home from "../components/Home/Home"; // Importing the Home component
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Page = () => {
  return (
    <div>
      <Home /> {/* Add Home component here */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
