import { motion } from 'motion/react';
import React from 'react';

const SiteCard = ({image, title, description}) => {

  return (

 
  <motion.div
      className=" w-50 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm mr-10"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="h-36 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold font-serif mb-2 text-orange-800">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <button className="px-4 py-2 bg-orange-700 text-white rounded-full hover:bg-orange-600 transition">Know More</button>
      </div>
    </motion.div>

  );
};

export default SiteCard;
