import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFolder } from "react-icons/fa";
import { LiaHandPointerSolid } from "react-icons/lia";
import home from '../../assets/189639-886016299_large.mp4';
import { saveAs } from "file-saver";
import resumePDF from "../../assets/KeerthanaMurugaiyan_Resume.pdf";
import logo from "../../assets/logo.png";
import { CgMenuHotdog } from "react-icons/cg";
import { Sparkles } from './Sparkles';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuRef = useRef(null);

  useEffect(() => {
    const scrollWrapper = document.getElementById("custom-scroll-wrapper");

    const handleScroll = () => {
      if (scrollWrapper) {
        setIsScrolled(scrollWrapper.scrollTop > 50);
      }
    };

    scrollWrapper?.addEventListener("scroll", handleScroll);
    return () => scrollWrapper?.removeEventListener("scroll", handleScroll);
  }, []);

  const sentences = [
    "Turning Ideas into Pixel-Perfect Interfaces",
    "Crafting Beautiful & Responsive Web Designs",
    "Building Modern Frontend Experiences",
    "Transforming Designs into Interactive UI",
    "Passionate React Developer with a Creative Touch"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    const typeSentence = () => {
      const currentSentence = sentences[sentenceIndex];

      if (!isDeleting) {
        setDisplayedText(currentSentence.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === currentSentence.length) {
          isDeleting = true;
          typingTimeout = setTimeout(() => {
            currentIndex = 0;
            isDeleting = false;
            setDisplayedText("");
            setSentenceIndex((prev) => (prev + 1) % sentences.length);
            typeSentence();
          }, 2500);
          return;
        }
      }

      typingTimeout = setTimeout(typeSentence, 150);
    };

    typeSentence();

    return () => clearTimeout(typingTimeout);
  }, [sentenceIndex]);

  useEffect(() => {
    const scrollWrapper = document.getElementById("custom-scroll-wrapper");
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      if (!scrollWrapper) return;

      const scrollY = scrollWrapper.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollY >= offsetTop - 80 && scrollY < offsetTop + offsetHeight - 80) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    scrollWrapper?.addEventListener("scroll", handleScroll);
    return () => scrollWrapper?.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (id) => {
    const scrollWrapper = document.getElementById("custom-scroll-wrapper");
    const section = document.getElementById(id);
    const yOffset = -80;

    if (scrollWrapper && section) {
      const y = section.offsetTop + yOffset;
      scrollWrapper.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleDownload = () => {
    saveAs(resumePDF, "KeerthanaMurugaiyan_Resume.pdf");
  };

  return (

    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
        src={home}
      />

      <div className={`absolute inset-0 z-10 transition-colors duration-500 ${isScrolled ? 'bg-[#40354A]/90' : 'bg-[#40354A]/80'  }`} />

      <div
        className={`fixed z-50 transition-all duration-500 ${isScrolled
          ? 'top-10 left-10 right-13 rounded-2xl shadow-md bg-[#40354A]/75 px-6 py-1'
          : 'top-0 left-0 right-0 w-full px-6 py-4'
          } flex justify-between items-center`}
      >

        <h1 className={`lg:ms-10 transition-all duration-500 ${isScrolled ? 'w-[80px] md:w-[90px]' : 'w-[140px] md:w-[160px]' }`} >

          {/* <img
  src={logo}
  alt="Logo"
  onClick={() => {
    window.location.reload(); 
  }}
  className={`cursor-pointer object-contain transition-all duration-500 ${
    isScrolled ? 'h-[60px]' : 'h-[60px] sm:h-[100px]'
  }`}
/> */}

          <a href="#home">
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-500 ${isScrolled ? 'h-[60px]' : 'h-[60px] sm:h-[100px]'
                }`}
            />
          </a>

        </h1>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl md:me-10">
            <CgMenuHotdog />
          </button>
        </div>

        <ul className="hidden lg:flex gap-6 text-white font-bold">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`cursor-pointer transition-colors duration-300 hover:text-[#B59ED5] ${activeSection === item ? "text-[#B59ED5]" : "text-white"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block lg:me-10">
          <a
            href="https://www.linkedin.com/in/keerthana-murugaiyan-947597303/"
            target="_blank"
            rel="noopener noreferrer"
          >

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#B59ED5",
                boxShadow: "0 0 16px rgba(181, 158, 213, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden pl-16 pr-8 py-4 rounded-full bg-[#B59ED5] text-white font-medium text-sm tracking-wide shadow-md group cursor-pointer"
            >
              {/* Folder + Paper + Pencil */}
              <div className="absolute inset-y-0 left-0 w-14 bg-[#a076c9] flex items-center justify-center rounded-full">
                <div className="relative w-6 h-7">
                  {/* Back Paper */}
                  <div className="absolute w-5 h-6 bg-[#E1E6F9] rounded-[2px] left-[2px] top-[2px] z-0" />

                  {/* Front Paper & Paper Lines  */}
                  <div className="absolute left-[4px] z-20 top-[5px] space-y-[6px] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-200">
                    <div className="w-3.5 h-0.5 bg-[#BBC1E1] rounded-sm" />
                    <div className="w-3.5 h-0.5 bg-[#BBC1E1] rounded-sm" />
                    <div className="w-2.5 h-0.5 bg-[#BBC1E1] rounded-sm" />
                  </div>

                  {/* Lines – show on hover */}
                  <div
                    className="absolute w-3.5 h-0.5 bg-[#BBC1E1] top-[5px] left-[4px] rounded-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 shadow-[0_6px_#BBC1E1,0_12px_#BBC1E1]" />

                  {/* Folder Top */}
                  <div className="absolute top-0 left-0 z-20 transform group-hover:-translate-x-10 transition-transform duration-300">
                    <FaFolder className="text-[#F3E9CB] text-2xl transform group-hover:-rotate-45 transition-transform duration-300 origin-left" />
                  </div>

                  {/* Pencil (now inside paper) */}
                  <div
                    className="absolute top-[1px] left-[28px] w-1 h-5 bg-white rounded-sm transform rotate-[35deg] translate-x-6 opacity-0 group-hover:-translate-x-2 group-hover:opacity-100 transition-all duration-300 z-30" >
                    <div
                      className="absolute top-[2px] left-[-1px] w-[5px] h-[20px] bg-gradient-to-b from-[#275EFE] via-white to-[#5C86FF] rounded-t-sm"
                      style={{ clipPath: "polygon(0 5%, 100% 5%, 100% 85%, 50% 100%, 0 85%)", }} />
                    <div className="absolute w-[3px] h-[6px] top-[3px] left-[3px] bg-transparent border-t border-r border-[#275EFE] rounded-tr-sm" />
                  </div>
                </div>
              </div>

              {/* Button Text with underline effect */}
              <span className="relative z-10">
                Let’s Chat
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
              </span>
            </motion.button>
          </a>
        </div>

      </div>

      {isMenuOpen && (
        <motion.ul
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#40354A]/95 text-white text-center py-6 px-6 rounded-xl shadow-md z-40 w-[90%] max-w-md" >

          <motion.button
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-4 text-white text-2xl"
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FiX />
            </motion.div>
          </motion.button>

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="py-2">
              <a
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <li className="pt-4">
            <a
              href="https://www.linkedin.com/in/keerthana-murugaiyan-947597303/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#B59ED5",
                  boxShadow: "0 0 16px rgba(181, 158, 213, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full py-3 px-6 rounded-full bg-[#B59ED5] text-white text-sm font-medium shadow-md"
              >
                Let’s Chat
              </motion.button>
            </a>
          </li>
        </motion.ul>
      )}

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >

        <div className="px-4 md:px-10 lg:px-28 xl:px-36">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // className="text-white text-4xl md:text-5xl font-semibold text-center leading-snug mb-5 mt-16 md:mt-0"
            className="text-white text-4xl md:text-5xl font-semibold text-center leading-snug mb-5"
          >
            <Sparkles>
              I'm{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B59ED5] via-white to-[#B59ED5]"> Keerthana Murugaiyan </span>
              ,<br />
              a Front-End Developer
            </Sparkles>
          </motion.h1>

          <motion.p className="text-lg md:text-xl max-w-xl mx-auto text-center" variants={childVariants} >
            {displayedText}
            <span className="ml-1 w-1.5 h-6 bg-white animate-blink"></span>
          </motion.p>

        </div>

        <motion.div className="mt-8 flex flex-wrap gap-6 justify-center" variants={childVariants}>

          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={handleDownload}
            className="relative overflow-hidden group flex items-center px-6 py-5 font-semibold rounded-full bg-[#B59ED5] text-white transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] cursor-pointer" >
            <span className="relative z-10 mr-4">Resume</span>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#B59ED5"
              className="w-5 h-5 relative z-10 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:rotate-12 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_6px_#B59ED5]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 4v12m0 0l-4-4m4 4l4-4"
              />
            </motion.svg>

            <span className="absolute right-4.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-600 rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:w-[calc(100%-1rem)] group-hover:h-full group-hover:right-2 z-0" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative overflow-hidden group flex items-center px-6 py-5 font-semibold rounded-full bg-gray-600 text-white transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] cursor-pointer" >
            <span className="relative z-10 mr-4">Discover More</span>

            <LiaHandPointerSolid
              className="w-5 h-5 rotate-[190deg] relative z-10 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:rotate-[230deg] group-hover:-translate-y-1 group-hover:drop-shadow-[0_6px_6px_white]"
            />

            <span className="absolute right-4.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#B59ED5] rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:w-[calc(100%-1rem)] group-hover:h-full group-hover:right-2 z-0" />
          </motion.button>

        </motion.div>

      </motion.div>

    </div>
  );
};

export default HeroSection;