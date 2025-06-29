import React from "react";
import HeroSection from "../Home/Home";
import AboutMe from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
    {/* <div className=""> */}
      <HeroSection />
      <div id="about"> <AboutMe /> </div>
      <div id="skills"> <Skills /> </div>
      <div id="projects"> <Projects /> </div>
      <div id="contact"> <Contact /> </div>
       <Footer />
    </div>
  );
};

export default Layout;