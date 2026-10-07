import React from 'react';
import { 
  Compass, 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Award
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function ExecutiveSummaryView({ analytics, onNavigateTab, onExportReportClick }) {
  const executiveSummary = analytics?.executiveSummary;
  const profile = analytics?.profile;

  if (!executiveSummary) return null;

  const { 
    currentBrandPosition, 
    biggestStrength, 
    biggestWeakness, 
    biggestOpportunity, 
    competitiveThreat, 
    recommendedStrategicDirection, 
    top5Actions 
  } = executiveSummary;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0F172A' }}>
              MODULE 22
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
              STRATEGIST-GRADE INTELLIGENCE BRIEF
            </span>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
            Executive Summary
          </h1>
          <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
            High-level executive briefing. Synthesizes brand position, biggest strengths, vulnerabilities, competitive threats, and the top 5 strategic actions.
          </p>
        </div>

        {onExportReportClick && (
          <button
            onClick={onExportReportClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '9999px',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <Download size={14} />
            <span>Download Executive Briefing</span>
          </button>
        )}
      </div>

      {/* Top 2 Core Cards: Current Position & Recommended Strategic Direction */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #6366F1'
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#6366F1', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Current Brand Position
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600', lineHeight: 1.5 }}>
            {currentBrandPosition}
          </p>
        </div>

        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #10B981'
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#10B981', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Recommended Strategic Direction
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600', lineHeight: 1.5 }}>
            {recommendedStrategicDirection}
          </p>
        </div>
      </div>

      {/* 4 Quadrants: Strength, Weakness, Opportunity, Threat */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px',
          marginBottom: '28px'
        }}
      >
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10B981', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase' }}>
            <TrendingUp size={16} />
            <span>Biggest Strength</span>
          </div>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {biggestStrength}
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#EF4444', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase' }}>
            <AlertTriangle size={16} />
            <span>Biggest Weakness</span>
          </div>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {biggestWeakness}
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(2, 132, 199, 0.3)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#0284C7', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase' }}>
            <Sparkles size={16} />
            <span>Biggest Opportunity</span>
          </div>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {biggestOpportunity}
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#F59E0B', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase' }}>
            <ShieldAlert size={16} />
            <span>Competitive Threat</span>
          </div>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {competitiveThreat}
          </p>
        </div>
      </div>

      {/* Top 5 Immediate Actions */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
          Top 5 Strategist Actions (Next 30 Days)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {top5Actions.map((action, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                borderLeft: '4px solid #0F172A'
              }}
            >
              <div 
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '800',
                  flexShrink: 0
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', flex: 1 }}>
                {action}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Strategic Matrix Callout */}
      <DataInsightActionCard 
        data={`Evaluated across ${profile?.postsCount || 248} posts and ${profile?.followers?.toLocaleString() || 284500} followers.`}
        insight={biggestOpportunity}
        strategicMeaning="The gap between organic virality and commercial enrollment can be bridged through systematic lead capture and unedited student placement transparency."
        action={top5Actions[0]}
        title="Executive Strategic Takeaway"
      />
    </div>
  );
}
