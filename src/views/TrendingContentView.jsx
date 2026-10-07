import React from 'react';
import { 
  Flame, 
  TrendingUp, 
  Sparkles, 
  Target, 
  ArrowUpRight, 
  CheckCircle2,
  Compass
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function TrendingContentView({ analytics, onSelectPost }) {
  const trendingAnalysis = analytics?.trendingAnalysis;

  if (!trendingAnalysis) return null;

  const { trendingThemes, strategicInsight } = trendingAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706' }}>
            MODULE 15
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            VALIDATED INDUSTRY TREND ENGINE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Trending Content
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Emerging industry themes, popular hooks, and content opportunities. Every recommendation includes strict brand relevance qualification.
        </p>
      </div>

      {/* Trending Themes Grid with Mandatory "Why it is relevant to this brand" */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {trendingThemes.map((trend, i) => (
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#D97706', backgroundColor: 'rgba(217, 119, 6, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  {trend.velocity}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {trend.format}
                </span>
              </div>

              <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
                {trend.theme}
              </h2>

              <div 
                style={{
                  backgroundColor: 'rgba(2, 132, 199, 0.05)',
                  borderLeft: '3px solid #0284C7',
                  padding: '12px 14px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45,
                  marginBottom: '12px'
                }}
              >
                <strong style={{ color: '#0284C7' }}>Why it is relevant to this brand:</strong> {trend.relevanceToBrand}
              </div>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Scripted Hook
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: '500' }}>
                  {trend.recommendedHook}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="#10B981" />
              <span>Contextually qualified (Zero generic dancing/meme trends)</span>
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
        title="Trend Adoption & Authority Capitalization"
      />
    </div>
  );
}
