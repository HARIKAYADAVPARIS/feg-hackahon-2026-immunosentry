# Third-Party Dependencies, Open Source & Licences Disclosure

**Challenge:** Challenge 01 – Session Quality & Session-to-Action Conversion  
**Product:** FEG ClarityCore™  
**Document Compliance:** Mandatory Submission Item (docs/dependencies.md)  
**Date:** September 2026  

---

## 1. Compliance Statement

In strict compliance with **Section 6 (Third-Party Software, Open Source, APIs & AI)** of the FEG Hackathon 2026 Submission Guidelines:
- All third-party libraries and components incorporated into FEG ClarityCore are permissive, commercially compatible open-source software (MIT, ISC, Apache 2.0).
- No component has been included whose licence or contractual terms would create any undisclosed obligation or IP encumbrance for Fortuna Entertainment Group (FEG) or T-Hub Foundation.
- No real customer data, confidential challenge materials, or secrets were provided to external automated tools.

---

## 2. Inventory of Third-Party Libraries

| Package Name | Exact Version | Distribution / Source | Licence Type | Purpose & Scope |
| :--- | :--- | :--- | :--- | :--- |
| **`react`** | `^18.3.1` | npmjs.com/package/react | MIT | Core reactive UI component engine and state management |
| **`react-dom`** | `^18.3.1` | npmjs.com/package/react-dom | MIT | Web browser DOM reconciliation and rendering |
| **`lucide-react`** | `^0.344.0` | npmjs.com/package/lucide-react | ISC / MIT | Standard accessible UI vector icons |
| **`tailwindcss`** | `^3.4.1` | npmjs.com/package/tailwindcss | MIT | Zero-runtime CSS utility framework for responsive layout styling |
| **`vite`** | `^5.4.2` | npmjs.com/package/vite | MIT | Modern build tool, local dev server, and ES module bundler |
| **`typescript`** | `^5.5.3` | npmjs.com/package/typescript | Apache-2.0 | Compile-time static type checking and code reliability |
| **`@types/react`** | `^18.3.5` | npmjs.com/package/@types/react | MIT | TypeScript type definitions for React |
| **`@types/react-dom`**| `^18.3.0` | npmjs.com/package/@types/react-dom | MIT | TypeScript type definitions for React DOM |

---

## 3. APIs, Data & External Services

| Resource | Origin | Status / Authorization |
| :--- | :--- | :--- |
| **FEG Staging Sportsbook Data** | Simulated against `https://www-dc1.stage.psk.hr` fixtures | Fully anonymized match fixtures & odds structures conforming to official hackathon staging data. |
| **Croatian Tax Computation (NN 87/08, 114/22)** | Official Croatian Ministry of Finance legislation | Statutory mathematical formula executed in-session client-side. Zero external API calls required. |
| **Harmful-Play Indicators (HPI)** | European Gaming and Betting Association (EGBA) Standards | Evaluated locally on the client without third-party data tracking. |

---

## 4. Artificial Intelligence & Automated Code Assistance Disclosure

In accordance with Section 6.4 and 6.5 of the Guidelines:
- **Tools Utilized:** Google AI Studio (Gemini) coding agent was used as an interactive code assistant for layout construction, component refactoring, and document assembly.
- **Verification:** All generated code and mathematical models were reviewed, verified, and audited for architectural integrity, privacy compliance, and build stability.
- **Data Protection:** No proprietary FEG systems, internal API keys, non-public staging tokens, or user personal data were submitted to public third-party AI models.
