"use client";

import React, { useEffect, useState } from "react";

interface GridBoxProperties {
  color: string;
}
const GridBox: React.FC<GridBoxProperties> = ({ color }) => {
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
      className={`${color} h-36 w-36 col-span-1 row-span-1 ml-1 mr-1 rounded-lg opacity-80 ${isVisible ? "opacity-100" : "opacity-90"}`}
    ></div>
  );
};

export default GridBox;
