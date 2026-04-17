import React, { useEffect, useRef, useState } from 'react';

const Badge = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const baseRotation = 6;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setRotation(prev => {
        let next = prev - delta * 0.05; 
        if (next > 6) next = 6;
        if (next < -6) next = -6;

        return next;
      });

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative flex items-center justify-center w-28 h-28 bg-[#FFB6FF] rounded-full"
        style={{
          transform: `rotate(${baseRotation + rotation}deg)`
        }}
      >
        <svg className="absolute w-full h-full p-1" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text
            className="uppercase fill-black"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "0.03em",
            }}
          >
            <textPath href="#circlePath">
              GET HYPED • GET NOTICED • GET RESULTS •
            </textPath>
          </text>
        </svg>

        <div className="text-3xl font-black text-black relative tracking-[0.01em] rotate-[12deg] scale-y-[1.5]">
          GH
        </div>
      </div>
    </div>
  );
};

export default Badge;