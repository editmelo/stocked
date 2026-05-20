type LogoProps = {
  variant?: "dark" | "light";
  size?: number;
  showWordmark?: boolean;
};

export function Logo({ variant = "dark", size = 32, showWordmark = true }: LogoProps) {
  const stroke = variant === "dark" ? "#1b3a4b" : "#f9f7f0";
  const accent = variant === "dark" ? "#2e6e8e" : "#a9c3b0";
  const tan = "#dfd6c1";

  return (
    <div className="flex items-center gap-2.5">
      {/* Open box mark with the T sitting inside */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Box body */}
        <path
          d="M8 18 L8 40 L40 40 L40 18"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={tan}
          fillOpacity="0.5"
        />
        {/* Back flap */}
        <path
          d="M8 18 L4 10 L44 10 L40 18 Z"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Open front flap */}
        <path
          d="M8 18 L14 8 L34 8 L40 18"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* The T inside the box */}
        <path
          d="M16 22 L32 22 M24 22 L24 36"
          stroke={accent}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span
          className="font-display font-extrabold tracking-tight"
          style={{ color: stroke, fontSize: size * 0.62, lineHeight: 1 }}
        >
          stocked
        </span>
      )}
    </div>
  );
}
