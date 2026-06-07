import html2canvas from "html2canvas";

import {
  CARD_BORDER_RADIUS,
  CARD_HEIGHT,
  CARD_WIDTH,
} from "@/components/speed-test/theme";

const CAPTURE_SCALE = 3;

export async function captureCardElement(element: HTMLElement): Promise<Blob> {
  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale: CAPTURE_SCALE,
    useCORS: true,
    logging: false,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    windowWidth: CARD_WIDTH,
    windowHeight: CARD_HEIGHT,
    onclone: (documentClone) => {
      const clonedCard = documentClone.querySelector<HTMLElement>(
        "[data-speed-test-card]",
      );

      if (!clonedCard) {
        return;
      }

      clonedCard.style.width = `${CARD_WIDTH}px`;
      clonedCard.style.height = `${CARD_HEIGHT}px`;
      clonedCard.style.borderRadius = `${CARD_BORDER_RADIUS}px`;
      clonedCard.style.boxShadow = "none";
      clonedCard.style.transform = "none";
    },
  });

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/png", 1);
  });

  if (!blob) {
    throw new Error("画像の生成に失敗しました");
  }

  return blob;
}

export async function shareOrDownloadImage(
  blob: Blob,
  filename: string,
): Promise<"shared" | "downloaded"> {
  const file = new File([blob], filename, { type: "image/png" });

  if (
    typeof navigator !== "undefined" &&
    typeof navigator.share === "function" &&
    (!navigator.canShare || navigator.canShare({ files: [file] }))
  ) {
    await navigator.share({
      files: [file],
      title: "スピードテスト結果",
      text: "インターネット速度テストの結果をシェアします",
    });
    return "shared";
  }

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
  return "downloaded";
}
