import React from 'react';
import { 
  UserCheck, 
  Layers, 
  Film, 
  Image as ImageIcon, 
  PenTool, 
  Hash, 
  BarChart3, 
  Users, 
  Target, 
  Smile, 
  ShieldCheck, 
  Compass, 
  GitCompare, 
  Flame, 
  Award, 
  CheckSquare, 
  Sparkles, 
  Calendar, 
  Megaphone, 
  FileText, 
  Table2 
} from 'lucide-react';
import InstaLensLogo from './InstaLensLogo';

export const NAV_GROUPS = [
  {
    title: 'Core Intelligence',
    items: [
      { id: 'profile-analyzer', label: 'Profile Analyzer', icon: UserCheck },
      { id: 'content-analyzer', label: 'Content Analyzer', icon: Layers },
      { id: 'reel-analyzer', label: 'Reel Analyzer', icon: Film },
      { id: 'post-analyzer', label: 'Post Analyzer', icon: ImageIcon },
      { id: 'caption-analyzer', label: 'Caption Analyzer', icon: PenTool },
      { id: 'hashtag-analyzer', label: 'Hashtag Intelligence', icon: Hash },
      { id: 'engagement-analyzer', label: 'Engagement Analyzer', icon: BarChart3 }
    ]
  },
  {
    title: 'Audience & Brand',
    items: [
      { id: 'audience-analyzer', label: 'Audience Analyzer', icon: Users },
      { id: 'brand-analyzer', label: 'Brand Positioning', icon: Target },
      { id: 'sentiment-analyzer', label: 'Sentiment Radar', icon: Smile },
      { id: 'trust-analyzer', label: 'Trust & Proof Audit', icon: ShieldCheck },
      { id: 'brand-swot', label: 'Brand SWOT Matrix', icon: Compass }
    ]
  },
  {
    title: 'Competitor Intelligence',
    items: [
      { id: 'competitor-analyzer', label: 'Competitor Benchmark', icon: GitCompare }
    ]
  },
  {
    title: 'Strategy & Execution',
    items: [
      { id: 'trending-content', label: 'Trending Content', icon: Flame },
      { id: 'best-performing', label: 'Best-Performing', icon: Award },
      { id: 'strategic-recommendations', label: 'Strategic Playbook', icon: CheckSquare },
      { id: 'content-opportunities', label: 'Opportunity Engine', icon: Sparkles },
      { id: 'content-strategy-30day', label: '30-Day Strategy', icon: Calendar },
      { id: 'campaign-analyzer', label: 'Campaign Analyzer', icon: Megaphone },
      { id: 'executive-summary', label: 'Executive Summary', icon: FileText },
      { id: 'all-content', label: 'All Content Table', icon: Table2 }
    ]
  }
];

export default function DashboardSidebar({ activeTab, onSelectTab, onBrandClick }) {
  return (
    <aside className="dashboard-sidebar-container" style={{ width: '260px', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', height: '100vh', position: 'sticky', top: 0, backgroundColor: 'var(--bg-glass)', backdropFilter: 'blur(16px)' }}>
      {/* Brand Header */}
      <div 
        onClick={onBrandClick}
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        title="Return to Analysis Hub"
      >
        <InstaLensLogo 
          size={34} 
          showText={true} 
          subtitle="Content Intelligence"
          textStyle={{ color: 'var(--text-primary)' }}
        />
      </div>

      {/* Navigation Groups List */}
      <div style={{ padding: '16px 12px', flex: 1, overflowY: 'auto' }}>
        {NAV_GROUPS.map((group, gIdx) => (
          <div key={gIdx} style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 12px 6px' }}>
              {group.title}
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id || 
                  (item.id === 'profile-analyzer' && activeTab === 'overview') ||
                  (item.id === 'content-analyzer' && (activeTab === 'content-pillars' || activeTab === 'content-analysis')) ||
                  (item.id === 'reel-analyzer' && activeTab === 'format-analysis') ||
                  (item.id === 'post-analyzer' && activeTab === 'content-gaps') ||
                  (item.id === 'engagement-analyzer' && activeTab === 'performance') ||
                  (item.id === 'best-performing' && activeTab === 'why-it-worked') ||
                  (item.id === 'strategic-recommendations' && activeTab === 'recommendations') ||
                  (item.id === 'hashtag-analyzer' && activeTab === 'topics');

                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => onSelectTab(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'rgba(2, 132, 199, 0.1)' : 'transparent',
                      border: isActive ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid transparent',
                      textAlign: 'left',
                      width: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <Icon size={16} color={isActive ? '#0284C7' : 'var(--text-muted)'} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {isActive && (
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0284C7' }} />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Footer Info in Sidebar */}
      <div style={{
        padding: '14px 20px',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(0, 0, 0, 0.15)',
        fontSize: '0.72rem',
        color: 'var(--text-muted)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
          <span>Observed Instagram Data</span>
        </div>
        <div style={{ marginTop: '2px', fontSize: '0.68rem' }}>
          Zero fabricated metrics.
        </div>
      </div>
    </aside>
  );
}
