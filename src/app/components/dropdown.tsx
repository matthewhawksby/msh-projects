"use client";

import React from "react";
import { useState } from "react";
import menucontents from "./menucontents.json";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white p-4 w-full flex items-center justify-between font-bold text-lg 
        rounded-lg tracking-wider border-2 border-transparent active:border-black duration-300 
        active:text-black"
      >
        Test Button
      </button>
      {isOpen && (
        <div
          className="bg-white border-black border-4 absolute top-20 flex  flex-col items-start 
          rounded-lg p-2 w-full"
        >
          {menucontents.map((item, i) => (
            <div
              className="flex w-full justify-between hover:bg-gray-300 cursor-pointer rounded-r-lg border-l-transparent"
              key={i}
            >
              <h3>{item.page}</h3>
              <h3>{item.symbol}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
