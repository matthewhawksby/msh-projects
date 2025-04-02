import { useEffect, useRef, useState } from "react";

export default function useMicrophoneRecorder(
  onBlobReady: (blob: Blob) => void,
  sendFn: (blob: Blob) => void,
  onVolumeUpdate: (volume: number) => void
) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioBufferRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const volumeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  useEffect(() => {
    return () => stop(); // Cleanup on unmount
  }, []);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    // 🎚️ Volume detection
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    const dataArray = new Uint8Array(analyser.fftSize);

    volumeIntervalRef.current = setInterval(() => {
      analyser.getByteTimeDomainData(dataArray);
      let sumSquares = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const val = (dataArray[i] - 128) / 128;
        sumSquares += val * val;
      }
      const rms = Math.sqrt(sumSquares / dataArray.length);
      const gain = 4;
      onVolumeUpdate(Math.min(rms * gain, 1));
    }, 100);

    // 🎙️ Audio capture
    recorder.ondataavailable = (e: BlobEvent) => {
      audioBufferRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const chunks = audioBufferRef.current.slice(-4);
      const blob = new Blob(chunks, { type: "audio/wav" });
      console.log("Blob type being sent:", blob.type);
      audioBufferRef.current = [];
      onBlobReady(blob); // optional local use
      sendFn(blob);      // send to WebSocket
    };

    recorder.start(1000);
    setIsRecording(true);

    intervalRef.current = setInterval(() => {
      if (recorder.state === "recording") {
        recorder.requestData();
        recorder.stop();
        recorder.start(1000);
      }
    }, 1000);
  };

  const stop = () => {
    setIsRecording(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current?.stream.getTracks().forEach((t) => t.stop());
  };

  return { start, stop, isRecording };
}

