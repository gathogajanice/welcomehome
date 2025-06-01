# Welcome Home

**Welcome Home** is a blockchain-powered real estate platform reimagining how the African Diaspora builds wealth, reclaims land, and experiences the world. Through fractional ownership, we make it possible for anyone—anywhere—to invest in verified property across Africa and beyond. But we're more than just real estate: every investment unlocks luxury travel perks, exclusive cultural experiences, and access to a global community committed to legacy, sustainability, and economic empowerment.

---

## Table of Contents

- [Vision & Mission](#vision--mission)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Why Invest in Africa?](#why-invest-in-africa)
- [Perks of Membership](#perks-of-membership)
- [Stats & Impact](#stats--impact)
- [Community & Partners](#community--partners)
- [Team](#team)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Vision & Mission

**Vision (2025–2027):**  
Scaling across Africa. Empowering a new generation of owners. Redefining wealth for the diaspora.

- **2025:** Launch in Senegal
- **2026:** Expansion to Ghana and Kenya
- **2027:** 10,000+ investors, $100M+ assets tokenized

**Mission:**  
To create a movement where technology meets tradition, and ownership becomes a lifestyle. Welcome Home transforms your capital into a deeper connection—with land, with culture, and with a movement rooted in reclaiming what's ours.

---

## Key Features

- **Fractional Real Estate Ownership:**  
  Invest in verified, blockchain-secured properties across Africa with as little as $1,000.

- **Luxury Travel Perks:**  
  Every investment unlocks curated travel experiences, annual stay credits, and exclusive cultural events.

- **Global Community:**  
  Join a network of like-minded investors, entrepreneurs, and changemakers.

- **Blockchain Security:**  
  All assets and transactions are verified and managed via smart contracts for transparency and security.

- **Multi-Currency Support:**  
  Invest using various global currencies.

- **Generational Wealth:**  
  Build lasting financial security for your family and future generations.

---

## How It Works

1. **Invest in Verified Land Ownership:**  
   Secure fractional ownership in curated properties. Every asset is blockchain-verified for transparency and ease.

2. **Unlock Travel, Rewards, and Community Access:**  
   Enjoy luxury travel perks, exclusive events, and early access to new developments.

3. **Build Wealth, Impact, and Legacy:**  
   Watch your investment grow through land appreciation, sustainable projects, and innovative tokenized opportunities.

---

## Why Invest in Africa?

- Africa's population is projected to double to 2.5 billion by 2050.
- The continent holds 60% of the world's undeveloped arable land.
- $1.2 trillion projected real estate market growth by 2030.
- Welcome Home bridges the gap for diaspora communities, providing direct access to secure, blockchain-verified land ownership.

---

## Perks of Membership

- **Fractional Land x Luxury Mobility:**  
  Co-own property on the African continent, starting with flagship opportunities in Senegal.

- **Unlock Luxury Travel Perks:**  
  Enjoy curated travel perks that connect you to the land and culture you've invested in.

- **Welcome to the New Village:**  
  A reimagined village for the modern era, rooted in community and powered by blockchain.

---

## Stats & Impact

- **1** Country Launched
- **2** Travel Perks Programs
- **5** Properties Secured
- **200+** Community Interest
- **1k** Member Target for 2025
- **100%** Blockchain Verified Assets

---

## Community & Partners

We proudly partner with organizations such as BWS, Ministère des Infrastructures, des Transports Terrestres et du Désenclavement, the Ministry of Tourism and Air Transport, and Alkebuleum.

---

## Team

- **Sharufa R. Walker** – CEO | Co-Founder  
  [Twitter](https://x.com/SharufaRWalker) | [LinkedIn](https://www.linkedin.com/in/sharufawalker) | [Instagram](https://www.instagram.com/sharufawalker/?hl=en)

- **Mamadou Ka** – COO | Co-Founder  
  [Twitter](https://x.com/welcomehomeintl) | [LinkedIn](https://www.linkedin.com/company/welcome-home-international-realty-group/?viewAsMember=true) | [Instagram](https://www.instagram.com/welcomehomeinternational/)

---

## Project Structure

```
welcomehome/
├── src/               # Source files (components, pages, hooks, lib)
│   ├── components/    # Reusable UI and feature components
│   ├── pages/         # Main route/view components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── app/           # App-level components/pages
├── public/            # Static assets (images, fonts, privacy, etc.)
├── dist/              # Build output
├── node_modules/      # Dependencies
├── package.json       # Project metadata and scripts
├── tailwind.config.ts # TailwindCSS configuration
├── vite.config.ts     # Vite configuration
└── ...                # Other config files
```

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, TailwindCSS, Framer Motion, React Router DOM, Radix UI, React Hook Form, Zod
- **State/Data:** React Query
- **Animations:** Framer Motion
- **UI Components:** Radix UI, custom components
- **Testing/Linting:** ESLint

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
git clone [your-repository-url]
cd welcomehome
npm install
```

### Development

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Environment Variables

Create a `.env` file in the root directory for any required environment variables.  
**Example:**
```
VITE_API_URL=https://api.yourservice.com
VITE_PUBLIC_KEY=your-public-key
```

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run build:dev` – Build for development
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

---

## Troubleshooting

- Ensure all dependencies are installed.
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall:  
  ```bash
  rm -rf node_modules
  npm install
  ```

---

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## License

[Your License Here]

---

**Contact:**  
Email: info@welcomehome.africa  
Phone: +1 (555) 123-4567  
Location: New York, NY 