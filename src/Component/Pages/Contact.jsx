import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail } from "react-icons/fi";
import worldMap from "../../assets/contact_Global.png";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    resetForm();
  };

  return (
    <section id="contact" className="py-10 bg-white relative">
      <div className="max-w-xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">Contact</h2>

        <p className="text-center text-gray-600 text-md mb-10 italic">
          Let’s connect — great conversations often lead to great collaborations!{" "}
          <FiMail className="inline align-middle mb-1 text-cyan-600 text-lg" />
        </p>

        <div className="relative">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="relative z-10 bg-gradient-to-b from-[#e8e1f2] to-white p-8 mt-7 rounded-xl shadow-xl ring-1 ring-gray-100 space-y-4 backdrop-blur-sm">
                <h3 className="text-[#B59ED5] text-2xl font-bold text-center mb-4">Let's Work Together</h3>

                <motion.img
                  src={worldMap}
                  alt="Rotating World Map"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                  className="absolute inset-0 w-full h-full object-contain opacity-10 z-0 pointer-events-none"
                />

                <div>
                  <label className="block text-md font-semibold text-gray-700">Your Name</label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="John"
                    className={`w-full mt-2 p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 ${
                      errors.name && touched.name
                        ? "focus:ring-red-400 border border-red-400"
                        : "focus:ring-[#B59ED5]"
                    }`}
                  />
                  <ErrorMessage name="name" component="p" className="text-sm text-red-500 mt-1" />
                </div>

                <div>
                  <label className="block text-md font-semibold text-gray-700">Your Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className={`w-full mt-2 p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 ${
                      errors.email && touched.email
                        ? "focus:ring-red-400 border border-red-400"
                        : "focus:ring-[#B59ED5]"
                    }`}
                  />
                  <ErrorMessage name="email" component="p" className="text-sm text-red-500 mt-1" />
                </div>

                <div>
                  <label className="block text-md font-semibold text-gray-700">Your Message</label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className={`w-full mt-2 p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 ${
                      errors.message && touched.message
                        ? "focus:ring-red-400 border border-red-400"
                        : "focus:ring-[#B59ED5]"
                    }`}
                  />
                  <ErrorMessage name="message" component="p" className="text-sm text-red-500 mt-1" />
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
                  className="w-full mt-4 relative bg-[#B59ED5] hover:bg-[#a176c9] text-white font-bold py-3 px-6 rounded-full transition duration-300 overflow-hidden"
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
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-[#4A1C78] px-6 py-4 rounded-xl shadow-xl ring-1 ring-violet-200 backdrop-blur-md z-50"
            style={{
              background: "linear-gradient(145deg, #f3ecff, #e8e1f2)",
              boxShadow: "0 8px 25px rgba(181, 158, 213, 0.2)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="font-semibold tracking-wide text-center"
            >
              🎉 Your message has been sent successfully!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;