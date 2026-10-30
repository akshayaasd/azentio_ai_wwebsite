---
name: azentio-pitch
description: Rehearse and execute the Azentio.ai Build Labs Grand Finale evaluation pitch and demonstration.
---

# Azentio.ai Grand Finale Evaluation Skill

Use this skill when preparing or demonstrating the Azentio.ai Intelligent Collaboration Portal to hackathon judges.

## Demo Sequence Checklist

1. **Verify Services**:
   - Ensure frontend is running on `http://localhost:3000`
   - Ensure backend is running on `http://127.0.0.1:8000`

2. **Step-by-Step Pitch Journey**:
   - **Step 1**: Start on the Public Website (`http://localhost:3000`). Scroll down to the *Interactive Sandbox*.
   - **Step 2**: Toggle the *SME Seasonality Credit Simulator* from "Legacy Static Scoring" (shows loan rejected due to monsoon dip) to "Azentio SDCN Engine" (shows loan approved with healthy DSCR).
   - **Step 3**: Click the top role switcher and select *Apex Global Bank (Client A)*. Submit a new observation using the pre-filled template.
   - **Step 4**: Click *Test Tenant Fence* to prove that cross-tenant read attempts are actively blocked by the zero-trust security layer.
   - **Step 5**: Switch role to *Compliance & Safety Moderator (Elena Rostova)*. Click *One-Click Auto-Strip PII* to demonstrate automated FinBERT tokenization, then click *Certify & Publish*.
   - **Step 6**: Switch to *Product Owner (Dr. Tariq Siddiqui)*. Show how cross-tenant convergence generated *Cluster #702* and promoted *Feature #IMP-104* to the active roadmap with a $36.5M portfolio salvage estimate.

## Anticipated Evaluator Q&A

- **Q: How is client data kept secure?**
  - *A: Each bank operates in an isolated tenant schema with unique cryptographic keys. Unredacted raw feedback is never shared. Only de-identified abstracts certified by a human compliance officer enter the Collective Feed.*
- **Q: Why is collective intelligence better than traditional customer support tickets?**
  - *A: Traditional support tickets are isolated. Azentio AI clusters shared operational friction across 60+ banks, allowing product engineering to build core algorithmic solutions (like dynamic seasonality normalizers) that benefit the entire ecosystem.*
