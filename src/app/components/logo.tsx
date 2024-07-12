"use client";

import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src="/ac-mshblack192.png"
        alt="Matthew Scott Hawksby Logo"
        className="dark:hidden inline-block w-16 m-2 ml-2 md:ml-[10rem]"
        width={100}
        height={100}
        priority
      />
      {/*
            <Image
              src=""
              alt="Dark Mode MSH Logo"
              className="light:hidden p-2 w-22 sm:w-30 md:w-32 lg:w-30"
              width={100}
              height={100}
              priority
            />
        */}
    </div>
  );
}

export default Logo;
