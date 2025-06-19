import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import home  from '../../assets/videoframe_11633.png';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};
  return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       {/* <img src={home} alt="Video thumbnail w-100 h-100" style={{width:'100%', height:'100%'}} /> */}
//   {/* Video background */}
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute w-full h-full object-cover z-0"
//     src="/hero.mp4"
//   />

//       <div className="absolute inset-0 bg-opacity-60" />
// <div
//   className={`fixed z-50 transition-all duration-500 ${
//     isScrolled
//       ? 'top-5 left-5 right-5 rounded-2xl shadow-md bg-[#40354A] px-10 py-5'
//       : 'top-0 left-0 right-0 w-full px-10 py-4'
//   } flex justify-between items-center`}
// >

//         <h1 className="text-white text-2xl font-bold">YourLogo</h1>
        
//         <ul className="flex gap-6 text-white font-bold">
//           <li><a href="#home" className="cursor-pointer text-white hover:text-[rgb(181,158,213)]">Home</a></li>
//           <li><a href="#about" className="cursor-pointer text-white hover:text-[rgb(181,158,213)]">About</a></li>
//           <li><a href="#skills" className="cursor-pointer text-white hover:text-[rgb(181,158,213)]">Skills</a></li>
//           <li><a href="#projects" className="cursor-pointer text-white hover:text-[rgb(181,158,213)]">Projects</a></li>
//           <li><a href="#contact" className="cursor-pointer text-white hover:text-[rgb(181,158,213)]">Contact</a></li>
//         </ul>
//         <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full">
//           Let’s Chat
//         </button>
//       </div>

//   <motion.div
//   className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10"
//   variants={containerVariants}
//   initial="hidden"
//   whileInView="visible"
//   transition={{ duration: 0.5 }}
//   viewport={{ once: false, amount: 0.30 }}
// >

//     <motion.h1
//       className="text-5xl md:text-6xl font-bold mb-4"
//       variants={childVariants}
//     >
//       I Build Stunning Frontend Interfaces
//     </motion.h1>

//     <motion.p
//       className="text-lg md:text-xl max-w-xl"
//       variants={childVariants}
//     >
//       Passionate about crafting modern web experiences with React, seamless animations, and clean UI/UX.
//     </motion.p>

//     <motion.div
//       className="mt-8 flex gap-4"
//       variants={childVariants}
//     >
//       <motion.button
//         className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-lg cursor-pointer shadow-md hover:shadow-lg transition duration-300"
//         whileHover={{
//           scale: 1.07,
//           boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)',
//         }}
//       >
//         Discover More
//       </motion.button>

//       <motion.button
//         className="px-6 py-3 bg-[#B59ED5] hover:bg-[#a484cd] text-white rounded-full text-lg cursor-pointer shadow-md hover:shadow-lg transition duration-300"
//         whileHover={{
//           scale: 1.07,
//           boxShadow: '0 0 12px rgba(181,158,213,0.8)',
//         }}
//       >
//         Download
//       </motion.button>
//     </motion.div>
//   </motion.div>
//     </div>

<div className="relative w-full h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover z-0"
    src={home}
  />

  {/* ✅ Dim Overlay with Visible Effect */}
  <div className="absolute inset-0 bg-black/30 z-10" />

  {/* ✅ Navbar */}
  <div
    className={`fixed z-50 transition-all duration-500 ${
      isScrolled
        ? 'top-5 left-5 right-5 rounded-2xl shadow-md bg-[#40354A] px-10 py-5'
        : 'top-0 left-0 right-0 w-full px-10 py-4'
    } flex justify-between items-center`}
  >
    <h1 className="text-white text-2xl font-bold">YourLogo</h1>

    <ul className="flex gap-6 text-white font-bold">
      <li><a href="#home" className="hover:text-[rgb(181,158,213)]">Home</a></li>
      <li><a href="#about" className="hover:text-[rgb(181,158,213)]">About</a></li>
      <li><a href="#skills" className="hover:text-[rgb(181,158,213)]">Skills</a></li>
      <li><a href="#projects" className="hover:text-[rgb(181,158,213)]">Projects</a></li>
      <li><a href="#contact" className="hover:text-[rgb(181,158,213)]">Contact</a></li>
    </ul>

    <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full">
      Let’s Chat
    </button>
  </div>

  {/* ✅ Hero Content */}
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <motion.h1 className="text-5xl md:text-6xl font-bold mb-4" variants={childVariants}>
      I Build Stunning Frontend Interfaces
    </motion.h1>

    <motion.p className="text-lg md:text-xl max-w-xl" variants={childVariants}>
      Passionate about crafting modern web experiences with React, seamless animations, and clean UI/UX.
    </motion.p>

    <motion.div className="mt-8 flex gap-4" variants={childVariants}>
      <motion.button
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-lg cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        whileHover={{ scale: 1.07, boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)' }}
      >
        Discover More
      </motion.button>

      <motion.button
        className="px-6 py-3 bg-[#B59ED5] hover:bg-[#a484cd] text-white rounded-full text-lg cursor-pointer shadow-md hover:shadow-lg transition duration-300"
        whileHover={{ scale: 1.07, boxShadow: '0 0 12px rgba(181,158,213,0.8)' }}
      >
        Download
      </motion.button>
    </motion.div>
  </motion.div>
</div>

  );
};

export default HeroSection;


