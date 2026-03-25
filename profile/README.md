<div align="center">
  <img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/47-logo.png" alt="47 Industries" width="90" />
  <br /><br />

  <h1>47 Industries</h1>

  <p><strong>We build software, hardware, and technology products from the ground up.</strong><br />
  From iOS apps to SaaS platforms, 3D printing to AI automation — every product ships with craft.</p>

  <a href="https://47industries.com">
    <img src="https://img.shields.io/badge/47industries.com-000000?style=for-the-badge&logo=globe&logoColor=white" alt="Website" />
  </a>
  &nbsp;
  <a href="mailto:contact@47industries.com">
    <img src="https://img.shields.io/badge/contact@47industries.com-000000?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>

  <br /><br />

  <img src="https://img.shields.io/badge/Tampa_Bay,_FL-000000?style=flat-square" />
  &nbsp;
  <img src="https://img.shields.io/badge/Apple_Developer_Program-000000?style=flat-square&logo=apple&logoColor=white" />
  &nbsp;
  <img src="https://img.shields.io/badge/95%2B_DB_Models-000000?style=flat-square" />
  &nbsp;
  <img src="https://img.shields.io/badge/390%2B_API_Endpoints-000000?style=flat-square" />

</div>

---

## Products

<br />

### 47industries.com — Platform & Operations Hub

**Our flagship platform. It's a lot more than a store.**

47industries.com is the operational core of the entire company — a production Next.js app that handles e-commerce, B2B client services, partner and affiliate programs, finance and accounting, contract management, document signing, email, team management, and mobile app integration under one roof. Two subdomains, one codebase: the public storefront at `47industries.com` and the internal admin suite at `admin.47industries.com`.

<br />

**The Store**

Full e-commerce lifecycle — end to end.

- Product catalog with variants, options, filtering, and brand pages
- Shopping cart with session persistence and abandoned cart recovery
- Guest and registered user checkout via Stripe
- Discount codes, tax calculation, and multi-carrier shipping rates via Shippo
- Order confirmation, tracking, and status updates
- Return and refund management
- Digital product downloads with expiration and limit controls
- Printful POD integration — order sync, retry, and status tracking
- Print queue management for in-house fulfillment
- Inventory tracking with stock alerts and movement history

**Custom 3D Printing**

- Detailed request form — material, finish, color, quantity, file upload to R2
- Expedited processing, assembly, and packaging options
- Admin quote generation and reply workflow
- Shipping label generation from fulfilled requests

**Web, App & Service Projects**

- Service inquiry forms for web development, app development, and design
- Inquiry-to-client conversion workflow with project tracking
- Service packages with feature lists and pricing
- Client onboarding into the full client portal

<br />

**Client Portal** &nbsp;`/account/client`

A private dashboard for every client we work with.

- Project status and milestone tracking
- Invoice viewing, payment, and autopay setup via Stripe
- Contract library — view, sign, and download PDFs
- Contract amendments and version history
- Stripe billing portal
- Direct communication thread per client

<br />

**Partner Program** &nbsp;`/account/partner` · `admin.47industries.com/partners`

A full partner and affiliate ecosystem with MLM support.

- Partner applications and onboarding
- Stripe Connect setup for direct payouts (or Zelle/Venmo)
- Partner contracts with digital signing and amendments
- Commission tracking — tiered rates with override configurations
- MLM sponsor tree with referral code generation
- Lead CRM — track and attribute every referred opportunity
- Payout processing with execution confirmation
- Partner-level affiliate links with click and conversion tracking
- Recruitment pages with unique sponsor codes

**User Affiliate Program** &nbsp;`/account/affiliate`

- Custom affiliate link codes
- Click and referral tracking
- Commission and points accumulation
- Points redemption system
- MotoRev Pro conversion bonuses

<br />

**Finance & Accounting** &nbsp;`admin.47industries.com/finance`

Internal financial management built directly into the platform.

- Expense tracking and categorization
- Income recording
- Recurring bill setup with auto-generated instances
- Bill scanning from Gmail and Zoho — parses emails, extracts bill data automatically
- Transaction categorization with configurable skip rules
- Bank account integration via Stripe Financial Connections
- Team member and founder expense splits
- Expense summaries and financial reports
- Bill payment tracking per instance

<br />

**Invoicing & Contracts** &nbsp;`admin.47industries.com/invoices` · `/contracts`

- Invoice creation, sending, and payment link generation
- Recurring invoice automation via cron
- Multi-signature contract workflow with cascade signing
- Contract composition into downloadable PDFs
- Digital signature fields with annotation support
- Partner agreement auto-generation
- Company document storage with folder organization
- Team member contract and document management
- Pending signature tracking across all documents

<br />

**Admin Dashboard** &nbsp;`admin.47industries.com`

Every operational surface of the company — one interface.

| Section | What It Covers |
|---|---|
| Orders | Status, items, refunds, shipping labels, print queue |
| Products | CRUD, variants, options, collections, brands, Printful sync |
| Customers | Profiles, orders, segmentation, affiliate/partner promotion |
| Clients | CRM, projects, contacts, notes, messages, activity logs |
| Partners | Applications, contracts, commissions, payouts, MLM config |
| Finance | Expenses, income, bills, recurring billing, bank connections |
| Invoices | Create, send, record payments, generate payment links |
| Contracts | Sign, countersign, compose PDFs, manage signature fields |
| Documents | Company docs, team docs, folder management |
| Email | Connected inbox (Gmail/Zoho), send/reply, campaign builder |
| Team | Member management, payments, contracts, documents |
| Blog | Posts, categories, content management |
| Analytics | Real-time stats, sales reports, customer and inventory reports |
| Settings | Tax rates, shipping zones, email signatures, feature flags, OAuth apps |
| DevOps | GitHub integration, Railway deployment status |
| Printful | Order sync, status tracking, retry queue |
| Bookfade | Cross-platform barber management |

<br />

**Email Integration**

- Gmail and Zoho Mail OAuth connections
- Unified inbox across connected accounts
- Bill scanning from email (auto-parses amounts and senders)
- Send and reply from admin
- Email campaign builder with dark-mode HTML templates
- Inbound email webhooks (Resend + Zoho)
- Email signature management per account

<br />

**Mobile App Support**

- MotoRev OAuth — link MotoRev accounts to 47 Industries profiles
- WebView pages for the 47-admin native app
- Push notification token registration
- SMS consent tracking (Twilio)
- Mobile-specific API endpoints for the React Native admin app

<br />

**OAuth 2.0 Server**

Full OpenID Connect implementation — 47industries.com acts as an identity provider.

- Authorization, token, and userinfo endpoints
- JWKS for JWT verification
- OAuth application management with secret rotation
- MotoRev and third-party app connections

<br />

<div>
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=flat&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=flat" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/NextAuth.js-000000?style=flat" />
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=flat&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudflare_R2-F38020?style=flat&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/Resend-000000?style=flat" />
  <img src="https://img.shields.io/badge/Twilio-F22F46?style=flat&logo=twilio&logoColor=white" />
  <img src="https://img.shields.io/badge/Shippo-4A90D9?style=flat" />
  <img src="https://img.shields.io/badge/Printful-000000?style=flat" />
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white" />
</div>

<br />

<a href="https://47industries.com">
  <img src="https://img.shields.io/badge/47industries.com-3b82f6?style=for-the-badge&logo=globe&logoColor=white" />
</a>

---

### MotoRev — Motorcycle Companion App

<img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/motorev-logo.png" alt="MotoRev" width="60" align="left" style="margin-right: 16px; margin-bottom: 8px;" />

**The social platform built for motorcycle riders.**

A complete iOS ecosystem for riders — GPS ride tracking, crash detection and emergency response, community social feed, digital garage, integrated music streaming (YouTube, SoundCloud, Last.fm), leaderboards, group rides, and an Apple Watch companion. Built on a 50-table production database with 200+ API endpoints.

<br />

| | |
|---|---|
| **Platform** | iOS + watchOS |
| **Model** | Free · Pro ($4.99/mo or $49.99/yr) |
| **Launched** | October 17, 2025 |
| **Scale** | 200+ API endpoints · 50+ database tables · Railway MySQL |

<div>
  <img src="https://img.shields.io/badge/SwiftUI-F05138?style=flat&logo=swift&logoColor=white" />
  <img src="https://img.shields.io/badge/CoreLocation-F05138?style=flat&logo=apple&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudflare_R2-F38020?style=flat&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white" />
</div>

<br />

<a href="https://motorevapp.com">
  <img src="https://img.shields.io/badge/motorevapp.com-FF6B35?style=for-the-badge&logo=apple&logoColor=white" />
</a>

<br />

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/motorev-navigate.png" width="220" alt="MotoRev Navigation" /></td>
    <td><img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/motorev-social.png" width="220" alt="MotoRev Social" /></td>
    <td><img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/motorev-garage.png" width="220" alt="MotoRev Garage" /></td>
  </tr>
  <tr>
    <td align="center"><sub>Navigation + Ride Tracking</sub></td>
    <td align="center"><sub>Social Feed</sub></td>
    <td align="center"><sub>Digital Garage</sub></td>
  </tr>
</table>

---

### BookFade — Barber Booking Platform

<img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/bookfade-logo.png" alt="BookFade" width="60" align="left" style="margin-right: 16px; margin-bottom: 8px;" />

**Smart booking software for barbers and barbershops.**

Multi-tenant SaaS that lets independent barbers and shops manage bookings, calendar, clients, and services — while clients discover and book through a clean public profile. SMS/email reminders, Google Calendar sync, custom domain support, QR code booking, and native iOS/Android apps for both barbers and clients.

<br />

| | |
|---|---|
| **Platform** | Web + iOS/Android (barber app + client app) |
| **Model** | Solo $29.99/mo · Shop $59.99/mo · 14-day free trial |
| **First Barber** | Tommy Owens — Werk's Elite Barbershop, Largo, FL |

<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=flat&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/Twilio-F22F46?style=flat&logo=twilio&logoColor=white" />
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white" />
</div>

<br />

<a href="https://bookfade.app">
  <img src="https://img.shields.io/badge/bookfade.app-000000?style=for-the-badge&logo=globe&logoColor=white" />
</a>

<br />

<img src="https://raw.githubusercontent.com/47-Industries/.github/master/profile/bookfade-og.png" width="680" alt="BookFade" />

---

### LeadSlicer — AI Lead Generation

**Find leads. Write outreach. Close deals. On autopilot.**

AI-powered lead generation and outreach platform. Discovers businesses across Google Maps, Yelp, and Instagram, qualifies them with real-time web scraping, and fires personalized email, SMS, and DM campaigns. Unified inbox across every channel. Built to drive top-of-funnel for BookFade and MotoRev.

<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Claude_(Anthropic)-CC785C?style=flat" />
  <img src="https://img.shields.io/badge/Twilio-F22F46?style=flat&logo=twilio&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white" />
</div>

---

### InstaLeadAI — Instagram Outreach

**Instagram lead generation with a native iOS experience.**

Captures leads from Instagram, automates conversation flows, and schedules appointments. Real-time sync between the iOS dashboard and backend.

<div>
  <img src="https://img.shields.io/badge/Swift-F05138?style=flat&logo=swift&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white" />
</div>

---

### CalPal — Shared Calendar

**One calendar. Everyone on the same page.**

Shared calendar for couples, families, and teams. AI-powered screenshot scanning extracts events directly from work schedules — no manual entry. View/edit/admin permission levels per shared calendar.

<div>
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI_Vision-412991?style=flat&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" />
</div>

---

### Content Studio — Video Production Workspace

**Centralized creative infrastructure for all 47 Industries brands.**

Shared footage library with AI-powered indexing and clip analysis. Automates reel building — script generation, clip selection, effects, and multi-brand exports. Raw footage in Cloudflare R2, index in GitHub.

<div>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FFmpeg-007808?style=flat&logo=ffmpeg&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudflare_R2-F38020?style=flat&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/Claude_(Anthropic)-CC785C?style=flat" />
</div>

---

## Tech Stack

**Frontend**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black)
![SwiftUI](https://img.shields.io/badge/SwiftUI-F05138?style=flat-square&logo=swift&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square)

**Backend & Data**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white)

**Infrastructure**

![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Namecheap](https://img.shields.io/badge/Namecheap-DE3723?style=flat-square&logo=namecheap&logoColor=white)

**Payments · Comms · AI**

![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=flat-square&logo=twilio&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square)
![Claude](https://img.shields.io/badge/Claude-CC785C?style=flat-square)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Shippo](https://img.shields.io/badge/Shippo-4A90D9?style=flat-square)
![Printful](https://img.shields.io/badge/Printful-000000?style=flat-square)

---

## The Ecosystem

```
47 Industries (Parent)
│
├── 47industries.com         Store · B2B · CRM · Finance · Admin · OAuth IdP
│   ├── admin.47industries.com   Internal admin suite (subdomain routing)
│   └── 47-admin             Mobile admin app (React Native/Expo)
│
├── MotoRev                  iOS motorcycle social + safety platform
│   ├── MotoRev Backend      Express API · 200+ endpoints · Socket.IO
│   └── YouTube Proxy        Vercel serverless — audio extraction
│
├── BookFade                 Barber booking SaaS (web + iOS/Android)
│
├── LeadSlicer               AI outreach platform — feeds BookFade + MotoRev
│
├── InstaLeadAI              Instagram lead gen (iOS + backend)
│
├── Content Studio           Multi-brand video production workspace
│
└── CalPal                   Shared calendar with AI screenshot scanning
```

---

## Services

| | |
|---|---|
| **Web Development** | Next.js full-stack apps, APIs, auth, payments |
| **iOS Development** | SwiftUI native + Apple Watch |
| **Cross-Platform** | React Native/Expo for iOS and Android |
| **3D Printing** | Custom print orders, product runs, rapid prototyping |
| **AI Automation** | Claude-powered lead gen, content tools, automation pipelines |

---

<div align="center">

**47 Industries LLC** &nbsp;·&nbsp; Tampa Bay, FL &nbsp;·&nbsp; [47industries.com](https://47industries.com) &nbsp;·&nbsp; [contact@47industries.com](mailto:contact@47industries.com)

</div>
