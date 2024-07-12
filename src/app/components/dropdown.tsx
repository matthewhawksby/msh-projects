"use client";

import React from "react";
import { useState } from "react";
import menucontents from "./menucontents.json";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-24 h-16 rounded-lg border-2 border-black bg-gray-800">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-4 flex w-full items-center justify-between font-semibold text-sm 
        text-rounded-lg active:border-black duration-300 
        active:text-white bg-gray-100 text-black"
      >
        MENU
      </button>
      {isOpen && (
        <div className="fixed tracking-wider top-28 bottom-8 inset-x-14 bg-gray-300/10">
          <div
            className="fixed top-28 bottom-8 inset-x-14 bg-white border-black border-4 flex flex-col items-start 
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
