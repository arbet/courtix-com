import { cn } from "@/lib/utils";

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cxlg" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="#60a5fa" />
            <stop offset="0.55" stopColor="#2563eb" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#cxlg)" />
        <path d="M11 20 L16 11 L21 20 L16 29 Z" fill="#fff" fillOpacity="0.95" />
        <path d="M19 20 L24 11 L29 20 L24 29 Z" fill="#fff" fillOpacity="0.55" />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.05rem] font-semibold tracking-tight text-fg">
          Courtix
        </span>
      )}
    </span>
  );
}
