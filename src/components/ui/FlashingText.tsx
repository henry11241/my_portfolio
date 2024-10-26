"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlashingTextProps {
  children: ReactNode;
}

export default function FlashingText({ children }: FlashingTextProps) {
  return (
    <motion.span
      animate={{
        color: ["#ffffff", "#9bf1ff", "#ffffff"],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="font-bold"
    >
      {children}
    </motion.span>
  );
}
