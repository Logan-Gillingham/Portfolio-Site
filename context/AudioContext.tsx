"use client";
import { createContext, useContext, useState, useRef, ReactNode } from "react";

const AudioContext = createContext<any>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [hasStarted, setHasStarted] = useState(false);
  const bgMusic = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    bgMusic.current = new Audio("/bgmusic.mp3");
    bgMusic.current.loop = true;
    bgMusic.current.volume = 0.1;
    bgMusic.current.play().catch(e => console.log("Audio failed:", e));
  };

  return (
    <AudioContext.Provider value={{ hasStarted, startExperience }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useWiiContext = () => useContext(AudioContext);