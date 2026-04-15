import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "10M+",
    subtitle: "Organische views",
    desc: "Groei door slimme content",
    bg: "bg-[#0d8dff]", 
    rotate: -6,
  },
  {
    id: 2,
    video: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
    poster: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif",
    rotate: 3,
  },
  {
    id: 3,
    title: "30+",
    subtitle: "Merken geholpen",
    desc: "Van start-up tot multinational",
    bg: "bg-[#33c791]",
    rotate: -3,
  },
  {
    id: 4,
    video: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4", 
    poster: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif",
    rotate: 6,
  },
];

const StatsCards = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [randomSeed, setRandomSeed] = useState(0);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    setRandomSeed(Math.random()); 
  };

  return (
    <div className="flex items-center justify-center py-20 overflow-hidden">
      {cards.map((card, index) => {
        const isHovered = hoveredId === card.id;
        const isAnyHovered = hoveredId !== null;
        const currentRotation = isHovered 
          ? 0 
          : isAnyHovered 
            ? (Math.sin(index + randomSeed) * 20) 
            : card.rotate;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={() => setHoveredId(null)}
            animate={{
              rotate: currentRotation,
              scale: isHovered ? 1.08 : 1,
              zIndex: isHovered ? 50 : 1,
              marginLeft: index === 0 ? "0px" : (isHovered ? "80px" : "-48px"),
              marginRight: isHovered ? "100px" : "0px",
            }}
            transition={{ 
              type: "spring", 
              stiffness: 250, 
              damping: 25 
            }}
            className="relative w-[320px] h-[450px] rounded-[3em] shadow-xl overflow-hidden cursor-pointer"
          >
            {card.video ? (
              <div className="w-full h-full">
                <video 
                  muted loop autoPlay playsInline 
                  poster={card.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={card.video} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className={`w-full h-full p-8 flex flex-col justify-between ${card.bg}`}>
                <h2 className="text-[5.5em] font-semibold text-black tracking-[-0.05em] leading-9">
                  {card.title}
                </h2>
                <div className="mb-2">
                  <p className="font-semibold text-[1.15em] text-black tracking-[-0.03em] uppercase leading-[1.1em]">
                    {card.subtitle}
                  </p>
                  <div className="h-0.5 bg-[#161616]"></div>
                  <p className="text-[14px] leading-tight font-medium text-black/80">
                    {card.desc}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;