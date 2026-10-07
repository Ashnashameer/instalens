import React from 'react';
import { 
  PenTool, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Target 
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function CaptionAnalyzerView({ analytics }) {
  const captionAnalysis = analytics?.captionAnalysis;

  if (!captionAnalysis) return null;

  const { 
    avgWordCount, 
    ctaDistribution, 
    bestCaptionPatterns, 
    weakCaptionPatterns, 
    recommendedImprovements, 
    strategicInsight 
  } = captionAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669' }}>
            MODULE 05
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            COPYWRITING & PERSUASION ENGINE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Caption Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Forensic breakdown of caption structure, opening line hooks, reading dwell time, keyword density, and call-to-action performance.
        </p>
      </div>

      {/* KPI Overview */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average Caption Length</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>{avgWordCount} Words</div>
          <div style={{ fontSize: '12px', color: '#059669', marginTop: '2px' }}>Medium depth (Optimal for Instagram)</div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Keyword DM Automation CTAs</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#0284C7', marginTop: '4px' }}>{ctaDistribution.keywordDM} Posts</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>Generates highest comment volume</div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Legacy "Link in Bio" CTAs</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#F59E0B', marginTop: '4px' }}>{ctaDistribution.linkInBio} Posts</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>High friction conversion path</div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Caption Readability Index</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#10B981', marginTop: '4px' }}>88/100</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>High skimmability with line breaks</div>
        </div>
      </div>

      {/* Best Patterns vs Weak Patterns */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        {/* Best Patterns */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <CheckCircle2 size={18} color="#10B981" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Top-Performing Caption Patterns
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {bestCaptionPatterns.map((pat, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid #10B981'
                }}
              >
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {pat.pattern}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {pat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Patterns */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <AlertCircle size={18} color="#EF4444" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Weak Caption Patterns (Phase Out)
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {weakCaptionPatterns.map((pat, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid #EF4444'
                }}
              >
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {pat.pattern}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {pat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Improvements */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Sparkles size={18} color="#059669" />
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
            Recommended Caption Optimization Protocol
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {recommendedImprovements.map((rec, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px'
              }}
            >
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(5, 150, 105, 0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', flexShrink: 0, marginTop: '2px' }}>
                {i + 1}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-primary)', lineHeight: 1.45, fontWeight: '500' }}>
                {rec}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Insight */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Caption Copywriting Strategy"
      />
    </div>
  );
}
