import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-display-md font-semibold text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
