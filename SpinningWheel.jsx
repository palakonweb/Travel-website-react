import React from "react";
import { motion } from "framer-motion";
import wheelImg from "./Wheel.png";
const SpinningWheel = () => {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.img
        src={wheelImg}
        alt="Konark Wheel"
        className="w-100 h-100 object-cover rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
    </div>
  );
};

export default SpinningWheel;
