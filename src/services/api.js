/**
 * Azentio.ai Unified API Service
 * Communicates with FastAPI backend (http://127.0.0.1:8000)
 * with transparent fallback to local state for high-availability offline reliability.
 */

const BACKEND_BASE_URL = 'http://127.0.0.1:8000';

export const checkBackendHealth = async () => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/v1/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(1500)
    });
    if (res.ok) return await res.json();
    return null;
  } catch (err) {
    return null;
  }
};

export const fetchMyObservations = async (tenantId) => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/v1/observations/my`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Tenant-ID': tenantId
      },
      signal: AbortSignal.timeout(2000)
    });
    if (res.ok) return await res.json();
    return null;
  } catch (e) {
    return null;
  }
};

export const submitObservationApi = async (tenantId, rawTitle, rawContent, productCategory, targetCluster) => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/v1/observations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Tenant-ID': tenantId
      },
      body: JSON.stringify({
        raw_title: rawTitle,
        raw_content: rawContent,
        product_category: productCategory,
        target_cluster: targetCluster
      }),
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) return await res.json();
    return null;
  } catch (e) {
    return null;
  }
};

export const moderateObservationApi = async (obsId, decision, redactedTitle, redactedContent, note) => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/v1/moderation/${obsId}/decision`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Role': 'moderator'
      },
      body: JSON.stringify({
        decision,
        redacted_title: redactedTitle,
        redacted_content: redactedContent,
        moderation_note: note
      }),
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) return await res.json();
    return null;
  } catch (e) {
    return null;
  }
};

export const simulateSeasonalityApi = async (seasonalityDip, baselineQuarterlyRev = 500000) => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/v1/ai/simulate-seasonality`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seasonality_dip: seasonalityDip,
        baseline_quarterly_rev: baselineQuarterlyRev,
        debt_service_req: 180000
      }),
      signal: AbortSignal.timeout(2000)
    });
    if (res.ok) return await res.json();
    return null;
  } catch (e) {
    return null;
  }
};

export const testBreachApi = async (originTenant, targetTenant) => {
  try {
    const res = await fetch(
      `${BACKEND_BASE_URL}/api/v1/security/test-breach?origin_tenant=${originTenant}&target_tenant=${targetTenant}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(2000)
      }
    );
    if (res.ok) return await res.json();
    return null;
  } catch (e) {
    return null;
  }
};
