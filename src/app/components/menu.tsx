"use client";

import React from "react";
import Link from "next/link";

function Menu() {
  return (
    <div className="hidden md:flex font-title">
      <ul className="inline-flex text-2xl text-gray-900">
        <li className="inline-flex">
          <Link
            href="/"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Main
          </Link>
        </li>
        <li className="inline-flex">
          <Link
            href="/projects"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/links"
            className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
          >
            Links
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
