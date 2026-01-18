<!--
posOpen — Open, Modular Point-of-Sale Platform
Repo: posopen/www
-->

<p align="center">
  <img src="./public/brand/logo-icon.svg" alt="posOpen logo" width="96" height="96" />
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
