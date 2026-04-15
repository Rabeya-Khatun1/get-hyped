import React from 'react';
import { motion } from 'framer-motion';
import { HiFire } from 'react-icons/hi';
import Logo from './HypeLogo';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-[1.6em] h-[5.7em] ">

      <div className="flex-shrink-0 cursor-pointer">
        <Logo width={130}

          height={53}></Logo>
      </div>
      <div className="hidden md:flex items-center bg-white text-[#000]  rounded-[10px] max-w-[991px] px-2 py-[10px]">
        {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -1 }}
            className="px-3 text-sm font-semibold hover:text-gray-500 transition-all duration-200"
          >
            {item}
          </motion.a>
        ))}
      </div>
    <CustomButton
  text="Get Results"
  icon={HiFire}
  onClick={() => console.log("clicked")}
  className="bg-[#fcb8fa] hover:bg-[#f7a5f7] text-gray-900"
  iconColorClass="text-amber-500"
/>

    </nav>
  );
};

export default Navbar;