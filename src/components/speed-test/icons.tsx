import type { SpeedTestIconType } from "./types";

interface IconProps {
  type: SpeedTestIconType;
}

export function SpeedTestIcon({ type }: IconProps) {
  switch (type) {
    case "rocket":
      return (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden
        >
          <path
            d="M60 18C48 34 42 52 40 72L28 92L32 96L52 84C72 82 90 76 102 62C88 58 74 54 60 50C56 36 58 24 60 18Z"
            fill="white"
            fillOpacity="0.95"
          />
          <circle cx="68" cy="52" r="8" fill="#2B7FFF" />
          <path
            d="M24 96L36 84"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            d="M34 106L44 96"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />
          <path
            d="M18 86L28 76"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />
        </svg>
      );
    case "happy":
      return (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden
        >
          <circle cx="60" cy="60" r="48" fill="white" fillOpacity="0.95" />
          <circle cx="42" cy="52" r="6" fill="#4DA8FF" />
          <circle cx="78" cy="52" r="6" fill="#4DA8FF" />
          <path
            d="M38 74C46 86 74 86 82 74"
            stroke="#4DA8FF"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "neutral":
      return (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden
        >
          <circle cx="60" cy="60" r="48" fill="white" fillOpacity="0.95" />
          <circle cx="42" cy="52" r="6" fill="#8B95A5" />
          <circle cx="78" cy="52" r="6" fill="#8B95A5" />
          <line
            x1="42"
            y1="78"
            x2="78"
            y2="78"
            stroke="#8B95A5"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sad":
      return (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden
        >
          <circle cx="60" cy="60" r="48" fill="white" fillOpacity="0.95" />
          <circle cx="42" cy="52" r="6" fill="#FF9A3D" />
          <circle cx="78" cy="52" r="6" fill="#FF9A3D" />
          <path
            d="M38 84C46 72 74 72 82 84"
            stroke="#FF9A3D"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "dead":
      return (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden
        >
          <circle cx="60" cy="60" r="48" fill="white" fillOpacity="0.95" />
          <path
            d="M36 44L48 56M48 44L36 56"
            stroke="#FF6B7A"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M72 44L84 56M84 44L72 56"
            stroke="#FF6B7A"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M38 84C46 72 74 72 82 84"
            stroke="#FF6B7A"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
