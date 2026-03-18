# ivy chang — portfolio

Personal portfolio site for Ivy Chang, product designer. Built with Next.js and React.

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Inline styles + `globals.css`
- **Fonts:** PT Sans (Google Fonts — body + headings), Courier New (monospace accents)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pages

### `/` — Home

Two-section layout:

1. **Landing** — full-viewport with scattered pixel pine trees, centered intro text ("hi, im ivy") with a `TextCycler` rotating taglines, and a scroll cue.
2. **Projects** — `ProjectTabs` component listing all five case studies with hover-preview cards. Hovering over highlighted keywords surfaces an image and caption.

The pixel dino switches modes based on scroll position: it **wanders autonomously** on the landing section (clicking drops blue pixels for it to chase) and **follows the cursor** on the projects section. A custom `#0015FF` circle cursor with `mix-blend-mode: difference` is active site-wide.

### `/about`

Bio page with thinkings (pill tags) and vibes (pill tags with hover images).

---

## Case studies

### Presence AI — `/presence-ai`

Short:
Led everything design for the consumer-facing realtime avatar.

Expanded:
As the founding designer on a team of mostly engineers, I was responsible for the design of a 0-1 product: interactions, design system, and user interface. I also supported the team in research, analytics, and product strategies.

Short:

1. landing page interaction
   Proof of concept application with 4K DAU reached
2. Building for speed
   Defined design system and guided prompting language for team to push to production every 2 weeks
3. Conversation interface
   Designed conversation interfaces that reached 75% in 5min call

Expanded:

Key work: design system, landing site (zero-to-one across 3 design sprints), and the **conversational interface** (real-time avatar UI with sub-200ms response feel).

### Headroom — `/headroom`

Acquired by Upwork 2024.

Sole designer shaping a multimodal AI collaboration experience through an SDK developer platform, a B2B Lucidspark extension, and the Headroom brand. Work spans Lucid Spark (multimodal AI canvas collaboration) and an SDK developer tool. Headroom was acquired by Upwork in Q4 2024.

### Grand Theft Auto — `/grand-theft-auto`

Designed the out-of-console web experience for Grand Theft Auto that lets players create custom license plates. The app reached 4K+ users.

### Museum of Arts and Design — `/museum-of-arts-and-design`

Crafted a digital exhibition experience for the Museum of Arts and Design for the Burke Prize 2021 biannual show.

### Socratic — `/socratic`

Led the rebrand of Socratic — the AI-powered homework app — establishing the visual system, tone, and first-party content that defined its new identity.

---

## Project structure

```
src/
  app/
    components/
      CustomCursor.tsx        # Circle cursor with mix-blend-mode: difference
      DinoFollower.tsx        # Pixel dino that lerp-follows the cursor (projects section)
      DinoWanderer.tsx        # Pixel dino that roams autonomously (landing section); click to drop pixels
      TextCycler.tsx          # Fading tagline rotator on the landing section
      ProjectTabs.tsx         # Case study cards with keyword hover-previews
      CaseStudyLayout.tsx     # Shared layout for all case study pages
    about/page.tsx
    presence-ai/page.tsx
    headroom/page.tsx
    grand-theft-auto/page.tsx
    museum-of-arts-and-design/page.tsx
    socratic/page.tsx
    globals.css               # Reset, base styles, shared keyframes
    layout.tsx                # Root layout — fonts, CustomCursor
    page.tsx                  # Home page
public/
  images/                     # Project hover images and vibes images
```
