export interface PopulationType {
  id: number;
  label: string;
  value: string;
}

export const POPULATION_TYPES: PopulationType[] = [
  { id: 0, label: "総人口", value: "total" },
  { id: 1, label: "年少人口", value: "young" },
  { id: 2, label: "生産年齢人口", value: "working" },
  { id: 3, label: "老年人口", value: "old" }
]
