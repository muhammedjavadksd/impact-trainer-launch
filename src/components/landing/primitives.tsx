import { useEffect, useRef, useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { waLink, trackCta } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function WhatsAppCta({
  id,
  message,
  label,
  phone,
  variant = "primary",
  size = "md",
  className,
}: {
  id: string;
  message: string;
  label: ReactNode;
  phone?: string;
  variant?: "primary" | "outline" | "light";
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <a
      id={id}
      data-cta={id}
      href={waLink(message, phone)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta(id)}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-bold tracking-tight transition-all duration-150 active:scale-[0.98]",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        variant === "primary" &&
          "border-2 border-navy-deep bg-whatsapp text-navy-deep shadow-[5px_5px_0_0_var(--color-navy-deep)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-navy-deep)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-navy-deep)]",
        variant === "outline" &&
          "border-2 border-cyan-accent text-cyan-accent hover:bg-cyan-accent hover:text-navy-deep",
        variant === "light" && "bg-background text-navy hover:bg-secondary",
        className,
      )}
    >
      <MessageCircle className="size-5" strokeWidth={2.2} />
      {label}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.25em]",
            light ? "text-cyan-accent" : "text-royal",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          light ? "text-background" : "text-navy-deep",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
