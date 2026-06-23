type ThemeKey = "lime" | "navy" | "purple" | "orange";

const LOGO_IMG: Record<ThemeKey, string> = {
  lime: "/img/logo-lime.png",
  navy: "/img/logo-navy.png",
  purple: "/img/logo-purple.png",
  orange: "/img/logo-lime.png",
};

export function Logo({ theme, size = "md" }: { theme: ThemeKey; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  return (
    <span className={`grid ${box} place-items-center rounded-xl bg-ink p-1`}>
      <img src={LOGO_IMG[theme]} alt="NC WEBS" className="h-full w-full object-contain" />
    </span>
  );
}
