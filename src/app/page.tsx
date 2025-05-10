"use client"

import { useEffect, useState } from "react";
import PrefectureCheckbox from "@/components/PrefectureCheckbox";
import { Prefecture } from "@/types/prefecture";
import { POPULATION_TYPES } from "@/types/population";

export default function Home() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);
  const [selectedPopulationType, setSelectedPopulationType] = useState<number>(0);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await fetch("/api/prefectures");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        setPrefectures(data.result);
      } catch (error) {
        console.error("Cannot fetch prefecture data:", error);
      }
    };

    fetchPrefectures();
  }, []);

  const handlePrefectureSelect = async (prefCode: number, checked: boolean) => {
    if (checked) {
      setSelectedPrefectures([...selectedPrefectures, prefCode]);
      // await fetchPrefecturePopulationData(prefCode);
    } else {
      setSelectedPrefectures(selectedPrefectures.filter(code => code !== prefCode));
    }
  };

  const handlePopulationTypeChange = (typeId: number) => {
    setSelectedPopulationType(typeId);
  };

  return (
    <div className="grid grid-rows-3 grid-cols-1 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="text-5xl font-extrabold py-6 justify-items-center">
          都道府県の人口推移
        </h1>
        <div className="mb-6">
          <h2 className="text-xl font-extrabold py-3">
            都道府県を選択
          </h2>
          <div className="flex flex-wrap">
            {prefectures.map(pref => (
              <PrefectureCheckbox
                key={pref.prefCode}
                prefecture={pref}
                onSelectChange={handlePrefectureSelect}
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-extrabold py-3">
            表示する人口構成を選択
          </h2>
          <div className="flex flex-wrap">
            {POPULATION_TYPES.map(type => (
              <label key={type.id} className="px-1.5 py-1">
                <input
                  type="radio"
                  name="populationType"
                  value={type.value}
                  checked={selectedPopulationType === type.id}
                  onChange={() => handlePopulationTypeChange(type.id)}
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
