"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

import { getLast14Days } from "@/utils/getDays";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

interface Props {
  data: number[];
}

const LineChart = ({ data }: Props) => {
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState<ChartOptions<"line">>({});
  const daysData = getLast14Days();

  useEffect(() => {
    setChartData({
      labels: daysData,
      datasets: [
        {
          label: "Transactions",
          data: data,
          borderColor: "#FF0099",
          backgroundColor: "#FF0099",
        },
      ],
    });

    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Ether transaction history in 14 days",
          color: "rgba(255,255,255, 0.75)",
          position: "top",
          font: {
            family: "Inter, sans-serif",
            size: 14,
            weight: "normal",
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          ticks: {
            callback: function (tickValue, index, ticks) {
              return index === 0 ||
                index === ticks.length / 2 ||
                index === ticks.length - 1
                ? this.getLabelForValue(tickValue as number)
                : "";
            },
            color: "rgba(255,255,255, 0.65)",
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            callback: (value, index) => {
              if ((value as number) >= 1000) {
                return (value as number) / 1000 + "k";
              } else {
                return index !== 0 ? value : "";
              }
            },
            maxTicksLimit: 3,
            color: "rgba(255,255,255, 0.65)",
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <Line data={chartData} options={chartOptions} />
    </>
  );
};

export default LineChart;
