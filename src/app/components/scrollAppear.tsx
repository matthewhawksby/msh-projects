"use client";

import { useState, useEffect } from "react";

export default function ScrollRevealComponent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust this threshold as needed
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[150vh] flex flex-col items-center justify-center">
      <div className="p-5 bg-blue-500 text-white rounded-md">Scroll down...</div>

      <div
        className={`fixed bottom-10 right-10 p-5 rounded-lg transition-all duration-700 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        } bg-pink-500 text-white`}
      >
        text here
      </div>
    </div>
  );
}
