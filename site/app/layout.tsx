import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stocked — Retail support you can count on.",
  description:
    "Stocked, LLC provides reliable, professional on-site stocking, merchandising, store resets, and brand ambassador services. 20+ years of hands-on retail experience. Based in Indianapolis, serving the Midwest.",
  keywords: [
    "retail support",
    "stocking services",
    "merchandising",
    "brand ambassador",
    "store reset",
    "plan-o-gram",
    "Indianapolis",
    "Midwest retail services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Decide before first paint whether the cinematic intro plays —
            once per session, and never when reduced motion is requested. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='stocked_intro_v1';if(!sessionStorage.getItem(k)&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.setAttribute('data-intro','1');sessionStorage.setItem(k,'1');}}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
