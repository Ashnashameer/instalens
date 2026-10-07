import React from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Award, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Eye,
  Sliders
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function BrandAnalyzerView({ analytics }) {
  const brandAnalysis = analytics?.brandAnalysis;

  if (!brandAnalysis) return null;

  const { dimensions, currentBrandPosition, potentialBrandPosition, positioningGap, strategicInsight } = brandAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1' }}>
            MODULE 09
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            BRAND STRATEGY & POSITIONING AUDIT
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Brand Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Strategic evaluation of brand personality, USP, perceived authority, and the critical Positioning Gap between current status and potential market leadership.
        </p>
      </div>

      {/* The Positioning Gap Matrix (Current vs Potential vs Gap) */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* Current Brand Position */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #64748B'
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.08em', marginBottom: '6px' }}>
            Current Brand Position
          </div>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
            {currentBrandPosition}
          </h2>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Recognized widely for high-utility tactical content, practical salary guides, and approachable mentorship. Perceived primarily as a helpful content creator rather than an elite institutional academy.
          </p>
        </div>

        {/* Potential Brand Position */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #10B981'
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#10B981', letterSpacing: '0.08em', marginBottom: '6px' }}>
            Potential Brand Position (Market Moat)
          </div>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
            {potentialBrandPosition}
          </h2>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            The definitive Tier-1 industry career academy producing top 5% technical talent. Commands premium tuition pricing with enterprise hiring partner pipelines.
          </p>
        </div>

        {/* Positioning Gap */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #6366F1'
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#6366F1', letterSpacing: '0.08em', marginBottom: '6px' }}>
            Strategic Positioning Gap
          </div>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
            {positioningGap}
          </h2>
          <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Bridging this gap requires elevating social proof from informal student DMs to verified audited compensation reports and formal corporate endorsements.
          </p>
        </div>
      </div>

      {/* 12 Core Strategic Brand Dimensions Grid */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 18px 0' }}>
          Brand Identity & Equity Dimensions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Unique Selling Proposition (USP)</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{dimensions.usp}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Brand Promise</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{dimensions.brandPromise}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Brand Personality</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{dimensions.brandPersonality}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Tone of Voice</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{dimensions.toneOfVoice}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Audience Perception</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{dimensions.audiencePerception}</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Market Differentiation</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{dimensions.differentiation}</div>
          </div>
        </div>

        {/* Quantified Scores Bar */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#10B981' }}>{dimensions.trustScore}/100</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Trust Score</div>
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#6366F1' }}>{dimensions.expertiseScore}/100</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Expertise Index</div>
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#0284C7' }}>{dimensions.careerOrientation}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Career Orientation</div>
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#F59E0B' }}>{dimensions.innovationScore}/100</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Innovation Index</div>
          </div>
        </div>
      </div>

      {/* Strategic Insight */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Brand Authority & Repositioning Roadmap"
      />
    </div>
  );
}
