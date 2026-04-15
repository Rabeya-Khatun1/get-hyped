

import React from 'react';
import { HiFire } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const CustomButton = ({
  text = "Get Customs",
  className = "",
  icon: Icon = HiFire,
  iconColorClass = "text-gray-900",
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-between gap-3 px-1 py-1 rounded-[10px] font-bold transition-all shadow-sm shrink-0",
        "bg-[#FFB8FF] hover:bg-[#f7a5f7] text-gray-900",
        className
      )}
    >
      <span className="text-[14px] tracking-tight pl-3">
        {text}
      </span>

      <div className="bg-white w-8 h-8 rounded-[10px] flex items-center justify-center shadow-sm">
        <Icon className={twMerge("text-lg", iconColorClass)} />
      </div>
    </button>
  );
};

export default CustomButton;