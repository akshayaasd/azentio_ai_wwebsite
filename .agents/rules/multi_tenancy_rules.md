---
trigger: always_on
---

# Multi-Tenancy & Data Segregation Rules

1. **Strict Logical & Cryptographic Segregation**:
   - Each financial institution operates with a unique `tenantKey` (e.g. `TENANT-APEX-8821-SG`, `TENANT-CRESCENT-3304-SA`).
   - Observations submitted by one tenant must be tagged with `orgId` and stored only in that tenant's private scope until certified.

2. **Zero Cross-Tenant Leakage**:
   - Queries to `/api/v1/observations/my` must enforce `X-Tenant-ID` header validation.
   - Any query attempting to read another tenant's data must raise `HTTP 403 Forbidden` and log an immutable entry in `AUDIT_LOGS_DB`.

3. **PII Sanitization Standard**:
   - Institutional names (`Apex Bank`, `Crescent Islamic Bank`, etc.) must be tokenized as `[FINANCIAL_INSTITUTION]`.
   - Specific branches or regions must be tokenized as `[BRANCH_ENTITY]` or `[JURISDICTION]`.
   - Personal names and accounts must be tokenized as `[CLIENT_ENTITY]`.
