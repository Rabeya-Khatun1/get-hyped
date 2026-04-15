import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiFire, HiMail } from 'react-icons/hi';
import ExactHypeLogo from './HypeLogo';
import CustomButton from './CustomButton';

const Footer = () => {
  return (
    <footer className="bg-[#FAF4EC]">
      <div className="flex flex-col items-center text-center px-6">
        <h2 className="text-[88px] text-[#161616] font-semibold leading-[1.5em]  tracking-[-0.05em] mb-[10px]">
          Let's Get Hyped!
        </h2>

        <div className="relative flex z-10 items-center gap-[0.5em] cursor-pointer">

          <CustomButton
            text="Mail ons direct"
            icon={HiMail}
            className="
    bg-transparent border-[1.5px] border-black hover:bg-[#efefef] text-black
    [&>div]:bg-black
  "
            iconColorClass="text-white"
          />
          <CustomButton
            text="Get Results"
            icon={HiFire}
            className="bg-[#FF5F1F] text-white border-none hover:bg-[#e0521a]"
            iconBgClass="bg-white"
            iconColorClass="text-[#FF5F1F]"
          />

        </div>
      </div>

      <div className="relative w-full bg-[#FAF4EC] overflow-hidden flex items-end py-5 px-[32px]">
        <div
          className="relative w-full h-[225px] flex items-start justify-start"
        >
          <div
            className="absolute inset-0 bg-[#EBE7DF]"
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '30px',

              transform: 'skewY(-7deg)',
              transformOrigin: 'top right',
              width: '100%',
              // height: '140%', 
              bottom: '-100px'
            }}
          ></div>
          <div className="relative pt-15 w-full ">
            <div className="flex justify-start items-center px-2">
              <ExactHypeLogo width={300} height={250} />

            </div>

          </div>
          <div className="relative ">

            <div className="relative z-10 px-6 md:px-16 py-10">
              <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pt-8">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2 pt-4">
                    {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                      <button key={item} className="bg-[#F5F5F5] px-3 py-2 rounded-[10px] font-semibold text-xs text-[#1a1a1a] hover:bg-black hover:text-white transition-all">
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-[#1a1a1a] text-[16px]">Follow us</span>
                    <div className="flex gap-2">
                      {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
                        <a key={i} href="#" className="bg-[#F5F5F5] p-2 rounded-full hover:bg-black hover:text-white transition-all text-black">
                          <Icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-between items-center text-[10px] text-gray-600 mt-4'>
                    <p>@ 2025 Get Hyped</p>
                    <p>@ Design by Dylan</p>
                  </div>
                </div>


                <div className="flex flex-col gap-3">
                  <div>
                    <h4 className="text-black text-sm font-semibold">Contact</h4>
                    <p className="text-[#1a1a1a] leading-[1.25em] text-xs">info@gethyped.nl</p>
                    <p className="text-[#1a1a1a] leading-tight text-xs">+31 6 1533 7496</p>
                  </div>
                  <div>
                    <h4 className="text-black text-sm font-semibold">Adres</h4>
                    <p className="text-[#1a1a1a] leading-tight text-xs whitespace-nowrap">
                      Beltrumsestraat 6,<br />
                      7141 AL Groenlo
                    </p>
                    <p className='text-[9px] text-[#A1A1A1] mt-6'>Privacyvoorwarden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;





