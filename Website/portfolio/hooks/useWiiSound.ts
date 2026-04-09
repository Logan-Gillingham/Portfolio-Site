"use client";
import { useEffect, useRef } from "react";

export const useWiiSound = () => {
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    hoverSound.current = new Audio("/hover.mp3");
    clickSound.current = new Audio("/click.mp3");
    
    if (hoverSound.current) hoverSound.current.volume = 0.01;
    if (clickSound.current) clickSound.current.volume = 0.2;
  }, []);

  const playHover = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => {});
    }
  };

  const playClick = () => {
    if (clickSound.current) {
      clickSound.current.play().catch(() => {});
    }
  };

  return { playHover, playClick };
};