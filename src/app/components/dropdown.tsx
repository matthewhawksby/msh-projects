"use client";

import React from "react";
import { useState } from "react";
import menucontents from "./menucontents.json";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-[100px] h-[50px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white p-4 w-full flex items-center justify-between font-bold text-lg 
        rounded-lg tracking-wider border-2 border-transparent active:border-black duration-300 
        active:text-black"
      >
        Test Button
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-300/10">
          <div
            className="fixed inset-x-20 inset-y-20 bg-white border-black border-4 flex flex-col items-start 
            rounded-lg p-2 z-15"
          >
            {menucontents.map((item, i) => (
              <div
                className="flex w-full justify-between hover:bg-gray-300 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                key={i}
              >
                <h3 className="font-bold">{item.page}</h3>
                <h3>{item.symbol}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
