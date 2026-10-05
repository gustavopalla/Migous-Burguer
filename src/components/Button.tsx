import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-brand text-ink font-extrabold shadow-button hover:bg-brand-hover active:bg-brand-active",
  wine: "bg-wine text-white font-bold hover:bg-wine-hover",
  outline:
    "border-2 border-white/80 text-white font-bold hover:bg-white/10",
  outlineSoft:
    "border-2 border-line text-white font-bold hover:border-brand hover:text-brand",
} as const;

const sizes = {
  sm: "h-11 px-6 text-[13px]",
  md: "h-12 px-8 text-sm",
  lg: "h-[52px] px-10 text-sm",
} as const;

type Props = ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  return (
    <a
      className={`inline-flex flex-none items-center whitespace-nowrap rounded-full tracking-[0.02em] transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
