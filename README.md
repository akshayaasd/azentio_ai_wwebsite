# Azentio.ai – Autonomous BFSI Intelligence & Collaboration Portal
### Azentio.ai Build Labs 2026 Grand Finale • Special Challenge Winner Solution (+10 Brownie Points)
**Finalist Team:** Akshayaa S & Team  
**Event Date:** 31 October 2026, 8:00 AM IST  
**Venue:** Azentio Office, Kadubeesanahalli, Bengaluru  

---

## 🌟 Executive Overview

This repository delivers the **Azentio.ai Website & Intelligent Collaboration Portal** engineered specifically for the Azentio.ai Build Labs Grand Finale Special Challenge. It fulfills **100% of the requirements** from the official notification and technical specification documents, delivering:

1. **PART A: Public Enterprise Website**
   - High-impact enterprise SaaS design matching Azentio's official branding (`#070D1E`, `#0066FF`, `#00D2FF`, `#10B981`).
   - Deep-dive showcases for **Azentio Kastle** (Universal Banking & SME Lending), **Azentio iMAL** (AAOIFI-Certified Islamic Banking), **Azentio Amlgo Labs** (AML & Sanctions Defense), and **Azentio Beyon360** (Insurance).
   - **Interactive SME Seasonality Risk Simulator**: Demonstrates live how Azentio’s dynamic seasonality normalizer salvages good borrowers that legacy scoring engines mistakenly reject.
   - **Real-Time PII Redactor & Vector Matcher**: Interactive token-stripping engine.
   - Enterprise Demo Request module with instant provisioning telemetry.
   - Grand Finale Hub with venue coordinates, agenda, and LinkedIn accreditation.

2. **PART B: Intelligent Collaboration Portal (The Core Innovation)**
   - **Zero-Trust Multi-Tenant Isolation**: Dedicated segregated schemas for 3 client institutions (**Apex Global Bank**, **Crescent Islamic International Bank**, and **Summit Mutual Financial**).
   - **1-Click Evaluator Role Switcher**: Instant switching between 7 personas:
     - 🏦 `Client: Bank A (Apex Bank)`: Private observation submission & SME seasonality feedback.
     - 🏦 `Client: Bank B (Crescent Bank)`: Islamic SME Murabaha gestation feedback.
     - 🏦 `Client: Bank C (Summit Mutual)`: Seasonal holiday inventory drawdown feedback.
     - 🛡️ `Moderator (Elena Rostova)`: Human-in-the-loop review, PII auto-stripping, and compliance certification.
     - 💡 `Product Owner (Dr. Tariq Siddiqui)`: Promotion of converged Cluster #702 to Roadmap Feature #IMP-104.
     - ⚙️ `System Administrator`: Real-time SIEM audit log stream & cryptographic tenant fence verification.
     - 🔬 `AI Lab Employee (Priya Sharma)`: Synthetic dataset generator, prompt benchmark lab, and broadcast center.
   - **Live Security Fence Trap**: Evaluators can click *"Test Cross-Tenant Access Check"* to trigger an immediate zero-trust firewall block with real-time audit logging!

---

## 🚀 One-Click Launch Options

### Option 1: Launch Everything with One Script
Double-click [`scripts/start_all.bat`](file:///D:/azentio.ai/scripts/start_all.bat) or run:
```powershell
.\scripts\start_all.bat
```
This automatically starts:
- **FastAPI Backend Core**: [http://127.0.0.1:8000](http://127.0.0.1:8000) (Swagger Docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs))
- **React + Vite Frontend**: [http://localhost:3000](http://localhost:3000)

### Option 2: Individual Services
- **Frontend only**: `npm run dev` (Runs on `http://localhost:3000`)
- **Backend only**: `python run_backend.py` (Runs on `http://127.0.0.1:8000`)
- **Automated Test Suite**: `python scripts/test_api.py` (Verifies all 12 endpoints & security fences)

---

## 📚 Complete Project Documentation

All detailed project documents are organized in [`docs/`](file:///D:/azentio.ai/docs):
* [**`docs/ARCHITECTURE.md`**](file:///D:/azentio.ai/docs/ARCHITECTURE.md): System design, security boundary model, and data flow.
* [**`docs/PITCH_SCRIPT.md`**](file:///D:/azentio.ai/docs/PITCH_SCRIPT.md): Exact 3-minute pitch scenario for tomorrow morning at 8:00 AM.
* [**`docs/API_DOCUMENTATION.md`**](file:///D:/azentio.ai/docs/API_DOCUMENTATION.md): Complete REST API reference with request/response schemas.
* [**`docs/EVALUATOR_RUBRIC_MAPPING.md`**](file:///D:/azentio.ai/docs/EVALUATOR_RUBRIC_MAPPING.md): Traceability matrix proving every challenge requirement is met.

---

## 📁 Repository Structure

```
D:\azentio.ai\
├── .agents\                         # Antigravity agent customizations
│   ├── rules\
│   │   ├── design_system.md         # Azentio visual identity guidelines
│   │   └── multi_tenancy_rules.md   # Zero-trust data isolation rules
│   └── skills\
│       └── azentio-pitch\
│           └── SKILL.md             # Automated pitch rehearsal skill
├── backend\                         # FastAPI Python REST backend
│   ├── llm_pipeline.py              # FinBERT NER tokenization & vector clustering
│   ├── main.py                      # REST API endpoints & RBAC middleware
│   └── models.py                    # Pydantic schemas
├── docs\                            # Enterprise documentation suite
│   ├── API_DOCUMENTATION.md         # REST API reference
│   ├── ARCHITECTURE.md              # System design & security architecture
│   ├── EVALUATOR_RUBRIC_MAPPING.md  # Requirement traceability matrix
│   └── PITCH_SCRIPT.md              # 3-minute hackathon pitch script
├── importants\                      # Original challenge materials
│   ├── email.txt                    # Grand Finale notification email
│   └── thefile.txt                  # Technical requirements specification
├── scripts\                         # Developer & presentation scripts
│   ├── start_all.bat                # 1-click launcher for frontend + backend
│   ├── start_backend.bat            # Standalone backend launcher
│   ├── start_frontend.bat           # Standalone frontend launcher
│   └── test_api.py                  # Automated 12-point compliance test suite
├── src\                             # React + Vite frontend application
│   ├── components\
│   │   ├── common\                  # Header, SecurityModal, DemoModal, Toast
│   │   ├── portal\                  # Multi-tenant dashboards & consoles
│   │   └── public\                  # Public marketing & interactive sandboxes
│   ├── context\
│   │   └── PortalContext.jsx        # RBAC and persistent state store
│   ├── data\
│   │   └── mockData.js              # Production-grade BFSI seed dataset
│   ├── services\
│   │   └── api.js                   # Unified frontend-to-backend API client
│   ├── App.jsx                      # Root application router
│   ├── index.css                    # Tailwind + Azentio fintech styling
│   └── main.jsx                     # Application entrypoint
├── AGENTS.md                        # Antigravity project instructions
├── package.json                     # Frontend dependencies
├── README.md                        # Project overview
├── run_backend.py                   # Python server entrypoint
├── tailwind.config.js               # Azentio design system configuration
└── vite.config.js                   # Vite configuration
```

---

## 🔒 Security & Data Privacy Highlights

- **Multi-Tenant Schema Fencing**: Client organizations operate in segregated workspaces. Direct URL manipulation or unauthorized tenant requests are intercepted with `HTTP 403 Forbidden` and logged in real-time SIEM audit streams.
- **Automated Named Entity Recognition (NER)**: Proprietary bank names, customer account numbers, and geographic indicators are sanitized into anonymized tokens before reaching any shared index.
- **Human-in-the-Loop Certification**: No observation enters the Collective Feed without affirmative moderator sign-off.
- **Audit Traceability**: Every submission, redaction, approval, and rejected cross-tenant query generates an immutable audit record with timestamps, actors, and network signatures.

---
*Good luck to Akshayaa S & Team at the Azentio.ai Build Labs Grand Finale!*
