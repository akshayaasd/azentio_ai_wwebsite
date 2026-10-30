# Evaluator Rubric & Requirement Traceability Matrix
### Azentio.ai Build Labs 2026 Grand Finale Special Challenge (+10 Brownie Points)

This matrix maps every specific requirement from the official notification and requirements document to its exact implementation in the codebase.

| Section / Requirement | Description | Code Implementation | Live Verification Path |
| :--- | :--- | :--- | :--- |
| **Email: Special Challenge** | Build Azentio.ai Website & Intelligent Collaboration Portal | Dual platform: Public Marketing site + Authenticated Multi-Tenant Portal | `http://localhost:3000` |
| **Email: Official Branding** | Align with Azentio visual identity (branding, design language) | Azentio Navy `#070D1E`, Azure `#0066FF`, Cyan `#00A3FF`, Emerald `#10B981` | `src/index.css`, `tailwind.config.js` |
| **Email: Grand Finale Details** | Event details (31 Oct, 8:00 AM, Kadubeesanahalli, Bengaluru) | Embedded Grand Finale Hub with venue map & security form link | `src/components/public/HackathonHub.jsx` |
| **Email: Team Attribution** | All team members must contribute | Attribution to Akshayaa S & Team, role divisions (Frontend, Backend, AI) | `src/components/public/HackathonHub.jsx`, `README.md` |
| **Part A: Public Website** | Home, About Azentio, Products, Demos, Request a Demo | Hero with live metrics, Kastle, iMAL, Amlgo, Beyon360 showcases, Demo modal | `src/components/public/` |
| **Part A: Product Playground** | Interactive demonstration of product capabilities | Live SME Seasonality Normalizer + Real-time PII Redaction simulator | `src/components/public/InteractiveSandbox.jsx` |
| **Part B: User Roles (RBAC)** | Public, Employee, Client, Moderator, Product Owner, Admin | Top-level 1-click evaluation switcher bar covering all 7 personas | `src/components/common/Header.jsx`, `src/context/PortalContext.jsx` |
| **Part B: Tenant Isolation** | Bank A must never see Bank B's private unredacted observations | Segregated tenant vaults + live "Test Tenant Fence" security trap (HTTP 403) | `src/components/portal/ClientDashboard.jsx`, `backend/main.py` |
| **Section 4: Step 1** | Client submits market observation | Private submission modal with pre-filled templates | `src/components/portal/ClientDashboard.jsx` |
| **Section 4: Step 2** | AI analyses observations, extracts topics, clusters themes | FinBERT NER pipeline, PII token stripping, semantic vector similarity | `backend/llm_pipeline.py`, `src/context/PortalContext.jsx` |
| **Section 4: Step 3** | Moderator reviews, redacts identifying info, approves/rejects | Compliance Workbench with side-by-side view & 1-click Auto-Strip PII | `src/components/portal/ModeratorDashboard.jsx` |
| **Section 4: Step 4** | Approved insights become searchable in Collective Feed | Searchable, tag-filtered collective repository with community upvotes | `src/components/portal/CollectiveFeedView.jsx` |
| **Section 4: Step 5** | Product Owner creates improvement idea from cluster | Conversion of Cluster #702 to Feature #IMP-104 with portfolio salvage metric | `src/components/portal/ProductRoadmapView.jsx` |
| **Section 4: Step 6** | Clients see improvement status (Proposed &rarr; Released) | Real-time Kanban board with status changer and client notification stream | `src/components/portal/ProductRoadmapView.jsx` |
| **Section 6: Backend Architecture** | FastAPI backend with REST endpoints and audit logging | Full FastAPI server with Swagger docs, CORS, and SIEM logging | `backend/main.py`, `backend/models.py` |
