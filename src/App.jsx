import React, { useState, useMemo, useEffect } from 'react';
import { DEMO_PROFILES } from './data/demoProfiles';
import { analyzeProfileDataset } from './utils/analyticsEngine';

// Components
import LandingPage from './components/LandingPage';
import AnalysisHub from './components/AnalysisHub';
import ProfileInputModal from './components/ProfileInputModal';
import ProcessingScreen from './components/ProcessingScreen';
import DashboardHeader from './components/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar';
import ContentDetailDrawer from './components/ContentDetailDrawer';
import FutureModuleModal from './components/FutureModuleModal';
import ExportReportModal from './components/ExportReportModal';

// Dedicated Analysis Views for the 23 Core Modules
import ProfileAnalyzerView from './views/ProfileAnalyzerView';
import ContentAnalyzerView from './views/ContentAnalyzerView';
import ReelAnalyzerView from './views/ReelAnalyzerView';
import PostAnalyzerView from './views/PostAnalyzerView';
import CaptionAnalyzerView from './views/CaptionAnalyzerView';
import HashtagAnalyzerView from './views/HashtagAnalyzerView';
import EngagementAnalyzerView from './views/EngagementAnalyzerView';
import AudienceAnalyzerView from './views/AudienceAnalyzerView';
import BrandAnalyzerView from './views/BrandAnalyzerView';
import CompetitorAnalyzerView from './views/CompetitorAnalyzerView';
import SentimentAnalyzerView from './views/SentimentAnalyzerView';
import TrustProofView from './views/TrustProofView';
import TrendingContentView from './views/TrendingContentView';
import BestPerformingView from './views/BestPerformingView';
import BrandSwotView from './views/BrandSwotView';
import StrategicRecommendationsView from './views/StrategicRecommendationsView';
import ContentOpportunityView from './views/ContentOpportunityView';
import ContentStrategy30DayView from './views/ContentStrategy30DayView';
import CampaignAnalyzerView from './views/CampaignAnalyzerView';
import ExecutiveSummaryView from './views/ExecutiveSummaryView';

// Existing Views
import OverviewView from './views/OverviewView';
import AllContentView from './views/AllContentView';
import ContentAnalysisView from './views/ContentAnalysisView';
import ContentPillarsView from './views/ContentPillarsView';
import TopicAnalysisView from './views/TopicAnalysisView';
import FormatAnalysisView from './views/FormatAnalysisView';
import PerformanceView from './views/PerformanceView';
import WhyItWorkedView from './views/WhyItWorkedView';
import ContentGapsView from './views/ContentGapsView';
import RecommendationsView from './views/RecommendationsView';

export default function App() {
  // Navigation & View State: 'landing' (Page 1) -> 'hub' (Page 2) -> 'dashboard' (Analysis Workspace)
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash.includes('dashboard') || window.location.search.includes('page=dashboard')) {
        return 'dashboard';
      }
      if (window.location.hash.includes('hub') || window.location.search.includes('page=hub')) {
        return 'hub';
      }
      if (window.location.hash.includes('processing') || window.location.search.includes('page=processing')) {
        return 'processing';
      }
    }
    return 'landing';
  });

  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      if (tabParam) return tabParam;
    }
    return 'profile-analyzer';
  });

  useEffect(() => {
    if (currentView === 'hub') {
      window.location.hash = 'hub';
    } else if (currentView === 'dashboard') {
      window.location.hash = 'dashboard';
    } else if (currentView === 'landing') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [currentView]);

  // Active Profile & Computed Analytics
  const [activeProfile, setActiveProfile] = useState(DEMO_PROFILES['growthacademy.ai']);
  const [pendingProfile, setPendingProfile] = useState(null);

  // Compute analytics dynamically from activeProfile's underlying dataset
  const analytics = useMemo(() => {
    return analyzeProfileDataset(activeProfile);
  }, [activeProfile]);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [selectedPostForDrawer, setSelectedPostForDrawer] = useState(null);
  const [selectedFutureModule, setSelectedFutureModule] = useState(null);
  const [isExportReportOpen, setIsExportReportOpen] = useState(false);

  // Theme Management (Light by default for cohesive modern look, supports Dark)
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Launch analysis flow
  const handleStartAnalysis = (profileToAnalyze) => {
    setPendingProfile(profileToAnalyze);
    setIsInputModalOpen(false);
    setCurrentView('processing');
  };

  // Processing completed -> navigate to Third Page (Dashboard Workspace) with analyzed profile
  const handleProcessingComplete = () => {
    if (pendingProfile) {
      setActiveProfile(pendingProfile);
      setPendingProfile(null);
    }
    setCurrentView('dashboard');
  };

  // Navigation from Landing Page to AI Analysis Hub (Page 2)
  const handleEnterHub = () => {
    setCurrentView('hub');
  };

  // Direct selection of an analysis from AI Hub (Page 2 -> Third Page Workspace)
  // Connects all existing curved-square buttons cleanly to their corresponding analysis modules
  const handleSelectAnalysis = (tab, cardId) => {
    const tabMap = {
      'profile-analyzer': 'profile-analyzer',
      'post-analyzer': 'post-analyzer',
      'reel-analyzer': 'reel-analyzer',
      'performance-analyzer': 'best-performing',
      'trending-content': 'trending-content',
      'caption-analyzer': 'caption-analyzer',
      'hashtag-analyzer': 'hashtag-analyzer',
      'competitor-comparison': 'competitor-analyzer',
      'competitor-analyzer': 'competitor-analyzer',
      'content-analyzer': 'content-analyzer',
      'audience-analyzer': 'audience-analyzer',
      'engagement-analyzer': 'engagement-analyzer',
      'content-gaps': 'content-opportunities',
      'strategy': 'strategic-recommendations',
      'strategic-recommendations': 'strategic-recommendations',
      'brand-analyzer': 'brand-analyzer'
    };

    const targetTab = tabMap[cardId] || tabMap[tab] || tab || 'profile-analyzer';
    setActiveTab(targetTab);
    setIsInputModalOpen(false); // Never show popup modal; Page 3 has the embedded URL paste experience
    setCurrentView('dashboard');
  };

  // Render view router inside dashboard for all 23 modules
  const renderDashboardView = () => {
    if (!analytics) return null;

    switch (activeTab) {
      // 1. Profile Analyzer (Third Page)
      case 'profile-analyzer':
        return (
          <ProfileAnalyzerView 
            analytics={analytics}
            onNavigateTab={setActiveTab}
            onBackToHub={() => setCurrentView('hub')}
            onAnalyzeNewProfile={() => setIsInputModalOpen(true)}
            onStartAnalysis={handleStartAnalysis}
          />
        );

      // 2. Content Analyzer (17 pillars)
      case 'content-analyzer':
      case 'content-pillars':
        return (
          <ContentAnalyzerView 
            analytics={analytics}
            onSelectPost={setSelectedPostForDrawer}
          />
        );

      // 3. Reel Analyzer
      case 'reel-analyzer':
      case 'format-analysis':
        return (
          <ReelAnalyzerView 
            analytics={analytics}
            onSelectPost={setSelectedPostForDrawer}
          />
        );

      // 4. Post Analyzer
      case 'post-analyzer':
      case 'content-analysis':
        return (
          <PostAnalyzerView 
            analytics={analytics}
            onSelectPost={setSelectedPostForDrawer}
          />
        );

      // 5. Caption Analyzer
      case 'caption-analyzer':
        return (
          <CaptionAnalyzerView 
            analytics={analytics}
          />
        );

      // 6. Hashtag Analyzer
      case 'hashtag-analyzer':
      case 'topics':
        return (
          <HashtagAnalyzerView 
            analytics={analytics}
          />
        );

      // 7. Engagement Analyzer
      case 'engagement-analyzer':
      case 'performance':
        return (
          <EngagementAnalyzerView 
            analytics={analytics}
            onSelectPost={setSelectedPostForDrawer}
          />
        );

      // 8. Audience Analyzer
      case 'audience-analyzer':
        return (
          <AudienceAnalyzerView 
            analytics={analytics}
          />
        );

      // 9. Brand Analyzer
      case 'brand-analyzer':
        return (
          <BrandAnalyzerView 
            analytics={analytics}
          />
        );

      // 10, 11, 12. Competitor Analyzer, Content Gap & Positioning
      case 'competitor-analyzer':
      case 'compare':
        return (
          <CompetitorAnalyzerView 
            analytics={analytics}
            onBackToHub={() => setCurrentView('hub')}
          />
        );

      // 13. Sentiment Analyzer
      case 'sentiment-analyzer':
        return (
          <SentimentAnalyzerView 
            analytics={analytics}
          />
        );

      // 14. Trust & Social Proof Analyzer
      case 'trust-analyzer':
        return (
          <TrustProofView 
            analytics={analytics}
          />
        );

      // 15. Trending Content
      case 'trending-content':
        return (
          <TrendingContentView 
            analytics={analytics}
            onSelectPost={setSelectedPostForDrawer}
          />
        );

      // 16. Best-Performing Content
      case 'best-performing':
      case 'why-it-worked':
        return (
          <BestPerformingView 
            analytics={analytics}
            onSelectPost={setSelectedPostForDrawer}
          />
        );

      // 17. Brand SWOT
      case 'brand-swot':
        return (
          <BrandSwotView 
            analytics={analytics}
          />
        );

      // 18. Strategic Recommendations
      case 'strategic-recommendations':
      case 'recommendations':
        return (
          <StrategicRecommendationsView 
            analytics={analytics}
            onExportReportClick={() => setIsExportReportOpen(true)}
          />
        );

      // 19. Content Opportunity Engine
      case 'content-opportunities':
        return (
          <ContentOpportunityView 
            analytics={analytics}
          />
        );

      // 20. 30-Day Content Strategy
      case 'content-strategy-30day':
        return (
          <ContentStrategy30DayView 
            analytics={analytics}
          />
        );

      // 21. Campaign Analyzer
      case 'campaign-analyzer':
        return (
          <CampaignAnalyzerView 
            analytics={analytics}
          />
        );

      // 22. Executive Summary
      case 'executive-summary':
        return (
          <ExecutiveSummaryView 
            analytics={analytics}
            onNavigateTab={setActiveTab}
            onExportReportClick={() => setIsExportReportOpen(true)}
          />
        );

      // Full Database Table
      case 'all-content':
        return (
          <AllContentView 
            analytics={analytics} 
            onSelectPost={setSelectedPostForDrawer} 
          />
        );

      // Default Overview
      case 'overview':
      default:
        return (
          <OverviewView 
            analytics={analytics} 
            onNavigateTab={setActiveTab} 
            onBackToHub={() => setCurrentView('hub')}
            onAnalyzeNewProfile={() => setIsInputModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {/* 1. Landing Page View (Page 1) - Preserved completely without alterations */}
      {currentView === 'landing' && (
        <LandingPage 
          onAnalyzeClick={() => { setIsInputModalOpen(false); setCurrentView('hub'); }}
          onExploreDemoClick={() => { setIsInputModalOpen(false); setCurrentView('hub'); }}
          onDirectAnalyze={() => { setIsInputModalOpen(false); setCurrentView('hub'); }}
          isModalOpen={false}
        />
      )}

      {/* 2. AI Analysis Hub (Page 2) - Preserved visual design & squircle cards */}
      {currentView === 'hub' && (
        <AnalysisHub 
          onSelectAnalysis={handleSelectAnalysis}
          onBackHome={() => setCurrentView('landing')}
          onOpenModal={() => {
            setActiveTab('profile-analyzer');
            setIsInputModalOpen(false);
            setCurrentView('dashboard');
          }}
          analytics={analytics}
          activeProfile={activeProfile}
        />
      )}

      {/* 3. Processing Screen View */}
      {currentView === 'processing' && (
        <ProcessingScreen 
          profile={pendingProfile || activeProfile}
          onComplete={handleProcessingComplete}
        />
      )}

      {/* 4. Main Dashboard Workspace */}
      {currentView === 'dashboard' && (
        <div className="dashboard-layout">
          {/* Sidebar */}
          <DashboardSidebar 
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            onBrandClick={() => setCurrentView('hub')}
          />

          {/* Main Content Area */}
          <div className="dashboard-main-content">
            <DashboardHeader 
              activeProfile={activeProfile}
              onSelectProfile={(prof) => {
                setActiveProfile(prof);
              }}
              searchQuery={searchQuery}
              onSearchChange={(q) => {
                setSearchQuery(q);
                if (q && activeTab !== 'all-content') {
                  setActiveTab('all-content');
                }
              }}
              onNewAnalysisClick={() => setIsInputModalOpen(true)}
              onExportReportClick={() => setIsExportReportOpen(true)}
              onBackToHub={() => setCurrentView('hub')}
              theme={theme}
              onToggleTheme={toggleTheme}
            />

            <main style={{ flex: 1, minHeight: 'calc(100vh - 72px)' }}>
              {renderDashboardView()}
            </main>
          </div>
        </div>
      )}

      {/* Modals & Slide-Over Drawers - Never mounted on Landing Page (Page 1) or AI Hub (Page 2) */}
      {currentView === 'dashboard' && (
        <ProfileInputModal 
          isOpen={isInputModalOpen}
          onClose={() => setIsInputModalOpen(false)}
          onStartAnalysis={handleStartAnalysis}
        />
      )}

      <ContentDetailDrawer 
        post={selectedPostForDrawer}
        onClose={() => setSelectedPostForDrawer(null)}
      />

      <FutureModuleModal 
        moduleData={selectedFutureModule}
        onClose={() => setSelectedFutureModule(null)}
      />

      <ExportReportModal 
        isOpen={isExportReportOpen}
        analytics={analytics}
        onClose={() => setIsExportReportOpen(false)}
      />
    </div>
  );
}
