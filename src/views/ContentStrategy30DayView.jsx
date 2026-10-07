import React, { useState } from 'react';
import { 
  Calendar, 
  Layers, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Filter
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function ContentStrategy30DayView({ analytics }) {
  const contentStrategy30Day = analytics?.contentStrategy30Day;
  const [selectedFunnelFilter, setSelectedFunnelFilter] = useState('ALL');

  if (!contentStrategy30Day) return null;

  const { calendarDays, funnelBalance, strategicInsight } = contentStrategy30Day;

  const filteredDays = selectedFunnelFilter === 'ALL'
    ? calendarDays
    : calendarDays.filter((d) => d.funnelStage === selectedFunnelFilter);

  const stageColor = {
    Awareness: '#0284C7',
    Education: '#8B5CF6',
    Trust: '#10B981',
    Engagement: '#EA580C',
    Conversion: '#DB2777',
    Community: '#D97706'
  };

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6' }}>
            MODULE 20
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            30-DAY EDITORIAL BLUEPRINT
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          30-Day Content Strategy
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Systematic 30-day publishing calendar. Scientifically balances Awareness, Education, Trust, Engagement, Conversion, and Community.
        </p>
      </div>

      {/* Funnel Balance Pills Banner */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px 24px',
          marginBottom: '28px'
        }}
      >
        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
          Funnel Stage Distribution (Zero Hard-Sell Saturation)
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
          {Object.entries(funnelBalance).map(([stage, pct]) => {
            const color = stageColor[stage] || '#0284C7';
            return (
              <div 
                key={stage}
                onClick={() => setSelectedFunnelFilter(selectedFunnelFilter === stage ? 'ALL' : stage)}
                style={{
                  backgroundColor: selectedFunnelFilter === stage ? `${color}20` : 'var(--bg-secondary)',
                  border: selectedFunnelFilter === stage ? `2px solid ${color}` : '1px solid var(--border-subtle)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: '700', color: color }}>{stage}</div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '2px' }}>{pct}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 30-Day Calendar Days Grid */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
            Day-by-Day Publishing Schedule ({filteredDays.length} Days Displayed)
          </h2>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setSelectedFunnelFilter('ALL')}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                border: selectedFunnelFilter === 'ALL' ? '1px solid #8B5CF6' : '1px solid var(--border-subtle)',
                backgroundColor: selectedFunnelFilter === 'ALL' ? 'rgba(139, 92, 246, 0.1)' : 'var(--bg-secondary)',
                color: selectedFunnelFilter === 'ALL' ? '#8B5CF6' : 'var(--text-secondary)',
                fontSize: '11.5px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              All Days (30)
            </button>
            {Object.keys(funnelBalance).map((stage) => (
              <button
                key={stage}
                onClick={() => setSelectedFunnelFilter(stage)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  border: selectedFunnelFilter === stage ? `1px solid ${stageColor[stage]}` : '1px solid var(--border-subtle)',
                  backgroundColor: selectedFunnelFilter === stage ? `${stageColor[stage]}15` : 'var(--bg-secondary)',
                  color: selectedFunnelFilter === stage ? stageColor[stage] : 'var(--text-secondary)',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>

        {/* Days List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {filteredDays.map((item, i) => {
            const color = stageColor[item.funnelStage] || '#0284C7';
            return (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  borderLeft: `4px solid ${color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '10px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-primary)' }}>
                      {item.day}
                    </span>
                    <span 
                      style={{
                        fontSize: '10.5px',
                        fontWeight: '700',
                        color: color,
                        backgroundColor: `${color}15`,
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {item.funnelStage} • {item.format}
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {item.topic}
                  </div>

                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Pillar: <strong style={{ color: 'var(--text-secondary)' }}>{item.pillar}</strong>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    "{item.hook}"
                  </div>

                  <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>
                    <strong>CTA:</strong> {item.cta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="30-Day Editorial Orchestration"
      />
    </div>
  );
}
