import { useEffect, useRef, useState, type RefObject } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  X,
  Check,
  ArrowRight,
  Mic,
  Layers,
  Presentation,
  Lightbulb,
  PenTool,
  MessagesSquare,
  Network,
  Compass,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Users,
  Gift,
  Database,
  Award,
  Infinity as InfinityIcon,
  GraduationCap,
  Stethoscope,
  Brain,
  Scale,
  Shield,
  Landmark,
  Briefcase,
  HeartHandshake,
  School,
  UsersRound,
  BookOpen,
  Video,
  Headphones,
  MonitorPlay,
  Radio,
} from "lucide-react";
import { Reveal, WhatsAppCta, SectionHeading } from "./primitives";
import { WA_MESSAGES, PHONE, waLink, callLink, trackCta } from "@/lib/whatsapp";
import photo1 from "@/assets/batch-photo-1.jpg";
import photo2 from "@/assets/batch-photo-2.jpg";
import photo3 from "@/assets/batch-photo-3.jpg";
import photo4 from "@/assets/batch-photo-4.jpg";
import mentorSuhail from "@/assets/mentor-suhail.png";
import mentorShahidh from "@/assets/mentor-shahidh.jpg";
import mentorTrainer3 from "@/assets/mentor-trainer-3.jpg";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Who It's For", href: "#who" },
  { label: "What You'll Learn", href: "#learn" },
  { label: "Challenges", href: "#challenges" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

const PHOTOS = [
  { src: photo1, alt: "Previous batch participants of the Train the Trainer Program in Calicut" },
  {
    src: photo2,
    alt: "Trainers, teachers and professionals at a Train the Trainer Program batch",
  },
  { src: photo3, alt: "Previous batch participants group photo indoors" },
  { src: photo4, alt: "Previous batch participants group photo, panoramic view" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-royal bg-navy-deep">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-background sm:text-2xl"
        >
          Mark Career <span className="text-cyan-accent">Academy</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-background/70 transition-colors hover:text-cyan-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <WhatsAppCta
          id="nav_whatsapp_cta"
          message={WA_MESSAGES.details}
          label={<span className="hidden sm:inline">WhatsApp</span>}
          className="shrink-0 px-3 sm:px-6"
        />
      </div>
    </header>
  );
}

function HeroImage() {
  return (
    <div className="overflow-hidden rounded-[2rem] border-2 border-background/20 shadow-hard-amber">
      <img
        src={photo1}
        alt="Previous batch of the Train the Trainer Program in Calicut"
        className="h-[260px] w-full object-cover object-center sm:h-[420px]"
        loading="eager"
      />
    </div>
  );
}

function Hero({ heroRef }: { heroRef: RefObject<HTMLElement | null> }) {
  return (
    <section id="top" ref={heroRef} className="surface-gradient relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute -right-16 -top-16 hidden size-72 rotate-12 bg-royal sm:block sm:size-96" />
      <div className="pointer-events-none absolute -right-8 top-40 hidden size-16 rotate-45 border-4 border-gold sm:block sm:size-24" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy-deep bg-royal px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy-deep">
              2026 Edition · Calicut
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-background bg-transparent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-background">
              3 Days Residential Program
            </span>
          </div>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-background sm:text-6xl lg:text-7xl">
            TRAIN THE
            <br />
            <span className="text-gradient">TRAINER PROGRAM</span>
          </h1>
          <div className="mb-10 mt-6 lg:hidden">
            <HeroImage />
            <div className="mt-6">
              <WhatsAppCta
                id="hero_inline_whatsapp_cta"
                message={WA_MESSAGES.sticky}
                label="Chat on WhatsApp"
                size="lg"
                className="w-full border-background shadow-[5px_5px_0_0_var(--color-background)] hover:shadow-[7px_7px_0_0_var(--color-background)] active:shadow-[2px_2px_0_0_var(--color-background)]"
              />
            </div>
          </div>
          <p className="mt-5 font-display text-xl font-semibold text-background/90 sm:text-2xl">
            Transform the way you teach, train &amp; lead.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">
            Make your training engaging, practical and impactful — in just 1 month.
          </p>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Only 30 Seats · Early Bird Offer
          </p>
        </Reveal>
        <Reveal delay={120} className="hidden lg:block">
          <HeroImage />
        </Reveal>
      </div>
    </section>
  );
}

function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const slides = Array.from(track.children) as HTMLElement[];
      indexRef.current = (indexRef.current + 1) % slides.length;
      const next = slides[indexRef.current];
      if (next) track.scrollTo({ left: next.offsetLeft, behavior: "smooth" });
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Previous Batch Participants"
          title="Real people. Real batches."
          sub="People from different professions have already experienced the program."
        />
        <div
          ref={trackRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {PHOTOS.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 80}
              className="w-[85vw] shrink-0 snap-center sm:w-[55vw] lg:w-[31%]"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-64 w-full rounded-3xl border-2 border-navy-deep object-cover shadow-hard sm:h-80"
              />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="social_whatsapp_cta"
              message={WA_MESSAGES.social}
              label="Ask About the Next Batch"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PAINS = [
  "Audience gets bored",
  "Training becomes repetitive",
  "Participants lose attention",
  "Difficult to explain concepts simply",
  "Lack of engaging activities",
];

function PainPoints() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Real Problem"
          title="Do You Know Your Subject — But Struggle to Make People Listen?"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {PAINS.map((p, i) => (
            <Reveal key={p} delay={i * 40}>
              <div className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card p-4">
                <X className="mt-0.5 size-5 shrink-0 text-destructive" />
                <p className="text-sm text-card-foreground">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="surface-gradient mt-10 rounded-3xl p-8 text-center sm:p-10">
            <p className="font-display text-xl font-semibold leading-relaxed text-background sm:text-2xl">
              <span className="text-cyan-accent">TRAIN THE TRAINER PROGRAM</span> helps you make
              your training more engaging, interactive, practical and impactful.
            </p>
            <div className="mt-7 flex justify-center">
              <WhatsAppCta
                id="pain_whatsapp_cta"
                message={WA_MESSAGES.details}
                label="Fix This — Chat on WhatsApp"
                size="lg"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const BEFORE = [
  "Repetitive training",
  "Low audience engagement",
  "One-way presentation",
  "Difficulty handling participants",
  "Limited activities",
  "Lack of confidence",
];
const AFTER = [
  "Engaging delivery",
  "Interactive sessions",
  "Better presentation skills",
  "Practical activities",
  "More confident communication",
  "Memorable learning experiences",
];

function Transformation() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Transformation" title="Before → After" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border-2 border-border bg-muted p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Before
              </p>
              <ul className="space-y-3">
                {BEFORE.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-foreground/70">
                    <X className="size-4 shrink-0 text-destructive" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="surface-gradient h-full rounded-3xl p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-accent">
                After
              </p>
              <ul className="space-y-3">
                {AFTER.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-background">
                    <Check className="size-4 shrink-0 text-whatsapp" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-10 grid items-center gap-8 rounded-3xl border-2 border-border bg-card p-6 lg:grid-cols-2">
            <img
              src={photo2}
              alt="Participants practising during a previous Train the Trainer Program batch"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80"
            />
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-deep">
                More Than Training. It's Trainer Transformation.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Participants don't simply consume content. Every module moves through a full
                practice loop, with mentors watching your progress along the way.
              </p>
              <p className="mt-5 font-display text-base font-semibold text-royal">
                Learn → Practice → Take Challenges → Receive Feedback → Improve
              </p>
              <div className="mt-6">
                <WhatsAppCta
                  id="transformation_whatsapp_cta"
                  message={WA_MESSAGES.transformation}
                  label="See If This Fits You"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STATS = [
  { n: "12", l: "Live Sessions" },
  { n: "20", l: "Challenges" },
  { n: "3", l: "Mentors" },
  { n: "Regular", l: "Feedback" },
];

function Stats() {
  return (
    <section className="surface-gradient py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 90}>
              <div className="rounded-3xl border-2 border-royal bg-navy p-6 text-center">
                <p
                  className={`font-display font-extrabold text-cyan-accent ${
                    s.n.length > 2 ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
                  }`}
                >
                  {s.n}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-background/70">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="schedule_whatsapp_cta"
              message={WA_MESSAGES.schedule}
              label="Get the Full Schedule"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CURRICULUM = [
  {
    icon: Mic,
    t: "Public Speaking",
    d: "Build confidence and improve your ability to speak and influence.",
  },
  {
    icon: Layers,
    t: "Module Preparation",
    d: "Learn how to structure training content effectively.",
  },
  {
    icon: Presentation,
    t: "Module Presentation",
    d: "Learn how to present your training content in an engaging way.",
  },
  {
    icon: Lightbulb,
    t: "Training Ideas & Insights",
    d: "Discover practical ideas for making training more interesting.",
  },
  {
    icon: PenTool,
    t: "Training Design & Development",
    d: "Understand how to design and develop meaningful training experiences.",
  },
  {
    icon: MessagesSquare,
    t: "Communication & Presentation Mastery",
    d: "Strengthen communication, presentation and delivery skills.",
  },
  {
    icon: Network,
    t: "Transactional Analysis",
    d: "Understand interaction patterns and improve communication.",
  },
  { icon: Compass, t: "Enneagram", d: "Explore personality and behavioural patterns." },
];

function Curriculum() {
  const [active, setActive] = useState(0);
  return (
    <section id="learn" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Curriculum" title="What You Will Master" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CURRICULUM.map((c, i) => {
            const Icon = c.icon;
            const on = active === i;
            return (
              <Reveal key={c.t} delay={i * 50}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`h-full w-full rounded-3xl border-2 p-6 text-left transition-all duration-300 ${
                    on
                      ? "-translate-y-1 border-navy-deep bg-navy-deep shadow-hard-amber"
                      : "border-border bg-card hover:-translate-y-1"
                  }`}
                >
                  <Icon className={`size-7 ${on ? "text-cyan-accent" : "text-royal"}`} />
                  <h3
                    className={`mt-4 font-display text-base font-bold ${on ? "text-background" : "text-navy-deep"}`}
                  >
                    {c.t}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${on ? "text-background/70" : "text-muted-foreground"}`}
                  >
                    {c.d}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="curriculum_whatsapp_cta"
              message={WA_MESSAGES.curriculum}
              label="Ask About the Curriculum"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CHALLENGE_TYPES = [
  { icon: MessageCircle, t: "WhatsApp Challenges" },
  { icon: Headphones, t: "Audio Challenges" },
  { icon: Video, t: "Video Challenges" },
  { icon: MonitorPlay, t: "Presentation Challenges" },
  { icon: Radio, t: "Live Challenges" },
];

function Challenges() {
  const steps = ["Learn", "Challenge", "Practice", "Feedback", "Improve"];
  return (
    <section id="challenges" className="surface-gradient py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="Practical Challenges"
          title="You Won't Just Watch. You'll Do."
          sub="20 challenges and regular feedback — this is not a passive online course."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {CHALLENGE_TYPES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={i * 70}>
                <div className="h-full rounded-3xl border-2 border-royal bg-navy p-6 text-center">
                  <Icon className="mx-auto size-7 text-cyan-accent" />
                  <p className="mt-3 text-sm font-semibold text-background">{c.t}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className="rounded-full border-2 border-navy-deep bg-cyan-accent px-5 py-2 text-sm font-bold text-navy-deep">
                  {s}
                </span>
                {i < steps.length - 1 && <ArrowRight className="size-4 text-background/40" />}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="challenges_whatsapp_cta"
              message={WA_MESSAGES.details}
              label="Get Full Details on WhatsApp"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FORMAT = [
  { k: "Duration", v: "1 Month" },
  { k: "Languages", v: "Malayalam & English" },
  { k: "Format", v: "Live + Challenge-Based Learning" },
  { k: "Feedback", v: "Regular Feedback" },
];

function Format() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Program Format" title="Everything at a glance" />
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border-2 border-border bg-card">
          {FORMAT.map((f, i) => (
            <Reveal key={f.k} delay={i * 40}>
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="text-sm text-muted-foreground">{f.k}</span>
                <span className="text-right font-display text-sm font-bold text-navy-deep">
                  {f.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="format_whatsapp_cta"
              message={WA_MESSAGES.format}
              label="Confirm Program Format"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const BONUSES = [
  "Enneagram",
  "Transactional Analysis",
  "Teachers' Training",
  "Public Speaking",
  "Online Icebreakers & Energizers",
  "Corporate Train The Trainer Program",
  "Effective Parenting",
  "Presentation Skills",
  "Mentoring Skills",
  "Lead Generation Management",
  "Leadership Mastery",
  "Change Management",
  "Success Habits of Powerful Leaders",
  "51 Ways to Motivate Your Employee",
];

function Bonuses() {
  return (
    <section id="bonuses" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Included"
          title="BONUS ADD-ONS"
          sub="14 additional training modules included with the program."
        />
        <div className="mt-10 grid gap-2.5 sm:grid-cols-2">
          {BONUSES.map((b, i) => (
            <Reveal key={b} delay={i * 20}>
              <div className="flex items-center gap-3 rounded-xl border-2 border-border bg-card px-4 py-3">
                <Gift className="size-4 shrink-0 text-royal" />
                <p className="font-display text-sm font-bold text-navy-deep">
                  {String(i + 1).padStart(2, "0")}. {b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="bonus_whatsapp_cta"
              message={WA_MESSAGES.bonus}
              label="Unlock All 14 Bonuses"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="surface-gradient py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-accent">
            Resource Library
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-background sm:text-4xl">
            A Complete Training Resource Library
          </h2>
          <p className="mt-6 font-display text-5xl font-extrabold text-gradient">2 TB+</p>
          <p className="text-sm uppercase tracking-[0.2em] text-background/60">
            Training Resources
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Videos",
              "Audios",
              "Presentations",
              "Training resources",
              "Life Skills Training Kit",
            ].map((r) => (
              <li key={r} className="flex items-center gap-3 text-sm text-background/85">
                <Check className="size-4 text-whatsapp" />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppCta
              id="resources_whatsapp_cta"
              message={WA_MESSAGES.resources}
              label="Ask About Resources"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid gap-4 relative sm:h-72 lg:h-80">
            {[Database, BookOpen, Video].map((Icon, i) => (
              <div
                key={i}
                className={`w-full rounded-3xl border-2 border-royal bg-navy-deep p-6 shadow-hard-amber sm:absolute sm:w-64 lg:w-80 ${
                  [
                    "sm:top-0 sm:left-0",
                    "sm:top-14 sm:left-[2.2rem]",
                    "sm:top-28 sm:left-[4.4rem]",
                  ][i]
                }`}
              >
                <Icon className="size-7 text-cyan-accent" />
                <p className="mt-3 font-display text-base font-semibold text-background">
                  {
                    [
                      "2 TB of training material",
                      "Life Skills Training Kit",
                      "Videos, audios & decks",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Longterm() {
  const items = [
    {
      icon: InfinityIcon,
      t: "Lifetime Membership",
      d: "Lifetime membership of Mark Career Academy.",
    },
    {
      icon: HeartHandshake,
      t: "Lifetime Mentoring",
      d: "Continued mentoring after the program.",
    },
    { icon: Award, t: "Certificate", d: "Certificate on course completion." },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Long-Term Benefit"
          title="We Grow You Into a Professional Trainer."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.t} delay={i * 90}>
                <div className="h-full rounded-3xl border-2 border-border bg-card p-7 text-center">
                  <Icon className="mx-auto size-8 text-royal" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-deep">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="longterm_whatsapp_cta"
              message={WA_MESSAGES.longterm}
              label="Ask About Lifetime Benefits"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Mentors() {
  const mentors = [
    {
      role: "Pilot Faculty",
      name: "Suhail C.P.",
      desc: "HRD Trainer & Life Coach",
      photo: mentorSuhail,
      initials: "SC",
    },
    {
      role: "Corporate Trainer",
      name: "Shahidh Mohammed",
      desc: "",
      photo: mentorShahidh,
      initials: "SM",
    },
    {
      role: "Linguistic Coach",
      name: "Reshma CJ",
      desc: "",
      photo: mentorTrainer3,
      initials: "RC",
    },
  ];
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Mentors" title="Learn from experienced trainers" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-border bg-card">
                {m.photo ? (
                  <div className="surface-gradient flex h-auto w-full items-end justify-center sm:h-[28rem]">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-auto w-full object-contain sm:h-full"
                    />
                  </div>
                ) : (
                  <div className="p-7 pb-0">
                    <div className="surface-gradient flex size-16 items-center justify-center rounded-2xl font-display text-lg font-bold text-background">
                      {m.initials}
                    </div>
                  </div>
                )}
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">
                    {m.role}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy-deep">{m.name}</h3>
                  {m.desc && <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="mentors_whatsapp_cta"
              message={WA_MESSAGES.mentors}
              label="Ask About the Mentors"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const AUDIENCE = [
  { icon: GraduationCap, t: "Teachers" },
  { icon: Mic, t: "Trainers" },
  { icon: Briefcase, t: "Entrepreneurs" },
  { icon: Stethoscope, t: "Doctors" },
  { icon: Brain, t: "Psychologists" },
  { icon: Scale, t: "Advocates" },
  { icon: Shield, t: "Police Officers" },
  { icon: Landmark, t: "Government Employees" },
  { icon: BookOpen, t: "Students" },
  { icon: UsersRound, t: "Parents" },
  { icon: School, t: "School Leaders" },
  { icon: Users, t: "Social Workers" },
];

function WhoFor() {
  return (
    <section id="who" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who is this for?"
          title="If You Teach, Train, Coach or Lead People — This Is For You."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {AUDIENCE.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.t} delay={i * 40}>
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl border-2 border-border bg-card p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                  <Icon className="size-7 text-royal" />
                  <p className="text-sm font-semibold text-navy-deep">{a.t}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            And anyone who wants to become a more powerful and impactful trainer.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-8 flex justify-center">
            <WhatsAppCta
              id="audience_whatsapp_cta"
              message={WA_MESSAGES.audience}
              label="Check If I Qualify"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const VALUE = [
  "12 Live Sessions",
  "20 Challenges",
  "3 Mentors",
  "Regular Feedback",
  "Training Resources",
  "Life Skills Training Kit",
  "Bonus Training Modules",
  "Lifetime Membership",
  "Lifetime Mentoring",
  "Certificate on Course Completion",
];

function Pricing() {
  return (
    <section id="pricing" className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Investment" title="Simple, transparent pricing" />
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[2rem] border-2 border-navy-deep bg-card shadow-hard">
            <div className="surface-gradient px-8 py-10 text-center">
              <p className="text-sm text-background/60 line-through">₹12,000</p>
              <p className="mt-2 font-display text-6xl font-extrabold text-gradient">₹8,500</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Early Bird Offer — Save ₹3,500
              </p>
              <p className="mt-2 text-sm text-background/70">
                Price goes up to ₹12,000 after November 1
              </p>
            </div>
            <div className="px-8 py-8">
              <p className="text-center font-display text-lg font-bold text-navy-deep">
                Only 30 Seats — Once They're Gone, This Batch Closes
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {VALUE.map((v) => (
                  <li key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-whatsapp" /> {v}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <WhatsAppCta
                  id="pricing_whatsapp_cta"
                  message={WA_MESSAGES.register}
                  label="Reserve My Seat Before Nov 1"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "Who can attend the Train the Trainer Program?",
    a: "Trainers, coaches, teachers, school leaders, social workers, parents, entrepreneurs, doctors, psychologists, advocates, police officers, government employees, students and anyone who trains, teaches, leads or influences people.",
  },
  {
    q: "I'm new to training, or already an experienced trainer — will this help me?",
    a: "Yes, either way. Beginners learn step by step through practice and feedback. Experienced trainers sharpen delivery, engagement and confidence with new ideas and activities.",
  },
  {
    q: "What's the format?",
    a: "1 month, 12 live sessions and 20 practical challenges (WhatsApp, audio, video, presentation and live), in Malayalam & English, with regular feedback.",
  },
  {
    q: "What do I get with the program?",
    a: "14 bonus modules (Enneagram, Transactional Analysis, Public Speaking, Leadership Mastery and more), 2 TB+ of training resources, a Life Skills Training Kit, lifetime membership and mentoring, and a certificate on completion.",
  },
  {
    q: "What is the registration fee?",
    a: "₹12,000 — but it's ₹8,500 if you register before November 1. Only 30 seats, so early registration also secures your spot.",
  },
  {
    q: "How can I register?",
    a: "Message us on WhatsApp — we'll confirm seat availability and walk you through registration in minutes.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display text-base font-semibold text-navy-deep">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="faq_whatsapp_cta"
              message={WA_MESSAGES.faq}
              label="Still Have Questions? Ask on WhatsApp"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={photo1}
        alt="Group photograph of a previous Train the Trainer Program batch"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="surface-gradient absolute inset-0 opacity-90" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-background sm:text-5xl">
            Your Knowledge Can Change People.
          </h2>
          <p className="mt-4 text-lg text-background/80">
            Only 30 seats. Early Bird price ends November 1. Don't miss this batch.
          </p>
          <p className="mt-8 font-display text-xl font-bold text-cyan-accent">
            Start Your Trainer Journey Today
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCta
              id="final_whatsapp_cta"
              message={WA_MESSAGES.register}
              label={`Chat on WhatsApp · ${PHONE}`}
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-14 pb-28 lg:pb-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-background">Mark Career Academy</p>
          <p className="mt-2 text-sm text-background/60">Train the Trainer Program</p>
        </div>
        <div className="space-y-2 text-sm text-background/70">
          <a
            href={callLink()}
            data-cta="footer_phone_cta"
            onClick={() => trackCta("footer_phone_cta")}
            className="flex items-center gap-2 hover:text-cyan-accent"
          >
            <Phone className="size-4" /> {PHONE}
          </a>
          <a
            href="mailto:markcareeracademy@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-accent"
          >
            <Mail className="size-4" /> markcareeracademy@gmail.com
          </a>
          <a
            href="https://markcareeracademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-accent"
          >
            <Globe className="size-4" /> markcareeracademy.com
          </a>
        </div>
        <div className="lg:text-right">
          <WhatsAppCta
            id="footer_whatsapp_cta"
            message={WA_MESSAGES.details}
            label="Chat on WhatsApp"
          />
          <p className="mt-4 text-xs text-background/40">
            © {new Date().getFullYear()} Mark Career Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ show }: { show: boolean }) {
  return (
    <>
      <a
        id="sticky_whatsapp_cta"
        data-cta="sticky_whatsapp_cta"
        href={waLink(WA_MESSAGES.sticky)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCta("sticky_whatsapp_cta")}
        aria-hidden={!show}
        tabIndex={show ? 0 : -1}
        className={`fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2.5 rounded-full border-2 border-navy-deep bg-whatsapp px-6 py-4 text-base font-bold text-navy-deep shadow-hard transition-all duration-300 lg:hidden ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <MessageCircle className="size-5" /> Chat on WhatsApp
      </a>
      <a
        id="floating_whatsapp_cta"
        data-cta="floating_whatsapp_cta"
        href={waLink(WA_MESSAGES.sticky)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCta("floating_whatsapp_cta")}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-7 right-7 z-50 hidden size-14 items-center justify-center rounded-full border-2 border-navy-deep bg-whatsapp text-navy-deep shadow-hard transition-transform hover:scale-110 lg:flex"
      >
        <MessageCircle className="size-7" />
      </a>
    </>
  );
}

export default function Landing() {
  const heroRef = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setPastHero(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <main>
        <Hero heroRef={heroRef} />
        <SocialProof />
        <PainPoints />
        <Transformation />
        <Stats />
        <Curriculum />
        <Challenges />
        <Format />
        <WhoFor />
        <Bonuses />
        <Resources />
        <Longterm />
        <Mentors />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp show={pastHero} />
    </div>
  );
}
