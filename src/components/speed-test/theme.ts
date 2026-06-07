import type { SpeedTestIconType, SpeedTestLevel } from "./types";

export const CARD_WIDTH = 343;
export const CARD_HEIGHT = 500;
export const CARD_TOP_HEIGHT = 325;
export const CARD_BOTTOM_HEIGHT = 175;
export const CARD_BORDER_RADIUS = 20;

export interface SpeedTestTheme {
  background: string;
  comparisonText: string;
  icon: SpeedTestIconType;
}

export const SPEED_TEST_THEMES: Record<SpeedTestLevel, SpeedTestTheme> = {
  "very-fast": {
    background: "#2B7FFF",
    comparisonText: "#2B7FFF",
    icon: "rocket",
  },
  fast: {
    background: "#4DA8FF",
    comparisonText: "#2B7FFF",
    icon: "happy",
  },
  normal: {
    background: "#8B95A5",
    comparisonText: "#6B7280",
    icon: "neutral",
  },
  "slightly-slow": {
    background: "#FF9A3D",
    comparisonText: "#E67E22",
    icon: "sad",
  },
  slow: {
    background: "#FF6B7A",
    comparisonText: "#E8455C",
    icon: "dead",
  },
};
