"use client";

import { useRef, useState } from "react";

import { captureCardElement, shareOrDownloadImage } from "@/lib/shareCardImage";

import { SpeedTestResultCard } from "./SpeedTestResultCard";
import type { SpeedTestResultCardProps } from "./types";

interface ShareSpeedTestCardProps extends SpeedTestResultCardProps {
  shareFilename?: string;
}

export function ShareSpeedTestCard({
  shareFilename = "speed-test-result.png",
  ...cardProps
}: ShareSpeedTestCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "shared" | "downloaded" | "error">(
    "idle",
  );

  async function handleShare() {
    if (!cardRef.current) {
      return;
    }

    setStatus("loading");

    try {
      const blob = await captureCardElement(cardRef.current);
      const result = await shareOrDownloadImage(blob, shareFilename);
      setStatus(result);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div ref={cardRef} className="inline-block">
        <SpeedTestResultCard {...cardProps} />
      </div>

      <button
        type="button"
        onClick={handleShare}
        disabled={status === "loading"}
        className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1F2937] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading"
          ? "画像を生成中..."
          : status === "shared"
            ? "シェアしました"
            : status === "downloaded"
              ? "画像を保存しました"
              : status === "error"
                ? "再試行する"
                : "シェアする"}
      </button>
    </div>
  );
}
