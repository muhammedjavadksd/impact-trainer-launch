import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/landing/Landing";

const title = "Train the Trainer Program 2026 | Mark Career Academy";
const description =
  "Train the Trainer Program 2026 — 12 live sessions, 20 challenges, 3 mentors, bonus modules and lifetime mentoring. Only 30 seats. Chat on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
