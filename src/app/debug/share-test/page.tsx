import { ShareSpeedTestCard, SPEED_TEST_PRESETS } from "@/components/speed-test";

export const metadata = {
  title: "Share Test | Speed Test Card Debug",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShareTestDebugPage() {
  return (
    <main className="min-h-full bg-[#F3F4F6] px-4 py-10">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10">
        <header className="space-y-2 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase">
            Debug
          </p>
          <h1 className="text-2xl font-bold text-[#111827]">
            スピードテスト結果カード / シェア検証
          </h1>
          <p className="text-sm text-[#6B7280]">
            `/debug/share-test` — 各カードの「シェアする」で画像化し、Web Share API
            またはダウンロードで共有できます。
          </p>
        </header>

        <div className="grid justify-items-center gap-12 md:grid-cols-2 xl:grid-cols-3">
          {SPEED_TEST_PRESETS.map((preset) => (
            <section key={preset.id} className="flex flex-col items-center gap-3">
              <p className="text-sm font-semibold text-[#4B5563]">{preset.label}</p>
              <ShareSpeedTestCard
                level={preset.level}
                title={preset.title}
                subtitle={preset.subtitle}
                comparisonText={preset.comparisonText}
                metrics={preset.metrics}
                shareFilename={`speed-test-${preset.id}.png`}
              />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
