"use client";
import { useEffect, useState } from "react";

export default function WiiPointer() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] w-10 h-10"
      style={{ 
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        backgroundImage: "url('/cursor.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    />
  );
}