# ThomFind — AI-Powered Lost & Found for UST

A production-ready Next.js module for the **MyUSTe Portal** of the University of Santo Tomas.

## Features

- **Report Lost/Found Items** — Detailed forms with AI auto-category detection
- **AI Smart Matching** — NLP keyword similarity, color, location & date proximity scoring
- **Browse & Filter** — Search by keyword, category, building, date, status
- **Claim Process** — Ownership verification with hidden detail challenge
- **Notifications** — Real-time alerts for matches, claim approvals, security updates
- **Admin Dashboard** — Analytics charts, report management, claim review
- **Duplicate Detection** — Prevents redundant reports

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **State:** Zustand (client-side, swap for Supabase/Prisma in production)
- **Charts:** Recharts
- **Icons:** Lucide React
- **Toasts:** React Hot Toast

## Getting Started

```bash
cd thomfind
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Accounts

| Role     | Email                          | Password    |
|----------|-------------------------------|-------------|
| Student  | maria.santos@ust.edu.ph       | password123 |
| Student  | juan.delacruz@ust.edu.ph      | password123 |
| Faculty  | ana.reyes@ust.edu.ph          | password123 |
| Security | bautista@ust.edu.ph           | password123 |
| Admin    | admin.lim@ust.edu.ph          | password123 |

## Pages

| Route              | Description                        |
|--------------------|------------------------------------|
| `/`                | Login (MyUSTe portal style)        |
| `/dashboard`       | User dashboard with stats          |
| `/report/lost`     | Report a lost item                 |
| `/report/found`    | Report a found item                |
| `/browse`          | Browse all listings with filters   |
| `/item/[id]`       | Item detail + claim form           |
| `/matches`         | AI match results                   |
| `/notifications`   | Notification center                |
| `/admin`           | Admin analytics dashboard          |
| `/admin/reports`   | Manage all reports                 |
| `/admin/claims`    | Review & process claims            |

## AI Matching Algorithm

Scores are computed across 5 dimensions:

| Factor              | Weight |
|---------------------|--------|
| Category match      | 30%    |
| Keyword similarity  | 25%    |
| Color match         | 15%    |
| Location proximity  | 20%    |
| Date proximity      | 10%    |

Matches ≥ 40% are surfaced; ≥ 70% are flagged as high-confidence.

## Production Upgrade Path

1. Replace Zustand store with **Supabase** (auth + database)
2. Add **Supabase Storage** for image uploads
3. Add **Supabase Realtime** for live notifications
4. Integrate **OpenAI embeddings** for semantic description matching
5. Add **image recognition** via Google Vision API
