import React from 'react';
import { 
  Sparkles, 
  Search, 
  Download, 
  Moon, 
  Sun, 
  PlusCircle, 
  ChevronDown, 
  Calendar,
  Layers,
  FileText
} from 'lucide-react';
import { DEMO_PROFILES } from '../data/demoProfiles';

export default function DashboardHeader({
  activeProfile,
  onSelectProfile,
  searchQuery,
  onSearchChange,
  onNewAnalysisClick,
  onExportReportClick,
  onBackToHub,
  theme,
  onToggleTheme
}) {
  return (
    <header style={{
      borderBottom: '1px solid var(--border-subtle)',
      padding: '14px 28px',
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }}>
      {/* Left: Active Profile Badge & Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {onBackToHub && (
          <button
            onClick={onBackToHub}
            style={{
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(2, 132, 199, 0.08)',
              color: '#0284C7',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              fontSize: '12px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginRight: '6px'
            }}
            title="Return to Analysis Hub"
          >
            ← Hub
          </button>
        )}
        <div style={{ position: 'relative' }}>
          <img 
            src={activeProfile.avatarUrl} 
            alt={activeProfile.username}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--accent-ig-mid)'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'var(--success)',
            border: '2px solid var(--bg-primary)'
          }} />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              @{activeProfile.username}
            </span>
            {activeProfile.isDemo ? (
              <span className="badge badge-demo">Demo Data</span>
            ) : (
              <span className="badge badge-real">Imported Data</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>{activeProfile.postsCount || activeProfile.posts?.length} Posts Analyzed</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={12} /> {activeProfile.dateRange}
            </span>
          </div>
        </div>

        {/* Profile Switcher Quick Dropdown */}
        <div style={{ marginLeft: '6px' }}>
          <select
            value={activeProfile.id}
            onChange={(e) => {
              const selected = DEMO_PROFILES[e.target.value];
              if (selected) onSelectProfile(selected);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-secondary)',
              fontSize: '0.78rem',
              padding: '5px 8px',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="growthacademy.ai">Switch: @growthacademy.ai (EdTech)</option>
            <option value="lumina_skincare">Switch: @lumina_skincare (Beauty)</option>
            <option value="alexrivera.tech">Switch: @alexrivera.tech (Tech)</option>
          </select>
        </div>
      </div>

      {/* Center: Search across analyzed content */}
      <div style={{ flex: 1, maxWidth: '420px', position: 'relative' }}>
        <input 
          type="text"
          id="dashboard-search-input"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search topics, hooks, pillars, captions..."
          style={{
            width: '100%',
            padding: '8px 12px 8px 36px',
            background: 'rgba(0, 0, 0, 0.25)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--border-active)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
        />
        <Search 
          size={16} 
          style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
        />
      </div>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Export Executive Brief Button */}
        <button 
          id="btn-export-report"
          onClick={onExportReportClick}
          className="btn-outline"
          title="Export Strategic Executive Brief"
        >
          <FileText size={14} />
          <span>Export Report</span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={onToggleTheme}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            background: 'rgba(255, 255, 255, 0.04)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* New Profile Analysis */}
        <button 
          id="btn-new-analysis"
          onClick={onNewAnalysisClick}
          className="btn-primary"
          style={{ padding: '8px 14px', fontSize: '0.85rem' }}
        >
          <PlusCircle size={15} />
          <span>New Analysis</span>
        </button>
      </div>
    </header>
  );
}
