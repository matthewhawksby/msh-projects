"use client";

import React from "react";

const FloatingTextbox: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[10vh] left-1/3 transform -translate-x-1/2 
                      w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-5xl 
                      min-h-[500px] sm:min-h-[500px] md:min-h-[500px] 
                      p-6 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm rounded-lg 
                      z-10 text-lg leading-relaxed text-gray-900">
        <p className="font-body text-lg">
          My name is Matthew Hawksby, a Computer Science and Mathematics student at Simon Fraser University in BC Canada. This website is a work in progress!
        </p>
        <p className="font-body text-lg mt-4">
          I will eventually be putting up all my projects on this website. I would like to build it into a full blog with links to various projects!
        </p>
      </div>
    </div>
  );
};

export default FloatingTextbox;


