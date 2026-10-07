import React from 'react';
import { 
  CheckSquare, 
  PlayCircle, 
  StopCircle, 
  RefreshCw, 
  Database, 
  ArrowRight, 
  FileText,
  Sparkles
} from 'lucide-react';

export default function RecommendationsView({ analytics, onExportReportClick }) {
  const { recommendations, profile } = analytics;

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 className="section-title">
            <CheckSquare size={24} color="var(--success)" />
            What Should They Do Next? — Strategic Playbook
          </h1>
          <p className="section-description">
            Actionable playbooks separated into START, STOP/REDUCE, and CONTINUE. Every recommendation is anchored directly to quantitative evidence from the analyzed dataset.
          </p>
        </div>

        <button 
          onClick={onExportReportClick}
          className="btn-outline"
          style={{ gap: '6px', fontSize: '0.85rem' }}
        >
          <FileText size={15} /> Export Brief to PDF/Print
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* 1. START SECTION */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--success-bg)',
              border: '1px solid var(--success-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--success)'
            }}>
              <PlayCircle size={18} />
            </div>
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
              START (High-Leverage Initiatives)
            </h2>
            <span className="badge badge-high" style={{ fontSize: '0.7rem' }}>Create More</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {recommendations.start.map((rec, i) => (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  padding: '20px', 
                  borderTop: '3px solid var(--success)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="badge badge-high" style={{ fontSize: '0.68rem' }}>{rec.tag}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Action #{i + 1}</span>
                </div>

                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.4, margin: 0 }}>
                  {rec.action}
                </h4>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginTop: 'auto'
                }}>
                  <strong style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <Database size={13} /> Dataset Evidence:
                  </strong>
                  {rec.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. STOP / REDUCE SECTION */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--danger-bg)',
              border: '1px solid var(--danger-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--danger)'
            }}>
              <StopCircle size={18} />
            </div>
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
              STOP / REDUCE (Underperforming & Repetitive Patterns)
            </h2>
            <span className="badge badge-low" style={{ fontSize: '0.7rem' }}>Eliminate / Deprecate</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {recommendations.stopOrReduce.map((rec, i) => (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  padding: '20px', 
                  borderTop: '3px solid var(--danger)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="badge badge-low" style={{ fontSize: '0.68rem' }}>{rec.tag}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Action #{i + 1}</span>
                </div>

                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.4, margin: 0 }}>
                  {rec.action}
                </h4>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginTop: 'auto'
                }}>
                  <strong style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <Database size={13} /> Dataset Evidence:
                  </strong>
                  {rec.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CONTINUE SECTION */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--info-bg)',
              border: '1px solid var(--info-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--info)'
            }}>
              <RefreshCw size={18} />
            </div>
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
              CONTINUE (Core Growth Engines)
            </h2>
            <span className="badge badge-above" style={{ fontSize: '0.7rem' }}>Maintain Momentum</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {recommendations.continue.map((rec, i) => (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  padding: '20px', 
                  borderTop: '3px solid var(--info)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="badge badge-above" style={{ fontSize: '0.68rem' }}>{rec.tag}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Action #{i + 1}</span>
                </div>

                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.4, margin: 0 }}>
                  {rec.action}
                </h4>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginTop: 'auto'
                }}>
                  <strong style={{ color: 'var(--info)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <Database size={13} /> Dataset Evidence:
                  </strong>
                  {rec.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
