"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface RollingTextProps {
  children: ReactNode;
}

export default function RollingText({ children }: RollingTextProps) {
  // Split the children into individual characters
  const characters = React.Children.toArray(children).join("").split("");
  console.log(characters)
  return (
    <div style={{ overflow: "hidden", height: "50px", position: "relative", width:"500px" }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%" }} // Start below the view
          animate={{
            y: ["100%", "0%", "-100%"], // Animate through the rolling effect
          }}
          transition={{
            duration: 0.5, // Duration for each character
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.1, // Stagger delay for each character
          }}
          style={{
            display: "inline-block", // Make sure each character can be animated independently
            fontSize: "2rem", // Customize font size
            fontWeight: "bold", // Customize font weight
            color: "blue", // Customize text color
            position: "absolute", // Position characters absolutely
            top: 0,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
