"use client";
import { LineChart } from '@mui/x-charts';

type GraphPoint = {
  time: string;
  confidence: number;
};

type Props = {
  data: GraphPoint[];
  label?: string;
  color?: string;
};

export default function StressChart({ data, label = "Stress", color = "#ef4444" }: Props) {
  return (
    <LineChart
      height={300}
      series={[{
        data: data.map(p => p.confidence),
        label,
        color,
        showMark:false
      }]}
        xAxis={[{
          scaleType: 'linear',
          data: data.map((_, i) => i),
          min: 0,
          max: data.length > 0 ? data.length - 1 : 50,
          tickMinStep: 1,
        }]}
      yAxis={[{ min: 0, max: 1 }]}
    />
  );
}


