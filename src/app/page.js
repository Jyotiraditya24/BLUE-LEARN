"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./_components/Navbar";

const Home = () => {
  const [positions, setPositions] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveImages = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPositions((prev) => [prev[2], prev[0], prev[1]]);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [positions]);

  const variants = {
    enter: (i) => ({
      x: i === 2 ? 500 : i === 0 ? -500 : 0,
      opacity: 0,
      scale: 0.5,
      zIndex: i === 1 ? 1 : 0,
    }),
    center: (i) => ({
      x: i * 250,
      opacity: 1,
      scale: i === 1 ? 1.2 : 1,
      zIndex: i === 1 ? 2 : 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      },
    }),
    exit: (i) => ({
      x: i === 0 ? -500 : i === 2 ? 500 : 0,
      opacity: 0,
      scale: 0.5,
      zIndex: i === 1 ? 1 : 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      },
    }),
  };

  return (
    <main className="max-w-[1440px] mx-auto px-16 min-h-screen mt-12">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col justify-center space-y-8">
          <motion.div
            className="font-bebas font-bold tracking-wide text-white text-[70px] leading-[84px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>INDIA'S 1ST</h1>
            <h1>E-COMMERCE SOCIAL MEDIA WHERE YOU</h1>
            <h1>CAN SHOP</h1>
          </motion.div>
          <div className="flex justify-center items-center h-80 relative">
            <AnimatePresence initial={false}>
              {[0, 1, 2].map((i) => (
                <motion.img
                  key={positions[i]}
                  src={`./img-${positions[i] + 1}.png`}
                  alt={`Image ${positions[i] + 1}`}
                  custom={i}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-1/3 h-auto rounded-lg shadow-lg absolute"
                  style={{ originX: 0.5, originY: 0.5 }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <footer className="flex justify-center mt-12">
        <motion.button
          onClick={moveImages}
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
          whileTap={{ scale: 0.95 }}
        >
          Move Images
        </motion.button>
      </footer>
    </main>
  );
};

export default Home;
