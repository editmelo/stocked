import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  /** Height of the logo in pixels; width auto-scales by the lockup's ratio. */
  size?: number;
};

// Intrinsic dimensions of public/stocked-logo.png (the horizontal lockup).
const LOGO_W = 2881;
const LOGO_H = 674;

export function Logo({ variant = "dark", size = 36 }: LogoProps) {
  const width = Math.round((size * LOGO_W) / LOGO_H);
  // For the dark-background variant, knock the whole lockup out to cream.
  const filter = variant === "light" ? "brightness(0) invert(1)" : undefined;

  return (
    <Image
      src="/stocked-logo.png"
      alt="Stocked"
      width={width}
      height={size}
      priority
      style={{ width: "auto", height: size, filter }}
    />
  );
}
