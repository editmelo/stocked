import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  /** Height of the logo in pixels; width auto-scales by the lockup's ratio. */
  size?: number;
};

// Intrinsic dimensions of public/stocked-logo*.png (the horizontal lockups).
const LOGO_W = 2881;
const LOGO_H = 674;

export function Logo({ variant = "dark", size = 36 }: LogoProps) {
  const width = Math.round((size * LOGO_W) / LOGO_H);
  const src = variant === "light" ? "/stocked-logo-white.png" : "/stocked-logo.png";

  return (
    <Image
      src={src}
      alt="Stocked"
      width={width}
      height={size}
      priority
      style={{ width: "auto", height: size }}
    />
  );
}
