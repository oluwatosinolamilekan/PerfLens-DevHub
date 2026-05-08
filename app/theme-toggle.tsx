"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const themeListeners = new Set<() => void>();

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("perflens-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);

  return () => {
    themeListeners.delete(listener);
  };
}

function getThemeSnapshot() {
  return getStoredTheme();
}

function getServerThemeSnapshot() {
  return "dark" as Theme;
}

function writeTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("perflens-theme", theme);
  themeListeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={isLight}
      suppressHydrationWarning
      onClick={() => writeTheme(isLight ? "dark" : "light")}
      className="theme-toggle inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-2 text-sm font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/[0.1]"
    >
      <span className="theme-toggle__track relative h-7 w-14 rounded-full bg-slate-950/70 p-1">
        <span className="theme-toggle__thumb absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300 text-slate-950 transition-transform">
          {isLight ? (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4m0-12.8 1.4-1.4M4.2 19.8l1.4-1.4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 15.4A7.8 7.8 0 0 1 8.6 4 8.5 8.5 0 1 0 20 15.4Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </span>
      </span>
      <span className="hidden sm:inline">{isLight ? "Light" : "Dark"}</span>
    </button>
  );
}
