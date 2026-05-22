"use client";

import { useEffect, useState } from "react";

/**
 * Cinematic "unboxing" intro overlay.
 *
 * The decision to play is made before first paint by an inline script in
 * layout.tsx, which sets html[data-intro="1"] (once per session, and never
 * under prefers-reduced-motion). This component renders the overlay markup
 * so it is present in the SSR HTML — CSS keeps it hidden unless the flag is
 * set, so there is no flash for repeat visitors. After the ~1.5s animation
 * the overlay unmounts; the real hero has been sitting underneath the whole
 * time, so there is no SEO or load-speed cost.
 */
export function HeroIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-intro") !== "1") {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => setVisible(false), 1750);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="hero-intro" role="presentation" aria-hidden="true">
      <button
        type="button"
        className="hero-intro__skip"
        onClick={() => {
          // Drop the flag so the shelf "stock-in" runs on its fast
          // (non-intro) delay instead of waiting out the intro timing.
          document.documentElement.removeAttribute("data-intro");
          setVisible(false);
        }}
      >
        Skip intro
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="hero-intro__stage">
        <div className="intro-box">
          <div className="intro-box__shadow" />

          {/* The T — rises out of the box on the final open */}
          <div className="intro-box__t">
            <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
              <path
                d="M9 14 H39 M24 14 V42"
                stroke="#2e6e8e"
                strokeWidth="9.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Box body + inner cavity */}
          <div className="intro-box__body">
            <div className="intro-box__inner" />
          </div>

          {/* Two top flaps: open → close → open */}
          <div className="intro-box__flap intro-box__flap--l" />
          <div className="intro-box__flap intro-box__flap--r" />
        </div>
      </div>
    </div>
  );
}
