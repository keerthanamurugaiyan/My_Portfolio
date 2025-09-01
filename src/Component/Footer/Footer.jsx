import { FaEnvelope, FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="bg-[#40354A] text-gray-300 pt-10 pb-5 px-4"
      style={{
        borderTopLeftRadius: "55px",
        borderTopRightRadius: "55px",
        // borderTopLeftRadius: "40px",
        // borderTopRightRadius: "40px",
        marginTop: "20px",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">

        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center text-center">

            <div className="flex items-center space-x-">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              <span
                className="text-lg italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B59ED5] via-white to-[#B59ED5]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Keerthana Murugaiyan
              </span>
            </div>

            <p className="mt- text-gray-400">
              Thank you for visiting my personal portfolio 💜
            </p>
            <p className="mt-2 text-gray-400">
              Let's connect and grow together 🚀
            </p>
          </div>

        </motion.div>

        <motion.div
          className="flex flex-col items-center md:items-end me-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-white text-lg font-semibold mb-3 md:me-5">
            Contact Info
          </h3>

          <div className="flex space-x-6 text-3xl text-gray-500">
            <a
              href="mailto:keerthanamurugaiyan06@gmail.com"
              aria-label="Email"
              className="hover:text-[#B59ED5] transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/keerthana-murugaiyan-947597303/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#B59ED5] transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-[#B59ED5] transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1"
            >
              <FaDiscord />
            </a>
          </div>
        </motion.div>

      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm text-gray-500 text-center"
      >
        <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
          <span className="text-red-500 mr-1">❤</span>  Designed & Built by{" "}
          <span className="font-bold">@Keerthana Murugaiyan</span> © {new Date().getFullYear()}
        </div>
      </motion.p>
    </motion.footer>
  );
};

export default Footer;