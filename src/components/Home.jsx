import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Footer from './Footer';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');

  // Typing effect for the name
  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prev) => prev + name[ref.current - 1]);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="area relative z-0 bg-black w-screen h-screen overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "30%" }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-pink-500 rounded-full"
          animate={{
            x: [0, -150, 150, 0],
            y: [0, 150, -150, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", left: "70%" }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -200, 200, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "80%", left: "40%" }}
        />
      </div>

      {/* Hero Section */}
      <motion.div
        className="hero relative h-[calc(100vh)] flex justify-center items-center text-white"
        id="hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="pt-4 h-36 backdrop-blur-sm rounded-3xl text-center"
          variants={textVariants}
        >
          <motion.h1
            className="text-6xl sm:text-7xl font-extrabold mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient"
            whileHover={{ scale: 1.1 }} // Subtle hover effect
          >
            Hi, I'm &nbsp;
            <span className="font-extrabold">{text}</span>
          </motion.h1>
          <motion.p
            className="mt-3 text-xl"
            variants={textVariants}
            whileHover={{ scale: 1.05, color: "#00FF7F" }} // Subtle hover effect
          >
            Full-stack developer and AI expert crafting intelligent, cutting-edge solutions.
          </motion.p>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;