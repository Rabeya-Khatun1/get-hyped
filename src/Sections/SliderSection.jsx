import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../components/CustomButton";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);


const slides = [
  { id: "01", idColor:"#e2dacb", title: "Social strategy", subTitle: "Slimme strategie. Sterke start.", desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.", accent: "#fa5424", bgColor: "bg-white", textColor: "text-black", video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4" },
  { id: "02", idColor:"#fcb8fa", title: "Content creation", subTitle: "Content die opvalt en raakt.", desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.", bgColor: "bg-[#fcb8fa]", textColor: "text-black", video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4" },
  { id: "03", idColor:"#33c791", title: "Activation", subTitle: "Zichtbaar waar en wanneer het telt.", desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.", bgColor: "bg-[#33c791]", textColor: "text-black", video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4" },
  { id: "04", idColor:"#0d8dff", title: "Data", subTitle: "Inzichten die impact maken.", desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.", bgColor: "bg-[#0d8dff]", textColor: "text-black", video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4" },
];

const StackSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card-item");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3500",
        scrub: 0.5,
        pin: true,
      },
    });

    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, {
          yPercent: 100,
          scale: 0.8,
          opacity: 0
        });
      }
      if (index < cards.length - 1) {
        tl.to(cards[index], {
          scale: 0.85,
          yPercent: -10,
          opacity: 0.5,
          duration: 1,
          ease: "power2.inOut"
        }, index)

          .to(cards[index + 1], {
            yPercent: 0,
            scale: 1,
            opacity: 100,
            duration: 1,
            ease: "power2.inOut"
          }, index + 0.1);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className="card-item absolute inset-0 flex items-center justify-center p-4 md:p-8 "
            style={{ zIndex: index }}
          >
            <div className={`relative w-full rounded-[25px] flex flex-col md:flex-row items-center justify-between px-8 md:px-10 py-4 md:py-14 ${s.bgColor} ${s.textColor}`}>

              {/* Expertise Label */}
              <div className="absolute top-10 left-10">
                <span className={`px-[0.75em] py-2 ${index === 0 ? "bg-[#e2dacb]" : "bg-white"} rounded-[0.5em] text-[] font-bold h-[2.5em]`}>Expertise</span>
              </div>
              <div className={`absolute top-5 right-12 text-[90px] text-[${s.idColor}] font-bold ${index === 0 ? "opacity-100" : "opacity-10"}`}>
                {s.id}
              </div>

              <div className=" z-10">
                <h3 className="text-5xl md:text-[80px] text-[#272727] font-bold pb-28 tracking-tight whitespace-nowrap">{s.title}</h3>
                <h3 className="text-sm text-[#252525] md:text-2xl font-bold my-4 leading-[20px] tracking-[0.03em] whitespace-nowrap">{s.subTitle}</h3>
                <p className="text-xs text-[#444444] md:text-[16px] font-semibold mb-4 md:w-xs leading-[1.3em] tracking-[0.03">{s.desc}</p>
                <CustomButton
                  key={s.id}
                  icon={BiRightArrowAlt}
                  text={`Meer over ${s.title.toLowerCase()}`}
                  variant={index === 0 ? "red" : "white"}
                  className={`mt-4 ${index === 0 ? "text-white" : "text-[#303030]"}`}
                />
              </div>

              <div className="w-full  flex justify-end z-10">
                <video
                  src={s.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[280px] h-[380px] object-cover rounded-[30px] mt-16 border-[8px] border-white shadow-2xl rotate-2"
                  style={{ borderColor: s.accent }}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSlider;
