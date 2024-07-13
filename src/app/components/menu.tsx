"use client";

import React from "react";

function Menu() {
  return (
    <div className="hidden md:flex">
      <ul className="inline-flex text-2xl text-gray-900">
        <li className="inline-flex">
          <a
            href="#"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 font-semibold hover:underline  underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Links
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
