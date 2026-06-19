# The Roselyn Method

> **Night Nurse. Better Nights. Brighter Days.**

A premium newborn care platform offering expert sleep guides, personalized consultations, and trusted resources for modern parents.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 + Framer Motion |
| Database | PostgreSQL + Prisma ORM |
| Auth | Auth.js v5 (Google + Magic Link) |
| Payments | Stripe (Checkout + Webhooks) |
| Email | Resend |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone & Install

```bash
git clone <repo>
cd roselyn-method
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your environment variables:
- `DATABASE_URL` — PostgreSQL connection string
- `NEXTAUTH_SECRET` — Generate with `openssl rand -base64 32`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth credentials
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `RESEND_API_KEY`

### 3. Database Setup

```bash
npm run db:push       # Push schema to database
npm run db:seed       # Seed demo data
npm run db:studio     # View database in Prisma Studio
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/store` | Digital product store |
| `/store/[slug]` | Product detail page |
| `/booking` | Consultation booking flow |
| `/blog` | Educational resource center |
| `/blog/[slug]` | Blog article |
| `/affiliate` | Recommended essentials |
| `/about` | About page |
| `/contact` | Contact page |
| `/auth/signin` | Authentication |
| `/dashboard` | Parent dashboard |
| `/consultant` | Consultant dashboard |
| `/admin` | Admin dashboard |

---

## API Routes

| Route | Method | Description |
|---|---|---|
| `/api/auth/[...nextauth]` | GET/POST | Auth.js handlers |
| `/api/checkout/product` | POST | Create Stripe checkout for digital guide |
| `/api/checkout/consultation` | POST | Create Stripe checkout for consultation |
| `/api/webhooks/stripe` | POST | Handle Stripe webhook events |
| `/api/newsletter/subscribe` | POST | Subscribe to newsletter |

---

## Key Features

### Digital Store
- Full product catalog with categories, search, and filters
- Wishlist / saved items
- Star ratings and reviews
- Instant download after Stripe payment

### Consultation Booking
- 5-step booking flow: Service → Consultant → Schedule → Intake Form → Payment
- Three service tiers: Quick Guidance (30 min), Comprehensive (60 min), Ongoing Support
- Stripe Checkout integration
- Email confirmations via Resend

### Parent Dashboard
- Order history and download access
- Upcoming appointments
- Account settings

### Consultant Dashboard
- Appointment calendar
- Weekly availability management
- Client session history

### Admin Dashboard
- Revenue analytics with Recharts
- Order and user management
- Blog CMS
- Testimonials, newsletter subscribers

### Blog / Resource Center
- Category filtering (Sleep, Feeding, Recovery, Development, Nursery Tips)
- Featured articles
- Related product recommendations in sidebar

---

## Brand Colors

| Name | Hex |
|---|---|
| Midnight Navy | `#03051A` |
| Rose Gold | `#D7B0A3` |
| Soft Blush | `#E8CFC8` |
| Warm Ivory | `#FFFDFB` |
| Charcoal Navy | `#1B2333` |

---

## Future: Staffing Division

The architecture includes feature-flagged modules for:
- Night Nurse Marketplace
- Postpartum Doula Directory
- Daytime Baby Care Specialists
- Caregiver Booking System

These are controlled by the `STAFFING_DIVISION` feature flag in the database (default: disabled).

---

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add all environment variables
4. Deploy

Set up Stripe webhooks to point to:
```
https://yourdomain.com/api/webhooks/stripe
```

---

## License

© The Roselyn Method. All rights reserved.
