import Image from "next/image";

const navItems = [
  ["Overview", "overview"],
  ["Installation", "installation"],
  ["Features", "features"],
  ["Permissions", "permissions"],
  ["How to Use", "how-to-use"],
  ["Screenshots", "screenshots"],
  ["Troubleshooting", "troubleshooting"],
  ["Changelog", "changelog"],
  ["Contributing", "contributing"],
] as const;

const features = [
  {
    title: "Performance Scorecards",
    description:
      "Track Core Web Vitals, request counts, transfer sizes, cache hints, and the first issue worth fixing.",
    icon: "gauge",
  },
  {
    title: "Opportunity Reviews",
    description:
      "Turn image, script, CSS, accessibility, best-practice, and SEO checks into prioritized fixes.",
    icon: "bolt",
  },
  {
    title: "Network-Aware Audits",
    description:
      "Use DevTools network activity to understand third-party calls, uncached assets, and transfer pressure.",
    icon: "network",
  },
  {
    title: "Exportable Evidence",
    description:
      "Copy JSON, print summaries, download briefs, or share compact audit reports with your team.",
    icon: "export",
  },
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

const steps = [
  "Install PerfLens from the Chrome Web Store or load the extension folder in developer mode.",
  "Open a website or local app that you want to inspect.",
  "Launch PerfLens DevTools, refresh the HAR data, and run an audit.",
  "Review the Overview score, inspect Opportunities, then export the findings for your issue tracker.",
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
  "Core Web Vitals",
  "DevTools workflow",
  "Export-ready reports",
  "Local audit history",
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
      ["How to use", "#how-to-use"],
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
  ["X", "https://x.com/perflens"],
  ["LinkedIn", "https://www.linkedin.com/company/perflens"],
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
              Developer-first performance analytics for teams that want faster pages,
              clearer audit evidence, and practical optimization workflows.
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
              {["Team workspaces", "Saved audit baselines", "CI performance budgets"].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
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
    <main className="min-h-screen bg-[#070b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      </div>

      <header className="relative border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
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
          <a
            href={chromeWebStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
          >
            Install
          </a>
        </div>
      </header>

      <div id="top" className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[240px_1fr] lg:py-14">
        <aside className="hidden lg:block">
          <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 backdrop-blur">
            <p className="px-3 pb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Docs
            </p>
            <nav className="space-y-1">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-emerald-400/10 hover:text-emerald-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-20">
          <section className="hero-shell relative isolate grid min-h-[calc(100vh-9rem)] items-center gap-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-5 py-12 shadow-2xl shadow-black/30 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-16">
            <div className="hero-gradient hero-gradient-one" />
            <div className="hero-gradient hero-gradient-two" />
            <div className="hero-gradient hero-gradient-three" />
            <div className="hero-grid" />

            <div className="hero-copy relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-emerald-950/20 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
                Developer performance platform
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Optimize web performance faster with PerfLens.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                PerfLens helps developers optimize web performance faster by turning
                DevTools context, Core Web Vitals, and audit evidence into the next
                practical fix before release.
              </p>
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
              <div className="mt-9 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="trust-badge rounded-full border border-white/10 bg-slate-950/45 px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-preview relative z-10 mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2.25rem] bg-[conic-gradient(from_150deg,rgba(52,211,153,0.24),rgba(34,211,238,0.18),rgba(251,191,36,0.16),rgba(52,211,153,0.24))] opacity-80 blur-2xl" />
              <div className="floating-dashboard relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
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
              title="A focused review layer for modern web teams"
              description="PerfLens sits close to your everyday development workflow. It surfaces performance, accessibility, best-practice, SEO, and network signals in a compact DevTools experience."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {["Production-ready reports", "DevTools-native context", "Action-first recommendations"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
                  <div className="mb-5 h-10 w-10 rounded-2xl border border-emerald-300/20 bg-emerald-300/10" />
                  <h3 className="text-lg font-semibold text-white">{item}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    Designed to make the next improvement obvious without forcing developers to leave their flow.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="installation" className="scroll-mt-24">
            <SectionHeader
              eyebrow="02 / Installation"
              title="Install from the Web Store or run locally"
              description="Use the published extension when available, or load the unpacked build during development while the listing is being finalized."
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
              <CodeBlock>{`# Local development placeholder
npm install
npm run build

# Chrome
# Extensions -> Developer mode -> Load unpacked -> select the extension build folder`}</CodeBlock>
            </div>
          </section>

          <section id="features" className="scroll-mt-24">
            <SectionHeader
              eyebrow="03 / Features"
              title="Everything needed for a fast audit pass"
              description="The interface is built around the questions developers ask before shipping: what changed, what is slow, what is risky, and what should be fixed first?"
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

          <section id="permissions" className="scroll-mt-24">
            <SectionHeader
              eyebrow="04 / Permissions Explained"
              title="Clear access for a narrow job"
              description="PerfLens should only request the permissions it needs to audit the active page, collect useful local context, and preserve your recent results."
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

          <section id="how-to-use" className="scroll-mt-24">
            <SectionHeader
              eyebrow="05 / How to Use"
              title="Run an audit in four quick steps"
              description="PerfLens is designed for repeated checks while you build, review, and prepare releases."
            />
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-slate-300">{step}</p>
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
              eyebrow="06 / Screenshots"
              title="The extension experience"
              description="Use these screenshots to keep the documentation aligned with the real product UI as PerfLens evolves."
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
              eyebrow="07 / Troubleshooting"
              title="Common fixes"
              description="Most setup issues are caused by stale page context, missing network capture, or permissions that need a browser refresh."
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
              eyebrow="08 / Changelog"
              title="Release notes"
              description="Replace these placeholders with tagged releases as PerfLens moves through beta, store approval, and public launch."
            />
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              {["0.3.0 - Export and history workflow", "0.2.0 - Opportunities and prioritization", "0.1.0 - Initial audit dashboard"].map((release) => (
                <div key={release} className="border-b border-white/10 py-4 first:pt-0 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-white">{release}</h3>
                  <p className="mt-2 text-slate-400">
                    Placeholder entry for improvements, fixes, and migration notes.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="contributing" className="scroll-mt-24 pb-16">
            <SectionHeader
              eyebrow="09 / Contributing"
              title="Help make audits sharper"
              description="PerfLens contributions should improve signal quality, keep the interface fast, and make recommendations easier for developers to act on."
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
