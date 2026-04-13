"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }} // Start "zoomed in"
      animate={{ scale: 1, opacity: 1 }}    // Zoom out to normal
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}