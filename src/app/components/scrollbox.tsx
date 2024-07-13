"use client";

import React, { useEffect, useState } from "react";

interface ScrollBoxProperties {
  bgColor: string;
  width: number;
  height: number;
}

const ScrollBox: React.FC<ScrollBoxProperties> = ({
  bgColor,
  width,
  height,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 50;

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex top-0 left-0 w-full p-4 ${width} ${height} ${bgColor} text-white transition-opacity duration-500 
      ${isVisible ? "opacity-100" : "opacity-0"}`}
    ></div>
  );
};

export default ScrollBox;
