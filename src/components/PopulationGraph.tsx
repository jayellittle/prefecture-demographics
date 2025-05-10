import React from "react";
import { CategoryScale, ChartData, Chart as ChartJS, ChartOptions, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";
import { Prefecture } from "@/types/prefecture";
import { Line } from "react-chartjs-2";
import { DEFAULT_PREFECTURE_COLOR, PopulationDataMap, PREFECTURE_COLORS } from "@/types/population";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PopulationGraphProps {
  prefectures: Prefecture[];
  selectedPrefectures: number[];
  populationData: PopulationDataMap;
  populationTypeName: string;
}

const PopulationGraph: React.FC<PopulationGraphProps> = ({
  prefectures,
  selectedPrefectures,
  populationData,
  populationTypeName
}) => {
  const graphData = (): ChartData<"line"> | null => {
    if (Object.keys(populationData).length === 0) return null;

    const getPrefectureColor = (prefCode: number) => {
      return PREFECTURE_COLORS[prefCode] || DEFAULT_PREFECTURE_COLOR;
    };

    const firstPrefCode = selectedPrefectures.find(prefCode => populationData[prefCode]);
    if (!firstPrefCode) return null;

    const years = populationData[firstPrefCode].map(d => d.year);

    const datasets = selectedPrefectures.map(code => {
      const prefData = populationData[code];
      const prefecture = prefectures.find(p => p.prefCode === code);
      if (!prefData || !prefecture) return null;

      const color = getPrefectureColor(code);

      return {
        label: prefecture.prefName,
        data: prefData.map(d => d.value),
        borderColor: color,
        backgroundColor: `${color}33`,
        borderWidth: 2,
        pointRadius: 3,
      };
    })
      .filter((dataset): dataset is NonNullable<typeof dataset> => dataset !== null);

    return {
      labels: years,
      datasets
    };
  };

  const data = graphData();
  if (!data) return <p>Loading data...</p>;

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${populationTypeName}の推移`,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "人口数"
        },
      },
      x: {
        title: {
          display: true,
          text: "年度"
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PopulationGraph;
