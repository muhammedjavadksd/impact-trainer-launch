export const PHONE_PRIMARY = "9562013333";
export const PHONE_SECONDARY = "9495384338";

const INTL = (n: string) => `91${n.replace(/\D/g, "")}`;

export const WA_MESSAGES = {
  details:
    "Hi, I'm interested in the Train the Trainer Programme 2026. Please send me the complete programme details.",
  register:
    "Hi, I'm interested in registering for the Train the Trainer Programme 2026. I'd like to know about seat availability and registration.",
  sticky:
    "Hi, I'm interested in the Train the Trainer Programme 2026. Please share the programme details and registration process.",
  bonus:
    "Hi, I'd like to know more about the bonus add-ons included in the Train the Trainer Programme 2026.",
  faq: "Hi, I have a question about the Train the Trainer Programme 2026.",
} as const;

export function waLink(message: string, phone: string = PHONE_PRIMARY) {
  return `https://wa.me/${INTL(phone)}?text=${encodeURIComponent(message)}`;
}

export function trackCta(id: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "whatsapp_cta_click", cta_id: id });
}
