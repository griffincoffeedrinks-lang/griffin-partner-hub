"use client";

import { useState } from "react";

const PARTNER_NAME = "Don Drew";
const REFERRAL_CODE = "GC2501";
const REFERRAL_LINK = `https://griffincoffeedrinks.com/r/${REFERRAL_CODE}`;

function Icon({
  type,
  size = 28,
}: {
  type: "click" | "qr" | "level" | "link" | "share" | "home" | "coffee";
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "click") {
    return (
      <svg {...common}>
        <path d="M5 3l14 10-7 .8 3.5 6.2-2.5 1.4-3.5-6.2L5 20V3z" />
      </svg>
    );
  }

  if (type === "qr") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM18 18h3v3h-3zM17 14h1M14 18h1M21 14v1" />
      </svg>
    );
  }

  if (type === "level") {
    return (
      <svg {...common}>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19V3" />
        <path d="M4 7l6-2 6 4 6-6" />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg {...common}>
        <path d="M10 13a5 5 0 007.1.1l2-2a5 5 0 00-7.1-7.1l-1.1 1.1" />
        <path d="M14 11a5 5 0 00-7.1-.1l-2 2A5 5 0 0012 20l1.1-1.1" />
      </svg>
    );
  }

  if (type === "share") {
    return (
      <svg {...common}>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="M8.2 10.8l7.5-4.4" />
        <path d="M8.2 13.2l7.5 4.4" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg {...common}>
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 10h16" />
      <path d="M5 10c0 6 2.5 9 7 9s7-3 7-9" />
      <path d="M7 10c0-3 2-5 5-5s5 2 5 5" />
      <path d="M8 4c-.5-1.2-1.4-2-2.5-2" />
      <path d="M16 4c.5-1.2 1.4-2 2.5-2" />
      <path d="M12 19v3" />
      <path d="M8 22h8" />
    </svg>
  );
}

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(REFERRAL_LINK);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  }

  async function shareGriffin() {
    const shareData = {
      title: "Griffin Coffee",
      text: "Check out Griffin Coffee.",
      url: REFERRAL_LINK,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share.
      }
    } else {
      await copyLink();
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur">
        <div className="mx-auto flex h-[88px] max-w-[1180px] items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-4">
            {/* Griffin mark */}
            <div className="relative flex h-14 w-14 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#f7931e]/5" />

              <div className="text-[#f7931e]">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M26 7c-5 8-14 9-19 15 5 0 9 2 12 5-5 1-9 4-11 8 7-1 12 1 18 7 6-6 11-8 18-7-2-4-6-7-11-8 3-3 7-5 12-5-5-6-14-7-19-15z"
                    fill="currentColor"
                    opacity=".95"
                  />
                  <path
                    d="M26 15c-3 5-5 9-5 15 0 7 2 11 5 15 3-4 5-8 5-15 0-6-2-10-5-15z"
                    fill="#111"
                  />
                  <path
                    d="M19 25c2-3 4-4 7-4s5 1 7 4"
                    stroke="#f7931e"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-medium tracking-[0.35em] text-[#f7931e]">
                PARTNER
              </div>

              <div className="text-[22px] font-semibold tracking-tight">
                GRIFFIN HUB
              </div>
            </div>
          </div>

          <div className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium tracking-[0.25em] text-[#f7931e]">
            {REFERRAL_CODE}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-[1180px] px-6 pb-32 pt-12 md:px-10 md:pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden pb-10">
          {/* Subtle Griffin background mark */}
          <div className="pointer-events-none absolute -right-16 -top-12 hidden opacity-[0.08] md:block">
            <svg width="430" height="430" viewBox="0 0 430 430">
              <path
                d="M215 35c-42 68-118 79-166 132 42 1 78 17 106 45-47 7-82 30-103 67 66-9 113 7 163 64 50-57 97-73 163-64-21-37-56-60-103-67 28-28 64-44 106-45-48-53-124-64-166-132z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="relative max-w-3xl">
            <p className="mb-2 text-lg font-medium text-[#f7931e]">
              Good morning,
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              {PARTNER_NAME}
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/55 md:text-2xl">
              Share Griffin Coffee.
              <br />
              Track your impact.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <StatCard
            icon="click"
            value="0"
            label="CLICKS"
          />

          <StatCard
            icon="qr"
            value="0"
            label="SCANS"
          />

          <StatCard
            icon="level"
            value="Growth Builder"
            label="LEVEL"
            largeValue
          />
        </section>

        {/* QUICK ACTIONS */}
        <section className="mt-12">
          <SectionTitle>QUICK ACTIONS</SectionTitle>

          {/* COPY LINK */}
          <button
            onClick={copyLink}
            className="group flex w-full items-center gap-5 rounded-3xl border border-white/10 bg-[#151515] p-5 text-left transition hover:border-[#f7931e]/50 hover:bg-[#181818] md:p-7"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f7931e]">
              <Icon type="link" size={32} />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold md:text-2xl">
                Copy My Griffin Link
              </h2>

              <p className="mt-1 text-base text-white/50 md:text-lg">
                Share your personal link anywhere.
              </p>
            </div>

            <div className="hidden rounded-full border border-[#f7931e] px-7 py-3 text-sm font-semibold tracking-[0.18em] text-[#f7931e] transition group-hover:bg-[#f7931e] group-hover:text-black md:block">
              {copied ? "COPIED!" : "COPY LINK"}
            </div>

            <div className="md:hidden">
              <span className="text-[#f7931e]">
                {copied ? "✓" : "→"}
              </span>
            </div>
          </button>

          {/* TWO ACTIONS */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <ActionCard
              icon="qr"
              title="My QR Code"
              description={
                <>
                  Let someone scan
                  <br />
                  to visit your link.
                </>
              }
              href={`/qr/${REFERRAL_CODE}`}
            />

            <button
              onClick={shareGriffin}
              className="group flex min-h-[155px] items-center gap-5 rounded-3xl border border-white/10 bg-[#151515] p-6 text-left transition hover:border-[#f7931e]/50 hover:bg-[#181818]"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f7931e]">
                <Icon type="share" size={32} />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Share Griffin
                </h2>

                <p className="mt-1 text-base leading-relaxed text-white/50 md:text-lg">
                  Share via text,
                  <br />
                  email, or social.
                </p>
              </div>

              <span className="text-2xl text-white/40 transition group-hover:translate-x-1 group-hover:text-[#f7931e]">
                →
              </span>
            </button>
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-[#151515] p-7 md:p-8">
            <SectionTitle>RECENT ACTIVITY</SectionTitle>

            <div className="flex min-h-[230px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.06] text-[#f7931e]">
                <Icon type="level" size={30} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold">
                No activity yet
              </h2>

              <p className="mt-2 text-lg text-white/45">
                Your clicks and scans will show up here.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0b0b0b]/95 backdrop-blur">
        <div className="mx-auto grid max-w-[1180px] grid-cols-4">
          <NavItem
            icon="home"
            label="Home"
            active
            href="/"
          />

          <NavItem
            icon="coffee"
            label="Coffee"
            href="/coffee"
          />

          <NavItem
            icon="qr"
            label="My QR"
            href={`/qr/${REFERRAL_CODE}`}
          />

          <button
            onClick={shareGriffin}
            className="flex h-[78px] flex-col items-center justify-center gap-1 text-white/45 transition hover:text-[#f7931e]"
          >
            <Icon type="share" size={23} />
            <span className="text-xs font-medium">Share</span>
          </button>
        </div>
      </nav>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({
  icon,
  value,
  label,
  largeValue = false,
}: {
  icon: "click" | "qr" | "level";
  value: string;
  label: string;
  largeValue?: boolean;
}) {
  return (
    <div className="flex min-h-[210px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#151515] p-6 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06] text-[#f7931e]">
        <Icon type={icon} size={28} />
      </div>

      <div
        className={
          largeValue
            ? "text-2xl font-semibold tracking-tight md:text-3xl"
            : "text-5xl font-semibold tracking-tight"
        }
      >
        {value}
      </div>

      <div className="mt-3 text-xs font-medium tracking-[0.3em] text-white/45">
        {label}
      </div>
    </div>
  );
}

function ActionCard({
  icon,
  title,
  description,
  href,
}: {
  icon: "qr" | "link" | "share";
  title: string;
  description: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-[155px] items-center gap-5 rounded-3xl border border-white/10 bg-[#151515] p-6 transition hover:border-[#f7931e]/50 hover:bg-[#181818]"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f7931e]">
        <Icon type={icon} size={32} />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-semibold md:text-2xl">
          {title}
        </h2>

        <p className="mt-1 text-base leading-relaxed text-white/50 md:text-lg">
          {description}
        </p>
      </div>

      <span className="text-2xl text-white/40 transition group-hover:translate-x-1 group-hover:text-[#f7931e]">
        →
      </span>
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 text-sm font-semibold tracking-[0.35em] text-[#f7931e]">
      {children}
    </div>
  );
}

function NavItem({
  icon,
  label,
  href,
  active = false,
}: {
  icon: "home" | "coffee" | "qr";
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`relative flex h-[78px] flex-col items-center justify-center gap-1 transition ${
        active
          ? "text-[#f7931e]"
          : "text-white/45 hover:text-[#f7931e]"
      }`}
    >
      {active && (
        <span className="absolute left-0 right-0 top-0 mx-auto h-[2px] max-w-[200px] bg-[#f7931e]" />
      )}

      <Icon type={icon} size={23} />

      <span className="text-xs font-medium">
        {label}
      </span>
    </a>
  );
}