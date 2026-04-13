"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useWiiSound } from "@/hooks/useWiiSound";

export default function HomeBar() {
    const { playClick } = useWiiSound();
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 w-full h-24 bg-[#ebebeb] border-t-4 border-gray-300 flex items-center justify-center z-50"
    >
      <Link href="/" className="cursor-none" onClick={playClick}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-white px-20 py-3 rounded-full shadow-[0_4px_0_#bcbcbc] border-2 border-transparent hover:border-blue-400 transition-all"
        >
          <span className="font-black text-gray-400 group-hover:text-blue-400 uppercase italic tracking-tighter">
            Wii Menu
          </span>
          
          {/* Subtle blue glow effect on hover */}
          <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-shadow pointer-events-none" />
        </motion.button>
      </Link>
    </motion.div>
  );
}