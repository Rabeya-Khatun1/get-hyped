import React from 'react';

const Badge = () => {
  return (
    <div className="flex items-center justify-center">
      
      <div className="relative flex items-center justify-center w-28 h-28 bg-[#FFB6FF] rounded-full animate-spin-once ">
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
            <textPath
              href="#circlePath"
              startOffset="0%"
            >
              GET HYPED • GET NOTICED • GET RESULTS • 
            </textPath>
          </text>
        </svg>

        {/* Center GH */}
 <div className="text-3xl font-black text-black relative tracking-[0.01em] left-[3px] rotate-[12deg] scale-y-[1.5]">
  GH
</div>

      </div>

<style jsx>{`
  @keyframes spinLeftOnce {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  .animate-spin-once {
    animation: spinLeftOnce 0.5s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
  }
`}</style>
    </div>
  );
};

export default Badge;