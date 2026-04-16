import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
];

export const ImageTrail = () => {
  const [trail, setTrail] = useState([]);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [imgIndex, setImgIndex] = useState(0);

  const handleMouseMove = (e) => {
    const distance = Math.sqrt(
      Math.pow(e.clientX - lastPos.x, 2) + Math.pow(e.clientY - lastPos.y, 2)
    );

    if (distance > 80) {
      const newImage = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        src: images[imgIndex],
        rotation: Math.random() * 40 - 20, 
      };

      setTrail((prev) => [...prev, newImage].slice(-10));
      setLastPos({ x: e.clientX, y: e.clientY });
      setImgIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 800);
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <AnimatePresence>
        {trail.map((img) => (
          <motion.img
            key={img.id}
            src={img.src}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40, transition: { duration: 0.4 } }}
            style={{
              position: 'fixed',
              left: img.x - 50, 
              top: img.y - 50,
              width: '100px',
              height: '100px',
              rotate: `${img.rotation}deg`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};