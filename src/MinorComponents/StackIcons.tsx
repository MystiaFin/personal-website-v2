import React from "react";

interface StackIconsProps {
  name: string;
  icon: string;
}

const StackIcons: React.FC<StackIconsProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center px-3 py-2 gap-1 rounded-sm bg-[#1A1B1C] hover:bg-[#2D2F2F] transition-colors duration-200 cursor-pointer">
      <img src={icon} alt={`${name} icon`} className="w-4 h-4" />
      <span className="text-xs text-white">{name}</span>
    </div>
  );
};

export default StackIcons;
