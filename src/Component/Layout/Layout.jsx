// import React from "react";
// import HeroSection from "../Home/Home";
// import AboutMe from "../Pages/About";
// import Skills from "../Pages/Skills";
// import Projects from "../Pages/Projects";
// import Contact from "../Pages/Contact";
// import Footer from "../Footer/Footer";
// import CustomCursor from "./CursorTrail"; // 👈 Add this

// const Layout = () => {
//   return (
//     <div id="custom-scroll-wrapper" className="overflow-y-scroll h-screen">
//       <CustomCursor /> {/* 👈 Add cursor at top level */}
//       <div id="home"><HeroSection /></div>
//       <div id="about"><AboutMe /></div>
//       <div id="skills"><Skills /></div>
//       <div id="projects"><Projects /></div>
//       <div id="contact"><Contact /></div>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;





import React, { useEffect, useState } from "react";
import HeroSection from "../Home/Home";
import AboutMe from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Footer from "../Footer/Footer";
import CustomCursor from "./CursorTrail";
// import Loader from "./Loader"; // Adjust path as needed
import Loader from "./Loader"; // Adjust path as needed

// Match the typing duration in Loader.js
const text = "Exploring Keerthana’s World — Where Code Meets Creativity";
const typingDelay = 80;
const pauseAfterTyping = 500;
const totalTypingTime = text.length * typingDelay + pauseAfterTyping;

const Layout = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, totalTypingTime + 1000); // +1s for fade out

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="custom-scroll-wrapper" className="overflow-y-scroll h-screen">
      <CustomCursor />
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default Layout;
