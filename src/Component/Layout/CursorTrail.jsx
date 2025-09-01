import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768);
    };

    if (showCursor) {
      window.addEventListener('mousemove', moveCursor);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', handleResize);
    };
  }, [showCursor]);

  const color = '#C77DFF';

  if (!showCursor) return null;

  return (
    <>
      <motion.div
        className="bg-[#B59ED5]/57"
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 42,
          height: 42,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 8px rgba(199, 125, 255, 0.25)',
        }}
      />

      <motion.div
        animate={{ x: position.x - 5, y: position.y - 5 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          backgroundColor: '#c580faff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;