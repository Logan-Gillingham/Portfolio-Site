"use client";
import { motion } from "framer-motion";

interface ChannelProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  onMouseEnter: () => void;
}

export default function Channel({ title, icon, onClick, onMouseEnter }: ChannelProps) {
  return (
    <motion.div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    className="relative bg-white aspect-[4/3] rounded-[2rem] 
                shadow-[0_6px_0_#bbbbbb] border-4 border-transparent 
                hover:border-blue-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]
                flex flex-col items-center justify-center 
                transition-all duration-200 group cursor-none overflow-hidden"
    >
    {/* Add a subtle glass reflection overlay */}
    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 pointer-events-none" />
    
    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
        {icon}
    </div>
    
    <div className="absolute bottom-4 w-full text-center">
        <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase italic">
        {title}
        </span>
    </div>
    </motion.div>
  );
}