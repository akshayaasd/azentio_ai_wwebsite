# Azentio.ai – Enterprise System Architecture & Security Specification

## 1. High-Level System Architecture

```
                          +-------------------------------------------------+
                          |             PUBLIC INTERNET CLIENTS             |
                          +-------------------------------------------------+
                                                   |
                                                   v
                          +-------------------------------------------------+
                          |       REACT + VITE + TAILWIND FRONTEND          |
                          |               (Port: 3000)                      |
                          |  - Public Marketing & Product Showcase          |
                          |  - Interactive SME Seasonality Simulator        |
                          |  - Role-Based Access Control (RBAC) Switcher    |
                          |  - Multi-Tenant Workspace Portals               |
                          |  - Moderator & Product Owner Consoles           |
                          +-------------------------------------------------+
                                                   |
                             REST / JSON (CORS)    | X-Tenant-ID / Role Headers
                                                   v
                          +-------------------------------------------------+
                          |            FASTAPI REST BACKEND CORE            |
                          |               (Port: 8000)                      |
                          |  - Tenant Boundary Middleware                   |
                          |  - Zero-Trust Cross-Tenant Access Firewall      |
                          |  - Automated PII Tokenizer & NER Engine         |
                          |  - Semantic Vector Similarity Matcher           |
                          |  - Continuous Roadmap & Lifecycle Tracker       |
                          |  - Immutable SIEM Compliance Audit Logger       |
                          +-------------------------------------------------+
                                 /                 |                 \
                                /                  |                  \
                               v                   v                   v
                     +---------------+     +---------------+     +---------------+
                     | APEX GLOBAL   |     | CRESCENT      |     | SUMMIT MUTUAL |
                     | BANK VAULT    |     | ISLAMIC VAULT |     | FINANCIAL     |
                     | (Tenant A)    |     | (Tenant B)    |     | (Tenant C)    |
                     +---------------+     +---------------+     +---------------+
```

---

## 2. Multi-Tenant Zero-Trust Security Model

### Tenant Key Fencing
Every financial institution possesses a unique cryptographic tenant key:
- **Apex Global Bank**: `TENANT-APEX-8821-SG`
- **Crescent Islamic International Bank**: `TENANT-CRESCENT-3304-SA`
- **Summit Mutual Financial Corp**: `TENANT-SUMMIT-7719-IN`

### Boundary Enforcement
- Requests for private tenant resources require the `X-Tenant-ID` header.
- When an authenticated tenant attempts to access records outside their partition, the backend returns:
  `HTTP 403 Forbidden: Zero-trust fence enforced.`
- A security audit event (`CROSS_TENANT_READ_ATTEMPT`) is logged in the SIEM stream.

---

## 3. The 6-Stage Collective Intelligence Pipeline

1. **Ingestion**: Client risk officers submit observations in private tenant workspaces.
2. **Automated NER De-Identification**: FinBERT-based pipeline detects PII (bank entities, branch numbers, geographic names, individual account numbers) and creates a sanitized draft.
3. **Similarity Clustering**: Cosine similarity matches new observations against existing trend vectors (e.g. Cluster #702: SME Seasonality).
4. **Human-in-the-Loop Moderation**: Elena Rostova (Moderator) inspects flagged tokens, edits or confirms redaction, and approves for collective sharing.
5. **Collective Knowledge Feed**: Approved de-identified observations become searchable by all participating banks with community upvoting.
6. **Roadmap Promotion**: Product Owners convert validated clusters into engineering roadmap tickets (e.g. Feature #IMP-104) with quantified portfolio salvage metrics.
