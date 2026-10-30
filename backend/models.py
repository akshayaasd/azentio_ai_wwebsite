"""
Pydantic Data Models & Schemas for Azentio.ai Intelligent Collaboration Portal
"""
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class ObservationCreate(BaseModel):
    raw_title: str
    raw_content: str
    product_category: str = "Azentio Kastle Core Banking"
    target_cluster: Optional[str] = "CLUST-702"

class ObservationOut(BaseModel):
    id: str
    org_id: str
    author: str
    submitted_at: str
    raw_title: str
    raw_content: str
    redacted_title: str
    redacted_content: str
    product_category: str
    domain_tags: List[str]
    status: str
    moderation_note: Optional[str] = None
    pii_detected: List[str]
    ai_cluster_id: str
    sentiment: str
    business_impact_score: str
    upvotes: int
    converged_with: List[str]

class ModerationDecision(BaseModel):
    decision: str  # "approve" or "reject"
    redacted_title: Optional[str] = None
    redacted_content: Optional[str] = None
    moderation_note: Optional[str] = None

class ClusterOut(BaseModel):
    id: str
    name: str
    summary: str
    domain: str
    institutions_involved: int
    total_observations: int
    convergence_confidence: float
    tags: List[str]
    status: str
    associated_feature_id: Optional[str] = None
    severity: str
    created_date: str

class ImprovementCreate(BaseModel):
    title: str
    description: str
    origin_cluster_id: str
    product_line: str
    target_release: str = "v4.2 (Q1 2027)"

class ImprovementOut(BaseModel):
    id: str
    title: str
    description: str
    origin_cluster_id: str
    product_line: str
    status: str
    target_release: str
    assigned_lead: str
    impacted_clients_count: int
    estimated_portfolio_salvage: str

class AuditLogOut(BaseModel):
    id: str
    timestamp: str
    actor: str
    action: str
    target: str
    status: str
    ip: str
    details: str
