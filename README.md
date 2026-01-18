<!--
posOpen — Open, Modular Point-of-Sale Platform
Repo: posopen/www
-->

<p align="center">
  <img src="https://raw.githubusercontent.com/posopen/www/d7b897263ca4bd6f2bf90e92da1f78594b02daaa/public/brand/logo-icon.svg" alt="posOpen logo" width="96" height="96" />
</p>

<h1 align="center">posOpen</h1>

<p align="center">
  <strong>An open, modular, offline-capable Point-of-Sale platform.</strong><br/>
  Built for small businesses. Designed for emerging markets. Engineered to scale.
</p>

<p align="center">
  <a href="https://github.com/posopen/www/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/posopen/www/ci.yml?style=flat-square" />
  </a>
  <a href="https://github.com/posopen/www/issues">
    <img src="https://img.shields.io/github/issues/posopen/www?style=flat-square" />
  </a>
  <a href="https://github.com/posopen/www/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/posopen/www?style=flat-square" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/status-MVP--in--progress-blue?style=flat-square" />
  </a>
</p>

---

## Why posOpen exists

Most POS systems are:
- vendor-locked
- over-engineered
- cloud-dependent
- expensive to leave

**posOpen is different.**

posOpen is a **platform**, not a monolith.

It is designed so that:
- merchants can *own* their system
- developers can *extend* it cleanly
- operators can *run offline* without fear
- integrations do not require rewrites

Quietly powerful. Intentionally simple.

---

## Core Principles

- **Open standards over proprietary silos**
- **Configuration over custom code**
- **Offline-first by design**
- **API-first, UI-second**
- **Reliability beats cleverness**
- **Shipping beats perfection**

---

## What this repository contains

This repository hosts the **web frontend and UI system** for posOpen.

It includes:
- Marketing landing pages
- Application shell (PWA-ready)
- POS UI components
- Design tokens & theming
- Component documentation

> Backend services, payments, and integrations live in separate repos by design.

---

## MVP Functional Scope

### Core POS Operations
- Product & pricing management
- Sales transactions
- Tax / VAT handling (region-aware)
- Discounts & basic promotions
- Digital & printable receipts

### Inventory
- Stock tracking
- Manual adjustments
- Low-stock alerts

### Payments
- Cash
- Modular payment provider abstraction
- Transaction logging & reconciliation

### Users & Roles
- Cashier / Manager / Admin
- Role-based permissions
- Session tracking

### Reporting
- Daily sales summaries
- Cash-up reports
- Exportable CSV / JSON

---

## Offline-First Architecture

posOpen is designed for **unreliable connectivity**.

- Transactions work offline
- Receipts print offline
- Data syncs when connectivity returns
- Conflicts are auditable, not silent

Offline is not a fallback.
It is a first-class state.

---

## Tech Stack (Frontend)

- **Framework:** React + TypeScript
- **UI:** Token-based design system
- **Architecture:** Component-driven
- **Theming:** Light / Dark mode
- **POS-ready:** Tablet & desktop layouts
- **Print:** Thermal-safe receipt styles
- **Deployment:** Cloud, on-prem, hybrid

---

## Repository Structure

```text
posopen/www
├── public/
│   └── brand/
│       └── logo-icon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── POSHeader.tsx
│   │   ├── Footer.tsx
│   │   ├── CashierScreen.tsx
│   │   └── Button.tsx
│   ├── layout/
│   │   └── Layout.tsx
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   ├── docs/
│   │   └── components.tsx
│   └── styles/
│       └── receipt.css
└── README.md
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
