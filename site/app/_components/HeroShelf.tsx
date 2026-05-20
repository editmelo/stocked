"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The hero "organized shelf" illustration.
 *
 * Each product on the shelves keeps its hover-lift and now also responds to a
 * click (or tap, or keyboard Enter): a "Did you know?" fact bubble pops up,
 * anchored to that product, with a tail pointing at it. One bubble at a time;
 * it dismisses on a second click, the ✕, Escape, an outside click, or resize.
 */

const FACTS = [
  "Empty shelves quietly send shoppers straight to your competitors — Stocked keeps product faced, full, and ready to sell.",
  "A tidy, well-merchandised shelf makes products look more valuable. Presentation is part of the sale.",
  "A plan-o-gram only pays off when it's followed exactly — Stocked reads and executes them with precision.",
  "Product stuck in the backroom is money that can't sell. Stocked gets it onto the floor, fast.",
  "A warm, professional Brand Ambassador turns browsers into buyers through real conversation.",
  "Store resets and new setups run smoother with experienced hands — less downtime, faster back to selling.",
  "Stocked brings 20+ years of hands-on retail experience to every single visit.",
  "Consistency wins in retail — Stocked shows up on schedule and delivers the same quality every time.",
  "Seasonal rushes don't have to mean chaos — project-based labor gives reliable hands right when you need them.",
  "An organized, customer-ready store tells shoppers they're in good hands before anyone says a word.",
];

type Product = { w: number; h: number; fill: string };

// Three shelves with distinct product layouts. indexOffset values: 0, 6, 10.
const LAYOUTS: Product[][] = [
  [
    { w: 14, h: 28, fill: "#2e6e8e" },
    { w: 18, h: 36, fill: "#7ba38c" },
    { w: 14, h: 30, fill: "#cbbd9e" },
    { w: 12, h: 26, fill: "#2e6e8e" },
    { w: 20, h: 38, fill: "#dfd6c1" },
    { w: 14, h: 28, fill: "#4f97ad" },
  ],
  [
    { w: 22, h: 32, fill: "#dfd6c1" },
    { w: 18, h: 32, fill: "#2e6e8e" },
    { w: 18, h: 32, fill: "#7ba38c" },
    { w: 22, h: 32, fill: "#cbbd9e" },
  ],
  [
    { w: 12, h: 24, fill: "#7ba38c" },
    { w: 16, h: 30, fill: "#2e6e8e" },
    { w: 14, h: 26, fill: "#cbbd9e" },
    { w: 16, h: 32, fill: "#4f97ad" },
    { w: 14, h: 28, fill: "#dfd6c1" },
    { w: 12, h: 22, fill: "#4c6a56" },
  ],
];

const ROW_OFFSETS = [0, 6, 10];
const MAX_BUBBLE_W = 236;

type Bubble = {
  index: number;
  fact: string;
  left: number;
  width: number;
  tailX: number;
  placement: "above" | "below";
  offset: number;
};

export function HeroShelf() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [bubble, setBubble] = useState<Bubble | null>(null);

  const close = useCallback(() => setBubble(null), []);

  const handleClick = useCallback(
    (index: number, row: number, e: React.MouseEvent<HTMLButtonElement>) => {
      // Second click on the same product closes the bubble.
      if (bubble?.index === index) {
        setBubble(null);
        return;
      }
      const wrap = wrapRef.current;
      if (!wrap) return;

      const wr = wrap.getBoundingClientRect();
      const br = e.currentTarget.getBoundingClientRect();
      const width = Math.min(MAX_BUBBLE_W, wr.width - 16);
      const boxCenterX = br.left + br.width / 2 - wr.left;
      const boxTop = br.top - wr.top;
      const boxBottom = br.bottom - wr.top;

      const left = Math.min(Math.max(boxCenterX - width / 2, 6), Math.max(wr.width - width - 6, 6));
      const tailX = Math.min(Math.max(boxCenterX - left, 24), width - 24);
      // Top shelf opens downward; lower shelves open upward.
      const placement: "above" | "below" = row === 1 ? "below" : "above";
      const offset = placement === "below" ? boxBottom + 12 : wr.height - boxTop + 12;

      setBubble({ index, fact: FACTS[index % FACTS.length], left, width, tailX, placement, offset });
    },
    [bubble],
  );

  useEffect(() => {
    if (!bubble) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
    };
  }, [bubble, close]);

  const bubbleStyle: React.CSSProperties = bubble
    ? {
        left: bubble.left,
        width: bubble.width,
        transformOrigin: `${bubble.tailX}px ${bubble.placement === "below" ? "0%" : "100%"}`,
        ...(bubble.placement === "below"
          ? { top: bubble.offset }
          : { bottom: bubble.offset }),
      }
    : {};

  const tailStyle: React.CSSProperties = bubble
    ? {
        left: bubble.tailX - 6,
        ...(bubble.placement === "below" ? { top: -6 } : { bottom: -6 }),
      }
    : {};

  return (
    <div ref={wrapRef} className="relative aspect-[5/6] w-full max-w-md mx-auto">
      {/* Floating box accent */}
      <div className="absolute -top-4 -right-2 animate-float">
        <svg width="92" height="92" viewBox="0 0 100 100" aria-hidden="true">
          <path
            d="M16 38 L16 80 L84 80 L84 38"
            fill="#dfd6c1"
            stroke="#1b3a4b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 38 L24 22 L76 22 L84 38 Z"
            fill="#efe9da"
            stroke="#1b3a4b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M50 22 L50 80" stroke="#1b3a4b" strokeWidth="2.5" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Main shelf card */}
      <div className="absolute inset-0 rounded-[2rem] bg-bone shadow-lifted border border-pine/10 overflow-hidden">
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Shelf label */}
          <div className="flex items-center justify-between text-xs font-semibold text-pine/60 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-sage-500" />
              Aisle organized
            </span>
            <span>100% stocked</span>
          </div>

          {/* Three shelves */}
          <div className="mt-6 flex-1 flex flex-col justify-around gap-4">
            {LAYOUTS.map((products, rowIdx) => (
              <div key={rowIdx} className="relative">
                <div className="flex items-end justify-center gap-1.5 px-2 min-h-[44px]">
                  {products.map((p, i) => {
                    const index = ROW_OFFSETS[rowIdx] + i;
                    return (
                      <button
                        key={i}
                        type="button"
                        className={`shelf-product${bubble?.index === index ? " is-active" : ""}`}
                        style={{ "--i": index } as React.CSSProperties}
                        onClick={(e) => handleClick(index, rowIdx + 1, e)}
                        aria-label="Show a retail fun fact"
                      >
                        <div
                          className="shelf-product__box rounded-t-md rounded-b-sm shadow-soft"
                          style={{
                            width: `${p.w * 1.4}px`,
                            height: `${p.h * 1.3}px`,
                            background: p.fill,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
                {/* Shelf line */}
                <div className="h-1.5 rounded-full bg-pine/80 mt-1 mx-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tap hint */}
      <p className="absolute -bottom-7 left-0 right-0 text-center text-xs text-pine/45">
        Tap a product for a retail fun fact
      </p>

      {/* Fun-fact bubble */}
      {bubble && (
        <div className="hero-fact-bubble absolute z-30" style={bubbleStyle} role="status">
          <div className="relative z-10 rounded-2xl bg-cream border border-pine/15 shadow-lifted">
            <div className="flex items-center justify-between gap-2 px-4 pt-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-teal-700">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2.5l2.3 6.4 6.4 2.3-6.4 2.3-2.3 6.4-2.3-6.4L3.3 11.2l6.4-2.3z"
                    fill="currentColor"
                  />
                </svg>
                Did you know?
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close fun fact"
                className="-mr-1 -mt-0.5 p-1 text-pine/35 hover:text-pine/80 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <p className="px-4 pb-4 pt-1.5 text-[13px] leading-relaxed text-pine/85 text-pretty">
              {bubble.fact}
            </p>
          </div>
          {/* Tail */}
          <span
            className="absolute size-3 bg-cream border border-pine/15 rotate-45"
            style={tailStyle}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}
