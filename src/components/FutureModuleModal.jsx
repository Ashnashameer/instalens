import React from 'react';
import { 
  X, 
  Sparkles, 
  GitCompare, 
  Star, 
  Video, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';

export default function FutureModuleModal({ moduleData, onClose }) {
  if (!moduleData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px', maxWidth: '600px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-indigo)'
            }}>
              <moduleData.icon size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{moduleData.label}</h2>
                <span className="badge badge-soon">Roadmap V2.0</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
                Planned Architecture & Intelligence Specification
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Overview Box */}
        <div style={{
          padding: '16px',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '20px',
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
          {moduleData.description}
        </div>

        {/* Technical & Algorithmic Design Specifications */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '12px' }}>
            System Architecture Highlights
          </h4>

          {moduleData.id === 'compare' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Side-by-Side Dual Profile Ingestion:</strong> Compare content strategies across two accounts simultaneously.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Pillar Overlap Matrix:</strong> Uncover whitespace topics where competitor A dominates and where brand B can capture market share.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Cross-Brand Learning Engine:</strong> Actionable synthesis on what each brand does better and can adapt.</span>
              </div>
            </div>
          )}

          {moduleData.id === 'post-rating' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-indigo)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>8-Factor Scoring Index:</strong> Evaluates Hook Strength, Educational Utility, Graphic Legibility, Emotional Trigger, CTA Friction, Brand Synergy, and Save Probability.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-indigo)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Pre-Flight Publishing Sandbox:</strong> Upload draft images or captions before publishing to forecast virality potential.</span>
              </div>
            </div>
          )}

          {moduleData.id === 'reel-rating' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-ig-start)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>3-Second Hook Retention Audit:</strong> Analyzes visual text overlay, speech cadence, and audio hook velocity.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--accent-ig-start)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Visual Pacing & B-Roll Dynamics:</strong> Detects scene transitions per minute to forecast watch-through percentage.</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status */}
        <div style={{
          padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} color="var(--accent-indigo)" />
            In active research & development
          </span>
          <button onClick={onClose} className="btn-secondary btn-sm">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
