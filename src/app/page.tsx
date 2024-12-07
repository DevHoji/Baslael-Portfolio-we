// src/pages/Page.tsx
import React from "react";
import Header  from "~/components/Header/Header";
import Home from "../components/Home/Home"; // Importing the Home component
import About from "../components/About/About";
import Services from "../components/Services/Service"; // Adjust the path accordingly if needed
import Portfolio from "../components/Portfolio/Portfolio"; // Import the Portfolio component
import Testimonial from "../components/Testimonial/Testimonial"
import Blog from "../components/Blog/Blog"
import Resume from "../components/Resume/Resume"; // Import the Resume component
import Footer from "~/components/Footer/Footer";

const Page = () => {
  return (
    <div>
      <Header />
      <Home /> {/* Add Home component here */}
      <About />
      <Resume /> {/* Add Resume component here */}
      <Services /> {/* Add Services component here */}
      <Portfolio /> {/* Add Portfolio component here */}
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
};

export default Page;
