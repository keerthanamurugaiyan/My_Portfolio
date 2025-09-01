import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Exploring Keerthana’s World — Where Code Meets Creativity";
const typingDelay = 80; // ms per character
const pauseAfterTyping = 500; // ms
const totalTypingTime = text.length * typingDelay + pauseAfterTyping;

const Loader = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0F0F0F] text-white flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: totalTypingTime / 1000, duration: 1 }}
    >

      <div className="text-xl md:text-2xl font-medium tracking-wide mb-8">
        {displayedText}
      </div>

      <motion.div
        className="flex gap-3"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 1 },
          animate: {
            transition: {
              staggerChildren: 0.15,
              repeat: Infinity,
              repeatType: "loop",
            },
          },
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-[#B59ED5] rounded-full"
            variants={{
              initial: { y: 0 },
              animate: {
                y: [0, -10, 0],
                transition: {
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;