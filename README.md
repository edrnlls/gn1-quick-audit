# GN1 Quick Audit

> A CLI tool to audit clinic networks — diagnose units, consolidate financial metrics, and highlight operational risks.

Built by a former franchise operations consultant transitioning into Product Engineering. This is the first product of a personal training path toward international remote contracting.

## Demo

```text
═══════════════════════════════════════════════
  GN1 QUICK AUDIT · Network Performance Report
═══════════════════════════════════════════════

Network: GN1 Premium Network
Report Date: 2026-07-15

📊 NETWORK OVERVIEW
Total units: 6
Active units: 6
Total monthly revenue: R$ 297,000
Consolidated net margin: -30.3%
Average ticket: R$ 371

🩺 UNIT DIAGNOSIS
🟢 Curitiba Unit — HEALTHY: High performance
🟢 Porto Alegre Unit — HEALTHY: High performance
🟢 Camboriú Unit — HEALTHY: High performance
🔴 Rio de Janeiro Unit — CRITICAL: Operating at loss
🟡 São Paulo Unit — WARNING: Monitor closely
🔴 Belo Horizonte Unit — CRITICAL: Operating at loss

🚨 ALERTS
Units at loss: Rio de Janeiro Unit, Belo Horizonte Unit
Units in warning zone: 1 (São Paulo Unit)
Recommended immediate action: review operations at Rio de Janeiro Unit, Belo Horizonte Unit

```

## What it does

- Reads network data from a JSON file
- Diagnoses each clinic unit into one of four categories: `HEALTHY`, `REGULAR`, `WARNING`, `CRITICAL`
- Consolidates network-wide metrics (total revenue, net margin, average ticket)
- Highlights units at loss and units in warning zone
- Suggests immediate actions

## Why

Franchise networks and clinic groups often struggle to translate operational data into clear next actions. Existing dashboards show numbers; they rarely say what to do next. This CLI turns raw operational data into a decisive one-glance report — designed to be fast, opinionated, and readable in seconds.

## Installation

Requires Node.js 22+ and pnpm.

```bash
git clone git@github.com:edrnlls/gn1-quick-audit.git
cd gn1-quick-audit
pnpm install
```

## Usage

```bash
pnpm run:audit <path-to-json>
```

Example:

```bash
pnpm run:audit ./data/network.json
```

## Data structure

The input JSON must follow this shape:

```json
{
  "networkName": "GN1 Premium Network",
  "reportDate": "2026-07-15",
  "clinics": [
    {
      "name": "Curitiba Unit",
      "city": "Curitiba",
      "monthlyRevenue": 90000,
      "totalCosts": 40000,
      "activePatients": 300,
      "isActive": true,
      "notes": null
    }
  ]
}
```

## Diagnosis rules

| Condition | Status |
|---|---|
| Active patients below 10 | 🔴 CRITICAL — Patient base too low |
| Revenue below total costs | 🔴 CRITICAL — Operating at loss |
| Revenue above 80k **and** patients above 50 | 🟢 HEALTHY — High performance |
| Revenue below 30k **or** patients below 20 | 🟡 WARNING — Monitor closely |
| Otherwise | ⚪ REGULAR — Within expected range |

## Tech stack

- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js
- **Package manager**: pnpm
- **Executor**: tsx

## Architecture


src/
├── types/ Type definitions (Clinic, Diagnosis, NetworkMetrics)
├── functions/ Pure business logic (diagnose, calculate, alerts, reader)
├── report/ Report formatting (header, metrics, diagnoses, alerts)
└── index.ts Orchestrator — reads args, runs pipeline, prints output



Pure functions handle logic. Report formatters return strings. The orchestrator has a single `console.log`. Clean separation of concerns.

## Author

**Eduardo Dornelles** — Product Engineer in training, based in Brazil.
[LinkedIn](https://www.linkedin.com/in/edrnlls/) · [GitHub](https://github.com/edrnlls)

## License

MIT