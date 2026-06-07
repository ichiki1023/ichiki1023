import { SpeedTestIcon } from "./icons";
import {
  CARD_BORDER_RADIUS,
  CARD_BOTTOM_HEIGHT,
  CARD_HEIGHT,
  CARD_TOP_HEIGHT,
  CARD_WIDTH,
  SPEED_TEST_THEMES,
} from "./theme";
import type { SpeedTestResultCardProps } from "./types";
import { WaveDivider } from "./WaveDivider";

function formatMetric(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

export function SpeedTestResultCard({
  level,
  title,
  subtitle,
  comparisonText,
  metrics,
  className = "",
}: SpeedTestResultCardProps) {
  const theme = SPEED_TEST_THEMES[level];

  return (
    <article
      data-speed-test-card
      className={`relative overflow-hidden bg-white shadow-[0_8px_32px_rgba(15,23,42,0.12)] ${className}`}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: CARD_BORDER_RADIUS,
      }}
    >
      <section
        className="relative"
        style={{
          height: CARD_TOP_HEIGHT,
          backgroundColor: theme.background,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="relative z-10 flex h-full flex-col px-6 pt-6 pb-10">
          <span className="inline-flex w-fit rounded-full bg-white/25 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
            評価
          </span>

          <div className="mt-4 flex flex-1 items-start justify-between gap-3">
            <div className="min-w-0 flex-1 pt-1">
              <h2 className="text-[28px] font-bold leading-tight text-white">
                {title}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                {subtitle}
              </p>
              <span
                className="mt-4 inline-flex rounded-xl bg-white px-3 py-1.5 text-[13px] font-bold"
                style={{ color: theme.comparisonText }}
              >
                {comparisonText}
              </span>
            </div>

            <div className="shrink-0 pt-1">
              <SpeedTestIcon type={theme.icon} />
            </div>
          </div>
        </div>

        <WaveDivider />
      </section>

      <section
        className="grid grid-cols-3 bg-white"
        style={{ height: CARD_BOTTOM_HEIGHT }}
      >
        {[
          { label: "ダウンロード", value: metrics.download, unit: "Mbps" },
          { label: "アップロード", value: metrics.upload, unit: "Mbps" },
          { label: "Ping", value: metrics.ping, unit: "ms" },
        ].map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center px-2 ${
              index > 0 ? "border-l border-[#E5E7EB]" : ""
            }`}
          >
            <span className="text-[11px] font-medium text-[#9CA3AF]">
              {item.label}
            </span>
            <span className="mt-1 text-[32px] font-bold leading-none text-[#374151]">
              {formatMetric(item.value)}
            </span>
            <span className="mt-1 text-[11px] text-[#9CA3AF]">{item.unit}</span>
          </div>
        ))}
      </section>
    </article>
  );
}
