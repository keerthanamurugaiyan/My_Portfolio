import React from 'react';
import { motion } from 'framer-motion';
import { TbBulb } from 'react-icons/tb';
import { IoLogoReact } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import worldMap from '../../assets/about_Global.png';

const AboutMe = () => {
  return (
    <motion.div
      id="about"
      className="w-full min-h-screen text-black py-20 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">About Me</h2>
      <p className="text-center text-gray-600 text-md mb-5 max-w-2xl mx-auto italic">
  "Bringing ideas to life with code that’s as thoughtful as the design behind it!{" "}
  <TbBulb className="inline align-middle mb-2 text-pink-500 text-xl" />"
</p>

      <div className="max-w-6xl mx-auto flex flex-col md:gap-3 md:left-10 md:flex-row items-center gap-">

        <motion.div
          className="w-full md:w-[45%] flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          {/* <motion.img
            src={MyImg}
            alt="About me"
            className="rounded-2xl w-72 h-72 object-cover"
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          /> */}
          {/* <motion.img
            src={worldMap}
            alt="Rotating World Map"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            className="rounded-2xl w-72 h-72 object-cover"
          /> */}

          <motion.img
  src={worldMap}
  alt="Rotating World Map"
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
  className="rounded-2xl w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] object-contain"
/>

        </motion.div>

        <motion.div
          className="w-full lg:w-[55%]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div className="text-black p-6 md:p-8 rounded-2xl">

<h3 className="text-3xl font-semibold text-gray-800 mb-4">
  I craft clean, interactive UIs as a{" "}
  <span className="text-[#a176c9] font-bold inline-flex items-center gap-1 ml-0 sm:ml-1 flex-wrap">
    <span className="whitespace-nowrap text-lg sm:text-[10rem] md:text-3xl">
      Frontend Developer
    </span>
    <IoLogoReact className="text-[#61DBFB] text-2xl sm:text-3xl drop-shadow-lg animate-pulse" />
  </span>
</h3>

            <p className="text-lg leading-7">
              I’m a dedicated Frontend Developer with a strong focus on crafting responsive, intuitive, and visually engaging user interfaces. 
              With hands-on experience in <strong className='font-bold text-[#a176c9]'>React JS, JavaScript, Redux, Redux-Saga, and Tailwind CSS</strong>, I strive to build seamless digital experiences that blend functionality with modern design.

              Currently, I’m working at <strong className="text-[#a176c9] font-bold">Ebrain Technologies</strong>, where I contribute to building scalable web applications and enhance user interactions through clean code and optimized UI performance.
            </p>

<div className="flex gap-4 mt-4">

  <motion.a
    href="https://www.linkedin.com/in/keerthana-murugaiyan-947597303/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 0.97,
      boxShadow: "0 0 12px rgba(181, 158, 213, 0.6)",
    }}
    whileTap={{
      scale: 0.95,
      boxShadow: "0 0 8px rgba(181, 158, 213, 0.9)",
    }}
    className="relative inline-flex items-center gap-2 bg-[#ac94ce] hover:bg-[#a176c9] text-white px-4 py-2 rounded-lg transition-all shadow-md overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <FaLinkedin className="text-xl" /> LinkedIn
    </span>
    <motion.div
      className="absolute inset-0 rounded-lg opacity-20 blur-md bg-gradient-to-r from-transparent via-white to-transparent"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut",
      }}
      style={{
        backgroundSize: "200% 100%",
      }}
    />
  </motion.a>

  <motion.a
    href="https://github.com/keerthanamurugaiyan"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 0.97,
      boxShadow: "0 0 12px rgba(181, 158, 213, 0.6)",
    }}
    whileTap={{
      scale: 0.95,
      boxShadow: "0 0 8px rgba(181, 158, 213, 0.9)",
    }}
    className="relative inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all shadow-md overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <FaGithub className="text-xl" /> GitHub
    </span>
    <motion.div
      className="absolute inset-0 rounded-lg opacity-20 blur-md bg-gradient-to-r from-transparent via-white to-transparent"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut",
      }}
      style={{
        backgroundSize: "200% 100%",
      }}
    />
  </motion.a>
</div>

          </motion.div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default AboutMe;
