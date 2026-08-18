import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Menu,
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
import {
  WA_MESSAGES,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  waLink,
  trackCta,
} from "@/lib/whatsapp";
import photo1 from "@/assets/PHOTO-2026-08-18-21-51-57.jpg.asset.json";
import photo2 from "@/assets/PHOTO-2026-08-18-21-51-58.jpg.asset.json";
import photo3 from "@/assets/PHOTO-2026-08-18-21-51-58-2.jpg.asset.json";
import photo4 from "@/assets/PHOTO-2026-08-18-21-51-59.jpg.asset.json";

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
  { src: photo1.url, alt: "Previous batch participants of the Train the Trainer Programme" },
  { src: photo3.url, alt: "Participants from across Kerala at a Train the Trainer session" },
  { src: photo4.url, alt: "A previous Train the Trainer batch after a live session" },
  { src: photo2.url, alt: "Trainers, teachers and professionals at a Train the Trainer batch" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-background/10 bg-navy-deep/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#top" className="font-display text-sm font-bold tracking-tight text-background sm:text-base">
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
        <div className="flex items-center gap-2">
          <WhatsAppCta
            id="nav_whatsapp_cta"
            message={WA_MESSAGES.details}
            label="WhatsApp Us"
            className="hidden sm:inline-flex"
          />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-background/20 p-2 text-background lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-background/10 bg-navy-deep px-4 pb-5 pt-2 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-background/5 py-3 text-sm text-background/80"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="surface-gradient relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute -right-40 top-0 size-[36rem] rounded-full bg-cyan-accent/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-accent">
            2026 Edition · Calicut
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-background sm:text-6xl lg:text-7xl">
            TRAIN THE
            <br />
            <span className="text-gradient">TRAINER</span>
          </h1>
          <p className="mt-5 font-display text-xl font-semibold text-background/90 sm:text-2xl">
            Transform the way you teach, train &amp; lead.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">
            Learn how to make your training more engaging, practical and impactful — without
            boring your audience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppCta
              id="hero_whatsapp_cta"
              message={WA_MESSAGES.details}
              label="Chat on WhatsApp"
              size="lg"
            />
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-4 text-base font-semibold text-background transition-colors hover:bg-background/10"
            >
              Get Programme Details <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Limited to 30 Participants
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-background/15 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={photo1.url}
                alt="Previous batch of the Train the Trainer Programme in Calicut"
                className="h-[300px] w-full object-cover object-center sm:h-[420px]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-background/15 bg-navy-deep/90 px-5 py-3 backdrop-blur">
              <p className="font-display text-2xl font-bold text-cyan-accent">12 · 20 · 3</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-background/60">
                Sessions · Challenges · Mentors
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Previous Batch Participants"
          title="Real people. Real batches."
          sub="People from different professions have already experienced the programme."
        />
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 lg:overflow-visible">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 80} className="w-[85vw] shrink-0 snap-center sm:w-[65vw] lg:w-auto">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-64 w-full rounded-3xl object-cover shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)] sm:h-80"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PAINS = [
  "Audience gets bored",
  "Training becomes repetitive",
  "Participants lose attention",
  "Difficult to explain concepts simply",
  "Presentations become too dependent on slides",
  "Lack of engaging activities",
  "Difficulty keeping energy high",
  "Difficulty making training memorable",
  "Lack of confidence while presenting",
  "Sessions don't create enough impact",
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
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <X className="mt-0.5 size-5 shrink-0 text-destructive" />
                <p className="text-sm text-card-foreground">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="surface-gradient mt-10 rounded-3xl p-8 text-center sm:p-10">
            <p className="font-display text-xl font-semibold leading-relaxed text-background sm:text-2xl">
              <span className="text-cyan-accent">TRAIN THE TRAINER PROGRAMME</span> helps you make
              your training more engaging, interactive, practical and impactful.
            </p>
            <div className="mt-7 flex justify-center">
              <WhatsAppCta
                id="pain_whatsapp_cta"
                message={WA_MESSAGES.details}
                label="Ask About the Programme"
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
  "Stronger trainer presence",
];

function Transformation() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Transformation" title="Before → After" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-muted p-7">
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
          <div className="mt-10 grid items-center gap-8 rounded-3xl border border-border bg-card p-6 lg:grid-cols-2">
            <img
              src={photo3.url}
              alt="Participants practising during a previous Train the Trainer batch"
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
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 90}>
            <div className="rounded-3xl border border-background/10 bg-background/5 p-6 text-center backdrop-blur">
              <p className="font-display text-4xl font-extrabold text-cyan-accent sm:text-5xl">
                {s.n}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-background/70">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const CURRICULUM = [
  { icon: Mic, t: "Public Speaking", d: "Build confidence and improve your ability to speak and influence." },
  { icon: Layers, t: "Module Preparation", d: "Learn how to structure training content effectively." },
  { icon: Presentation, t: "Module Presentation", d: "Learn how to present your training content in an engaging way." },
  { icon: Lightbulb, t: "Training Ideas & Insights", d: "Discover practical ideas for making training more interesting." },
  { icon: PenTool, t: "Training Design & Development", d: "Understand how to design and develop meaningful training experiences." },
  { icon: MessagesSquare, t: "Communication & Presentation Mastery", d: "Strengthen communication, presentation and delivery skills." },
  { icon: Network, t: "Transactional Analysis", d: "Understand interaction patterns and improve communication." },
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
                  className={`h-full w-full rounded-3xl border p-6 text-left transition-all duration-300 ${
                    on
                      ? "-translate-y-1 border-royal/40 bg-navy-deep shadow-[0_24px_50px_-24px_var(--color-royal)]"
                      : "border-border bg-card hover:-translate-y-1"
                  }`}
                >
                  <Icon className={`size-7 ${on ? "text-cyan-accent" : "text-royal"}`} />
                  <h3
                    className={`mt-4 font-display text-base font-bold ${on ? "text-background" : "text-navy-deep"}`}
                  >
                    {c.t}
                  </h3>
                  <p className={`mt-2 text-sm ${on ? "text-background/70" : "text-muted-foreground"}`}>
                    {c.d}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CHALLENGE_TYPES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={i * 70}>
                <div className="h-full rounded-3xl border border-background/12 bg-background/5 p-6 text-center backdrop-blur">
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
                <span className="rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-5 py-2 text-sm font-semibold text-cyan-accent">
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
  { k: "Live Sessions", v: "12" },
  { k: "Challenges", v: "20" },
  { k: "Mentors", v: "3" },
  { k: "Languages", v: "Malayalam & English" },
  { k: "Format", v: "Live + Challenge-Based Learning" },
  { k: "Feedback", v: "Regular Feedback" },
];

function Format() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Programme Format" title="Everything at a glance" />
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
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
  "Corporate Train The Trainer",
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
          sub="14 additional training modules included with the programme."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b, i) => (
            <Reveal key={b} delay={i * 35}>
              <div className="group h-full rounded-3xl border border-border bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <Gift className="size-6 text-royal" />
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-navy-deep">
                    Bonus Included
                  </span>
                </div>
                <p className="mt-4 font-display text-base font-bold text-navy-deep">
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
              label="Ask About the Bonuses"
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
            {["Videos", "Audios", "Presentations", "Training resources", "Life Skills Training Kit"].map(
              (r) => (
                <li key={r} className="flex items-center gap-3 text-sm text-background/85">
                  <Check className="size-4 text-whatsapp" />
                  {r}
                </li>
              ),
            )}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative h-72 sm:h-80">
            {[Database, BookOpen, Video].map((Icon, i) => (
              <div
                key={i}
                style={{ top: `${i * 3.5}rem`, left: `${i * 2.2}rem` }}
                className="absolute w-64 rounded-3xl border border-background/15 bg-background/8 p-6 backdrop-blur-xl sm:w-80"
              >
                <Icon className="size-7 text-cyan-accent" />
                <p className="mt-3 font-display text-base font-semibold text-background">
                  {["2 TB of training material", "Life Skills Training Kit", "Videos, audios & decks"][i]}
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
    { icon: InfinityIcon, t: "Lifetime Membership", d: "Lifetime membership of Mark Career Academy." },
    { icon: HeartHandshake, t: "Lifetime Mentoring", d: "Continued mentoring after the programme." },
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
                <div className="h-full rounded-3xl border border-border bg-card p-7 text-center">
                  <Icon className="mx-auto size-8 text-royal" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-deep">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Mentors() {
  const mentors = [
    { role: "Pilot Faculty", name: "Suhail C.P.", desc: "HRD Trainer & Life Coach", initials: "SC" },
    {
      role: "Co-Faculty",
      name: "Mark Team Members",
      desc: "Senior Trainers, Counsellors & Motivators",
      initials: "MT",
    },
  ];
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Mentors" title="Learn from experienced trainers" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <div className="surface-gradient flex size-16 items-center justify-center rounded-2xl font-display text-lg font-bold text-background">
                  {m.initials}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-royal">
                  {m.role}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-navy-deep">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-border bg-card p-6 text-center transition-transform duration-300 hover:-translate-y-1">
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

function ValueStack() {
  return (
    <section className="surface-gradient py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading light eyebrow="Programme Value" title="Everything You Receive" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {VALUE.map((v, i) => (
            <Reveal key={v} delay={i * 40}>
              <div className="flex items-center gap-3 rounded-2xl border border-background/12 bg-background/5 px-5 py-4 backdrop-blur">
                <Check className="size-5 shrink-0 text-whatsapp" />
                <span className="text-sm font-medium text-background">{v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Investment" title="Simple, transparent pricing" />
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <div className="surface-gradient px-8 py-10 text-center">
              <p className="text-sm text-background/60 line-through">₹12,000</p>
              <p className="mt-2 font-display text-6xl font-extrabold text-gradient">₹8,500</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Early Bird Offer
              </p>
              <p className="mt-2 text-sm text-background/70">Register before November 1</p>
            </div>
            <div className="px-8 py-8">
              <p className="text-center font-display text-lg font-bold text-navy-deep">
                Only 30 Seats
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
                  label="Check Availability on WhatsApp"
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

function Urgency() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-display text-5xl font-extrabold text-navy-deep">Only 30 Seats</p>
          <p className="mt-4 text-sm text-muted-foreground">
            This is designed to keep the programme practical and interactive.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppCta
              id="urgency_whatsapp_cta"
              message={WA_MESSAGES.register}
              label="Ask About Seat Availability"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: "01", t: "Click WhatsApp", d: "Start a conversation in one tap." },
    { n: "02", t: "Get Programme Details", d: "We share the complete programme information." },
    { n: "03", t: "Confirm Your Registration", d: "Reserve one of the 30 seats." },
  ];
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Registration" title="Three steps. No long forms." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <p className="font-display text-4xl font-extrabold text-royal/25">{s.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-deep">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              id="steps_whatsapp_cta"
              message={WA_MESSAGES.register}
              label="Reserve My Seat"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CONTACT_ANSWER = "Please contact us on WhatsApp for complete details.";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Who can attend the Train the Trainer Programme?",
    a: "Trainers, coaches, teachers, school principals and managers, social workers, parents, entrepreneurs, doctors, psychologists, advocates, police officers, government employees, public figures, students and other professionals who train, teach, lead or influence people.",
  },
  { q: "Is this suitable for beginners?", a: "Yes. The programme is practical and challenge-based, so you learn, practise and receive feedback step by step." },
  { q: "I am already a trainer. Will this still be useful for me?", a: "Yes. The programme focuses on making your delivery more engaging, interactive and impactful, with ideas, activities and regular feedback." },
  { q: "Is the programme suitable for teachers?", a: "Yes. Teachers' Training is also included as a bonus module." },
  { q: "What languages are used?", a: "Malayalam and English." },
  { q: "How long is the programme?", a: "1 month." },
  { q: "How many live sessions are included?", a: "12 live sessions." },
  { q: "What are the challenges?", a: "20 challenges in WhatsApp, audio, video, presentation and live formats." },
  { q: "Will I receive feedback?", a: "Yes. Regular feedback is part of the programme." },
  { q: "What bonuses are included?", a: "14 bonus add-on modules including Enneagram, Transactional Analysis, Teachers' Training, Public Speaking, Online Icebreakers & Energizers, Corporate Train The Trainer, Effective Parenting, Presentation Skills, Mentoring Skills, Lead Generation Management, Leadership Mastery, Change Management, Success Habits of Powerful Leaders and 51 Ways to Motivate Your Employee." },
  { q: "Do I receive training resources?", a: "Yes. 2 TB+ of training resources including videos, audios and presentations, plus a Life Skills Training Kit." },
  { q: "Is there a certificate?", a: "Yes, a certificate on course completion." },
  { q: "What is the registration fee?", a: "₹12,000. Early bird offer: ₹8,500 when you register before November 1." },
  { q: "How can I register?", a: CONTACT_ANSWER },
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
              label="I'm Interested"
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
        src={photo4.url}
        alt="Group photograph of a previous Train the Trainer batch"
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
            Learn how to deliver it with confidence, creativity and impact.
          </p>
          <p className="mt-8 font-display text-xl font-bold text-cyan-accent">
            Start Your Trainer Journey
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCta
              id="final_whatsapp_cta"
              message={WA_MESSAGES.register}
              label={`Chat on WhatsApp · ${PHONE_PRIMARY}`}
              size="lg"
            />
            <WhatsAppCta
              id="final_whatsapp_cta_secondary"
              message={WA_MESSAGES.details}
              phone={PHONE_SECONDARY}
              label={PHONE_SECONDARY}
              variant="outline"
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
          <p className="mt-2 text-sm text-background/60">Train the Trainer Programme</p>
        </div>
        <div className="space-y-2 text-sm text-background/70">
          {[PHONE_PRIMARY, PHONE_SECONDARY].map((p) => (
            <a
              key={p}
              href={`tel:+91${p}`}
              data-cta="footer_phone_cta"
              onClick={() => trackCta("footer_phone_cta")}
              className="flex items-center gap-2 hover:text-cyan-accent"
            >
              <Phone className="size-4" /> {p}
            </a>
          ))}
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

function FloatingWhatsApp() {
  return (
    <>
      <a
        id="sticky_whatsapp_cta"
        data-cta="sticky_whatsapp_cta"
        href={waLink(WA_MESSAGES.sticky)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCta("sticky_whatsapp_cta")}
        className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-navy-deep shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] lg:hidden"
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
        className="fixed bottom-7 right-7 z-50 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-navy-deep shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 lg:flex"
      >
        <MessageCircle className="size-7" />
      </a>
    </>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <main>
        <Hero />
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
        <ValueStack />
        <Pricing />
        <Urgency />
        <Steps />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
