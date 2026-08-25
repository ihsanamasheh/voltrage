import { cn } from "@/lib/utils";

/**
 * Aspect-locked frame that holds an image slot's exact final proportions.
 * Drop a real <img> in as `src` once brand photography is available; the
 * layout does not change.
 */
export function ImageFrame({
  ratio = "4 / 5",
  label,
  className,
  src,
  alt,
  priority = false,
  width,
  height,
  frameless = false,
}: {
  ratio?: string;
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  /** Transparent-subject mode: no frame, no crop, contact shadow only. */
  frameless?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        frameless
          ? "bg-transparent"
          : "bg-surface before:pointer-events-none before:absolute before:inset-0 before:border before:border-hairline",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            frameless
              ? "object-contain object-bottom [filter:drop-shadow(0_28px_38px_rgba(0,0,0,0.55))]"
              : "object-cover",
          )}
        />
      ) : (
        <div
          role="img"
          aria-label={alt ?? label}
          className="flex h-full w-full items-end p-4 sm:p-5"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(135deg,var(--color-foreground)_0_1px,transparent_1px_14px)]"
          />
          <span className="eyebrow relative z-10">{label}</span>
        </div>
      )}
    </div>
  );
}
