import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 160, height: 67 },
  md: { width: 220, height: 92 },
  lg: { width: 280, height: 117 },
};

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Image
      src={variant === "light" ? "/images/logo-light.png" : "/images/logo-transparent.png"}
      alt="BAK Transport Wien"
      width={width}
      height={height}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}

export default Logo;
