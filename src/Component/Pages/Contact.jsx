import React from 'react';
import { motion } from "framer-motion";
import { FiMail } from 'react-icons/fi';

function Contact() {
  return (
    <section className="to-white py-7">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">Contact</h2>

  <p className="text-center text-gray-600 text-md mb-10 max-w-2xl mx-auto italic">
  Let’s connect — great conversations often lead to great collaborations!{" "}
  <FiMail className="inline align-middle text-cyan-600 text-lg" />
</p>

        <form className="bg-gradient-to-b from-[#e8e1f2] to-white p-8 mt-7 rounded-xl shadow-xl ring-1 ring-gray-100 space-y-4">
  <h3 className="text-[#B59ED5] text-2xl font-bold text-center mb-2">Let's Work Together</h3>

  <div>
    <label className="block text-md font-semibold text-gray-700">Name</label>
    <input
      type="text"
      placeholder="Jhon"
      className="w-full mt-4 p-3 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#B59ED5]"
    />
  </div>

  <div>
    <label className="block text-md font-semibold text-gray-700">Email</label>
    <input
      type="email"
      placeholder="exam@gmail.com"
      className="w-full mt-4 p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B59ED5]"
    />
  </div>

  <div>
    <label className="block text-md font-semibold text-gray-700">Message</label>
    <textarea
      placeholder="Your Message"
      rows="4"
      className="w-full mt-4 p-3 rounded-md bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#B59ED5]"
    ></textarea>
  </div>

  <motion.button
    type="submit"
    whileHover={{
      scale: 0.97,
      boxShadow: "0 0 12px rgba(181, 158, 213, 0.6)",
    }}
    whileTap={{
      scale: 0.95,
      boxShadow: "0 0 8px rgba(181, 158, 213, 0.9)",
    }}
    className="w-full mt-4 relative bg-[#B59ED5] hover:bg-[#a176c9] text-white mb-3 font-bold py-3 px-6 rounded-full transition duration-300 overflow-hidden"
  >
    <span className="relative z-10">Send Message</span>
    <motion.div
      className="absolute inset-0 rounded-full bg-white opacity-10 blur-lg"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }}
    />
  </motion.button>
</form>

      </div>
    </section>
  );
}

export default Contact;
