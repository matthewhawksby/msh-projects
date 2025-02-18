"use client";

import React, { useEffect, useState } from "react";

interface GridBoxProperties {
  color: string;
  size: string;
}
const GridBox: React.FC<GridBoxProperties> = ({ color, size }) => {
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
      className={`${color} ${size} col-span-1 row-span-1 rounded-lg  opacity-80 ${isVisible ? "opacity-100" : "opacity-90"}`}
    ></div>
  );
};

export default GridBox;
