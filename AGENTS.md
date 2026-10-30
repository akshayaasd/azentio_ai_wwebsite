# AGENTS.md - Azentio.ai Engineering Guidelines

## Project Context
- **Project**: Azentio.ai Intelligent Collaboration Portal & Enterprise BFSI Website
- **Event**: Azentio.ai Build Labs 2026 Grand Finale
- **Core Domain**: Enterprise BFSI Software (Banking, Financial Services, Insurance)
- **Primary Products**: 
  - `Azentio Kastle` (Universal Core Banking & SME Lending)
  - `Azentio iMAL` (AAOIFI-Certified Islamic Banking Core)
  - `Azentio Amlgo Labs` (AML, Sanctions & Financial Crime Intelligence)
  - `Azentio Beyon360` (Insurance Core & Smart Underwriting)
  - `Azentio AI Collective` (Cross-Tenant Federated Intelligence)

## Key Architectural Principles
1. **Zero-Trust Multi-Tenant Isolation**:
   - Client tenants (`bank-a`, `bank-b`, `bank-c`) must remain strictly isolated.
   - Raw observations and client account identifiers must never be exposed across tenant boundaries.
   - Cross-tenant access attempts must be rejected with HTTP 403 Forbidden and logged in the immutable audit stream.

2. **Automated De-Identification & Human-in-the-Loop Moderation**:
   - Before any empirical observation enters the shared Collective Feed, it must undergo automated Named Entity Recognition (NER) token-stripping.
   - A human compliance officer (Moderator) must affirmatively certify and publish the sanitized observation.

3. **Continuous Product Evolution Loop**:
   - Cross-tenant trends (e.g. Cluster #702: SME Cashflow Seasonality) must link directly to engineering roadmap features (e.g. Feature #IMP-104).
   - Clients must be able to track lifecycle progression from `Proposed` to `Released`.

4. **Reliability & Resilience**:
   - The application supports dual-mode operation: live FastAPI backend with transparent in-memory/localStorage fallback so that pitch demonstrations never fail due to network disconnection.
