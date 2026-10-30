import React from 'react';
import { usePortal, PortalProvider } from './context/PortalContext';
import { Header } from './components/common/Header';
import { SecurityModal } from './components/common/SecurityModal';
import { DemoRequestModal } from './components/common/DemoRequestModal';
import { Toast } from './components/common/Toast';

// Public components
import { HeroSection } from './components/public/HeroSection';
import { ProductsShowcase } from './components/public/ProductsShowcase';
import { InteractiveSandbox } from './components/public/InteractiveSandbox';
import { CollectiveExplainer } from './components/public/CollectiveExplainer';
import { HackathonHub } from './components/public/HackathonHub';
import { Footer } from './components/public/Footer';

// Portal components
import { PortalLayout } from './components/portal/PortalLayout';
import { ClientDashboard } from './components/portal/ClientDashboard';
import { ModeratorDashboard } from './components/portal/ModeratorDashboard';
import { CollectiveFeedView } from './components/portal/CollectiveFeedView';
import { ProductRoadmapView } from './components/portal/ProductRoadmapView';
import { AdminGovernanceView } from './components/portal/AdminGovernanceView';
import { EmployeePlaygroundView } from './components/portal/EmployeePlaygroundView';

const MainContent = () => {
  const { currentView, activePortalTab, currentRole } = usePortal();

  if (currentView === 'public') {
    return (
      <div className="min-h-screen flex flex-col bg-[#070D1E]">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProductsShowcase />
          <InteractiveSandbox />
          <CollectiveExplainer />
          <HackathonHub />
        </main>
        <Footer />
        <SecurityModal />
        <DemoRequestModal />
        <Toast />
      </div>
    );
  }

  // Otherwise, Portal View
  return (
    <div className="min-h-screen flex flex-col bg-[#070D1E]">
      <Header />
      <PortalLayout>
        {activePortalTab === 'moderation' && <ModeratorDashboard />}
        {activePortalTab === 'collective' && <CollectiveFeedView />}
        {activePortalTab === 'roadmap' && <ProductRoadmapView />}
        {activePortalTab === 'security' && <AdminGovernanceView />}
        {activePortalTab === 'employee' && <EmployeePlaygroundView />}
        {(activePortalTab === 'dashboard' || activePortalTab === 'submit' || activePortalTab === 'private') && (
          <ClientDashboard />
        )}
      </PortalLayout>
      <Footer />
      <SecurityModal />
      <DemoRequestModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <PortalProvider>
      <MainContent />
    </PortalProvider>
  );
}
