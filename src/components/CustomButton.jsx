import React from 'react';
import { HiFire } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const CustomButton = ({
  text = "Get Customs",
  className = "",
  icon: Icon = HiFire,
  variant = "pink", 
  iconColorClass = "", 
  onClick
}) => {

  const variants = {
    pink: {
      bg: "bg-[#FFB8FF]",
      textColor: "text-gray-900",
      iconBg: "bg-white",
      iconColor: "text-gray-900"
    },
    red: {
      bg: "bg-[#fa5424]",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-black"
    },
    black: {
      bg: "bg-black",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-black"
    },
    white: {
      bg: "bg-white",
      textColor: "text-black",
      iconBg: "bg-black",
      iconColor: "text-white"
    }
  };

  const current = variants[variant] || variants.pink;

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "relative group flex items-center justify-between gap-3 px-1 py-1 rounded-[12px] font-bold overflow-hidden transition-all duration-300 shadow-sm shrink-0",
        "hover:rotate-[-6deg] hover:scale-105 active:scale-95",
        current.bg,
        current.textColor,
        className 
      )}
    >
      <span className="text-[14px] tracking-tight pl-3">
        {text}
      </span>

      <div
        className={twMerge(
          "w-8 h-8 rounded-[10px] flex items-center justify-center shadow-sm",
          current.iconBg
        )}
      >
        <Icon 
          className={twMerge(
            "text-lg", 
            iconColorClass || current.iconColor 
          )} 
        />
      </div>
    </button>
  );
};

export default CustomButton;