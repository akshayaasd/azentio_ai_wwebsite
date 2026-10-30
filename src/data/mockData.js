export const ORGANIZATIONS = {
  'bank-a': {
    id: 'bank-a',
    name: 'Apex Global Bank',
    shortName: 'Apex Bank',
    type: 'Tier-1 Commercial & SME Bank',
    jurisdiction: 'Singapore / UAE',
    logoColor: 'from-blue-600 to-cyan-500',
    avatar: 'AGB',
    activeUsers: 1420,
    entitlements: ['Kastle Core Banking', 'AI Collective Intelligence', 'Amlgo Labs'],
    slaTier: 'Enterprise Platinum',
    tenantKey: 'TENANT-APEX-8821-SG'
  },
  'bank-b': {
    id: 'bank-b',
    name: 'Crescent Islamic International Bank',
    shortName: 'Crescent Bank',
    type: 'Islamic & Retail Banking Group',
    jurisdiction: 'Riyadh / Kuala Lumpur',
    logoColor: 'from-emerald-600 to-teal-400',
    avatar: 'CIB',
    activeUsers: 980,
    entitlements: ['iMAL Islamic Banking', 'AI Collective Intelligence', 'Beyon360'],
    slaTier: 'Enterprise Gold',
    tenantKey: 'TENANT-CRESCENT-3304-SA'
  },
  'bank-c': {
    id: 'bank-c',
    name: 'Summit Mutual Financial Corp',
    shortName: 'Summit Mutual',
    type: 'Commercial Microfinance & SME Lending',
    jurisdiction: 'London / Mumbai',
    logoColor: 'from-purple-600 to-indigo-500',
    avatar: 'SMF',
    activeUsers: 640,
    entitlements: ['Kastle Lending Suite', 'AI Collective Intelligence'],
    slaTier: 'Enterprise Silver',
    tenantKey: 'TENANT-SUMMIT-7719-IN'
  }
};

export const ROLES = {
  'public': {
    id: 'public',
    name: 'Public Visitor',
    badge: 'Public Website',
    color: 'bg-slate-700 text-slate-200',
    description: 'Public marketing website, product capabilities, live interactive playground, and demo request.'
  },
  'bank-a': {
    id: 'bank-a',
    name: 'Marcus Vance',
    roleTitle: 'VP Credit Operations',
    organization: 'Apex Global Bank',
    badge: 'Client Tenant A',
    color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    description: 'Isolated client workspace for Apex Global Bank. Can submit observations and view approved collective insights.'
  },
  'bank-b': {
    id: 'bank-b',
    name: 'Zahra Al-Mansoor',
    roleTitle: 'Chief Risk Officer',
    organization: 'Crescent Islamic Bank',
    badge: 'Client Tenant B',
    color: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    description: 'Isolated client workspace for Crescent Islamic Bank. Sharia & SME credit assessment focus.'
  },
  'bank-c': {
    id: 'bank-c',
    name: 'Rohan Mehra',
    roleTitle: 'Head of SME Underwriting',
    organization: 'Summit Mutual Bank',
    badge: 'Client Tenant C',
    color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    description: 'Isolated client workspace for Summit Mutual. High-volume micro-SME loan evaluations.'
  },
  'moderator': {
    id: 'moderator',
    name: 'Elena Rostova',
    roleTitle: 'Compliance & Safety Moderator',
    organization: 'Azentio Governance Board',
    badge: 'Moderator',
    color: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    description: 'Cross-tenant moderation console. Reviews submitted observations, strips PII/bank identifiers, and approves for collective sharing.'
  },
  'product-owner': {
    id: 'product-owner',
    name: 'Dr. Tariq Siddiqui',
    roleTitle: 'Lead Product Manager - BFSI AI',
    organization: 'Azentio Product Core',
    badge: 'Product Owner',
    color: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
    description: 'Product roadmap commander. Converts clustered collective insights into real engineering roadmap features.'
  },
  'admin': {
    id: 'admin',
    name: 'Azentio Security Ops',
    roleTitle: 'System Administrator',
    organization: 'Azentio Enterprise Infrastructure',
    badge: 'Admin / SecOps',
    color: 'bg-rose-500/20 text-rose-400 border border-rose-500/30',
    description: 'System-wide governance, tenant fence enforcement, security audit logs, and AI cluster metrics.'
  },
  'employee': {
    id: 'employee',
    name: 'Priya Sharma',
    roleTitle: 'Senior AI Research Engineer',
    organization: 'Azentio AI Innovation Labs',
    badge: 'Employee / R&D',
    color: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
    description: 'Internal experimental playground, model evaluation metrics, synthetic data generator, and platform broadcasts.'
  }
};

export const INITIAL_OBSERVATIONS = [
  {
    id: 'OBS-101',
    orgId: 'bank-a',
    author: 'Marcus Vance',
    submittedAt: '2026-10-28 14:22',
    rawTitle: 'SME loan assessment drops good agriculture borrowers during post-monsoon quarters',
    rawContent: 'At Apex Bank Singapore branch, our Kastle Lending scoring pipeline is penalizing agricultural FMCG suppliers because of Q3 monsoon revenue dips. Loan officers are seeing automatic rejections for clients with 5+ years of zero-default history. The algorithmic model treats cyclical quarter drops as insolvency risk rather than expected working capital seasonality.',
    redactedTitle: 'SME Lending Engine: Seasonal Cashflow Distortions in Periodic Revenue Cycles',
    redactedContent: 'Automated lending assessment pipelines penalize seasonal SME suppliers during routine annual downturn quarters. Multi-year zero-default borrowers face automated rejection because cashflow analysis lacks cyclical smoothing and season-indexed baseline normalization.',
    productCategory: 'Kastle Core Banking / Lending',
    domainTags: ['#SMELending', '#SeasonalityAdjustment', '#CashflowNormalization', '#CreditRisk'],
    status: 'approved', // pending, approved, rejected
    moderationNote: 'De-identified bank name and specific geography. Anonymized to industry pattern.',
    piiDetected: ['Apex Bank', 'Singapore branch', 'Q3 monsoon'],
    aiClusterId: 'CLUST-702',
    sentiment: 'High Concern',
    businessImpactScore: 'High (Est. $4.8M in false credit rejections)',
    upvotes: 24,
    convergedWith: ['bank-b', 'bank-c']
  },
  {
    id: 'OBS-102',
    orgId: 'bank-b',
    author: 'Zahra Al-Mansoor',
    submittedAt: '2026-10-29 09:15',
    rawTitle: 'Harvest cycle revenue gaps trigger false Murabaha working capital default flags',
    rawContent: 'Our Crescent Bank credit committee noticed that agricultural Murabaha facilities are generating high-risk early warning signals during harvest prep months. The cash inflow has a 90-day lag between seeding and harvest sale. The AI scoring module lacks Sharia-compliant dynamic grace period modeling for seasonal commodity cycles.',
    redactedTitle: 'Islamic SME Financing: Early Warning False Positives from Agrarian Working Capital Lags',
    redactedContent: 'Asset-backed working capital facilities trigger automated early warning alerts during anticipated inventory accumulation cycles. Scoring models do not account for predictable 90-day seasonal receivable lags inherent in agricultural trade contracts.',
    productCategory: 'iMAL Islamic Banking',
    domainTags: ['#IslamicFinance', '#WorkingCapital', '#SeasonalityAdjustment', '#EarlyWarningSystem'],
    status: 'approved',
    moderationNote: 'Stripped bank entity. Retained financial structure details.',
    piiDetected: ['Crescent Bank'],
    aiClusterId: 'CLUST-702',
    sentiment: 'Moderate Concern',
    businessImpactScore: 'High (Affects 18% of agro-Murabaha portfolio)',
    upvotes: 19,
    convergedWith: ['bank-a', 'bank-c']
  },
  {
    id: 'OBS-103',
    orgId: 'bank-c',
    author: 'Rohan Mehra',
    submittedAt: '2026-10-29 16:40',
    rawTitle: 'Seasonal festival inventory stock-ups cause automated credit line curtailment',
    rawContent: 'Summit Mutual clients in the retail & apparel sector draw heavily on revolving credit lines before festive seasons, causing temporary 85%+ credit utilization. Kastle engine flags this as liquidity distress and curtails overdraft limits right when businesses need liquidity most.',
    redactedTitle: 'Revolving Credit Facilities: Seasonal Utilization Spikes Mistaken for Distress',
    redactedContent: 'Predictable pre-season inventory stockpiling elevates credit line utilization past standard risk thresholds, resulting in algorithmic credit limit throttling during peak operational cycles.',
    productCategory: 'Kastle Core Banking / Lending',
    domainTags: ['#SMELending', '#CreditLimit', '#SeasonalityAdjustment', '#RetailBanking'],
    status: 'approved',
    moderationNote: 'Verified safe for collective knowledge sharing.',
    piiDetected: ['Summit Mutual'],
    aiClusterId: 'CLUST-702',
    sentiment: 'High Concern',
    businessImpactScore: 'Medium (Liquidity bottleneck for 220+ clients)',
    upvotes: 31,
    convergedWith: ['bank-a', 'bank-b']
  },
  {
    id: 'OBS-104',
    orgId: 'bank-a',
    author: 'Marcus Vance',
    submittedAt: '2026-10-30 11:05',
    rawTitle: 'High cross-border trade false-positive sanctions alerts on common South-East Asian patronymics',
    rawContent: 'Amlgo Labs screening in our Singapore trade hub flagged over 450 clean transactions this week due to non-standard Romanization of Malay and Indonesian names matching OFAC list fuzzy matches. Requires smart phonetics model.',
    redactedTitle: 'Sanctions Screening: Phonetic Name Matching Distortions in Regional Patronymics',
    redactedContent: 'Cross-border AML fuzzy screening yields elevated false positive alerts on regional name romanization variations. Recommending localized phonetic tokenization.',
    productCategory: 'Amlgo Labs AML',
    domainTags: ['#AML', '#SanctionsScreening', '#NLPPhonetics', '#FalsePositiveReduction'],
    status: 'pending',
    moderationNote: null,
    piiDetected: ['Singapore trade hub', 'Amlgo Labs'],
    aiClusterId: 'CLUST-810',
    sentiment: 'Urgent',
    businessImpactScore: 'Critical (Operational delay avg 3.4 hrs/trade)',
    upvotes: 8,
    convergedWith: []
  }
];

export const INITIAL_CLUSTERS = [
  {
    id: 'CLUST-702',
    name: 'Seasonality-Aware Cashflow Normalization in SME Credit & Financing',
    summary: 'Strong cross-tenant convergence identified across 3 commercial and Islamic banking institutions. Standard risk assessment algorithms consistently mistake cyclical revenue lags for structural default risk, causing false credit curtailments and high rejection rates for solvent SME businesses.',
    domain: 'Core Banking & Credit Underwriting',
    institutionsInvolved: 3,
    totalObservations: 3,
    convergenceConfidence: 94.6,
    tags: ['#SMELending', '#SeasonalityAdjustment', '#CashflowNormalization', '#Kastle', '#iMAL'],
    status: 'converted_to_roadmap',
    associatedFeatureId: 'IMP-104',
    severity: 'High Priority',
    createdDate: '2026-10-29'
  },
  {
    id: 'CLUST-810',
    name: 'Cross-Border Regional Phonetics & Sanctions False-Positive Suppression',
    summary: 'Observations highlight false positive bottlenecks in trade finance screening where traditional Levenshtein distance matches benign patronymic variants against sanctions watchlists.',
    domain: 'Financial Crime & AML',
    institutionsInvolved: 2,
    totalObservations: 2,
    convergenceConfidence: 88.2,
    tags: ['#AML', '#SanctionsScreening', '#NLPPhonetics', '#AmlgoLabs'],
    status: 'in_moderation',
    associatedFeatureId: 'IMP-106',
    severity: 'Critical Priority',
    createdDate: '2026-10-30'
  }
];

export const INITIAL_IMPROVEMENTS = [
  {
    id: 'IMP-104',
    title: 'Seasonality-Aware Dynamic Cashflow Normalizer (SDCN) for Kastle & iMAL',
    description: 'Algorithmic module integrating 24-month cyclical seasonality baseline indices into automated SME debt-service-coverage-ratio (DSCR) calculations. Prevents false credit rejections during predictable harvest and festive inventory build cycles.',
    originClusterId: 'CLUST-702',
    productLine: 'Azentio Kastle / iMAL Suite',
    status: 'in_progress', // proposed, under_review, planned, in_progress, released
    targetRelease: 'v4.2 (Q1 2027)',
    assignedLead: 'Dr. Tariq Siddiqui (Product Core)',
    impactedClientsCount: 48,
    estimatedPortfolioSalvage: '$36.5M Annualized Qualified Lending',
    timeline: [
      { step: 'Proposed from Bank A & B Insights', date: '2026-10-29', done: true },
      { step: 'Product Council Review & Risk Model Validation', date: '2026-10-29', done: true },
      { step: 'Architecture Blueprint & Synthetic Dataset Benchmarks', date: '2026-10-30', done: true },
      { step: 'Active Engineering Sprint (Phase 1)', date: 'Current', done: false },
      { step: 'Multi-Tenant Sandbox Pilot & Release', date: 'Nov 2026', done: false }
    ]
  },
  {
    id: 'IMP-105',
    title: 'Dynamic Sharia-Compliant Profit-Rate Variance Buffer',
    description: 'Automated contract margin adjuster for Murabaha and Ijarah financing to smoothly accommodate inter-bank benchmark rate changes without manual recalculation.',
    originClusterId: 'CLUST-650',
    productLine: 'Azentio iMAL Islamic Banking',
    status: 'planned',
    targetRelease: 'v4.3',
    assignedLead: 'Farah Qureshi (Islamic BFSI Lead)',
    impactedClientsCount: 22,
    estimatedPortfolioSalvage: '8.4 hrs/week Operational Savings',
    timeline: [
      { step: 'Sharia Supervisory Board Evaluation', date: '2026-10-20', done: true },
      { step: 'Approved by Product Steering Board', date: '2026-10-27', done: true },
      { step: 'Scheduled for Sprint 24', date: 'Nov 2026', done: false }
    ]
  },
  {
    id: 'IMP-106',
    title: 'Regional Dialect & Patronymic False-Positive Suppressor Engine',
    description: 'Deep-learning phonetic encoder for Southeast Asian and Arabic name transliterations reducing AML alert noise by 64% without lowering risk sensitivity.',
    originClusterId: 'CLUST-810',
    productLine: 'Azentio Amlgo Labs AML',
    status: 'under_review',
    targetRelease: 'v4.1 Patch 3',
    assignedLead: 'Elena Rostova & AI Lab Team',
    impactedClientsCount: 35,
    estimatedPortfolioSalvage: '64% Reduction in Manual Review Hours',
    timeline: [
      { step: 'Cross-Tenant Anomaly Aggregated', date: '2026-10-30', done: true },
      { step: 'Model Precision Benchmark in Sandbox', date: 'Current', done: false }
    ]
  }
];

export const PRODUCTS_CATALOG = [
  {
    id: 'kastle',
    name: 'Azentio Kastle',
    category: 'Universal Core Banking & Lending',
    tagline: 'Enterprise-grade banking engine engineered for agile SME, retail & commercial finance.',
    metrics: { clientCount: '45+ Global Banks', processedValue: '$120B+ Assets', slaUptime: '99.99%' },
    features: [
      'Automated End-to-End SME Loan Origination & Servicing',
      'Intelligent Collateral Management & Real-time Valuation',
      'Multi-currency Treasury, Liquidity & Asset Liability Management',
      'Configurable Dynamic Risk Scoring & Underwriting Rules'
    ],
    highlightBadge: 'Flagship Core'
  },
  {
    id: 'imal',
    name: 'Azentio iMAL',
    category: 'Islamic Banking & Finance Suite',
    tagline: 'The world’s first and only AAOIFI-certified end-to-end Islamic core banking software.',
    metrics: { clientCount: '130+ Islamic Banks', globalReach: '40+ Countries', compliance: '100% Sharia Certified' },
    features: [
      'Native Murabaha, Mudaraba, Ijarah, Istisna’a & Sukuk Engine',
      'Integrated Profit Calculation & Sharia Governance Workflow',
      'Automated Zakat Management & Charitable Endowment Accounting',
      'Multi-entity Sovereign Islamic Window Operations'
    ],
    highlightBadge: 'Global #1 Islamic Core'
  },
  {
    id: 'amlgo',
    name: 'Azentio Amlgo Labs',
    category: 'Financial Crime & AML Intelligence',
    tagline: 'Autonomous AI surveillance, sanctions screening & fraud graph analytics.',
    metrics: { alertAccuracy: '94.2% Precision', scanSpeed: '<120ms Latency', falseReduction: '62% Less Noise' },
    features: [
      'Graph Neural Network for Cross-Account Transaction Laundering Detection',
      'Real-time Sanctions & Politically Exposed Persons (PEP) Fuzzy Matching',
      'Automated Suspicious Activity Report (SAR) Generation',
      'Dynamic Behavioral Anomaly Baseline Profiling'
    ],
    highlightBadge: 'AI Defense'
  },
  {
    id: 'beyon360',
    name: 'Azentio Beyon360',
    category: 'Insurance Core & Smart Underwriting',
    tagline: 'Next-generation omni-channel insurance management for General, Life & Health lines.',
    metrics: { policiesManaged: '18M+ Policies', claimsTurnaround: '-70% Time', brokerCoverage: '10,000+ Agents' },
    features: [
      'Automated First Notice of Loss (FNOL) & Instant Adjudication',
      'Telematics & Parametric Underwriting Integration',
      'Reinsurance treaty administration & bordereaux reporting',
      'Digital policyholder self-service with embedded e-signature'
    ],
    highlightBadge: 'Full Lifecycle'
  },
  {
    id: 'collective-ai',
    name: 'Azentio AI Collective',
    category: 'Cross-Tenant Federated Intelligence',
    tagline: 'Privacy-preserving collaborative learning network that transforms fragmented client observations into shared BFSI evolution.',
    metrics: { tenantIsolation: 'Zero-Leakage Guarantee', anonymization: 'Automated NER & PII Sanitizer', clusterVelocity: '<30s Convergence' },
    features: [
      'Automated Named Entity Recognition (NER) Redaction before publication',
      'Vector Semantic Clustering across multi-tenant observations',
      'Human-in-the-Loop Moderator compliance workbench',
      'Direct linkage into Azentio Engineering Roadmap & sprint backlogs'
    ],
    highlightBadge: 'Flagship Architecture'
  }
];

export const AUDIT_LOGS = [
  { id: 'LOG-991', timestamp: '2026-10-30 16:28:14', actor: 'Marcus Vance (Apex Bank)', action: 'SUBMIT_OBSERVATION', target: 'OBS-104', status: 'SUCCESS', ip: '194.22.102.14', details: 'Observation encrypted and queued for moderation.' },
  { id: 'LOG-992', timestamp: '2026-10-30 16:15:02', actor: 'Elena Rostova (Moderator)', action: 'REDACT_AND_APPROVE', target: 'OBS-103', status: 'SUCCESS', ip: '10.0.4.88', details: 'PII tokenized. De-identified insight pushed to Collective Feed.' },
  { id: 'LOG-993', timestamp: '2026-10-30 15:52:40', actor: 'System AI Engine', action: 'CLUSTER_CONVERGENCE_DETECTED', target: 'CLUST-702', status: 'ALERT', ip: 'INTERNAL_DAEMON', details: 'High similarity (94.6%) between Bank A, Bank B, and Bank C reports.' },
  { id: 'LOG-994', timestamp: '2026-10-30 14:10:11', actor: 'Dr. Tariq Siddiqui (Product Owner)', action: 'ROADMAP_CONVERSION', target: 'IMP-104', status: 'SUCCESS', ip: '10.0.2.14', details: 'Promoted Cluster #702 to Active Roadmap Sprint.' },
  { id: 'LOG-995', timestamp: '2026-10-30 13:04:19', actor: 'Anonymous IP 185.192.4.12', action: 'CROSS_TENANT_ACCESS_ATTEMPT', target: '/tenant/bank-b/private-vault', status: 'BLOCKED_BY_FENCE', ip: '185.192.4.12', details: 'Security firewall blocked unauthorized cross-tenant read attempt.' }
];
