
import React from 'react';
import { FaEnvelope, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="bg-[#40354A] text-gray-300 pt-10 pb-5 px-4"
      style={{
        borderTopLeftRadius: '55px',
        borderTopRightRadius: '55px',
        marginTop: '20px',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left Block */}
        {/* <div className="flex flex-col items-center md:ms-10 lg:ms-0"> */}
             <motion.div
            className="flex flex-col items-center md:ms-10 lg:ms-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1}}
          >
          <div className="flex items-center text-2xl font-bold">
            <span className="">Keerthana</span>
            <span className=" ml-1">Murugaiyan</span>
          </div>
          <p className="mt-4 text-center text-gray-400">
            Thank you for visiting my personal portfolio
          </p>
          <span className="text-red-500 text-lg mt-1">❤️</span>
          <p className="mt-2 text-center text-gray-400">
            Let's connect and grow together!
          </p>
        {/* </div> */}
        </motion.div>

             <motion.div
            className="flex flex-col md:ms-20 lg:ms-0 items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1}}
          >
          <h3 className="text-white text-lg font-semibold mb-3">Contact Info</h3>
          <div className="flex space-x-6 text-3xl text-gray-500">
            <a
              href="mailto:keerthanamurugaiyan06@gmail.com"
              aria-label="Email"
              className="hover:text-[#B59ED5] transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#B59ED5] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-[#B59ED5] transition"
            >
              <FaDiscord />
            </a>
          </div>
        </motion.div>

        {/* Right: Quick Links */}
        {/* <motion.div
          className="flex flex-col text-center items-center md:items-start"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <h6 className="text-xl font-semibold text-white mb-4">Quick Links</h6>
          <ul className="text-gray-400 space-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="hover:text-pink-600 transition"
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div> */}

          <motion.div
            className="flex flex-col text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1}}
          >
            <h6 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h6>
            <ul className="text-gray-400 space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.3 },
                    }}
                        //  className="hover:text-[#B59ED5] hover:text-bold"
                         className="hover:text-[#B59ED5] hover:font-bold transition"
                  >
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        <span className="text-red-500 mr-1">💖</span> Designed by{' '}
        <span className="font-bold">@Keerthana Murugaiyan</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
