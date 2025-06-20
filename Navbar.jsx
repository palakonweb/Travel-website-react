import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-black shadow-lg"
    >
      <div className="bg-[rgb(164,79,45)] h-20 px-8 md:px-16 flex justify-between items-center text-white">
      
        <Link to="/" className="text-xl font-bold tracking-wide font-serif flex items-center gap-2">
          <span role="img" aria-label="map">🧭</span> Incredible India
        </Link>

       
        <div className="flex gap-8 text-sm md:text-base font-serif">
          {["About Us", "Contact Us", "Home"].map((label, index) => {
            const route = label.toLowerCase().replace(" ", "");
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  to={`/${route === "home" ? "" : route}`}
                  className="hover:text-amber-300 transition duration-300"
                >
                  {label}
                </Link>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-amber-300 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
