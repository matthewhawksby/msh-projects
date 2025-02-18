"use client";

import React from "react";


const Roundel = () => {
    return (
    <div className="relative">
        <div className="hidden xl:block z-30 absolute top-[12vh] left-2/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <img
            src="/river.jpg"
            alt="Roundel Image"
            className="w-full h-full object-cover"
            />
        </div>
    </div>
    );
  };
  
  export default Roundel;
  