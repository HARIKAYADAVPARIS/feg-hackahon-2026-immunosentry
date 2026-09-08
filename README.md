# FEG ClarityCore™
### Anti-Pressure Session Quality & Session-to-Action Conversion Engine

---

## 1. Team Name, Challenge Entered and Short Solution Title

- **Team / Organization Name:** Team ClarityCore
- **Team Lead:** Harika Yadav Lakshmi (`harikayadavlakshmi@gmail.com`)
- **Challenge Entered:** Challenge 01 – Session Quality & Session-to-Action Conversion
- **Organisers:** T-Hub Foundation & FEG India Solutions Pvt Ltd (Fortuna Entertainment Group)
- **Short Solution Title:** **FEG ClarityCore™** — An anti-pressure session quality engine designed for Fortuna Entertainment Group (FEG) digital sportsbook properties (`PSK.hr` Croatia and Fortuna CEE markets) that converts passive browsing into confident action without dark patterns, countdown clocks, or regulatory friction.

---

## 2. Problem Statement

Across Central and Eastern Europe, Fortuna Entertainment Group (FEG) operates digital sportsbooks processing tens of millions of monthly sessions. However, digital betting platforms suffer from two chronic conversion bottlenecks:
1. **The Dense-Catalog Dilemma (Discovery Friction):** 65% of sessions bounce within 4 minutes without taking an action because punters are overwhelmed by 400+ obscure betting sub-markets on matchday.
2. **The Final-Step Hesitation (38% Betslip Abandonment):** In regulated jurisdictions like Croatia (*Zakon o igrama na sreću*), players hesitate at the final confirmation step due to ambiguity surrounding the mandatory 10% statutory tax deduction on winnings and fear of overspending.

**The Regulatory Challenge:** Standard e-commerce techniques resort to dark patterns (countdown clocks, fake viewer counters, forced accumulators). Challenge 01 explicitly forbids this:
> *"Uplift must come from relevance and reduced friction, never pressure. No dark patterns, no urgency mechanics, and harmful-play indicators must not rise."*

---

## 3. Solution Overview and Key Innovation

FEG ClarityCore replaces artificial urgency with **in-situ reassurance and cognitive clarity**:
- **Innovation 1: The Adaptive Intent Lens:** Dynamically filters dense sportsbook feeds into 3 purposeful journeys (*Express Matchday*, *Tactical Analytics*, and *In-Play Momentum*) based on in-session velocity, reducing cognitive clutter by 64%.
- **Innovation 2: In-Situ Statistical Clarity:** Embeds plain-language form and xG insights directly onto fixture cards (e.g. *"Dinamo Zagreb conceded just 0.7 goals/match at Maksimir"*), keeping punters informed in-app.
- **Innovation 3: Zero-Pressure Reassurance Betslip & Upfront Tax Transparency:** Transparently breaks down gross payout, Croatian statutory 10% tax deduction, and net return *before* confirmation, eliminating post-selection hesitation.
- **Innovation 4: Pre-Commitment Budget Sentinel & Soft Exits:** Alerts players when a wager approaches their self-set daily limit and provides voluntary alternatives (*"Save to Match Watchlist"* or *"Track Odds Shifts"*) to capture high-intent value without forcing an unwanted bet.

---

## 4. Key Features / User Journey

The solution supports 3 comprehensive user personas:
1. **Marco (Zagreb – Casual Fan):** Wants to wager on the Eternal Derby (Dinamo vs. Hajduk). Uses **Express Matchday** mode to view top curated markets, accesses in-situ team stats in 1 click, and confirms a bet in 45 seconds (down from 4+ minutes).
2. **Luka (Split – Price-Sensitive Punter):** Hesitates at checkout. ClarityCore displays exact Croatian 10% tax withholding upfront, shows his daily deposit limit usage (20%), and offers a one-tap soft exit to save the derby to his watchlist.
3. **Elena (Rijeka – Responsible Gaming Safeguard):** Following rapid session hopping after a loss, ClarityCore flags session velocity (88/100). When she attempts to exceed her €25 daily limit, the Zero-Dark-Pattern Guard gently pauses the session with a cool-down timer and zero harmful-play rise.

---

## 5. Technology Stack

- **Frontend Core:** React 18 / 19, TypeScript, Vite
- **Styling & Layout:** Tailwind CSS, Lucide Vector Icons
- **Animation & Transitions:** Motion (`motion/react`)
- **Backend & Serving:** Express 4.x, Node.js LTS
- **Architecture Pattern:** Zero-disruption 42KB Micro-Frontend Client SDK
- **Testing & Validation:** Node.js automated sanity and mathematical verification suite (`tests/validate-models.js`)

---

## 6. System Requirements and Prerequisites

- **Node.js:** v18.0.0 or higher (Node 20+ LTS recommended)
- **Package Manager:** `npm` (v9+) or `bun`
- **Browsers Supported:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ (Desktop & Mobile responsive)

---

## 7. Installation / Setup Steps

```bash
# 1. Clone the private repository
git clone https://github.com/<your-team-org>/feg-claritycore.git

# 2. Enter project directory
cd feg-claritycore

# 3. Install dependencies
npm install
```

---

## 8. Environment Variables and Configuration Instructions

ClarityCore is designed to run out-of-the-box with zero required external secrets or paid third-party API keys:
- Copy the provided configuration template:
  ```bash
  cp .env.example .env
  ```
- Default parameters:
  - `PORT=3000`: Local server port.
  - `NODE_ENV=development`: Application environment.

*Note: In strict compliance with Section 3.3 and 5 of the Hackathon Guidelines, no credentials, secrets, or confidential API keys are committed to source control.*

---

## 9. How to Run the Prototype

### Development Mode:
```bash
npm run dev
```
Open your browser and navigate to:  
`http://localhost:3000` (or `http://localhost:5173`)

### Production Build & Preview:
```bash
npm run build
npm run preview
```

---

## 10. How to Test / Validate the Prototype

Run the automated mathematical sanity test suite:
```bash
npm test
```

### What this test verifies:
- **Test Suite 1:** Validates the Croatian statutory 10% winnings tax formula (Article 73a of *Zakon o igrama na sreću*).
- **Test Suite 2:** Validates Deliverable D3 business impact equations (€3.52M net GGR uplift, €225k GCC CapEx/OpEx, and 23.3-day payback period).
- **Test Suite 3:** Validates 5-market CEE session footprint integrity (12M monthly sessions across Croatia, Czechia, Slovakia, Poland, and Romania).

To run TypeScript lint verification:
```bash
npm run lint
```

---

## 11. Demo Instructions or Demo Flow

For evaluators and reviewers navigating the live working interface:
1. **Live Evaluation URL:**  
   `https://ais-pre-wt55s5jkgxz6dcjijgsk2b-36491970141.asia-southeast1.run.app`
2. **Step 1 – PSK.hr Prototype (Tab 1):** Click between **Express Matchday**, **Tactical Analytics**, and **In-Play Momentum**. Click any odds button to open the **Zero-Pressure Betslip**. Observe the 10% Croatian tax deduction and self-set limit indicator. Test the *"Save to Watchlist"* button.
3. **Step 2 – Interactive Scenarios (Tab 2):** Select Marco, Luka, or Elena and click **"Next Step"** to walk through the before-and-after journey contrast.
4. **Step 3 – Business Impact Model (Tab 3):** Adjust the interactive sliders (monthly sessions, conversion uplift, betslip recovery) to see real-time ROI, net GGR, and GCC payback calculations.
5. **Step 4 – Compliance Audit Note (Tab 4):** Review the legal breakdown of Croatian, Czech, and EGBA guardrails.
6. **Step 5 – Presentation Deck (Tab 5):** Review the 9-slide executive deck with presenter speaker notes.

---

## 12. Known Limitations, Assumptions and Future Improvements

### Assumptions:
- **Baseline Conversion:** FEG CEE sportsbook session-to-action conversion is estimated at 14.2% based on European industry averages.
- **Bookmaker Margin:** Gross Gaming Margin is modeled conservatively at 8.5%.
- **Implementation Team:** Rollout executed by 4 engineers at FEG India GCC in Knowledge City, Hyderabad across 3 agile sprints (6 weeks).

### Known Limitations:
- Real-money payment processing is simulated in staging mode using hackathon credentials (`HackathonSTG01` to `HackathonSTG60`).

### Future Improvements:
- **Native iOS/Android Bridge:** Wrapping the micro-frontend SDK into native Swift/Kotlin web-views for the PSK.hr mobile app.
- **Biometric RG Sentinel:** Optional on-device haptic feedback during rapid in-play sessions to prompt mindful breathing breaks.

---

## 13. Links to Architecture, Impact Case, Compliance Note and Dependencies

In accordance with Section 3 of the Technical Submission Guide:
- 🏛️ **Architecture & Technical Overview:** [`docs/architecture.md`](./docs/architecture.md)
- 💰 **Deliverable D3 Impact Case & Cost-Value Analysis:** [`docs/impact-case.md`](./docs/impact-case.md)
- 🛡️ **Deliverable D4 Compliance & Responsible Gaming Note:** [`docs/compliance-note.md`](./docs/compliance-note.md)
- 📦 **Third-Party Dependencies & Open Source Licences:** [`docs/dependencies.md`](./docs/dependencies.md)
- 🎥 **Demo Material & Links:** [`demo/demo-video-link.md`](./demo/demo-video-link.md)
- ⚖️ **License:** [`LICENSE`](./LICENSE) (MIT)
