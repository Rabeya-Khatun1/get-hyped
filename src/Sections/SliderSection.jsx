import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../components/CustomButton";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { id: "01", title: "Social strategy", desc: "Slimme strategie. Sterke start.",accent: "#fa5424", bgColor: "bg-white", textColor: "text-black", video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4" },
  { id: "02", title: "Content creation", desc: "Content die opvalt en raakt. We maken content die blijft hangen.", bgColor: "bg-[#fcb8fa]", textColor: "text-black", video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4" },
  { id: "03", title: "Activation", desc: "Zichtbaar waar en wanneer het telt. De juiste content verdient het om gezien te worden.", bgColor: "bg-[#33c791]", textColor: "text-black", video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4" },
  { id: "04", title: "Data", desc: "Inzichten die impact maken. We duiken in de cijfers om te snappen wat echt werkt.", bgColor: "bg-[#0d8dff]", textColor: "text-black", video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4" },
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
          opacity: 1,
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
            className="card-item absolute inset-0 flex items-center justify-center p-4 md:p-10"
            style={{ zIndex: index }}
          >
            <div className={`relative w-full max-w-[2600px] h-[440px] md:h-[540px] rounded-[25px] flex flex-col md:flex-row items-center justify-between p-8 md:p-16 ${s.bgColor} ${s.textColor}`}>
              
              {/* Expertise Label */}
              <div className="absolute top-10 left-10">
                <span className={`px-3 py-2 ${index === 0 ? "bg-[#e2dacb]" : "bg-white"} rounded-md text-[] font-bold opacity-100`}>Expertise</span>
              </div>
              <div className="absolute top-5 right-12 text-[90px] font-bold opacity-10 leading-none z-0">
                {s.id}
              </div>

              <div className="w-full md:w-1/2 z-10">
                <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">{s.title}</h3>
                <p className="text-lg md:text-xl font-medium mb-4">{s.desc}</p>
<CustomButton
  key={s.id}
  icon={BiRightArrowAlt}
  text={`Meer over ${s.title.toLowerCase()}`}
  variant={index === 0 ? "red" : "white"}
/>
              </div>

              <div className="w-full  flex justify-end z-10">
                <video 
                  src={s.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-[300px] h-[400px] object-cover rounded-[30px] mt-16 border-[10px] border-white shadow-2xl rotate-3" 
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
