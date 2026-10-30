# Azentio.ai – REST API Reference Documentation

**Base URL**: `http://127.0.0.1:8000`  
**Swagger Interactive UI**: `http://127.0.0.1:8000/docs`  
**OpenAPI Specification**: `http://127.0.0.1:8000/openapi.json`  

---

## 1. System & Health

### `GET /api/v1/health`
Checks server status and returns active telemetry metrics.

**Response (200 OK)**:
```json
{
  "status": "ONLINE",
  "active_tenants": 3,
  "total_observations": 4,
  "total_clusters": 2,
  "active_roadmap_features": 3
}
```

---

## 2. Multi-Tenant Observations

### `GET /api/v1/observations/my`
Retrieves observations belonging strictly to the requesting tenant. Enforces zero cross-tenant leakage.

**Headers**:
- `X-Tenant-ID`: string (e.g. `bank-a`, `bank-b`, `bank-c`)

**Response (200 OK)**:
```json
[
  {
    "id": "OBS-101",
    "org_id": "bank-a",
    "author": "Marcus Vance",
    "submitted_at": "2026-10-28 14:22",
    "raw_title": "SME loan assessment drops good agriculture borrowers...",
    "status": "approved",
    "ai_cluster_id": "CLUST-702"
  }
]
```

### `POST /api/v1/observations`
Submits a new market observation and automatically executes Named Entity Recognition (NER) token sanitization.

**Headers**:
- `X-Tenant-ID`: string (e.g. `bank-a`)

**Request Body**:
```json
{
  "raw_title": "Agro-supplier seasonal loan denials in Q3",
  "raw_content": "Apex Bank Singapore observes credit score drops during monsoon.",
  "product_category": "Azentio Kastle Core Banking",
  "target_cluster": "CLUST-702"
}
```

---

## 3. Moderation & Compliance

### `GET /api/v1/moderation/queue`
Retrieves all submissions awaiting compliance de-identification and certification.

**Headers**:
- `X-Role`: `moderator` or `admin`

### `POST /api/v1/moderation/{obs_id}/decision`
Certifies and approves de-identified insight to the Collective Feed, or rejects with reason.

**Request Body**:
```json
{
  "decision": "approve",
  "redacted_title": "SME Lending Engine: Seasonal Cashflow Distortions...",
  "redacted_content": "Automated lending assessment pipelines penalize seasonal suppliers...",
  "moderation_note": "De-identified bank entity and specific jurisdiction."
}
```

---

## 4. Collective Intelligence & Roadmap

### `GET /api/v1/observations/collective`
Returns approved, de-identified shared observations across all banking institutions.

**Query Parameters**:
- `tag` (optional): Filter by domain tag (e.g. `#SMELending`)

### `GET /api/v1/clusters`
Returns cross-tenant trend clusters with convergence confidence metrics.

### `GET /api/v1/roadmap`
Returns live continuous product improvement features.

### `PATCH /api/v1/roadmap/{imp_id}/status`
Updates lifecycle status of an engineering feature (`proposed`, `under_review`, `planned`, `in_progress`, `released`).

---

## 5. Security & SIEM Logs

### `GET /api/v1/security/audit-logs`
Returns real-time immutable security and compliance audit trail.

### `POST /api/v1/security/test-breach`
Simulates an unauthorized cross-tenant read attempt, verifying that the zero-trust fence actively blocks the attempt.
