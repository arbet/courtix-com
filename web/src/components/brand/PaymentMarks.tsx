// Full-color card scheme brand marks. REQUIRED by Wise / Visa / Mastercard
// merchant rules, do not convert to monochrome or replace with text.
import { cn } from "@/lib/utils";

export function VisaMark({ className, title = "Visa" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 780 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("h-8 w-auto shrink-0", className)}
    >
      <title>{title}</title>
      <rect width="780" height="500" rx="40" fill="#1a1f71" />
      <path
        d="M293.2 348.7l33.4-195.8h53.4l-33.4 195.8zM540.7 157.3c-10.5-4-27.1-8.3-47.7-8.3-52.6 0-89.7 26.5-89.9 64.5-.3 28.1 26.5 43.7 46.7 53.1 20.8 9.6 27.8 15.7 27.7 24.3-.1 13.1-16.6 19.1-31.9 19.1-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.8c12.5 5.5 35.6 10.2 59.6 10.5 55.9 0 92.2-26.2 92.5-66.8.2-22.3-14-39.2-44.8-53.2-18.6-9.1-30.1-15.1-30-24.3 0-8.1 9.7-16.8 30.6-16.8 17.4-.3 30.1 3.5 39.9 7.5l4.8 2.3 7.2-42.4zM676.3 152.9h-41.2c-12.8 0-22.3 3.5-27.9 16.2l-79.2 179.6h56s9.1-24.1 11.2-29.4c6.1 0 60.5.1 68.3.1 1.6 6.9 6.5 29.3 6.5 29.3h49.5l-43.2-195.8zm-65.8 126.4c4.4-11.3 21.3-54.7 21.3-54.7-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.8 12.4 56.5h-44.4zM232.8 152.9l-52.2 133.5-5.6-27.1c-9.7-31.2-39.9-65.1-73.7-82l47.7 171.2h56.4l83.9-195.6h-56.5z"
        fill="#fff"
      />
      <path
        d="M131.9 152.9H46.5l-.7 4c66.9 16.2 111.2 55.4 129.6 102.5l-18.7-90.1c-3.2-12.4-12.7-16-24.8-16.4z"
        fill="#f9a533"
      />
    </svg>
  );
}

export function MastercardMark({ className, title = "Mastercard" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 780 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("h-8 w-auto shrink-0", className)}
    >
      <title>{title}</title>
      <rect width="780" height="500" rx="40" fill="#16366f" />
      <circle cx="312" cy="250" r="150" fill="#d9222a" />
      <circle cx="468" cy="250" r="150" fill="#ee9f2d" />
      <path
        d="M390 130.7c-39.4 31.2-64.6 79.4-64.6 133.3s25.2 102.1 64.6 133.3c39.4-31.2 64.6-79.4 64.6-133.3s-25.2-102.1-64.6-133.3z"
        fill="#eb001b"
      />
    </svg>
  );
}

export function PaymentMarks({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeCls = size === "sm" ? "h-6" : size === "lg" ? "h-10" : "h-8";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <VisaMark className={sizeCls} />
      <MastercardMark className={sizeCls} />
    </div>
  );
}
