// import React from 'react';

// const VideoCard = ({ videoSrc, accentColor, className = "" }) => {
//   return (
//     <div className={`w-full flex justify-end z-10 ${className}`}>
//       <video
//         src={videoSrc}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-[280px] h-[380px] object-cover rounded-[30px] mt-16 border-[8px] shadow-2xl rotate-2 transition-all duration-500"
//         style={{ borderColor: accentColor || "white" }}
//       />
//     </div>
//   );
// };

// export default VideoCard;





import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const VideoCard = ({ 
  videoSrc, 
  accentColor, 
  hasInfoCard, 
  infoTitle, 
  infoTag, 
  className = "" 
}) => {
  return (
    <div className={`w-full flex justify-end z-10 ${className}`}>
      <div className="relative group">
        {/* আপনার একদম অরিজিনাল ভিডিও ট্যাগ ও ক্লাস */}
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-[280px] h-[380px] object-cover rounded-[30px] mt-16 border-[8px] shadow-2xl rotate-2 transition-all duration-500"
          style={{ borderColor: accentColor || "white" }}
        />

        {/* ডাইনামিক ইনফো কার্ড - শুধুমাত্র true হলে দেখাবে */}
        {hasInfoCard && (
          <div className="absolute -bottom-4 -left-10 w-[270px] bg-[#008dff] text-white p-6 rounded-[22px] shadow-2xl -rotate-6 transition-all duration-300 group-hover:rotate-[-2deg]">
            
            {/* অ্যারো বাটন */}
            <div className="absolute -top-5 -right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#008dff] shadow-lg">
              <FiArrowUpRight size={20} strokeWidth={3} />
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold leading-tight">
                {infoTitle}
              </h4>

              <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[12px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                {infoTag}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;