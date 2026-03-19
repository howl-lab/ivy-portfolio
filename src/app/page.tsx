"use client";

import { useState, useEffect, useRef } from "react";
import TextCycler from "./components/TextCycler";
import DinoWanderer from "./components/DinoWanderer";
import DinoFollower from "./components/DinoFollower";
import ProjectTabs from "./components/ProjectTabs";

const PT_SANS = '"PT Sans", sans-serif';
const COURIER = '"Courier New", Courier, monospace';

const EXPERIENCE = [
  { company: "Presence", role: "Principal Designer" },
  { company: "Upwork", role: "Sr. Product Designer, Innovation Team" },
  { company: "Headroom", role: "Lead UI/UX Designer" },
  { company: "GTA", role: "Sr. Interaction Designer, Marketing Team" },
  {
    company: "Godfrey Dadich Partners",
    role: "Product Designer, Digital Team",
  },
  { company: "Google", role: "Visual Designer, Education" },
];

// ─── About modal ───────────────────────────────────────────────────────────────
function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9980,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          width: "min(480px, 90vw)",
          maxHeight: "70vh",
          overflowY: "auto",
          padding: "32px 36px",
          fontFamily: PT_SANS,
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: "#111",
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          Fascinated by how things work + why they exist
        </p>
        <p
          style={{
            fontSize: 15,
            color: "#111",
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          I have worked in a variety of spaces from education to gaming and
          startup to big companies. Storytelling and turning complexity into
          play is my jam.
        </p>
        <p
          style={{
            fontSize: 15,
            color: "#111",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          I love inanimate objects, nature, and my pup.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 32,
          }}
        >
          {EXPERIENCE.map(({ company, role }) => (
            <div
              key={company}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ fontSize: 12, color: "#111", fontWeight: 400 }}>
                {company}
              </span>
              <span style={{ fontSize: 12, color: "#888" }}>{role}</span>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: 15,
            color: "#0015FF",
            marginBottom: 32,
          }}
        >
          ivychang02@gmail.com
        </p>

        <p style={{ fontFamily: COURIER, fontSize: 10, color: "#888" }}>
          Copyrighted ©2026
        </p>
      </div>
    </div>
  );
}

// ─── Pine tree SVG ─────────────────────────────────────────────────────────────
function PineTree({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#0015FF"
      style={{ display: "inline-block" }}
    >
      <polygon points="12,2 20,18 4,18" />
      <rect x="10" y="18" width="4" height="4" />
    </svg>
  );
}

// ─── Tree layout — scattered across full 100vh ─────────────────────────────────
const TREES = [
  // top strip
  { left: "2%", top: "5%" },
  { left: "20%", top: "4%" },
  { left: "45%", top: "3%" },
  { left: "66%", top: "6%" },
  { left: "76%", top: "17%" },
  { left: "93%", top: "12%" },
  // left strip
  { left: "3%", top: "30%" },
  { left: "14%", top: "42%" },
  { left: "6%", top: "55%" },
  { left: "4%", top: "77%" },
  // right strip
  { left: "82%", top: "28%" },
  { left: "91%", top: "40%" },
  { left: "78%", top: "52%" },
  { left: "89%", top: "63%" },
  { left: "81%", top: "76%" },
  // middle ring (avoiding center text ~35–65% left, 38–62% top)
  { left: "27%", top: "34%" },
  { left: "70%", top: "31%" },
  { left: "24%", top: "60%" },
  { left: "73%", top: "58%" },
  // bottom strip
  { left: "8%", top: "86%" },
  { left: "33%", top: "88%" },
  { left: "45%", top: "75%" },
  { left: "57%", top: "83%" },
  { left: "78%", top: "88%" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [dinoMode, setDinoMode] = useState<"wander" | "follow">("wander");
  const [aboutOpen, setAboutOpen] = useState(false);
  const [houseHovered, setHouseHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  // Switch dino mode based on which section is in view
  useEffect(() => {
    const el = section2Ref.current;
    const root = containerRef.current;
    if (!el || !root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setDinoMode(entry.isIntersecting ? "follow" : "wander"),
      { root, threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {/* ── Section 1: Landing ── */}
        <section
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            background: "#ebebeb",
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
          }}
        >
          {/* Scattered trees */}
          {TREES.map((pos, i) => (
            <span
              key={i}
              style={{ position: "absolute", ...pos, lineHeight: 0 }}
            >
              <PineTree size={28} />
            </span>
          ))}

          {/* Centered text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontFamily: PT_SANS,
                fontWeight: 600,
                fontSize: "clamp(15px, 1.3vw, 18px)",
                color: "#111",
                marginBottom: 10,
              }}
            >
              hi, im ivy
            </p>
            <p
              style={{
                fontFamily: PT_SANS,
                fontSize: "clamp(14px, 1.2vw, 16px)",
                color: "#111",
                minHeight: "1.6em",
              }}
            >
              <TextCycler />
            </p>
          </div>

          {/* Scroll down cue */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 2,
              userSelect: "none",
            }}
          >
            <p
              style={{
                fontFamily: PT_SANS,
                fontSize: 13,
                color: "#0015FF",
                marginBottom: 6,
                letterSpacing: "0.04em",
              }}
            >
              scroll down
            </p>
            <span
              style={{
                display: "inline-block",
                color: "#0015FF",
                fontSize: 16,
                animation: "bounce 1.2s ease-in-out infinite",
              }}
            >
              ↓
            </span>
          </div>

          {/* About button — bottom right */}
          <button
            onClick={() => setAboutOpen((o) => !o)}
            onMouseEnter={() => setHouseHovered(true)}
            onMouseLeave={() => setHouseHovered(false)}
            style={{
              position: "absolute",
              bottom: 40,
              right: 60,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              zIndex: 2,
              lineHeight: 0,
            }}
          >
            <svg
              width="48"
              height="24"
              viewBox="0 0 157 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", transition: "opacity 0.15s" }}
            >
              <path
                d="M98 72C98 59 93 47 84 37C74 28 62 23 49 23C36 23 24 28 14 37C5 47 0 59 0 72L98 72Z"
                fill={houseHovered ? "#ed4253" : "#0015FF"}
              />
              <path
                d="M157 72C157 61 153 51 145 44C138 36 128 32 117 32C107 32 97 36 89 44C82 51 78 61 78 72L157 72Z"
                fill={houseHovered ? "#ed4253" : "#0015FF"}
              />
              <path
                d="M125 40C125 29 121 20 114 12C106 4 96 0 86 0C75 0 65 4 58 12C50 20 46 29 46 40L125 40Z"
                fill={houseHovered ? "#ed4253" : "#0015FF"}
              />
              <rect x="69" y="52" width="24" height="40" fill="#EBEBEB" />
            </svg>
          </button>
        </section>

        {/* ── Section 2: Projects ── */}
        <section
          ref={section2Ref}
          style={{
            background: "#ebebeb",
            height: "100vh",
            overflow: "hidden",
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
          }}
        >
          <ProjectTabs />
        </section>
      </div>

      {/* ── Dinos ── */}
      <DinoWanderer active={dinoMode === "wander"} />
      <DinoFollower active={dinoMode === "follow"} />

      {/* ── About modal ── */}
      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </>
  );
}
