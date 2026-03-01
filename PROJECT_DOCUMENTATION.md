# ClubLiquidez — Full Project Documentation

## 1. Project Overview

**ClubLiquidez** is a premium trading academy web application positioned as **Market Educational Services** (education center in Kanchipuram, Tamil Nadu). The tagline is *"Professional Forex & Gold Trading Academy"* / *"Master the Markets with Structured Trading Education."* The app offers structured education, mentorship, and training programs: homepage, Programs page (beginner, advanced, gold, weekend, online, offline batches), Academy (master course with curriculum and Kanchipuram batches), Mentorship Program (repurposed from copy-trading), Advanced Strategy & Automation Training (repurposed from algo-trading), Insights (educational blog), About, Contact (with map and WhatsApp), and legal pages. No broker/platform or signal-service positioning; educational services only.

| Attribute | Value |
|-----------|--------|
| **Name** | ClubLiquidez (clubliquidez) |
| **Version** | 0.1.0 |
| **Type** | Next.js 14 web application (static export) |
| **Primary stack** | React 18, Next.js 14, TypeScript, Tailwind CSS, Supabase |
| **Deployment** | Static export (`output: 'export'`); README references Vercel; `netlify.toml` present for Netlify |

---

## 2. Technology Stack

### Core

- **Framework:** Next.js 14.2.35 (App Router)
- **Language:** TypeScript 5
- **UI:** React 18
- **Styling:** Tailwind CSS 3.3, PostCSS, Autoprefixer
- **Backend / Auth / DB:** Supabase (Auth + PostgreSQL via `@supabase/supabase-js`, `@supabase/ssr`)

### Key dependencies

- **Animation / UX:** `framer-motion`, `react-intersection-observer`, `react-countup`, `gsap`
- **Forms:** `react-hook-form`
- **Feedback:** `react-hot-toast`
- **Charts:** `recharts`
- **Utilities:** `clsx`, `tailwind-merge`, `date-fns`, `axios`, `lucide-react`

### Dev

- **Linting:** ESLint with `eslint-config-next`
- **Node:** Netlify config targets Node 18

---

## 3. Project Structure

```
ClubLiquidez/
├── app/                          # Next.js App Router
│   ├── layout.tsx                 # Root layout (metadata, AuthProvider, Toaster)
│   ├── page.tsx                   # Home (landing)
│   ├── globals.css                # Global styles, design tokens, utilities
│   ├── auth/
│   │   ├── page.tsx               # Sign in / Sign up / Forgot password
│   │   ├── callback/page.tsx      # OAuth & email verification callback
│   │   └── reset-password/page.tsx
│   ├── insights/
│   │   ├── page.tsx               # Insights listing (from Supabase)
│   │   └── [id]/
│   │       ├── layout.tsx
│   │       └── page.tsx           # Single insight (blog) view
│   ├── admin/
│   │   └── insights/page.tsx      # Admin CRUD for insights (auth required)
│   ├── profile/page.tsx           # User profile (auth required)
│   ├── contact/page.tsx           # Contact form + FAQ
│   ├── about/page.tsx
│   ├── programs/page.tsx          # Programs (Beginner, Advanced, Gold, Weekend, Online, Offline batches)
│   ├── copy-trading/page.tsx      # Mentorship Program (education-focused)
│   ├── algo-trading/page.tsx      # Advanced Strategy & Automation Training (education-only)
│   ├── academy/page.tsx           # Master Course / Academy (main product)
│   ├── tools/page.tsx
│   ├── markets/page.tsx
│   ├── community/page.tsx
│   ├── help/page.tsx
│   ├── status/page.tsx
│   ├── security/page.tsx
│   ├── terms/page.tsx
│   ├── privacy/page.tsx
│   ├── cookies/page.tsx
│   └── gdpr/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Main nav, auth state, user menu
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── BrandIntroSection.tsx
│   │   ├── PillarsSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── GoldCycleSection.tsx
│   │   ├── StrategyHighlightsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/
│       └── Button.tsx             # Shared button (variants, loading)
├── contexts/
│   └── AuthContext.tsx            # Supabase auth state & methods
├── lib/
│   ├── utils.ts                   # cn() (clsx + tailwind-merge)
│   └── supabase/
│       ├── client.ts              # Browser Supabase client
│       ├── server.ts               # Server Supabase client (cookies)
│       ├── middleware.ts          # Session refresh & auth redirect
│       └── insights.ts            # Insights CRUD + views increment
├── supabase/
│   ├── README.md
│   └── migrations/
│       └── 001_initial_schema.sql # Full DB schema (no insights table)
├── middleware.ts                  # Next middleware → updateSession
├── next.config.js                 # output: 'export', trailingSlash, images
├── tailwind.config.js
├── tsconfig.json                  # paths: @/* → ./*
├── env.example
├── netlify.toml
├── package.json
└── README.md
```

---

## 4. Architecture Summary

- **Rendering:** App Router with client components where needed (auth, forms, insights loading). Static export means no server-side API routes or server-only data at build time; Supabase is used from the client (and middleware for session refresh).
- **Auth:** Supabase Auth (email/password, optional OAuth). Session handled via `@supabase/ssr` in middleware and in browser via `AuthContext`. Protected routes redirect to `/auth` when there is no user.
- **Data:** Supabase PostgreSQL. Tables and RLS defined in `001_initial_schema.sql`. A separate **insights** table (and optional RPC like `increment_insight_views`) is used by the app but not defined in the provided migration; it must be created in Supabase (see Database section).
- **Styling:** Dark theme by default. Design system: gold/neon palette, `dark-*` scale, gradient text and buttons, glass effect. Tailwind + `globals.css` utilities.

---

## 5. Authentication & Authorization

### Auth provider

- **AuthContext** (`contexts/AuthContext.tsx`): exposes `user`, `session`, `loading`, and methods:
  - `signUp(email, password, fullName?)`
  - `signIn(email, password)`
  - `signOut()`
  - `signInWithProvider('google' | 'github' | 'twitter')`
  - `resetPassword(email)`
- Root layout wraps the app in `<AuthProvider>`.

### Session handling

- **Browser:** `lib/supabase/client.ts` uses `createBrowserClient` (from `@supabase/ssr`). If env vars are missing or placeholders, it returns `null` and auth is effectively disabled without crashing.
- **Server/middleware:** `lib/supabase/middleware.ts` uses `createServerClient` with request cookies to refresh the session. If Supabase env is missing, middleware allows the request through.

### Route protection

- **middleware.ts:** Runs on all routes except static assets and images. If there is no user and the path is not `/`, `/auth`, or under `/api`, the user is redirected to `/auth`.

### Auth pages

- **`/auth`:** Sign in / Sign up toggle, forgot password flow, email validation, password rules (8+ chars, upper, lower, number). Terms/Privacy links. Social sign-in UI is commented out.
- **`/auth/callback`:** Handles OAuth and email confirmation; exchanges `code` for session and redirects to `/` or `/auth?verified=true` / `?error=...`.
- **`/auth/reset-password`:** Entry point for password reset (link from email).

---

## 6. Database (Supabase PostgreSQL)

### Migration: `001_initial_schema.sql`

- **Extensions:** `uuid-ossp`
- **Enums:** `subscription_type`, `subscription_status`, `enrollment_status`, `payment_status`, `payment_method_type`, `notification_type`
- **Tables and purpose:**

| Table | Purpose |
|-------|---------|
| `user_profiles` | Extended profile (full_name, phone, avatar_url, bio, country, timezone, language, notification_preferences); FK to `auth.users` |
| `subscriptions` | User subscriptions (copy_trading, algo_trading, annual_membership, master_course); status, dates, price, currency |
| `payments` | Payments linked to user and optional subscription; status, method, provider, transaction_id |
| `course_enrollments` | Master course enrollments; progress_percentage, status, certificate |
| `course_module_progress` | Per-module progress per enrollment (module_id, completed, progress_percentage, quiz_score, etc.) |
| `copy_trading_relationships` | Follower–trader links; risk_level, copy_percentage, auto_copy, totals |
| `copy_trading_performance` | Per-trade copy performance (symbol, entry/exit, P&amp;L) |
| `algo_trading_strategies` | User algo strategies (name, configuration, risk_parameters, backtest_results, metrics) |
| `algo_trading_executions` | Algo execution logs (strategy_id, symbol, action, price, quantity, status) |
| `contact_submissions` | Contact form submissions (name, email, subject, message, status, response) |
| `notifications` | User notifications (type, title, message, is_read, action_url) |

- **RLS:** Enabled on all tables; policies restrict access to own rows (or to related user via joins).
- **Triggers:** `updated_at` on main tables; `handle_new_user()` creates a `user_profiles` row on `auth.users` insert; `update_course_progress()` updates enrollment progress when module progress changes.
- **Indexes:** Indexes on foreign keys, status, dates, and common filters for performance.

### Insights feature (not in migration)

The app assumes an **`insights`** table and optionally an RPC **`increment_insight_views`**. These are not in `001_initial_schema.sql`. From `lib/supabase/insights.ts`, the expected shape is:

- **insights:** `id`, `title`, `excerpt`, `content`, `author`, `author_id`, `category` (Forex Education | Gold Strategy | Risk Management | Trading Psychology | Market Breakdown), `tags` (array), `views`, `featured`, `read_time`, `published`, `published_at`, `cover_image_url`, `seo_title`, `seo_description`, `created_at`, `updated_at`
- **RPC:** `increment_insight_views(insight_id)` to increment `views`

You need to add the `insights` table (and RPC if using view counting) in Supabase for the Insights and Admin Insights pages to work.

---

## 7. Features by Area

### 7.1 Home (`/`)

- **Layout:** Navbar + sequential sections + Footer.
- **Sections:** Hero, Brand Intro, Pillars, Trust, Gold Cycle, Strategy Highlights, Testimonials, Stats, Final CTA.
- **Tech:** Framer Motion, intersection observer, count-up, GSAP where used.

### 7.2 Insights (blog)

- **`/insights`:** Lists published insights from Supabase. Category filter (All, Forex Education, Gold Strategy, Risk Management, Trading Psychology, Market Breakdown), search, featured block, then grid of cards. Click → `/insights/[id]`. Positioned as educational blog; no signal-service language.
- **`/insights/[id]`:** Single insight: title, excerpt, meta (author, date, read time, views), cover image, tags, HTML content, share button. Calls `incrementInsightViews(id)` on load (RPC).
- **Data:** `getInsights()`, `getInsightById()`, `incrementInsightViews()` in `lib/supabase/insights.ts`. Content stored as HTML; admin converts to/from plain text for editing.

### 7.3 Admin Insights (`/admin/insights`)

- **Access:** Requires authenticated user (redirect to `/auth` if not).
- **Actions:** List all insights (with filters), create, edit, delete. Form: title, excerpt, content (textarea), author, category, read_time, cover_image_url, tags, featured, published. Plain text ↔ HTML conversion for content.
- **API:** `createInsight()`, `updateInsight()`, `deleteInsight()`, `getInsights()` from `lib/supabase/insights.ts`. No separate admin role check in code; RLS on `insights` table should define who can write.

### 7.4 Profile (`/profile`)

- **Access:** Authenticated only; shows avatar (initial), name, email, member since, verification status, user ID from Supabase Auth user object. No edit form in the reviewed code.

### 7.5 Contact (`/contact`)

- **Content:** Contact methods (email, phone, live chat), contact form (name, email, subject, message), FAQ.
- **Form:** Submit is simulated (setTimeout); no persistence to `contact_submissions` in the current implementation. Backend or Supabase insert can be added later.

### 7.6 Product / marketing pages

- **Copy Trading (`/copy-trading`):** Value proposition, features, “for whom”, CTA. No live trading logic in app.
- **Algo Trading (`/algo-trading`):** Product/marketing content for algo trading.
- **Academy / Master Course (`/academy`):** Main product. Curriculum: Basics of Forex, Gold (XAUUSD), Price Action, Risk Management, Trading Psychology. Batch system (limited seats, live sessions, offline classroom in Kanchipuram). Duration & fees. CTAs: Enroll Now, Join the Next Batch, Book a Free Session.

### 7.7 Other routes

- **Tools (`/tools`), Markets (`/markets`), Community (`/community`), Help (`/help`), Status (`/status`), Security (`/security`):** Present in the app; content is marketing/support.
- **Legal & compliance:** Terms (`/terms`), Privacy (`/privacy`), Cookies (`/cookies`), GDPR (`/gdpr`).

---

## 8. UI & Design System

### Theme

- **Mode:** Dark (`html` has `class="dark"`).
- **Font:** Inter (Google Fonts + Tailwind `sans`).
- **Palette:**
  - **Gold / neon:** `#D4AF37` (neon-gold), champagne, deep, dark, amber variants used for accents, gradients, borders, focus rings.
  - **Neutrals:** `dark-50` … `dark-950` (light gray to black). Backgrounds typically `dark-950`, `dark-900`, `dark-800`, `dark-700`.

### Tailwind (`tailwind.config.js`)

- **Colors:** `primary`, `gold`, `neon`, `dark` scales; `success`, `warning`, `danger`.
- **Fonts:** `sans` (Inter), `display` (Satoshi).
- **Animations:** `fade-in`, `slide-up`, `slide-down`, `scale-in`, `glow`, `float`, `pulse-slow`.
- **Backgrounds:** `gradient-radial`, `gradient-conic`, `gradient-neon`, `gradient-gold`, `gradient-gold-deep`.

### globals.css

- **Utilities:** `.gradient-text`, `.neon-glow`, `.glass-effect`, `.button-primary`, `.button-secondary`, `.card-hover`, and text/background/border/ring classes for neon-gold variants and `dark-*`.
- **Scrollbar:** Dark track, gold thumb.
- **Prose:** Custom prose (e.g. on insight post) for headings, links, blockquotes, code.

### Components

- **Button:** Variants `primary` | `secondary` | `outline` | `ghost`, sizes `sm` | `md` | `lg`, optional `loading`. Uses Framer Motion for hover/tap.
- **Navbar:** Logo (LC.png + LCP.png), nav links (Programs, Academy, Insights, About, Contact), auth: Sign In / Enroll Now or user avatar + dropdown (Profile, Sign Out). Mobile hamburger menu.
- **Footer:** Standard site footer (links, branding).

---

## 9. Configuration

### Environment variables (`env.example`)

- **Required for Supabase:**  
  `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Optional:**  
  `CUSTOM_KEY` (defaults to `'default-key'` in `next.config.js`)

### Next.js (`next.config.js`)

- `output: 'export'` — static export; no server at runtime for API routes.
- `trailingSlash: true`
- `images.unoptimized: true`; `domains`: `images.unsplash.com`, `via.placeholder.com`

### Netlify (`netlify.toml`)

- Build: `npm run build`; publish: `out` (aligns with static export).
- Node 18.
- SPA-style redirect: `/*` → `/index.html` (status 200).
- Security headers (X-Frame-Options, X-XSS-Protection, etc.) and cache headers for `_next/static`, `.js`, `.css`, `.woff2`.

### Metadata (`app/layout.tsx`)

- Title: “ClubLiquidez - Professional Forex & Gold Trading Academy”
- Description, keywords, authors, favicon/icon (`/LC.png`).
- Open Graph and Twitter card (og-image.jpg).
- Robots and Google verification placeholder.

---

## 10. Scripts & Commands

| Command | Purpose |
|--------|---------|
| `npm run dev` | Next.js dev server |
| `npm run build` | Next.js build (static export to `out`) |
| `npm run start` | Not used for static export; for `next start` if switching to server mode |
| `npm run lint` | Next.js ESLint |

---

## 11. Deployment Notes

- **Static export:** The app is built as a static site. Auth and Supabase run in the browser and via middleware (which runs on the host’s edge/server that serves the app). No Next.js API routes.
- **Vercel:** README describes setting env vars in Vercel project settings. For full auth, use Vercel (or similar) so middleware and redirects work correctly.
- **Netlify:** `netlify.toml` is set up for build and publish from `out`; redirects and headers are configured. Ensure Supabase env vars are set in Netlify.
- **Assets:** `app/icon.png`, `public/LC.png`, `public/favicon.ico` are removed in git status; layout still references `/LC.png` and `/LCP.png`. Restore or update paths so logos and favicon resolve.

---

## 12. Gaps & Recommendations

1. **Insights table & RPC:** Add Supabase migration (or SQL in dashboard) for `insights` table and `increment_insight_views` RPC; add RLS so only intended roles can insert/update/delete.
2. **Contact form:** Wire the contact form to `contact_submissions` (e.g. server action or API route calling Supabase) and optionally notify support.
3. **Admin role:** If only some users should access `/admin/insights`, enforce via RLS and/or a role claim (e.g. in `user_metadata` or a `user_profiles` flag) and check it in the app.
4. **Favicon / icons:** Restore or replace deleted `app/icon.png`, `public/LC.png`, `public/favicon.ico` and align with layout metadata.
5. **Static export vs auth:** With `output: 'export'`, middleware runs on the platform that serves the app. Confirm that your host (Vercel/Netlify) runs middleware for protected routes and that auth redirects work in production.
6. **OAuth:** Social sign-in is implemented in context but UI is commented out on `/auth`; enable and configure providers in Supabase when needed.

---

## 13. File Count Summary

- **App routes/pages:** 20+ under `app/`
- **Components:** Layout (Navbar, Footer), 9 home sections, 1 UI (Button)
- **Contexts:** 1 (Auth)
- **Lib:** Supabase client, server, middleware, insights module; `utils.ts`
- **Supabase:** 1 migration file (initial schema)
- **Config:** `next.config.js`, `tailwind.config.js`, `tsconfig.json`, `netlify.toml`, `env.example`, `middleware.ts`

This document reflects the codebase as of the last review. For the latest schema and env requirements, always check `supabase/migrations`, `env.example`, and the README.
