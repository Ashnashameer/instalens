import React from 'react';
import { 
  Sparkles, 
  Target, 
  HelpCircle, 
  Layers, 
  MessageSquare, 
  ArrowRight,
  Bookmark,
  CheckCircle2
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function ContentOpportunityView({ analytics }) {
  const contentOpportunityEngine = analytics?.contentOpportunityEngine;

  if (!contentOpportunityEngine) return null;

  const { opportunities, strategicInsight } = contentOpportunityEngine;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0284C7' }}>
            MODULE 19
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            ACTIONABLE SCRIPT ENGINE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Content Opportunity Engine
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          High-probability content ideas generated directly from analyzed audience problems, competitor gaps, and top-performing formats.
        </p>
      </div>

      {/* Ideas Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        {opportunities.map((opp, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#0284C7', backgroundColor: 'rgba(2, 132, 199, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  {opp.pillar}
                </span>
                <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
                  Format: {opp.format}
                </span>
              </div>

              <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
                {opp.topic}
              </h2>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)', marginBottom: '12px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Scripted Opening Hook
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: '600' }}>
                  {opp.hook}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Target Audience:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{opp.targetAudience}</span>
                </div>
                <div>
                  <strong style={{ color: '#EF4444' }}>Audience Problem:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{opp.audienceProblem}</span>
                </div>
                <div>
                  <strong style={{ color: '#10B981' }}>Call to Action (CTA):</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{opp.cta}</span>
                </div>
                <div>
                  <strong style={{ color: '#8B5CF6' }}>Strategic Objective:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{opp.strategicObjective}</span>
                </div>
              </div>
            </div>

            <div 
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
                borderLeft: '3px solid #10B981',
                padding: '10px 12px',
                borderRadius: '4px',
                fontSize: '11.5px',
                color: 'var(--text-primary)',
                lineHeight: 1.45
              }}
            >
              <strong style={{ color: '#10B981' }}>Why Recommended:</strong> {opp.reasonForRecommendation}
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Content Ideation Pipeline"
      />
    </div>
  );
}
