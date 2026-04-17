import React from 'react';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import ExactHypeLogo from '../HypeLogo';
import Badge from './FooterBadge';
import { motion } from 'framer-motion';

const FooterBottom = () => {
    return (
        <>
            {/* ================= DESKTOP VERSION ================= */}
            <div className="hidden md:block">
                <div className="md:relative w-full h-0 z-20">
                    <div className="absolute right-[-64px] md:right-[calc(10%-32px)] top-[-40px]">
                        <Badge />
                    </div>
                </div>

                <div className="relative w-full bg-[#FAF4EC] overflow-hidden flex items-end py-5">
                    <div className="relative w-full h-[225px] flex items-start justify-start">
                        <div
                            className="absolute inset-0 bg-[#e2dacb]"
                            style={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '30px',
                                transform: 'skewY(-7deg)',
                                transformOrigin: 'top right',
                                width: '100%',
                                bottom: '-100px'
                            }}
                        ></div>

                        <div className="relative pt-15 w-full">
                            <div className="md:flex justify-start items-center px-2">
                                <ExactHypeLogo width={300} height={250} />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="md:relative z-10 px-6 md:px-16 py-10">
                                <div className="md:max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:gap-12 md:pt-12">

                                    {/* LEFT */}
                                    <div className="flex md:flex-col gap-4">
                                        <div className="md:flex items-center gap-2 text-[#000] rounded-[10px] md:max-w-[991px] px-2 py-1">
                                            {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                                                <motion.a
                                                    key={item}
                                                    href={`#${item.toLowerCase()}`}
                                                    whileHover={{ y: [0, -3, 0], transition: { duration: 0.4 } }}
                                                    animate={{ y: 0 }}
                                                    whileTap={{ y: 2 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 55 }}
                                                    className="relative group px-2 py-2 text-sm font-semibold overflow-hidden bg-white rounded-[8px]"
                                                >
                                                    <span className="relative z-10 block overflow-hidden md:h-[20px]">
                                                        <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                                                            {item}
                                                        </span>
                                                        <span className="block absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full text-white">
                                                            {item}
                                                        </span>
                                                    </span>

                                                    <span className="absolute inset-0 pointer-events-none">
                                                        <span className="absolute inset-0 bg-[#fa5424] translate-y-full transition-transform duration-300 group-hover:translate-y-0 delay-75"></span>
                                                        <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0 delay-0 group-hover:delay-75"></span>
                                                    </span>
                                                </motion.a>
                                            ))}
                                        </div>

                                 <div className="flex gap-2">
    <span className="font-semibold text-[#1a1a1a] text-[16px] ml-2">Follow us</span>
    
    <div className="flex gap-2">
        {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
            <a
                key={i}
                href="#"
                className="
                    bg-[#F5F5F5] p-2 rounded-full text-black
                    hover:bg-white hover:text-black
                    transition-all duration-300
                    hover:scale-120
                "
            >
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

                                    {/* RIGHT */}
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <h4 className="text-sm font-semibold">Contact</h4>
                                            <p className="text-xs">info@gethyped.nl</p>
                                            <p className="text-xs">+31 6 1533 7496</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold">Adres</h4>
                                            <p className="text-xs">
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
            </div>

            {/* ================= MOBILE VERSION ================= */}
            <div className="block md:hidden">
                <div className="relative w-full h-0 z-20">
                    <div className="hidden md:absolute right-4 top-[-40px]">
                        <Badge />
                    </div>
                </div>

                <div className="relative w-full bg-[#FAF4EC] overflow-hidden flex items-end pt-5 md:pt-10 pb-5 ">
                    <div
                        className="absolute inset-0 bg-[#e2dacb]"
                        style={{
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '30px',
                            transform: 'skewY(-7deg)',
                            transformOrigin: 'top right',
                            width: '100%',
                            bottom: '-100px'
                        }}
                    ></div>

                    <div className="relative z-10 w-full px-6 flex flex-col items-center">

                        <div className="w-full flex items-start justify-center mb-4">
                            <div className="scale-132 origin-center">
                                <ExactHypeLogo width={300} height={150} />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6">

                            <button className="bg-[#FF5F1F] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2">
                                Get Hyped! Neem contact op
                                <span className="bg-white text-[#FF5F1F] rounded-xl p-1">🔥</span>
                            </button>

                            <div className="flex flex-wrap justify-center gap-2">
                                {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        whileHover={{ y: -3 }}
                                        className="px-4 py-2 text-sm font-bold bg-white rounded-[10px] shadow-sm text-black"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>

                        <div className="flex gap-3">
    {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
        <a
            key={i}
            href="#"
            className="
                bg-white p-3 rounded-full text-black shadow-sm
                hover:bg-white hover:text-black
                transition-transform duration-300 ease-out
                hover:scale-120 active:scale-95
            "
        >
            <Icon size={18} />
        </a>
    ))}
</div>

                            <div className="text-center">
                                <p className="text-sm font-semibold">info@gethyped.nl</p>
                                <p className="text-sm font-semibold">+31 6 1533 7496</p>

                                <p className="mt-3 text-sm font-semibold">
                                    Beltrumsestraat 6,<br />
                                    7141 AL Groenlo
                                </p>

                                <p className='text-[10px] text-gray-500 mt-3'>Privacyvoorwaarden</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center mt-10 border-t pt-4 text-[11px] text-gray-600 gap-2">
                            <p>© 2025 Get Hyped</p>
                            <p>© Design by Dylan</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterBottom;