"use client";

import React, { useEffect, useState } from "react";

interface GridBoxProperties {
  color: string;
  size: string;
  opacityWait: number;
  startTime: number;
}
const GridBox: React.FC<GridBoxProperties> = ({ color, size, opacityWait, startTime}) => {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const now = performance.now();
      const delay = Math.max(50, opacityWait - (now - startTime));

    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
    },[]);

  return (
    <div
      className={`${color} ${size} ${isVisible ? "opacity-100" : "opacity-0"
      } ease-in-out transition-opacity duration-300 
     col-span-1 row-span-1 rounded-lg`}
    ></div>
  );
};

export default GridBox;
