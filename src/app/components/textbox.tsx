"use client";

import React from "react";

interface FloatingTextboxProps {
  children: React.ReactNode;
}

const FloatingTextbox: React.FC<FloatingTextboxProps> = ({ children }) => {
  return (
  <div className="h-full w-full p-6 bg-white bg-opacity-80 shadow-sm rounded-lg text-gray-900 z-10">
    {children}
  </div>  
  );
};

export default FloatingTextbox;










