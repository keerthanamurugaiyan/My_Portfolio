import React from "react";
import HeroSection from "../Home/Home";
import Skills from "../Pages/Skills";
import AboutMe from "../Pages/About";
import Projects from "../Pages/Projects";
import Footer from "../Footer/Footer";
import Contact from "../Pages/Contact";

const Layout = () => {
  return (
    <div>
      <HeroSection />
      <div id="about"> <AboutMe /> </div>
      <div id="skills"> <Skills /> </div>
      <div id="projects"> <Projects /> </div>
      <div id="projects"> <Contact /> </div>
       <Footer />
    </div>
  );
};

export default Layout;
