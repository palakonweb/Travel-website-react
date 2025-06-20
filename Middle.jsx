import React from 'react';
import { motion } from 'framer-motion';
import SpinningWheel from './SpinningWheel';
import transparentMap from './transparentMap.png';

const Middle = () => {
  return (
    <div className="relative min-h-screen bg-orange-50 overflow-hidden flex items-center justify-start">
      
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-black z-0 min-w-screen  border-b-5 border-amber-800"></div>

      
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 flex items-center gap-8 p-6 rounded-lg min-w-screen"
        style={{
          boxShadow: '10px 0 15px -3px rgba(0, 0, 0, 0.4)',
        }}
      >
        
        <div className="relative flex-shrink-0">
         
          <div className="relative z-10">
            <SpinningWheel />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <h1 id="heading2" className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif text-left">
            Why Visit Indian Heritage Sites?
          </h1>

          <p id="para" className="text-white leading-relaxed text-md text-left font-light">
            India's rich cultural heritage offers a window into its glorious past, diverse traditions, and architectural brilliance.
            Visiting Indian heritage sites like the Taj Mahal, Hampi, Qutub Minar, and Konark Sun Temple allows travelers to experience
            the grandeur of ancient civilizations, artistic achievements, and spiritual depth that define the country. These sites not only reflect
            India’s historical significance but also connect us with its vibrant cultural roots, making them perfect destinations for learning,
            exploration, and inspiration. Exploring heritage sites fosters respect for tradition while offering unforgettable travel experiences.
          </p>

          <ul className="list-disc list-inside text-white nt-light mt-4 space-y-1">
            <li>Taj Mahal, Agra</li>
            <li>Hampi, Karnataka</li>
            <li>Qutub Minar, Delhi</li>
            <li>Konark Sun Temple, Odisha</li>
            <li>Ajanta & Ellora Caves, Maharashtra</li>
          </ul>

          <blockquote className="italic text-sm text-white mt-6 border-l-4 border-orange-400 pl-4">
            "A nation's culture resides in the hearts and in the soul of its people." – Mahatma Gandhi
          </blockquote>

          <button className="mt-6 px-6 py-2 bg-orange-900 hover:bg-orange-800 text-white rounded shadow transition duration-300">
            Explore More Sites
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Middle;
