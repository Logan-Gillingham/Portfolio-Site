"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function ChannelModal({ isOpen, onClose, title, description }: ModalProps) {
  const router = useRouter();
  
  const handleStart = () => {
  if (title === "GitHub") {
    window.open("https://github.com/Logan-Gillingham", "_blank");
  } else if (title === "LinkedIn") {
    window.open("https://www.linkedin.com/in/logan-gillingham-3944731ab/", "_blank");
  } else {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/projects/${slug}`);
  }
};

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()} // Don't close if clicking the modal itself
        className="bg-white w-[500px] rounded-[3rem] p-10 shadow-2xl border-4 border-gray-100 flex flex-col items-center text-center"
      >
        {/* Project Preview Area */}
        <h2 className="text-2xl font-bold text-gray-700 mb-2 uppercase tracking-tighter italic">{title}</h2>
        <p className="text-gray-500 mb-8 px-4 leading-tight">{description}</p>

        {/* Wii Style Buttons */}
        <div className="flex gap-4 w-full">
          <button 
            onClick={onClose}
            className="flex-1 py-4 bg-[#f0f0f0] rounded-full border-2 border-gray-300 font-black text-gray-400 shadow-inner hover:bg-gray-200 transition-all cursor-none"
          >
            BACK
          </button>
          <button 
            onClick={handleStart}
            className="flex-1 py-4 bg-white rounded-full border-2 border-blue-400 text-blue-500 font-black shadow-lg hover:bg-blue-50 transition-all cursor-none"
          >
            START
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}