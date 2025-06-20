import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='bg-[rgb(153,68,35)] text-white py-10'>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {[...Array(4)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {
              idx === 0 ? (
                <>
                  <h3 className="text-lg font-bold mb-2">Incredible India Explorer</h3>
                  <p className="text-gray-300">
                    Your companion to discover India’s rich cultural legacy and timeless architecture. Plan your heritage journey today!
                  </p>
                </>
              ) : idx === 1 ? (
                <>
                  <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                    <li><a href="#" className="hover:text-yellow-300">About</a></li>
                    <li><a href="#" className="hover:text-yellow-300">Sites</a></li>
                    <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
                  </ul>
                </>
              ) : idx === 2 ? (
                <>
                  <h3 className="text-lg font-semibold mb-2">Resources</h3>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-yellow-300">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-yellow-300">Heritage Travel Tips</a></li>
                    <li><a href="#" className="hover:text-yellow-300">Cultural Events</a></li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                  <p>Email: <a href="mailto:info@indiaexplorer.com" className="hover:text-yellow-300">info@indiaexplorer.com</a></p>
                  <p>Phone: +91-12345-67890</p>
                  <div className="flex space-x-4 mt-3">
                    {['facebook', 'instagram', 'twitter'].map((icon, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className="transition"
                      >
                      </motion.a>
                    ))}
                  </div>
                </>
              )
            }
          </motion.div>
        ))}

      </div>

      <motion.hr 
        className="my-6 border-orange-200" 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="text-center text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © 2025 Incredible India Explorer. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Footer;
