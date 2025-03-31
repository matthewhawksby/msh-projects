"use client";

import { useEffect, useRef } from "react";

interface Props {
  data: number[]; // Array of loudness/stress values from 0 to 1
  width?: number;
  height?: number;
  color?: string;
}

export default function WaveformCanvas({ data, width = 600, height = 150, color = "#3b82f6" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastValueRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const draw = () => {
      if (!ctx) return;

      // Scroll everything left by 1px
      const imageData = ctx.getImageData(1, 0, width - 1, height);
      ctx.putImageData(imageData, 0, 0);

      // Clear the rightmost column
      ctx.clearRect(width - 1, 0, 1, height);

      // Get the most recent value
      const newValue = data[data.length - 1] ?? lastValueRef.current;
      lastValueRef.current = newValue;

      // Draw new value at the right edge
      const y = height / 2 - newValue * (height / 2);
      ctx.beginPath();
      ctx.moveTo(width - 2, y);
      ctx.lineTo(width - 1, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [data, width, height, color]);

  return <canvas ref={canvasRef} width={width} height={height} className="rounded-xl shadow-md bg-white" />;
}
