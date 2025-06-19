import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center z-20">
        <div className="text-2xl font-bold text-cyan-400">JV</div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-cyan-300 cursor-pointer">Home</li>
          <li className="hover:text-cyan-300 cursor-pointer">About</li>
          <li className="hover:text-cyan-300 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-300 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-300 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-pink-600 px-5 py-2 rounded-full hover:bg-pink-500 text-white font-medium">
          Let's Chat
        </button>
      </nav>

      {/* Hero Text */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I Specialize in <br />
          <span className="text-cyan-300">Front-End Development</span>
        </motion.h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200">
          I craft modern web experiences with React, Framer Motion, and elegant UI/UX.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold shadow"
        >
          Discover More →
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
