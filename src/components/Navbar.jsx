// import React, { useState } from 'react';
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
// import { HiFire, HiOutlineMenu, HiX } from 'react-icons/hi';
// import Logo from './HypeLogo';
// import CustomButton from './CustomButton';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious();
//     if (latest > previous && latest > 150) {
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//   });

//   const navLinks = ['Expertises', 'Work', 'About', 'Contact'];

//   return (
//     <motion.nav 
//       variants={{
//         visible: { y: 0 },
//         hidden: { y: "-100%" },
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       className="fixed top-0 left-0 right-0 flex items-center justify-between px-2 md:px-6 md:px-[1.6em] h-[5.7em] z-50 transition-all duration-300"
//     >
//       <div className="flex-shrink-0 cursor-pointer relative z-[60]">
//         <Logo width={130} height={53} />
//       </div>
//       <div className="hidden md:flex items-center gap-0.5 bg-white text-[#000] rounded-[10px] max-w-[991px] px-2 py-1">
//         {navLinks.map((item) => (
//           <motion.a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             whileHover={{ y: [0, -3, 0], transition: { duration: 0.4 } }}
//             className="relative group px-3 py-2 text-sm font-semibold overflow-hidden rounded-[8px]"
//           >
//             <span className="relative z-10 block overflow-hidden h-[20px]">
//               <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
//               <span className="block absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full text-white">{item}</span>
//             </span>
//             <span className="absolute inset-0 pointer-events-none">
//               <span className="absolute inset-0 bg-[#fa5424] translate-y-full transition-transform duration-300 group-hover:translate-y-0 delay-75 group-hover:delay-0"></span>
//               <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0 delay-0 group-hover:delay-75"></span>
//             </span>
//           </motion.a>
//         ))}
//       </div>

//       <div className="flex items-center gap-4 relative z-[60]">
//         <CustomButton
//           text="Get Results"
//           icon={HiFire}
//           className="hidden sm:flex bg-[#fcb8fa] text-gray-900 border-none" 
//           iconColorClass="text-red-500"
//         />
//         <button 
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-4xl text-black focus:outline-none"
//         >
//           {isOpen ? <HiX className="text-gray-500" /> : <HiOutlineMenu />}
//         </button>
//       </div>
//       <AnimatePresence>
//   {isOpen && (
//     <motion.div
//       initial={{ opacity: 0, y: "-100%" }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: "-100%" }}
//       transition={{ 
//         type: "spring",    // Spring physics use kora hoyeche
//         damping: 10,       // Joto kom hobe, bounce toto beshi hobe
//         stiffness: 100,    // Menu-ta koto speed e niche nambe
//         duration: 0.6 
//       }}
//       className="fixed inset-0 w-full h-screen bg-[#fcb8fa] flex flex-col items-center justify-center gap-6 md:hidden z-[55] px-6"
//     >
//       {/* Links and Button code stays the same */}
//       <div className="flex flex-col items-center gap-2">
//         {navLinks.map((item, index) => (
//           <motion.a 
//             key={item} 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 + (0.1 * index) }} // Menu namar por link-gulo ashar jonno ektu delay
//             href={`#${item.toLowerCase()}`}
//             onClick={() => setIsOpen(false)}
//             className="text-4xl font-bold text-black bg-white px-8 py-3 rounded-2xl w-full text-center shadow-sm"
//           >
//             {item}
//           </motion.a>
//         ))}
//       </div>

//       <div className="mt-8">
//           <CustomButton
//             text="Get Results"
//             icon={HiFire}
//             className="bg-black text-white px-6 py-4" 
//             iconColorClass="text-orange-500"
//           />
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       {/* <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 w-full h-screen bg-[#fcb8fa] flex flex-col items-center justify-center gap-6 md:hidden z-[55] px-6"
//           >
//             <div className="flex flex-col items-center gap-2">
//               {navLinks.map((item, index) => (
//                 <motion.a 
//                   key={item} 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index }}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="text-4xl font-bold text-black bg-white px-8 py-3 rounded-2xl w-full text-center shadow-sm"
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </div>

//             <div className="mt-8">
//                <CustomButton
//                   text="Get Results"
//                   icon={HiFire}
//                   className="bg-black text-white px-6 py-4" 
//                   iconColorClass="text-orange-500"
//                 />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence> */}
//     </motion.nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { HiFire, HiOutlineX, HiOutlineMenuAlt4 } from 'react-icons/hi';
import Logo from './HypeLogo';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = ['Expertises', 'Work', 'About', 'Contact'];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-2 md:px-6 h-[5.7em] z-50 transition-all duration-300"
    >
      <div className="flex-shrink-0 cursor-pointer relative z-[60]">
        <Logo width={130} height={53} />
      </div>
      <div className="hidden md:flex items-center gap-0.5 bg-white text-[#000] rounded-[10px] px-1 py-1">
        {navLinks.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="relative group px-3 py-2 text-sm font-semibold overflow-hidden rounded-[8px]"
          >
            <span className="relative z-10 block overflow-hidden h-[20px]">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full group-hover:rotate-[-3deg] origin-left">
                {item}
              </span>
              <span className="block absolute top-full left-0 w-full text-white transition-transform duration-500 group-hover:-translate-y-full group-hover:rotate-[1deg] origin-right">
                {item}
              </span>
            </span>
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute inset-0 bg-[#fa5424] translate-y-full translate-x-[10%] rotate-[-15deg] origin-bottom-right transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 delay-75 group-hover:delay-0"></span>

              <span className="absolute inset-0 bg-black translate-y-full translate-x-[10%] rotate-[-15deg] origin-bottom-right transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 delay-0 group-hover:delay-75"></span>
            </span>
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-4 relative z-[60]">
        <CustomButton
          text="Get Results"
          icon={HiFire}
          className="hidden sm:flex bg-[#fcb8fa] text-gray-900 border-none"
          iconColorClass="text-red-500"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none transition-all duration-300 active:scale-90"
        >
          {isOpen ? (
            <HiOutlineX
              size={35}
              strokeWidth={1.5}
              className="text-gray-800 bg-white rounded-xl mr-2.5 p-1"
            />
          ) : (
            <HiOutlineMenuAlt4
              size={35}
              strokeWidth={1.5}
              className="text-black bg-[#fcb8fa] rounded-xl mr-2.5 p-1"
            />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
              duration: 0.6
            }}
            className="fixed inset-0 h-[90vh] bg-[#fcb8fa] flex flex-col items-center justify-center gap-2 rounded-xl md:hidden m-3"
          >
            <div className="flex flex-col items-center gap-2 w-full max-w-[300px]">

              {navLinks.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.3 + (index * 0.1)
                  }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="relative group text-center text-xl font-bold text-black bg-white px-4 py-3 rounded-xl overflow-hidden shadow-sm"
                >
                  <span className="relative z-10 block overflow-hidden h-[28px]">
                    <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:rotate-[-2deg] scale-[20px] group-hover:scale-[25px] origin-left">
                      {item}
                    </span>
                    <span className="block absolute top-full left-0 w-full text-white transition-all duration-500 group-hover:-translate-y-full group-hover:rotate-[1deg] origin-right">
                      {item}
                    </span>
                  </span>
                  <span className="absolute inset-0 pointer-events-none">
                    <span className="absolute inset-0 bg-[#fa5424] translate-y-full translate-x-[15%] rotate-[-20deg] origin-bottom-right transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 delay-75 group-hover:delay-0"></span>
                    <span className="absolute inset-0 bg-black translate-y-full translate-x-[15%] rotate-[-20deg] origin-bottom-right transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 delay-0 group-hover:delay-75"></span>
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <CustomButton
                text="Get Results"
                icon={HiFire}
                className="bg-[#1d1d1d] text-white px-1 py-1 text-lg"
                iconColorClass="text-orange-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;