import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  ["Overview", "overview"],
  ["Architecture", "architecture"],
  ["Features", "features"],
  ["Trust", "trust"],
  ["Evidence", "evidence"],
  ["Install", "installation"],
  ["Screenshots", "screenshots"],
  ["Changelog", "changelog"],
  ["Contributing", "contributing"],
] as const;

const features = [
  {
    title: "Performance Intelligence",
    description:
      "Core Web Vitals, transfer budgets, request pressure, cache signals, and the first optimization worth shipping.",
    icon: "gauge",
  },
  {
    title: "Prioritized Issue Detection",
    description:
      "Image, script, CSS, SEO, accessibility, and best-practice findings ranked by developer impact.",
    icon: "bolt",
  },
  {
    title: "DevTools-Native Workflow",
    description:
      "Run audits where developers already inspect problems, using active-tab and network context responsibly.",
    icon: "network",
  },
  {
    title: "Evidence-Ready Reports",
    description:
      "Export clear audit summaries for pull requests, issue trackers, portfolio evidence, and stakeholder reviews.",
    icon: "export",
  },
] as const;

const platformStats = [
  ["94", "Performance audit score"],
  ["4", "Core Web Vitals tracked"],
  ["3", "Evidence export paths"],
  ["0", "Remote data storage by default"],
] as const;

const readerHighlights = [
  ["What it is", "A Chrome DevTools extension for fast performance, SEO, and accessibility reviews."],
  ["Who it helps", "Frontend developers, product builders, and reviewers who need practical release evidence."],
  ["Why trust it", "Local-first audits, narrow permissions, product screenshots, changelog, and open-source paths."],
] as const;

const maturitySignals = [
  {
    title: "Productized user journey",
    description:
      "The page now presents PerfLens as a complete developer workflow: discover, audit, prioritize, export, and contribute.",
  },
  {
    title: "Open-source confidence",
    description:
      "GitHub, issue creation, contribution guidance, release notes, and roadmap signals are visible without burying users.",
  },
  {
    title: "Portfolio-grade evidence",
    description:
      "Screenshots, architecture notes, permissions, and changelog content support product maturity and Tech Nation-style evidence.",
  },
] as const;

const architectureLayers = [
  ["Browser extension", "Chrome DevTools workflow with active-tab execution and narrow permissions."],
  ["Audit engine", "Performance, SEO, accessibility, network, and best-practice checks converted into developer signals."],
  ["Evidence layer", "Local history, exportable reports, and concise summaries designed for engineering review loops."],
] as const;

const evidenceItems = [
  ["Production surface", "Published Chrome Web Store pathway, polished landing page, and product screenshots."],
  ["Technical depth", "Performance scoring, web vitals, network-aware audits, and recommendation logic."],
  ["Community readiness", "Contribution checklist, issue flow, roadmap, changelog, and repository links."],
] as const;

const roadmapItems = [
  ["Team workspaces", "Share saved audit baselines across product teams."],
  ["CI performance budgets", "Fail builds when regressions cross configured thresholds."],
  ["GitHub PR summaries", "Attach PerfLens evidence directly to pull request reviews."],
] as const;

const changelogEntries = [
  ["0.3.0 - Export and history workflow", "Added report export flows, audit history, and evidence-oriented summaries."],
  ["0.2.0 - Opportunities and prioritization", "Expanded issue detection across performance, SEO, accessibility, and asset quality."],
  ["0.1.0 - Initial audit dashboard", "Introduced the core DevTools audit dashboard and scorecard workflow."],
] as const;

const permissions = [
  {
    title: "Active Tab",
    description:
      "Allows PerfLens to audit the current page only when you run it from the extension.",
  },
  {
    title: "Scripting",
    description:
      "Injects lightweight checks into the inspected page so runtime metrics can be collected.",
  },
  {
    title: "Storage",
    description:
      "Keeps recent audits and settings locally, including history views and export preferences.",
  },
  {
    title: "DevTools",
    description:
      "Reads network context in supported sessions to explain requests, cache policy, and transfer behavior.",
  },
] as const;

const screenshots = [
  {
    title: "Overview Audit",
    src: "/perflens/screenshot-overview.png",
    alt: "PerfLens overview screen showing score cards, Core Web Vitals, and what to fix first.",
  },
  {
    title: "Production Run",
    src: "/perflens/screenshot-production.png",
    alt: "PerfLens production audit with performance, accessibility, best practices, and SEO results.",
  },
  {
    title: "Opportunities",
    src: "/perflens/screenshot-opportunities.png",
    alt: "PerfLens opportunities tab showing prioritized fixes.",
  },
  {
    title: "History",
    src: "/perflens/screenshot-history.png",
    alt: "PerfLens history tab with previous audit score trend.",
  },
  {
    title: "Export",
    src: "/perflens/screenshot-export.png",
    alt: "PerfLens export tab with report export actions.",
  },
] as const;

const trustBadges = [
  "Open-source ready",
  "Chrome extension",
  "Local-first audits",
  "Evidence exports",
] as const;

const dashboardScores = [
  {
    label: "Performance",
    value: "94",
    detail: "+12 from last audit",
    tone: "text-emerald-200",
    bar: "w-[94%] bg-emerald-300",
  },
  {
    label: "SEO",
    value: "91",
    detail: "3 metadata checks passed",
    tone: "text-cyan-200",
    bar: "w-[91%] bg-cyan-300",
  },
  {
    label: "Accessibility",
    value: "87",
    detail: "2 contrast issues",
    tone: "text-amber-200",
    bar: "w-[87%] bg-amber-300",
  },
] as const;

const dashboardMetrics = [
  ["LCP", "1.8s", "Good"],
  ["INP", "96ms", "Good"],
  ["CLS", "0.04", "Stable"],
  ["TTFB", "420ms", "Watch"],
] as const;

const chartBars = ["h-[48%]", "h-[62%]", "h-[56%]", "h-[74%]", "h-[68%]", "h-[82%]", "h-[76%]", "h-[88%]"] as const;

const issuePanels = [
  {
    title: "Render-blocking CSS",
    meta: "High impact",
    value: "310ms",
    tone: "text-rose-200",
  },
  {
    title: "Missing image dimensions",
    meta: "Layout stability",
    value: "4 nodes",
    tone: "text-amber-200",
  },
  {
    title: "Duplicate meta description",
    meta: "SEO cleanup",
    value: "2 pages",
    tone: "text-cyan-200",
  },
] as const;

const recommendations = [
  "Preload dashboard hero image for faster LCP.",
  "Defer analytics bundle until first interaction.",
  "Add accessible names to icon-only export actions.",
] as const;

const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/perflens-web-performance/gkogamlpcnneeficmcdcnnnhobnbebdc";
const githubUrl = "https://github.com/oluwatosinolamilekan/PerfLens";

const footerGroups = [
  {
    title: "Product",
    links: [
      ["Overview", "#overview"],
      ["Features", "#features"],
      ["Screenshots", "#screenshots"],
      ["Roadmap", "#roadmap"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Documentation", "#installation"],
      ["Evidence", "#evidence"],
      ["Troubleshooting", "#troubleshooting"],
      ["Changelog", "#changelog"],
    ],
  },
  {
    title: "Developers",
    links: [
      ["GitHub", "https://github.com/oluwatosinolamilekan/PerfLens"],
      ["Chrome Web Store", "https://chromewebstore.google.com/detail/perflens-web-performance/gkogamlpcnneeficmcdcnnnhobnbebdc"],
      ["Open an issue", "https://github.com/oluwatosinolamilekan/PerfLens/issues/new"],
      ["Contribute", "#contributing"],
    ],
  },
] as const;

const socialLinks = [
  ["GitHub", githubUrl],
  // ["X", "https://x.com/perflens"],
  // ["LinkedIn", "https://www.linkedin.com/company/perflens"],
] as const;

const troubleshooting = [
  {
    problem: "The audit has no network data",
    fix: "Refresh HAR, reload the target page, then run the audit again so PerfLens can observe the request waterfall.",
  },
  {
    problem: "Scores look different from Lighthouse",
    fix: "PerfLens is optimized for quick developer feedback from DevTools context, so use it as a fast review layer beside deeper lab testing.",
  },
  {
    problem: "Local app prompts are unavailable",
    fix: "Run the app in a local development environment and ensure the inspected tab is the active Chrome tab.",
  },
] as const;

function Icon({ name }: { name: (typeof features)[number]["icon"] }) {
  const common = "h-5 w-5";

  if (name === "gauge") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 14a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m12 14 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 19h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "bolt") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m13 2-8 12h6l-1 8 9-13h-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "network") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 8v4m0 0-5 4m5-4 5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="5" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h7l4 4v12H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 4v5h4M10 13h5M10 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-emerald-950/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="grid gap-3 p-4 text-left text-slate-200 sm:p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {dashboardScores.map((score) => (
          <div key={score.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-slate-400">{score.label}</p>
                <p className={`mt-1 text-3xl font-semibold ${score.tone}`}>{score.value}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-[10px] font-semibold text-slate-300">
                Live
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className={`h-full rounded-full ${score.bar}`} />
            </div>
            <p className="mt-2 text-[11px] text-slate-400">{score.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">Performance trend</p>
              <p className="mt-1 text-xs text-slate-400">Last 8 deploy audits</p>
            </div>
            <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
              +18%
            </span>
          </div>
          <div className="mt-5 flex h-32 items-end gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-3">
            {chartBars.map((height, index) => (
              <div key={`${height}-${index}`} className="flex flex-1 items-end">
                <div className={`dashboard-bar w-full rounded-t bg-gradient-to-t from-emerald-400/40 to-cyan-200 ${height}`} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {dashboardMetrics.map(([label, value, status]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-slate-950/45 p-2">
                <p className="text-[10px] font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                <p className="mt-0.5 text-[10px] text-emerald-200">{status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <p className="text-sm font-semibold text-white">SEO + accessibility</p>
            <div className="mt-4 space-y-3">
              {[
                ["Semantic headings", "96%", "w-[96%]"],
                ["Alt coverage", "92%", "w-[92%]"],
                ["Structured data", "88%", "w-[88%]"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{label}</span>
                    <span className="font-semibold text-slate-200">{value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full bg-cyan-300 ${width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-emerald-200/15 bg-emerald-300/[0.06] p-4">
            <p className="text-sm font-semibold text-emerald-100">Optimization queue</p>
            <div className="mt-3 space-y-2">
              {recommendations.map((recommendation) => (
                <div key={recommendation} className="flex gap-2 text-xs leading-5 text-emerald-50/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{recommendation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {issuePanels.map((issue) => (
          <div key={issue.title} className="rounded-lg border border-white/10 bg-slate-950/55 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-white">{issue.title}</p>
              <p className={`text-xs font-semibold ${issue.tone}`}>{issue.value}</p>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">{issue.meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <Image src="/perflens/logo.png" alt="PerfLens logo" width={40} height={40} />
              <span className="text-lg font-semibold tracking-tight text-white">
                Perf<span className="text-emerald-400">Lens</span>
              </span>
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Startup-grade performance analytics for developers who need faster pages,
              credible product evidence, and open-source workflows that stand up to review.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-200/40 hover:bg-white/[0.1]"
              >
                GitHub
              </a>
              <a
                href={chromeWebStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-200"
              >
                Chrome Web Store
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200/15 bg-slate-950/65 p-5">
            <p className="text-sm font-semibold text-white">Performance notes in your inbox</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Get roadmap updates, changelog highlights, and practical web performance fixes.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="developer@company.com"
                className="min-h-11 flex-1 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/50 focus:bg-white/[0.09]"
              />
              <button
                type="button"
                className="min-h-11 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-8 px-1 py-10 md:grid-cols-2 lg:grid-cols-4">
          <div id="roadmap" className="scroll-mt-24">
            <p className="text-sm font-semibold text-white">Roadmap</p>
            <div className="mt-4 space-y-3">
              {roadmapItems.map(([item, description]) => (
                <div key={item} className="flex gap-3 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>
                    <span className="block font-medium text-slate-300">{item}</span>
                    <span className="mt-1 block leading-6">{description}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-white">{group.title}</p>
              <nav className="mt-4 grid gap-3">
                {group.links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-400 transition hover:text-emerald-200"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 PerfLens. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="site-shell min-h-screen bg-[#070b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      </div>

      <header className="site-header relative border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/perflens/logo.png" alt="PerfLens logo" width={42} height={42} priority />
            <span className="text-lg font-semibold tracking-tight">
              Perf<span className="text-emerald-400">Lens</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300 lg:flex">
            {navItems.slice(0, 5).map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={chromeWebStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
            >
              Install
            </a>
          </div>
        </div>
      </header>

      <div id="top" className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <div className="space-y-20">
          <section className="hero-shell relative isolate grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-5 py-10 shadow-2xl shadow-black/30 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.82fr)] lg:items-center lg:px-10 lg:py-12 xl:px-12">
            <div className="hero-gradient hero-gradient-one" />
            <div className="hero-gradient hero-gradient-two" />
            <div className="hero-gradient hero-gradient-three" />
            <div className="hero-grid" />

            <div className="hero-copy relative z-10 max-w-3xl">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-emerald-950/20 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
                Developer performance platform
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Understand, improve, and prove website performance faster.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                PerfLens turns DevTools context, Core Web Vitals, SEO checks,
                accessibility findings, and audit history into clear next steps for
                developers reviewing a web release.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {readerHighlights.map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#installation"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-100"
                >
                  Get started
                  <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                    -&gt;
                  </span>
                </a>
                <a
                  href="#screenshots"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-200/40 hover:bg-white/[0.12]"
                >
                  View dashboard
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="trust-badge rounded-full border border-white/10 bg-slate-950/45 px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-7 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {platformStats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-3 backdrop-blur">
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-preview relative z-10 mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2.25rem] bg-[conic-gradient(from_150deg,rgba(52,211,153,0.24),rgba(34,211,238,0.18),rgba(251,191,36,0.16),rgba(52,211,153,0.24))] opacity-80 blur-2xl" />
              <div className="dashboard-frame relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Production audit
                  </div>
                </div>
                <DashboardPreview />
              </div>
            </div>
          </section>

          <section id="overview" className="scroll-mt-24">
            <SectionHeader
              eyebrow="01 / Overview"
              title="A credible product surface for performance-focused engineering"
              description="PerfLens is positioned as a serious developer platform: clear problem framing, realistic product UI, visible trust signals, technical depth, and open-source contribution paths."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {maturitySignals.map((item, index) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-sm font-semibold text-emerald-200">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="architecture" className="scroll-mt-24">
            <SectionHeader
              eyebrow="02 / Architecture"
              title="Clean product architecture that explains how trust is earned"
              description="A mature developer platform needs more than a good-looking dashboard. PerfLens explains the browser surface, analysis engine, and evidence layer in a way that technical evaluators can scan quickly."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {architectureLayers.map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/65 p-6 shadow-xl shadow-black/10">
                  <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" />
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="installation" className="scroll-mt-24">
            <SectionHeader
              eyebrow="03 / Installation"
              title="Install, inspect, and verify in a developer-native workflow"
              description="The setup flow is designed for credibility: a public distribution path, local development instructions, and a clear route into the GitHub project."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold text-white">Chrome Web Store</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Open the PerfLens listing, add the extension to Chrome, then pin it for quick access during audits.
                </p>
                <a
                  href={chromeWebStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full border border-emerald-300/30 px-5 py-2.5 text-sm font-semibold text-emerald-200 hover:bg-emerald-300/10"
                >
                  Open Chrome Web Store
                </a>
              </div>
              <CodeBlock>{`# Local development workflow
npm install
npm run build

# Chrome
# Extensions -> Developer mode -> Load unpacked -> select the extension build folder`}</CodeBlock>
            </div>
          </section>

          <section id="features" className="scroll-mt-24">
            <SectionHeader
              eyebrow="04 / Product Capabilities"
              title="Feature depth that feels like a real developer product"
              description="PerfLens presents concrete engineering workflows instead of vague marketing claims: scoring, diagnostics, prioritization, DevTools context, and exportable evidence."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.06]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                    <Icon name={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="trust" className="scroll-mt-24">
            <SectionHeader
              eyebrow="05 / Developer Trust"
              title="Narrow permissions, transparent data handling, clear intent"
              description="A credible browser extension must explain what it touches and why. PerfLens frames each permission around a practical audit responsibility and keeps the trust model visible."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {permissions.map((permission) => (
                <div key={permission.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <h3 className="font-semibold text-white">{permission.title}</h3>
                  <p className="mt-2 leading-7 text-slate-400">{permission.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="evidence" className="scroll-mt-24">
            <SectionHeader
              eyebrow="06 / Evidence"
              title="Built for portfolio review, open-source credibility, and Tech Nation evidence"
              description="The page now surfaces product maturity signals that evaluators can understand quickly: production surface, technical depth, and community readiness."
            />
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-4">
                {evidenceItems.map(([title, description], index) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-2 leading-7 text-slate-400">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Image
                src="/perflens/promo-small.png"
                alt="Small PerfLens promotional tile with feature list and dashboard preview."
                width={440}
                height={280}
                className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/30"
              />
            </div>
          </section>

          <section id="screenshots" className="scroll-mt-24">
            <SectionHeader
              eyebrow="07 / Product UI"
              title="A polished extension experience with real interface evidence"
              description="Screenshots make the product tangible. They show the actual dashboard, production audit state, opportunities, history, and export workflow."
            />
            <div className="grid gap-5">
              {screenshots.map((screenshot) => (
                <figure key={screenshot.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1280}
                    height={800}
                    className="w-full object-cover"
                  />
                  <figcaption className="border-t border-white/10 px-5 py-4 text-sm font-medium text-slate-300">
                    {screenshot.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="troubleshooting" className="scroll-mt-24">
            <SectionHeader
              eyebrow="08 / Reliability"
              title="Operational clarity for developers adopting the tool"
              description="Mature developer products anticipate setup friction and explain likely causes without hand-waving."
            />
            <div className="space-y-3">
              {troubleshooting.map((item) => (
                <details key={item.problem} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <summary className="cursor-pointer list-none font-semibold text-white">
                    {item.problem}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-400">{item.fix}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="changelog" className="scroll-mt-24">
            <SectionHeader
              eyebrow="09 / Changelog"
              title="Release history that signals active product development"
              description="Clear release notes show that PerfLens is moving through real product iterations rather than existing as a static portfolio mockup."
            />
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              {changelogEntries.map(([release, description]) => (
                <div key={release} className="border-b border-white/10 py-4 first:pt-0 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-white">{release}</h3>
                  <p className="mt-2 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contributing" className="scroll-mt-24 pb-16">
            <SectionHeader
              eyebrow="10 / Open Source"
              title="Contribution pathways for credibility and community growth"
              description="The project presents a clear path for issues, pull requests, verification notes, and product-quality contributions."
            />
            <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.06] p-6">
              <h3 className="text-xl font-semibold text-white">Contribution checklist</h3>
              <ul className="mt-4 grid gap-3 text-slate-300 md:grid-cols-2">
                <li>Open an issue with the audit scenario and expected outcome.</li>
                <li>Add tests or manual verification notes for scoring changes.</li>
                <li>Keep UI states accessible, responsive, and keyboard friendly.</li>
                <li>Update screenshots and changelog entries when behavior changes.</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${githubUrl}/issues/new`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Create GitHub issue
                </a>
                <a
                  href={`${githubUrl}/pulls`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Open a pull request
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/30 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-300/10"
                >
                  View repository
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
