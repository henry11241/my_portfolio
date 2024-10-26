"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={cn(
        "fixed bottom-6 right-6 hidden cursor-pointer rounded-full border-2 border-white p-3 shadow-md hover:border-[#9bf1ff] hover:text-[#9bf1ff]",
        isVisible && "lg:block", // Hide by default, show above lg
      )}
      onClick={scrollToTop}
      style={
        {
          // display: isVisible ? "block" : "none",
        }
      }
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopBtn;
