"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWiiSound } from "@/hooks/useWiiSound";
import Channel from "@/components/Channel";
import ChannelModal from "@/components/ChannelModal";
import { useWiiContext } from "@/context/AudioContext";
import { 
  Code2, User, TabletSmartphone, Server, 
  Layers, ShoppingCart, Cloud, BrainCircuit, 
  FolderGitIcon, Gamepad2, Mail 
} from "lucide-react";


interface Project {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const CHANNELS: Project[] = [
  { title: "Projects Channel", icon: <Code2 size={48} />, desc: "View my projects and things i'm working on." },
  { title: "Mii Channel", icon: <User size={48} />, desc: "Learn more about my background and skills." },
  { title: "Weather App", icon: <Cloud size={48} />, desc: "Real-time weather tracking with dynamic backgrounds." },
  { title: "News Channel", icon: "📰", desc: "News about what i'm working on." },
  { title: "Contact Channel", icon: <TabletSmartphone size={48} />, desc: "Predictive data visualization project." },
  { title: "GitHub", icon: <FolderGitIcon size={48} />, desc: "Check out my github for new projects and old school projects." },
  { title: "LinkedIn", icon: "🏃", desc: "My linkedin Page." },
  { title: "Settings", icon: "⚙️", desc: "Configuration and site-wide preferences." },
];

export default function Home() {
  const { hasStarted, startExperience } = useWiiContext();
  const { playHover, playClick } = useWiiSound();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!hasStarted) {
    return (
      <div 
        className="flex min-h-screen items-center justify-center bg-black cursor-none"
        onClick={startExperience}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-black text-white tracking-tighter italic mb-4">Welcome</h1>
          <p className="text-gray-400 animate-pulse tracking-[0.4em] uppercase text-sm">
            Press Anywhere to Start
          </p>
        </motion.div>
      </div>
    );
  }

  // --- MAIN MENU ---
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-24 px-8 bg-[#ebebeb] overflow-hidden">
      
      {/* 1. Header Banner */}
      <header className="fixed top-0 left-0 w-full pt-12 flex flex-col items-center pointer-events-none z-10">
        <h1 className="text-4xl font-black text-gray-400 tracking-tighter uppercase italic flex items-center gap-3">
          <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
          Logan Gillingham
        </h1>
        <p className="text-[10px] font-bold text-gray-300 tracking-[0.5em] uppercase mt-1">
          Software Developer
        </p>
      </header>

      {/* 2. Channel Grid */}
      <div className="grid grid-cols-4 gap-4 w-full max-w-5xl z-0">
        {CHANNELS.map((ch, i) => (
          <Channel 
            key={i} 
            title={ch.title} 
            icon={ch.icon} 
            onMouseEnter={playHover}
            onClick={() => {
              playClick();
              setSelectedProject(ch);
            }} 
          />
        ))}
      </div>

      {/* 3. The Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ChannelModal 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
            title={selectedProject.title}
            description={selectedProject.desc}
          />
        )}
      </AnimatePresence>

      {/* 4. Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full h-24 flex justify-between items-end px-16 pb-8 pointer-events-none">
        <div className="bg-white w-32 h-14 rounded-full shadow-[0_4px_0_#bcbcbc] flex items-center justify-center border-2 border-transparent pointer-events-auto">
          <span className="font-black text-gray-300 italic">Wii</span>
        </div>
        
        <div className="mb-4 text-gray-300 font-black text-2xl tracking-tighter italic">
          {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
        </div>

        <div className="bg-white w-32 h-14 rounded-full shadow-[0_4px_0_#bcbcbc] flex items-center justify-center border-2 border-transparent pointer-events-auto text-2xl">
          📩
        </div>
      </div>

    </main>
  );
}