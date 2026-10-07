import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  TrendingUp, 
  Compass 
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function BrandSwotView({ analytics }) {
  const brandSwot = analytics?.brandSwot;

  if (!brandSwot) return null;

  const { strengths, weaknesses, opportunities, threats, strategicInsight } = brandSwot;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1' }}>
            MODULE 17
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            DATA-GROUNDED STRATEGIC MATRIX
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Brand SWOT Matrix
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Comprehensive synthesis of internal institutional Strengths and Weaknesses paired with external market Opportunities and algorithmic Threats.
        </p>
      </div>

      {/* 4 Quadrants Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        {/* Strengths */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #10B981'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <CheckCircle2 size={18} color="#10B981" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#10B981', margin: 0 }}>
              Strengths (Internal Advantages)
            </h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {strengths.map((s, i) => (
              <li key={i} style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: '500' }}>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #EF4444'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <AlertTriangle size={18} color="#EF4444" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#EF4444', margin: 0 }}>
              Weaknesses (Internal Vulnerabilities)
            </h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {weaknesses.map((w, i) => (
              <li key={i} style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: '500' }}>
                {w}
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunities */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(2, 132, 199, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #0284C7'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Sparkles size={18} color="#0284C7" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#0284C7', margin: 0 }}>
              Opportunities (Market & Content Gaps)
            </h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {opportunities.map((o, i) => (
              <li key={i} style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: '500' }}>
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Threats */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            borderTop: '4px solid #F59E0B'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <ShieldAlert size={18} color="#F59E0B" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#F59E0B', margin: 0 }}>
              Threats (External & Algorithmic Risks)
            </h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {threats.map((t, i) => (
              <li key={i} style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: '500' }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="SWOT Operational Synthesis"
      />
    </div>
  );
}
