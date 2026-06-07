import type { SpeedTestPreset } from "./types";

export const SPEED_TEST_PRESETS: SpeedTestPreset[] = [
  {
    id: "very-fast",
    label: "とても快適",
    level: "very-fast",
    title: "とても快適！",
    subtitle: "このエリアでは上位2%の速度です",
    comparisonText: "平均より +201 Mbps",
    metrics: { download: 293.3, upload: 42.1, ping: 8 },
  },
  {
    id: "fast",
    label: "快適",
    level: "fast",
    title: "快適です！",
    subtitle: "このエリアでは上位22%の速度です",
    comparisonText: "平均より +48 Mbps",
    metrics: { download: 140.5, upload: 28.4, ping: 14 },
  },
  {
    id: "normal",
    label: "ふつう",
    level: "normal",
    title: "ふつうです",
    subtitle: "このエリアでは平均とほぼ同じ速度です",
    comparisonText: "平均より +3 Mbps",
    metrics: { download: 95.2, upload: 18.6, ping: 22 },
  },
  {
    id: "slightly-slow",
    label: "やや遅め",
    level: "slightly-slow",
    title: "やや遅めです",
    subtitle: "このエリアでは下位22%の速度です",
    comparisonText: "平均より -25 Mbps",
    metrics: { download: 67.8, upload: 12.3, ping: 35 },
  },
  {
    id: "slow",
    label: "遅い",
    level: "slow",
    title: "遅いかもしれません",
    subtitle: "このエリアでは下位8%の速度です",
    comparisonText: "平均より -70 Mbps",
    metrics: { download: 22.4, upload: 5.1, ping: 68 },
  },
];
