export type SpeedTestLevel =
  | "very-fast"
  | "fast"
  | "normal"
  | "slightly-slow"
  | "slow";

export type SpeedTestIconType = "rocket" | "happy" | "neutral" | "sad" | "dead";

export interface SpeedTestMetrics {
  download: number;
  upload: number;
  ping: number;
}

export interface SpeedTestResultCardProps {
  level: SpeedTestLevel;
  title: string;
  subtitle: string;
  comparisonText: string;
  metrics: SpeedTestMetrics;
  className?: string;
}

export interface SpeedTestPreset extends SpeedTestResultCardProps {
  id: SpeedTestLevel;
  label: string;
}
