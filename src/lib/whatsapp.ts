export const PHONE = "9495384338";

const INTL = (n: string) => `91${n.replace(/\D/g, "")}`;

export const WA_MESSAGES = {
  details:
    "Hi, I'm interested in the Train the Trainer Programme 2026. Please send me the complete programme details.",
  register:
    "Hi, I want to register for the Train the Trainer Programme 2026 before the Early Bird offer ends. Please confirm seat availability.",
  sticky:
    "Hi, I'm interested in the Train the Trainer Programme 2026. Only 30 seats — please share details and how to register.",
  bonus:
    "Hi, I'd like to know more about the 14 bonus modules included in the Train the Trainer Programme.",
  faq: "Hi, I have a question about the Train the Trainer Programme 2026.",
  social:
    "Hi, I saw photos from a previous Train the Trainer batch and I'd like to join the next one. Can you share the details?",
  transformation:
    "Hi, I'd like to know how the Train the Trainer Programme can help me move from repetitive training to engaging, confident delivery.",
  schedule:
    "Hi, I'd like to know the full schedule — sessions, challenges and mentor support — for the Train the Trainer Programme 2026.",
  curriculum:
    "Hi, I'd like to know more about the curriculum and what exactly is covered in the Train the Trainer Programme.",
  format:
    "Hi, I'd like to confirm the programme format — duration, sessions and languages — for the Train the Trainer Programme.",
  audience:
    "Hi, I'd like to check if the Train the Trainer Programme is a good fit for my profession.",
  resources:
    "Hi, I'd like to know more about the training resource library included in the Train the Trainer Programme.",
  longterm:
    "Hi, I'd like to know more about the lifetime membership and mentoring benefits of the Train the Trainer Programme.",
  mentors: "Hi, I'd like to know more about the mentors leading the Train the Trainer Programme.",
  value:
    "Hi, I'd like to go through everything included in the Train the Trainer Programme before registering.",
  urgency:
    "Hi, are seats still available for the Train the Trainer Programme 2026? I don't want to miss the Early Bird price.",
} as const;

export function waLink(message: string, phone: string = PHONE) {
  return `https://wa.me/${INTL(phone)}?text=${encodeURIComponent(message)}`;
}

export function callLink(phone: string = PHONE) {
  return `tel:+91${phone.replace(/\D/g, "")}`;
}

export function trackCta(id: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "whatsapp_cta_click", cta_id: id });
}
