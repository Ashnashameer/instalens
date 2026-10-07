import React from 'react';
import { 
  Compass, 
  AlertTriangle, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  PieChart 
} from 'lucide-react';

export default function ContentGapsView({ analytics, onNavigateTab }) {
  const { contentGaps, contentDistribution, formatBreakdown } = analytics;

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <Compass size={24} color="var(--danger)" />
          Content Gaps & Opportunity Detection
        </h1>
        <p className="section-description">
          Cross-examines actual content distribution against audience engagement velocity to identify strategic blindspots, underrepresented pillars, and untapped opportunities.
        </p>
      </div>

      {/* Gaps List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
        {contentGaps.map((gap, idx) => (
          <div 
            key={idx}
            className="glass-panel"
            style={{
              padding: '24px 28px',
              borderLeft: '4px solid var(--danger)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge badge-low">{gap.severity}</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>
                  {gap.title}
                </h3>
              </div>
            </div>

            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '18px'
            }}>
              {gap.gapDescription}
            </p>

            {/* Opportunities Box */}
            <div style={{
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontWeight: 700, fontSize: '0.84rem', marginBottom: '10px' }}>
                <Sparkles size={16} />
                <span>High-Leverage Strategic Opportunities:</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {gap.opportunity.map((opp, oIdx) => (
                  <div key={oIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={15} color="var(--success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{opp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Callout Banner */}
      <div className="glass-panel" style={{
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        background: 'linear-gradient(135deg, rgba(22, 32, 53, 0.8) 0%, rgba(15, 22, 38, 0.9) 100%)'
      }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Ready to translate gaps into execution?</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Explore the actionable START, STOP, and CONTINUE playbooks tailored to these findings.
          </p>
        </div>
        <button 
          onClick={() => onNavigateTab('recommendations')}
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.9rem' }}
        >
          View Strategic Recommendations <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
