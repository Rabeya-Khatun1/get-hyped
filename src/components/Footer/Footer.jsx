import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiFire, HiMail } from 'react-icons/hi';
import ExactHypeLogo from '../HypeLogo';
import CustomButton from '../CustomButton';
import Badge from './FooterBadge';
import FooterBottom from './FooterBottom';

const images = [
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg",
];

const Footer = () => {

    const [particles, setParticles] = useState([]);
    const containerRef = useRef(null);

    const lastPos = useRef({ x: 0, y: 0 });

    const getRandomOffset = () => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 120;

        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
        };
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 300) return;

        lastPos.current = { x, y };

        const offset = getRandomOffset();

        const newParticle = {
            id: crypto.randomUUID(),

            startX: x,
            startY: y,

            endX: x + offset.x,
            endY: y + offset.y,

            img: images[Math.floor(Math.random() * images.length)],
        };

        setParticles((prev) => [...prev, newParticle]);

        setTimeout(() => {
            setParticles((prev) =>
                prev.filter((p) => p.id !== newParticle.id)
            );
        }, 2000);
    };

    return (
        <footer className="bg-[#FAF4EC] px-[32px]">

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className=" relative overflow-hidden border-t-1 border-gray-300 pt-64 pb-32"
            >
                {particles.map((p) => (
                    <img
                        key={p.id}
                        src={p.img}
                        className="absolute w-56 h-56 pointer-events-none animate-fly"
                        style={{
                            left: p.startX,
                            top: p.startY,
                            "--tx": `${p.endX - p.startX}px`,
                            "--ty": `${p.endY - p.startY}px`,
                        }}
                    />
                ))}          

            <div className="flex flex-col items-center text-center px-6">
                <h2 className="text-[88px] text-[#161616] font-semibold leading-[1.5em]  tracking-[-0.05em] mb-[10px]">
                    Let's Get Hyped!
                </h2>

                <div className="relative flex z-10 items-center gap-[0.5em] cursor-pointer">

                    <CustomButton
                        text="Mail ons direct"
                        icon={HiMail}
                        className="
    bg-transparent border-[1.5px] border-black bg-[#efefef] text-black
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
     
            </div>
<FooterBottom></FooterBottom>
   <style jsx>{`
  .animate-fly {
    animation: fly 2s ease-out forwards;
  }

  @keyframes fly {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    20% {
      opacity: 1;
      transform: translate(
        calc(var(--tx) * 0.7),
        calc(var(--ty) * 0.7)
      );
    }

    60% {
      opacity: 1;
      transform: translate(
        calc(var(--tx) * 0.7),
        calc(var(--ty) * 0.7)
      );
    }
    100% {
      opacity: 0;
      transform: translate(var(--tx), var(--ty));
    }
  }
`}</style>
        </footer>
    );
};

export default Footer;
