# Technical Architecture & Deployment Overview

**Challenge:** Challenge 01 – Session Quality & Session-to-Action Conversion  
**Product:** FEG ClarityCore™  
**Target Platform:** Fortuna Entertainment Group (FEG) – PSK.hr (Croatia) & Fortuna Properties  
**Engineering Context:** Designed for deployment by FEG India Technology & Engineering GCC (Knowledge City, Hyderabad)  
**Document Compliance:** Mandatory Submission Item 7 (/docs/architecture.md)  
**Date:** September 2026  

---

## 1. System Architecture Principles

ClarityCore is engineered as a **zero-disruption micro-frontend overlay and client SDK** designed to sit directly on top of FEG's existing digital sportsbook web and mobile applications (e.g. `www.psk.hr`, `ifortuna.cz`, native apps).

### Core Architectural Mandates:
1. **Zero Core Backend Disruption:** No refactoring of FEG's core PAM (Player Account Management), risk engine, or trading backends.
2. **Ephemeral In-Session State:** Intent classification and telemetry operate client-side and via lightweight event buses without writing heavy state to third-party databases.
3. **Sub-50ms Latency:** Micro-frontend payload is under 45KB gzipped, ensuring zero perceptible degradation in page load speeds.

---

## 2. High-Level Component Topology

```
+-----------------------------------------------------------------------------------+
|                        FEG Web / Mobile Viewport (PSK.hr)                         |
|                                                                                   |
|  +--------------------------+  +------------------------+  +-------------------+  |
|  |  Adaptive Intent Lens    |  | In-situ Clarity Engine |  | Zero-Pressure     |  |
|  |  (Express/Tactical/Live) |  | (Match Facts & xG)     |  | Betslip Reassure  |  |
|  +------------+-------------+  +-----------+------------+  +---------+---------+  |
|               |                            |                         |            |
+---------------+----------------------------+-------------------------+------------+
|                                                                                   |
|                           ClarityCore Client SDK (42KB)                           |
|      - Intent Classifier           - Tax Calculator (10% HR Law)                  |
|      - Telemetry Sentinel          - Pre-Commitment Budget Guard                  |
|                                                                                   |
+------------------------------------+----------------------------------------------+
                                     |
                         Custom Event Bus / PostMessage
                                     |
+------------------------------------+----------------------------------------------+
|                          FEG Host Platform APIs                                   |
|   +--------------------------+  +-------------------------+  +-----------------+  |
|   | Sportsbook Feed API      |  | Player Session / Limits |  | Bet Placement   |  |
|   | (Fixtures, Markets, Odds)|  | (Self-Exclusion, RG)    |  | Gateway API     |  |
|   +--------------------------+  +-------------------------+  +-----------------+  |
+-----------------------------------------------------------------------------------+
```

---

## 3. Major Components & Data Flows

### Component 1: Adaptive Intent Lens (`/src/components/PSKPrototype.tsx`)
- **Function:** Captures user navigation signals without intrusive questionnaires. 
- **Modes:**
  - *Express Matchday:* Filters dense 400+ markets into top 3 high-affinity bets (e.g., Eternal Derby Dinamo vs Hajduk).
  - *Tactical & Analytics:* Expands advanced Expected Goals (xG), form records, and head-to-head metrics for analytical punters.
  - *In-Play Momentum:* Prioritizes real-time game-state indicators and live visual momentum.
- **Data Flow:** Subscribes to FEG Sportsbook Feed API $\rightarrow$ filters markets dynamically in memory $\rightarrow$ renders optimized market cards.

### Component 2: In-Situ Clarity Engine
- **Function:** Solves information-seeking hesitation by providing plain-language statistical snippets directly on market cards.
- **Example Data:** Dinamo home record (conceded 0.7 goals/match), Hajduk away scoring streak.
- **Data Flow:** Ingests live sports metadata $\rightarrow$ generates bite-sized clarity snippets $\rightarrow$ keeps player in-app.

### Component 3: Zero-Pressure Reassurance Betslip
- **Function:** Eliminates the 38% confirmation abandonment rate.
- **Data Flow:**
  1. Listens for market addition from FEG betslip event bus.
  2. Multiplies stake by total odds.
  3. Computes statutory tax line-item based on jurisdiction:
     $$\text{Croatian Tax} = (\text{Gross Payout} - \text{Stake}) \times 10\%$$
  4. Checks current session stake against player's self-set daily limit retrieved from PAM.
  5. If user pauses $>15$ seconds, surfaces soft-exit options: *"Save to Match Watchlist"* or *"Track Odds Shifts"*.

---

## 4. Technology Stack & External Dependencies

| Layer | Technology Choice | Rationale |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 / TypeScript / Vite | Industry standard, modular, fully type-safe. |
| **Styling & Layout** | Tailwind CSS | Zero runtime overhead, rapid responsive UI styling. |
| **Icons & Visuals** | Lucide React | Clean, lightweight SVG icon system. |
| **State Management** | React Hooks + Custom Event Bus | Zero third-party state bloat; ultra-fast reconciliation. |
| **Build & Bundle** | Vite / ESBuild | Sub-second cold starts, tree-shaken production bundles. |
| **Integration Pattern** | Web Component / Script Tag SDK | Can be injected into PSK.hr with a single `<script>` tag. |

---

## 5. Deployment Assumptions & FEG India GCC Rollout

- **Target Staging Environment:** Tested and verified against FEG staging infrastructure:
  - Staging URL: `https://www-dc1.stage.psk.hr`
  - Staging Credentials: `HackathonSTG01` / `Hackathon01` through `HackathonSTG60` / `Hackathon60`
- **Execution Team:** 4 Engineers from FEG India Technology & Engineering GCC (Hyderabad):
  - 1 Lead Full-Stack Engineer
  - 1 Frontend / SDK Integration Specialist
  - 1 Data & Telemetry Engineer
  - 1 QA / Compliance & Responsible Gaming Specialist
- **Rollout Schedule (3 Agile Sprints / 6 Weeks):**
  - *Sprint 1 (Weeks 1-2):* Embed ClarityCore SDK onto PSK.hr staging; connect betslip event listener.
  - *Sprint 2 (Weeks 3-4):* Activate Adaptive Intent Lens; wire Croatian statutory tax calculation engine.
  - *Sprint 3 (Weeks 5-6):* 10% Canary traffic test on PSK.hr live users; responsible gaming audit; sign-off by FEG Prague.
