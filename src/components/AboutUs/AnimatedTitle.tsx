
import React from 'react';
import { motion } from "framer-motion";

const AnimatedTitle = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="mt-5 text-4xl font-bold font-clash text-[#0e517d] mb-2">
        About Us
        {/* Animated scribble underline */}
        <div className="relative flex justify-center mt-2">
          <motion.svg 
            className="w-32 h-4" 
            viewBox="0 0 100 10" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ 
              y: [0, -2, 0, 2, 0],
              scaleX: [1, 1.03, 1, 0.97, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <motion.path 
              d="M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5" 
              fill="none" 
              stroke="#0e517d" 
              strokeWidth="2"
              animate={{
                d: [
                  "M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5",
                  "M0,5 C10,8 15,2 25,5 C35,8 40,2 50,5 C60,8 65,2 75,5 C85,8 90,2 100,5",
                  "M0,5 C10,2 15,8 25,5 C35,2 40,8 50,5 C60,2 65,8 75,5 C85,2 90,8 100,5"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </div>
      </h2>
      <p className="font-apercu text-lg text-gray-600 max-w-md mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default AnimatedTitle;
