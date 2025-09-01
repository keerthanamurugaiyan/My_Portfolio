import React from 'react';
import { useState, useEffect } from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const generateSparkle = (color = '#FFFFFF') => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(8, 16),
  style: {
    position: 'absolute',
    top: `${random(0, 100)}%`,
    left: `${random(0, 100)}%`,
    zIndex: 2,
  },
});

const SPARKLE_LIFETIME = 600;

function SparkleInstance({ sparkle }) {
  return (
    <svg
      width={sparkle.size}
      height={sparkle.size}
      style={sparkle.style}
      fill={sparkle.color}
      viewBox="0 0 160 160"
      pointerEvents="none"
    >
      <path d="M80 0C80 0 84.28 41.29 101.5 58.5C118.71 75.7 160 80 160 80C160 80 118.71 84.28 101.5 101.5C84.28 118.7 80 160 80 160C80 160 75.7 118.7 58.5 101.5C41.29 84.28 0 80 0 80C0 80 41.29 75.7 58.5 58.5C75.7 41.29 80 0 80 0Z" />
    </svg>
  );
}

export function Sparkles({ children }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const newSparkle = generateSparkle();
      setSparkles((prev) => [
        ...prev.filter((s) => now - s.createdAt < SPARKLE_LIFETIME),
        newSparkle,
      ]);
    }, random(100, 300));

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {sparkles.map((s) => (
        <SparkleInstance key={s.id} sparkle={s} />
      ))}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
}