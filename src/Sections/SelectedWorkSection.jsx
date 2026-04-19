import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CustomButton from '../components/CustomButton';
import { BiRightArrowAlt } from "react-icons/bi";
import VideoCard from '../components/VideoCard';

const SelectedWorkSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] 
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const yLeft = useTransform(smoothProgress, [0, 1], [0, -100]);   
    const yCenter = useTransform(smoothProgress, [0, 1], [0, -200]); 
    const yRight = useTransform(smoothProgress, [0, 1], [0, -150]);  

    return (
        <div ref={containerRef} className="w-full bg-[#f9f7f2] overflow-hidden">
            <div className="max-w-[48em] flex flex-col items-start justify-start w-full pt-24 px-28">
                <h1 className='text-[90px] leading-[80px] font-bold text-[#222222] tracking-[-0.05em] mb-2'>
                    Content <br/> dat scoort.
                </h1>
                <p className='text-[1.5em] leading-[1.3em] font-semibold text-[#2c2c2c] tracking-[-0.03em] my-4'>
                    Wij vertellen jouw verhaal. Op <br/> een manier die écht past bij jouw <br/> 
                    doelgroep. Met creatieve content <br/> die werkt en het verschil maakt.
                </p>
                <CustomButton
                    icon={BiRightArrowAlt}
                    text={`Bekijk als ons werk`}
                    variant="white"
                    className="mt-4 text-[#303030] border"
                />
            </div>
            <div className="relative h-[450px] md:h-[550px] mx-8 ">
                <motion.div 
                    style={{ y: yLeft }}
                    className="absolute md:left-[50px] bottom-[0%] z-10"
                >
                    <VideoCard 
                        videoSrc="https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
                        placeholderImg="https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif"
                        accentColor="#fa5424"
                        title={"Van nul naar vol,\nbinnen 3 weken"}
                        tag="Bullit"
                    />
                </motion.div>
                <motion.div 
                    style={{ y: yCenter, x: "-0%" }}
                    className="absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-50%] z-10 "
                >
                    <VideoCard 
                        videoSrc="https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
                        placeholderImg="https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif"
                        accentColor="#0d8dff"
                        title={"Zacht in smaak,\nsterk in beeld"}
                        tag="Roasta"
                    />
                </motion.div>
                <motion.div 
                    style={{ y: yRight }}
                    className="absolute md:right-[50px] bottom-[23%] z-10"
                >
                    <VideoCard 
                        videoSrc="https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
                        placeholderImg="https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif"
                        accentColor="#33c791"
                        title={"Content die écht\nsmaakt (en raakt)"}
                        tag="Loco"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default SelectedWorkSection;