"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const VIBES_DATA: Record<string, { image: string }> = {
  Nature: { image: "/images/vibes-nature.jpg" },
  Declutter: { image: "/images/vibes-declutter.jpg" },
  Retro: { image: "/images/vibes-retro.jpg" },
  Play: { image: "/images/vibes-play.jpg" },
  Delight: { image: "/images/vibes-delight.jpg" },
};

function VibesHoverCard({ image }: { image: string }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
        pointerEvents: "none",
        maxWidth: 320,
        background: "#d8d8d8",
        overflow: "hidden",
        animation: "cardIn 0.18s ease forwards",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        style={{ display: "block", width: "100%", height: "auto" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

function PixelDino() {
  return (
    <svg width="48" height="32" viewBox="0 0 12 8" style={{ imageRendering: "pixelated" }}>
      <rect x="3" y="3" width="6" height="4" fill="#0015FF" />
      <rect x="7" y="1" width="3" height="3" fill="#0015FF" />
      <rect x="9" y="2" width="2" height="1" fill="#0015FF" />
      <rect x="8" y="1" width="1" height="1" fill="#0015FF" />
      <rect x="4" y="7" width="1" height="1" fill="#0015FF" />
      <rect x="6" y="7" width="1" height="1" fill="#0015FF" />
      <rect x="2" y="4" width="1" height="1" fill="#0015FF" />
      <rect x="1" y="5" width="1" height="1" fill="#0015FF" />
    </svg>
  );
}

function Pill({
  label,
  rounded = false,
  onEnter,
  onLeave,
}: {
  label: string;
  rounded?: boolean;
  onEnter?: (key: string) => void;
  onLeave?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => { setHovered(true); onEnter?.(label); }}
      onMouseLeave={() => { setHovered(false); onLeave?.(); }}
      style={{
        display: "inline-block",
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 13,
        padding: rounded ? "6px 16px" : "6px 14px",
        border: "1px solid #bbb",
        borderRadius: rounded ? 999 : 4,
        background: hovered ? "#111" : "transparent",
        color: hovered ? "#fff" : "#111",
        cursor: "default",
        transition: "background 0.15s, color 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

export default function AboutPage() {
  const [activeVibe, setActiveVibe] = useState<string | null>(null);

  const handleEnter = useCallback((key: string) => setActiveVibe(key), []);
  const handleLeave = useCallback(() => setActiveVibe(null), []);

  const activeImage = activeVibe ? VIBES_DATA[activeVibe].image : null;

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          padding: "clamp(32px, 6vw, 64px) clamp(24px, 8vw, 120px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: 40, display: "flex", justifyContent: "center" }}>
          <PixelDino />
        </div>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 15, fontWeight: 500, color: "#111", marginBottom: 4 }}>
            Generalist. 8+ yr experiences.
          </p>
          <p style={{ fontSize: 15, color: "#888" }}>0-1 tools + big ideas + interfaces.</p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111" }}>
            Fascinated by how things work + why they exist.
            <br />
            Loves inanimate objects, nature, and my pup.
            <br />
            Run on curiosity and play.
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontStyle: "italic", fontSize: 15, color: "#111", marginBottom: 14 }}>
            Thinkings:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            {[
              "Scale + recycle",
              "Exploration = discovery",
              "Constraints + engineers are friends",
              "Simplicity in usability",
              "People first (like really)",
            ].map((label) => (
              <Pill key={label} label={label} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 56 }}>
          <p style={{ fontStyle: "italic", fontSize: 15, color: "#111", marginBottom: 14 }}>
            Vibes:
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {Object.keys(VIBES_DATA).map((label) => (
              <Pill key={label} label={label} rounded onEnter={handleEnter} onLeave={handleLeave} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: 13, color: "#111" }}>
            ivychang02@gmail.com
          </p>
        </div>

        <div>
          <Link
            href="/"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: 12,
              color: "#888",
              textDecoration: "none",
            }}
          >
            ← back
          </Link>
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "16px 0 24px",
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: 12,
          color: "#7b7b7b",
        }}
      >
        Copyrighted ©2026
      </footer>

      {activeImage && <VibesHoverCard image={activeImage} />}
    </>
  );
}
