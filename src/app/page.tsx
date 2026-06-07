import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-[#111827]">
        Speed Test Share Card
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-[#6B7280]">
        スピードテスト結果カードの5パターンと、画像シェア機能のデバッグページです。
      </p>
      <Link
        href="/debug/share-test"
        className="rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1F2937]"
      >
        デバッグページを開く
      </Link>
    </main>
  );
}
