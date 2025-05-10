export interface PopulationType {
  id: number;
  label: string;
  value: string;
}

export interface PopulationDataMap {
  [prefCode: number]: PopulationData[];
}

export interface PopulationData {
  year: number;
  value: number;
}

export interface PrefectureColorMap {
  [prefCode: number]: string;
}

export interface PopulationResponse {
  message: string;
  result: {
    data: Array<{
      label: string;
      data: PopulationData[];
    }>;
  }
}

export const POPULATION_TYPES: PopulationType[] = [
  { id: 0, label: "総人口", value: "total" },
  { id: 1, label: "年少人口", value: "young" },
  { id: 2, label: "生産年齢人口", value: "working" },
  { id: 3, label: "老年人口", value: "old" }
]

export const PREFECTURE_COLORS: PrefectureColorMap = {
  1: "#26263C",  // 北海道
  2: "#34773E",  // 青森県
  3: "#22533C",  // 岩手県
  4: "#255124",  // 宮城県
  5: "#6F130B",  // 秋田県
  6: "#1C346C",  // 山形県
  7: "#A42916",  // 福島県
  8: "#0F2970",  // 茨城県
  9: "#2C6835",  // 栃木県
  10: "#272A2B", // 群馬県
  11: "#A82721", // 埼玉県
  12: "#2149B4", // 千葉県
  13: "#360564", // 東京都
  14: "#224B81", // 神奈川県
  15: "#A92722", // 新潟県
  16: "#377D3D", // 富山県
  17: "#377E9C", // 石川県
  18: "#11205E", // 福井県
  19: "#683570", // 山梨県
  20: "#9C391B", // 長野県
  21: "#9C391B", // 岐阜県
  22: "#0F2957", // 静岡県
  23: "#3A528A", // 愛知県
  24: "#34783E", // 三重県
  25: "#3274AB", // 滋賀県
  26: "#6D287A", // 京都府
  27: "#2B3477", // 大阪府
  28: "#377E9C", // 兵庫県
  29: "#5F2E41", // 奈良県
  30: "#283563", // 和歌山県
  31: "#303667", // 鳥取県
  32: "#1E4679", // 島根県
  33: "#234280", // 岡山県
  34: "#702C31", // 広島県
  35: "#692917", // 山口県
  36: "#14296D", // 徳島県
  37: "#2D691B", // 香川県
  38: "#317154", // 愛媛県
  39: "#5A1919", // 高知県
  40: "#1C4885", // 福岡県
  41: "#377433", // 佐賀県
  42: "#3373A6", // 長崎県
  43: "#5D0E07", // 熊本県
  44: "#A9221D", // 大分県
  45: "#436520", // 宮崎県
  46: "#8A1B24", // 鹿児島県
  47: "#AE2317", // 沖縄県
}

export const DEFAULT_PREFECTURE_COLOR = "#757575";
