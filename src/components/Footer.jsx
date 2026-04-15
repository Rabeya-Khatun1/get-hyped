import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiFire, HiMail } from 'react-icons/hi';
import ExactHypeLogo from './HypeLogo'; 

const Footer = () => {
  return (
    <footer className="bg-[#FAF4EC]">
      <div className="flex flex-col items-center text-center px-6">
        <h2 className=" md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
         Let's Get Hyped!
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Mail Button */}
          <button className="flex items-center gap-4 border-[1.5px] border-black rounded-2xl pl-6 pr-1.5 py-1 font-bold text-[15px] bg-transparent hover:bg-black hover:text-white transition-all group">
            Mail ons direct
            <div className="bg-[#1a1a1a] text-white p-2.5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              <HiMail size={20} />
            </div>
          </button>

          {/* Get Results Button */}
          <button className="flex items-center gap-4 bg-[#FF5F1F] text-white rounded-2xl pl-6 pr-1.5 py-1 font-bold text-[15px] shadow-sm">
            Get Results
            <div className="bg-white text-[#FF5F1F] p-2.5 rounded-full">
              <HiFire size={20} />
            </div>
          </button>
        </div>
      </div>
<div className="relative ">
  <div 
    className="absolute inset-0 bg-white" 
    style={{ 
      // ডান পাশ উপরে তোলার জন্য skewY
      transform: 'skewY(-5deg)', 
      transformOrigin: 'top right',
      // বাম পাশের উপরের কোণা গোল করার জন্য
      borderTopLeftRadius: '100px', 
      // নিচের অংশ যাতে স্ক্রিনের বাইরে না যায়
      height: '115%', 
      top: '0'
    }}
  ></div>
  <div className="relative z-10 px-6 md:px-16 py-10">
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pt-10">
      <div className="flex flex-col gap-12">
        <div className="scale-[1.8] origin-left">
          <ExactHypeLogo />
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-black text-[#1a1a1a] text-[16px] uppercase tracking-widest">Follow us</span>
          <div className="flex gap-3">
            {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="bg-[#F5F5F5] p-4 rounded-full hover:bg-black hover:text-white transition-all text-black">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 w-full md:w-auto md:mt-10">
        {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
          <button key={item} className="bg-[#F5F5F5] px-8 py-4 rounded-2xl font-black text-[#1a1a1a] hover:bg-black hover:text-white transition-all text-[14px]">
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-10 md:mt-10">
        <div>
          <h4 className="text-[#A1A1A1] font-black uppercase tracking-[0.2em] text-[11px] mb-4">Contact</h4>
          <p className="font-black text-[18px]">info@gethyped.nl</p>
          <p className="font-black text-[18px]">+31 6 1533 7496</p>
        </div>
        <div>
          <h4 className="text-[#A1A1A1] font-black uppercase tracking-[0.2em] text-[11px] mb-4">Adres</h4>
          <p className="font-black text-[#1a1a1a] leading-tight text-[18px]">
            Beltrumsestraat 6,<br />
            7141 AL Groenlo
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;