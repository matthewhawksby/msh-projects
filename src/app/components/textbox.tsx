"use client";

import React from "react";

interface FloatingTextboxProps {
  children: React.ReactNode;
}

const FloatingTextbox: React.FC<FloatingTextboxProps> = ({ children }) => {
  return (
  <div className="absolute outline  v-full w-full flex p-6 justify-center items-center bg-white bg-opacity-80 shadow-sm rounded-lg text-gray-900 z-10">
    {children}
  </div>  
  );
};

export default FloatingTextbox;










