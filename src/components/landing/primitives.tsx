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
  label: string;
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
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.98]",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        variant === "primary" &&
          "bg-whatsapp text-navy-deep shadow-[0_12px_30px_-10px_var(--color-whatsapp)] hover:brightness-110",
        variant === "outline" &&
          "border border-cyan-accent/50 text-cyan-accent hover:bg-cyan-accent/10",
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
