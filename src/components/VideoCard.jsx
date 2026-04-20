import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const VideoCard = ({
  videoSrc,
  placeholderImg,
  accentColor = "#008dff",
  title,
  tag,
}) => {
  return (
    <div className="w-full flex justify-end z-20 relative">
      <div className="relative group mt-16 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] transform hover:-rotate-[4deg] cursor-pointer">
        <div
          className="relative w-[340px] h-[460px] md:w-[335px] md:h-[445px] rounded-[24px] border-[8px] overflow-hidden"
          style={{ borderColor: accentColor }}
        >

          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" 
          />
          <img
            src={placeholderImg}
            alt="placeholder"
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-500 z-10"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-30 pointer-events-none">
          <div className="relative w-full h-[170px] md:h-[190px] ">
            <svg
              viewBox="0 0 429 174"
              preserveAspectRatio="none"
              className="w-full h-full rounded-[24px]"
            >
              <path
                d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L0 173C0 170 0 166 0 159V77C0 70 5 65 12 63L388 1C409 -2 428 13 428 35Z"
                fill={accentColor}
              />
            </svg>

            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white pointer-events-auto">
              <div className="absolute top-2 right-2 bg-white w-11 h-11 rounded-full flex items-center justify-center text-black overflow-hidden transition-all duration-300 hover:bg-black hover:text-white">
                <FiArrowUpRight 
                  size={24} 
                  strokeWidth={3} 
                  className="absolute transition-all duration-500 transform group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:opacity-0" 
                />
                <FiArrowUpRight 
                  size={24} 
                  strokeWidth={3} 
                  className="absolute transition-all duration-500 transform translate-y-10 -translate-x-10 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" 
                />
              </div>

              <h3 className="mt-2 text-[20px] md:text-[24px] font-semibold leading-[1.1em] tracking-[-0.03em] pr-12 whitespace-pre-line">
                {title}
              </h3>

              <div className="mt-2.5 bg-white/20 backdrop-blur-md px-3 py-1.5 w-fit flex justify-center items-center rounded-[8px] text-xs font-medium tracking-tight">
                {tag}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoCard;