import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ORGANIZATIONS,
  ROLES,
  INITIAL_OBSERVATIONS,
  INITIAL_CLUSTERS,
  INITIAL_IMPROVEMENTS,
  AUDIT_LOGS
} from '../data/mockData';

const PortalContext = createContext(null);

const STORAGE_KEY = 'azentio_ai_portal_state_v1';

export const PortalProvider = ({ children }) => {
  // Try loading from localStorage, else fallback to initial data
  const [currentRole, setCurrentRole] = useState(() => {
    return 'public';
  });

  const [currentView, setCurrentView] = useState('public'); // 'public' | 'portal'
  const [activePortalTab, setActivePortalTab] = useState('dashboard'); // 'dashboard', 'submit', 'private', 'collective', 'moderation', 'roadmap', 'security', 'employee', 'playground'

  const [observations, setObservations] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY + '_obs');
      return saved ? JSON.parse(saved) : INITIAL_OBSERVATIONS;
    } catch (e) {
      return INITIAL_OBSERVATIONS;
    }
  });

  const [clusters, setClusters] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY + '_clust');
      return saved ? JSON.parse(saved) : INITIAL_CLUSTERS;
    } catch (e) {
      return INITIAL_CLUSTERS;
    }
  });

  const [improvements, setImprovements] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY + '_imp');
      return saved ? JSON.parse(saved) : INITIAL_IMPROVEMENTS;
    } catch (e) {
      return INITIAL_IMPROVEMENTS;
    }
  });

  const [auditLogs, setAuditLogs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY + '_audit');
      return saved ? JSON.parse(saved) : AUDIT_LOGS;
    } catch (e) {
      return AUDIT_LOGS;
    }
  });

  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Azentio Collective Intelligence Active',
      message: 'Multi-tenant federated intelligence telemetry and privacy pipelines are operational.',
      time: 'Just now',
      read: false,
      type: 'system'
    },
    {
      id: 'notif-2',
      title: 'Cluster #702 Convergence Alert',
      message: 'Cross-tenant convergence detected on SME Cashflow Seasonality.',
      time: '15m ago',
      read: false,
      type: 'ai'
    }
  ]);

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [securityModalData, setSecurityModalData] = useState(null); // When security violation test triggered
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY + '_obs', JSON.stringify(observations));
      localStorage.setItem(STORAGE_KEY + '_clust', JSON.stringify(clusters));
      localStorage.setItem(STORAGE_KEY + '_imp', JSON.stringify(improvements));
      localStorage.setItem(STORAGE_KEY + '_audit', JSON.stringify(auditLogs));
    } catch (e) {
      console.error('Storage sync error', e);
    }
  }, [observations, clusters, improvements, auditLogs]);

  const showToast = (message, type = 'info') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const switchRole = (roleId) => {
    setCurrentRole(roleId);
    if (roleId === 'public') {
      setCurrentView('public');
    } else {
      setCurrentView('portal');
      // Set appropriate default tab based on role
      if (roleId === 'moderator') {
        setActivePortalTab('moderation');
      } else if (roleId === 'product-owner') {
        setActivePortalTab('roadmap');
      } else if (roleId === 'admin') {
        setActivePortalTab('security');
      } else if (roleId === 'employee') {
        setActivePortalTab('employee');
      } else {
        setActivePortalTab('dashboard');
      }
    }
    showToast(`Switched perspective to: ${ROLES[roleId]?.name || roleId}`, 'success');
  };

  const navigateTo = (view, tab = 'dashboard') => {
    setCurrentView(view);
    if (tab) setActivePortalTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit new observation with instant simulated LLM analysis
  const submitObservation = (rawTitle, rawContent, productCategory, targetCluster) => {
    const org = ORGANIZATIONS[currentRole] || ORGANIZATIONS['bank-a'];
    const newId = `OBS-${Math.floor(100 + Math.random() * 900)}`;

    // Simple intelligent NER & PII detection
    const piiWords = [];
    const lowerContent = rawContent.toLowerCase();
    if (lowerContent.includes('bank') || lowerContent.includes('branch')) piiWords.push(org.shortName);
    if (lowerContent.includes('singapore') || lowerContent.includes('riyadh') || lowerContent.includes('london')) piiWords.push('Geographic entity');
    if (lowerContent.includes('john') || lowerContent.includes('client') || lowerContent.includes('account')) piiWords.push('Client Identifiers');
    if (piiWords.length === 0) piiWords.push(org.shortName);

    // Auto-redact
    let autoRedactedContent = rawContent
      .replace(new RegExp(org.name, 'gi'), '[FINANCIAL_INSTITUTION]')
      .replace(new RegExp(org.shortName, 'gi'), '[FINANCIAL_INSTITUTION]')
      .replace(/branch\s+[A-Za-z0-9]+/gi, '[BRANCH_ENTITY]')
      .replace(/Singapore|Riyadh|London|Mumbai|Dubai/gi, '[JURISDICTION]');

    const autoRedactedTitle = rawTitle
      .replace(new RegExp(org.shortName, 'gi'), '[INSTITUTION]')
      .replace(/Singapore|Riyadh|London|Mumbai|Dubai/gi, '[REGION]');

    // Extract tags
    const tags = ['#BFSI'];
    if (productCategory.includes('Kastle') || lowerContent.includes('credit') || lowerContent.includes('loan')) {
      tags.push('#SMELending', '#CreditUnderwriting');
    }
    if (productCategory.includes('iMAL') || lowerContent.includes('islamic') || lowerContent.includes('murabaha')) {
      tags.push('#IslamicFinance', '#ShariaCompliance');
    }
    if (productCategory.includes('Amlgo') || lowerContent.includes('sanctions') || lowerContent.includes('fraud')) {
      tags.push('#AML', '#RiskDefense');
    }
    if (lowerContent.includes('season') || lowerContent.includes('quarter') || lowerContent.includes('monsoon')) {
      tags.push('#SeasonalityAdjustment');
    }

    const newObs = {
      id: newId,
      orgId: currentRole.startsWith('bank-') ? currentRole : 'bank-a',
      author: ROLES[currentRole]?.name || 'Bank Contributor',
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      rawTitle,
      rawContent,
      redactedTitle: autoRedactedTitle,
      redactedContent: autoRedactedContent,
      productCategory,
      domainTags: tags,
      status: 'pending',
      moderationNote: null,
      piiDetected: piiWords,
      aiClusterId: targetCluster || 'CLUST-702',
      sentiment: 'Active Concern',
      businessImpactScore: 'High (Underwriting Efficiency)',
      upvotes: 1,
      convergedWith: []
    };

    setObservations(prev => [newObs, ...prev]);

    // Add audit log
    const newLog = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19).replace('T', ' '),
      actor: `${ROLES[currentRole]?.name} (${org.shortName})`,
      action: 'SUBMIT_OBSERVATION',
      target: newId,
      status: 'SUCCESS',
      ip: '10.240.12.8',
      details: `Submitted new observation encrypted in ${org.shortName} tenant boundary.`
    };
    setAuditLogs(prev => [newLog, ...prev]);

    // Add notification
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: 'Observation Submitted to Moderation Queue',
        message: `${newId}: "${rawTitle.substring(0, 40)}..." is awaiting de-identification review.`,
        time: 'Just now',
        read: false,
        type: 'obs'
      },
      ...prev
    ]);

    showToast(`Observation ${newId} submitted securely! Awaiting compliance moderation.`, 'success');
    return newObs;
  };

  // Moderator approves or rejects with optional redaction edit
  const moderateObservation = (obsId, decision, editedTitle, editedContent, note) => {
    setObservations(prev =>
      prev.map(item => {
        if (item.id === obsId) {
          return {
            ...item,
            status: decision === 'approve' ? 'approved' : 'rejected',
            redactedTitle: editedTitle || item.redactedTitle,
            redactedContent: editedContent || item.redactedContent,
            moderationNote: note || (decision === 'approve' ? 'De-identified and verified for collective knowledge base.' : 'Rejected per compliance policy.'),
            approvedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
          };
        }
        return item;
      })
    );

    // Audit log
    const newLog = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19).replace('T', ' '),
      actor: 'Elena Rostova (Compliance Moderator)',
      action: decision === 'approve' ? 'REDACT_AND_APPROVE' : 'REJECT_OBSERVATION',
      target: obsId,
      status: 'SUCCESS',
      ip: '10.0.4.88',
      details: decision === 'approve'
        ? `Sanitized PII, approved, and broadcasted ${obsId} to Collective Feed.`
        : `Rejected ${obsId} with reason: ${note || 'Compliance boundary flag'}.`
    };
    setAuditLogs(prev => [newLog, ...prev]);

    showToast(
      decision === 'approve'
        ? `Observation ${obsId} approved and published to Collective Feed!`
        : `Observation ${obsId} marked rejected.`,
      decision === 'approve' ? 'success' : 'warning'
    );
  };

  // Upvote collective observation
  const upvoteObservation = (obsId) => {
    setObservations(prev =>
      prev.map(item => {
        if (item.id === obsId) {
          return { ...item, upvotes: item.upvotes + 1 };
        }
        return item;
      })
    );
    showToast('Upvoted! Collective priority metric updated.', 'info');
  };

  // Convert cluster into roadmap improvement
  const createImprovementFromCluster = (clusterId, title, description, productLine, targetRelease) => {
    const newImpId = `IMP-${Math.floor(200 + Math.random() * 800)}`;
    const newImp = {
      id: newImpId,
      title,
      description,
      originClusterId: clusterId,
      productLine,
      status: 'in_progress',
      targetRelease: targetRelease || 'v4.2 (Q1 2027)',
      assignedLead: ROLES['product-owner'].name,
      impactedClientsCount: 45,
      estimatedPortfolioSalvage: 'High Operational Salvage',
      timeline: [
        { step: 'Promoted from Cross-Tenant Collective Cluster', date: 'Today', done: true },
        { step: 'Core Architecture & Specification', date: 'Today', done: true },
        { step: 'Sprint Backlog Allocation', date: 'Current', done: false },
        { step: 'Sandbox Release & Tenant Testing', date: 'Nov 2026', done: false }
      ]
    };

    setImprovements(prev => [newImp, ...prev]);

    // Update cluster status
    setClusters(prev =>
      prev.map(c => (c.id === clusterId ? { ...c, status: 'converted_to_roadmap', associatedFeatureId: newImpId } : c))
    );

    // Audit log
    const newLog = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19).replace('T', ' '),
      actor: `${ROLES['product-owner'].name} (Product Lead)`,
      action: 'ROADMAP_CONVERSION',
      target: newImpId,
      status: 'SUCCESS',
      ip: '10.0.2.14',
      details: `Converted collective insight cluster ${clusterId} into live Roadmap Feature ${newImpId}.`
    };
    setAuditLogs(prev => [newLog, ...prev]);

    showToast(`Feature ${newImpId} created on Azentio Product Roadmap!`, 'success');
  };

  const updateImprovementStatus = (impId, newStatus) => {
    setImprovements(prev =>
      prev.map(item => {
        if (item.id === impId) {
          return { ...item, status: newStatus };
        }
        return item;
      })
    );
    showToast(`Roadmap Feature ${impId} status updated to: ${newStatus.replace('_', ' ').toUpperCase()}`, 'info');
  };

  // Test Multi-Tenant Boundary: When Bank A attempts to inspect Bank B's private drafts
  const testTenantBoundaryViolation = (targetBankId) => {
    const currentOrg = ORGANIZATIONS[currentRole] || { shortName: 'Public / Guest' };
    const targetOrg = ORGANIZATIONS[targetBankId];

    // Log the attempted breach in audit logs!
    const violationLog = {
      id: `SEC-ALERT-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19).replace('T', ' '),
      actor: `${ROLES[currentRole]?.name || 'Unknown Actor'} (${currentOrg.shortName})`,
      action: 'CROSS_TENANT_READ_ATTEMPT',
      target: `/api/v1/tenants/${targetBankId}/private-vault`,
      status: 'BLOCKED_BY_FENCE',
      ip: '192.168.44.102',
      details: `SECURITY REJECTION: Tenant '${currentOrg.shortName}' attempted access to encrypted tenant boundary of '${targetOrg?.name}'. Zero-trust fence enforced.`
    };

    setAuditLogs(prev => [violationLog, ...prev]);

    // Open security barrier modal
    setSecurityModalData({
      currentOrg: currentOrg.shortName,
      targetOrg: targetOrg?.name,
      targetTenantKey: targetOrg?.tenantKey,
      timestamp: violationLog.timestamp,
      logId: violationLog.id
    });
  };

  // Reset to initial demo state
  const resetDemoData = () => {
    setObservations(INITIAL_OBSERVATIONS);
    setClusters(INITIAL_CLUSTERS);
    setImprovements(INITIAL_IMPROVEMENTS);
    setAuditLogs(AUDIT_LOGS);
    try {
      localStorage.removeItem(STORAGE_KEY + '_obs');
      localStorage.removeItem(STORAGE_KEY + '_clust');
      localStorage.removeItem(STORAGE_KEY + '_imp');
      localStorage.removeItem(STORAGE_KEY + '_audit');
    } catch (e) {}
    showToast('Demo environment reset to pristine initial state.', 'info');
  };

  return (
    <PortalContext.Provider
      value={{
        currentRole,
        currentView,
        activePortalTab,
        switchRole,
        navigateTo,
        setActivePortalTab,
        organizations: ORGANIZATIONS,
        roles: ROLES,
        observations,
        clusters,
        improvements,
        auditLogs,
        notifications,
        demoModalOpen,
        setDemoModalOpen,
        securityModalData,
        setSecurityModalData,
        toastMessage,
        submitObservation,
        moderateObservation,
        upvoteObservation,
        createImprovementFromCluster,
        updateImprovementStatus,
        testTenantBoundaryViolation,
        resetDemoData,
        showToast
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) throw new Error('usePortal must be used within PortalProvider');
  return context;
};
