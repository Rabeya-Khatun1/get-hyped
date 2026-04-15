import React from 'react';
import { HiFire } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const CustomButton = ({ 
  text = "Get Customs", 
  className = "", 
  icon: Icon = HiFire, 
  onClick 
}) => {
  return (
    <button 
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-between gap-3 bg-[#FFB8FF] hover:bg-[#f7a5f7] px-1 py-1 rounded-[10px] font-bold text-gray-900 transition-all shadow-sm shrink-0",
        className 
      )}
    >
      <span className="text-[14px] tracking-tight pl-3">
        {text}
      </span>

      <div className="bg-white w-8 h-8 rounded-[10px] flex items-center justify-center shadow-sm">
        <Icon className="text-[#FF5F1F] text-lg" />
      </div>
    </button>
  );
};

export default CustomButton;