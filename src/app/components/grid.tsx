"use client";

import React, { useEffect, useState } from "react";
import GridBox from "./gridbox";

const Grid = () => {
  return (
    <div className="grid gird-cols-2 sm:grid-rows-3 md:grid-cols-8 lg:grid-rows-12 w-full h-full gap-1">
      <GridBox color="bg-emerald-100"></GridBox>
      <GridBox color="bg-emerald-200"></GridBox>
      <GridBox color="bg-emerald-300"></GridBox>
      <GridBox color="bg-emerald-400"></GridBox>
      <GridBox color="bg-emerald-500"></GridBox>
      <GridBox color="bg-emerald-600"></GridBox>
      <GridBox color="bg-emerald-700"></GridBox>
      <GridBox color="bg-emerald-800"></GridBox>
      <GridBox color="bg-emerald-900"></GridBox>
      <GridBox color="bg-emerald-200"></GridBox>
      <GridBox color="bg-emerald-300"></GridBox>
      <GridBox color="bg-emerald-400"></GridBox>
      <GridBox color="bg-emerald-500"></GridBox>
      <GridBox color="bg-emerald-600"></GridBox>
      <GridBox color="bg-emerald-700"></GridBox>
      <GridBox color="bg-emerald-800"></GridBox>
      <GridBox color="bg-emerald-900"></GridBox>
      <GridBox color="bg-emerald-900"></GridBox>
    </div>
  );
};

export default Grid;
