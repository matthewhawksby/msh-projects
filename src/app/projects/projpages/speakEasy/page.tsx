'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import useMicrophoneRecorder from "../../../components/useMicrophoneRecorder";
import Dropdown from "../../../components/dropdown";
import Logo from "../../../components/logo";
import Menu from "../../../components/menu";
import ScrollBox from "../../../components/scrollbox";

const StressChart = dynamic(() => import("../../../components/StressChart"), {
  ssr: false,
});

type GraphPoint = {
  time: string;
  confidence: number;
};

export default function Home() {
  const [graphData, setGraphData] = useState<GraphPoint[]>([]);
  const [volumeData, setVolumeData] = useState<GraphPoint[]>([]);

  const resetData = () => {
  setGraphData([]);
  setVolumeData([]);
};

  const onBlobReady = async (blob: Blob) => {
    const formData = new FormData();
    formData.append("audio", blob, "chunk.webm");

    try {
      const res = await fetch("http://YOUR_API/predict", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      setGraphData((prev) => [
        ...prev.slice(-999),
        {
          time: new Date().toLocaleTimeString(),
          confidence: Number(json.result),
        },
      ]);
    } catch (e) {
      console.error("API error:", e);
    }
  };
    const onVolumeUpdate = (volume: number) => {
    setVolumeData((prev) => [
      ...prev.slice(-999), // keep last 20 values
      {
        time: new Date().toLocaleTimeString(),
        confidence: volume,
      },
    ]);
  };


  const { start, stop, isRecording } = useMicrophoneRecorder(onBlobReady, onVolumeUpdate);

  function downloadCSV(data: GraphPoint[], filename = "volume.csv") {
  const csv = [
    ["time", "confidence"],
    ...data.map((point) => [point.time, point.confidence]),
  ]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}

  return (
    <main className="w-screen bg-gray-100">
      {/* Top Nav */}
      <nav className="flex md:pr-32 md:pl-32 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-b-2 sticky top-0 z-50">
        <Logo />
        <div className="inline-flex md:hidden mr-2">
          <Dropdown />
        </div>
        <div className="hidden md:flex">
          <Menu />
        </div>
      </nav>

      <div className="relative bg-red-100 h-[40vw] rounded-lg opacity-80 font-body sm:pr-4 sm:pl-4 md:pl-12 md:pr-12 mr-10 ml-10">
        <div className="absolute top-[2vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xnpm run del:w-[45vw] xl:h-[8vw] rounded-lg left-[5vw]" />
        <div className="absolute top-[12vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[15vw] right-[5vw]" />
        <div className="absolute top-[24vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[8vw] rounded-lg left-[5vw]" />
                <div className="mt-10">
                  <StressChart data={graphData} label="Stress" color="#ffd700" />
                  <StressChart data={volumeData} label="Volume" color="#3b82f6" />
          <h2 className="text-center font-semibold text-lg mb-2"> Volume (Loudness)</h2>

        </div>
      </div>

      <div className="p-4 mt-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-xl"
            onClick={start}
            disabled={isRecording}
          >
            Start
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-xl"
            onClick={stop}
            disabled={!isRecording}
          >
            Stop
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
            onClick={() => downloadCSV(volumeData, "volume.csv")}
          >
            Download CSV
          </button>

          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
            onClick={resetData}
          >
            Reset
          </button>

                {isRecording && (
                <div className="text-center text-red-600 font-bold mb-4 animate-pulse">
                  🎙️ Listening... Sending audio every second.
                </div>
                )}
        </div>

      </div>


      {/* Scroll Box + Footer Info */}
      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">
        <div>
          <ScrollBox bgColor="bg-red-500" width={10} height={20}>
            <p>t</p>
          </ScrollBox>
          <div className="flex justify-center pt-6 font-dm-sans w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-1000 font-bold border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="flex md:pr-32 md:pl-32 h-10 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50" />
    </main>
  );
}
