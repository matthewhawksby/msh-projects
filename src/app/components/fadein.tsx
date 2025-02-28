"use client";

import { useState, useEffect } from "react";

export default function ColorFadeComponent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // Change color after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`p-10 rounded-lg transition-all duration-1000 ${
          visible ? "bg-pink-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        Hello! I change color after 2 seconds.
      </div>
    </div>
  );
}
