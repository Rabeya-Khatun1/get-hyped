import React from 'react';
import { motion } from 'framer-motion';
import { HiFire } from 'react-icons/hi'; 
import ExactHypeLogo from './HypeLogo';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-[1.25em] py-4 md:py-[1.25em] ">    
      
      <div className="flex-shrink-0 cursor-pointer">
        <ExactHypeLogo />
      </div>
      <div className="hidden md:flex items-center bg-white  rounded-2xl max-w-[991px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-gray-50">
        {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -1 }}
            className="px-3 py-2 text-[15px] font-bold text-[#000] hover:text-gray-500 transition-all duration-200"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 bg-[#FFB8FF] hover:bg-[#f7a5f7] pl-6 pr-1.5 py-1.5 rounded-full font-bold text-gray-900 transition-all shadow-sm"
      >
        <span className="text-[14px] tracking-tight">Get Results</span>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
          <HiFire className="text-[#FF5F1F] text-lg" />
        </div>
      </motion.button>
      
    </nav>
  );
};

export default Navbar;