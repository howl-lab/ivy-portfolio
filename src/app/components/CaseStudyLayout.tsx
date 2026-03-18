import Link from "next/link";
import { ReactNode } from "react";

export default function CaseStudyLayout({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "clamp(32px, 6vw, 64px) clamp(24px, 8vw, 120px)",
        maxWidth: 860,
      }}
    >
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

      <h1
        style={{
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(32px, 5vw, 64px)",
          lineHeight: 1.1,
          color: "#111",
          marginTop: 40,
          marginBottom: 24,
        }}
      >
        {title}
      </h1>

      {children}
    </main>
  );
}
