import React from 'react';
import { Database, Lightbulb, Compass, Zap } from 'lucide-react';

/**
 * DataInsightActionCard
 * Implements the core InstaLens product philosophy:
 * DATA → INSIGHT → STRATEGIC MEANING → ACTION
 * "Don't just tell me what happened on Instagram. Tell me what it means for my brand and what I should do next."
 */
export default function DataInsightActionCard({
  data,
  insight,
  strategicMeaning,
  action,
  title = 'Data → Insight → Strategic Recommendation'
}) {
  if (!data && !insight && !strategicMeaning && !action) return null;

  return (
    <div 
      className="data-insight-action-container"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        margin: '24px 0',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-ig-mid)' }}>
            INSTALENS STRATEGY MATRIX
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>
            {title}
          </span>
        </div>
        <span 
          style={{
            fontSize: '11px',
            fontWeight: '600',
            backgroundColor: 'rgba(2, 132, 199, 0.08)',
            color: '#0284C7',
            padding: '3px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(2, 132, 199, 0.2)'
          }}
        >
          4-Stage Synthesis
        </span>
      </div>

      {/* 4-Step Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}
      >
        {/* Step 1: DATA */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            borderLeft: '3px solid #0284C7',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Database size={14} color="#0284C7" />
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0284C7' }}>
              1. DATA
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>What happened</span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(--text-primary)', fontWeight: '500' }}>
            {data || 'Data unavailable'}
          </p>
        </div>

        {/* Step 2: INSIGHT */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            borderLeft: '3px solid #8B5CF6',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Lightbulb size={14} color="#8B5CF6" />
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B5CF6' }}>
              2. INSIGHT
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>What it suggests</span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(--text-primary)', fontWeight: '500' }}>
            {insight || 'Analysis pending'}
          </p>
        </div>

        {/* Step 3: STRATEGIC MEANING */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            borderLeft: '3px solid #D97706',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={14} color="#D97706" />
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D97706' }}>
              3. STRATEGIC MEANING
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Why it matters</span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(--text-primary)', fontWeight: '500' }}>
            {strategicMeaning || 'Strategic synthesis pending'}
          </p>
        </div>

        {/* Step 4: ACTION */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            borderLeft: '3px solid #059669',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Zap size={14} color="#059669" />
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#059669' }}>
              4. ACTION
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>What to do next</span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(--text-primary)', fontWeight: '600' }}>
            {action || 'Recommended action pending'}
          </p>
        </div>
      </div>
    </div>
  );
}
