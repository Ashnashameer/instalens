import React from 'react';
import { 
  Target, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function CampaignAnalyzerView({ analytics }) {
  const campaignAnalysis = analytics?.campaignAnalysis;

  if (!campaignAnalysis) return null;

  const { campaigns, strategicInsight } = campaignAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#DB2777' }}>
            MODULE 21
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            STRATEGIC CAMPAIGN ARCHITECTURE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Campaign Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          High-leverage thematic campaigns built on acute audience anxieties, competitor content voids, student outcomes, and seasonal enrollment cycles.
        </p>
      </div>

      {/* Campaigns Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        {campaigns.map((camp, i) => (
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
              gap: '18px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#DB2777', backgroundColor: 'rgba(219, 39, 119, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  {camp.objective}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} />
                  {camp.duration}
                </span>
              </div>

              <h2 style={{ fontSize: '19px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                {camp.name}
              </h2>

              {/* Big Idea Banner */}
              <div 
                style={{
                  backgroundColor: 'rgba(2, 132, 199, 0.05)',
                  borderLeft: '3px solid #0284C7',
                  padding: '12px 14px',
                  borderRadius: '4px',
                  fontSize: '12.5px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45,
                  marginBottom: '14px'
                }}
              >
                <strong style={{ color: '#0284C7' }}>The Big Idea:</strong> {camp.bigIdea}
              </div>

              {/* Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Target Audience:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{camp.targetAudience}</span>
                </div>
                <div>
                  <strong style={{ color: '#EF4444' }}>Audience Problem:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{camp.problem}</span>
                </div>
                <div>
                  <strong style={{ color: '#10B981' }}>Core Message:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{camp.coreMessage}</span>
                </div>
                <div>
                  <strong style={{ color: '#8B5CF6' }}>Content Formats:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{camp.contentFormats}</span>
                </div>
                <div>
                  <strong style={{ color: '#F59E0B' }}>Call to Action (CTA):</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{camp.cta}</span>
                </div>
              </div>
            </div>

            {/* Target KPIs */}
            <div 
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '11.5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <span style={{ color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', fontSize: '10px' }}>Target KPIs:</span>{' '}
                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{camp.kpis}</span>
              </div>
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
        title="Campaign Staging & Impact Playbook"
      />
    </div>
  );
}
