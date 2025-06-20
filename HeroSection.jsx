import { motion } from "framer-motion";
import React from "react";
import tajVideo from './taj.mp4'; 


const HeroSection = () => {
  
  return (
    <div className="relative h-[90vh] w-full">
      
 <video
  className="absolute inset-0 w-full h-full object-cover z-0"
  src={tajVideo}
  autoPlay
  muted
  loop
  playsInline
></video>

      <motion.div
        className="text-center font-serif absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        <motion.h1
          id="hero-text"
          className="font-bold text-4xl p-5 m-2"
        >
          Explore Indian Heritage
        </motion.h1>
        <span
          id="sub"
          className="shadow-md font-light text-md text-center p-2 m-2"
        >
          Discover the timeless beauty of India's historical marvels <br />
        </span>
        <motion.button
          className="bg-blue-950 font-medium text-md m-1 p-2 rounded-xl shadow-md active:scale-95 hover:bg-blue-800 transition"
        >
          Explore
        </motion.button>
      </motion.div>

    </div>
  );
};

export default HeroSection;
