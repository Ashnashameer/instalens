import React from 'react';
import { 
  Users, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  ShieldAlert, 
  Award, 
  Briefcase,
  DollarSign,
  Clock,
  GraduationCap
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';
import DataUnavailableBanner from '../components/DataUnavailableBanner';

export default function AudienceAnalyzerView({ analytics }) {
  const audienceAnalysis = analytics?.audienceAnalysis;

  if (!audienceAnalysis) return null;

  const { educationalConcerns, painPoints, motivations, objections, unavailableDemographics, strategicInsight } = audienceAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5' }}>
            MODULE 08
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            INTENT & SKEPTICISM INTELLIGENCE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Audience Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Intent mining from comments and engagement velocity. Categorizes audience job anxieties, salary objections, and educational concerns strictly into Observed, Inferred, and Insufficient Data.
        </p>
      </div>

      {/* 3-State Classification Legend Banner */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 18px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px',
          fontSize: '12px',
          flexWrap: 'wrap'
        }}
      >
        <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Data Grounding Filter:</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10B981', fontWeight: '600' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
          Observed (Directly evidenced in comments & posts)
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#8B5CF6', fontWeight: '600' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8B5CF6' }} />
          Inferred (Deduced from behavioral engagement signals)
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#EA580C', fontWeight: '600' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EA580C' }} />
          Insufficient Data (Requires Graph API private access)
        </span>
      </div>

      {/* Educational Concerns Matrix */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
          <GraduationCap size={18} color="#4F46E5" />
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
            Educational Institute Audience Concerns Audit
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {educationalConcerns.map((c, i) => {
            const isObserved = c.status === 'Observed';
            return (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  borderLeft: isObserved ? '3px solid #10B981' : '3px solid #8B5CF6',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '8px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)' }}>
                      {c.concern}
                    </span>
                    <span 
                      style={{
                        fontSize: '10.5px',
                        fontWeight: '700',
                        color: isObserved ? '#10B981' : '#8B5CF6',
                        backgroundColor: isObserved ? 'rgba(16, 185, 129, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    {c.evidence}
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Priority Level: <strong style={{ color: c.priority === 'Critical' ? '#EF4444' : '#F59E0B' }}>{c.priority}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pain Points, Motivations & Objections Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* Pain Points */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <AlertCircle size={16} color="#EF4444" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Primary Audience Pain Points
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {painPoints.map((p, i) => (
              <div key={i} style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '12.5px', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <span>{p.text}</span>
                <span style={{ fontSize: '10px', color: p.type === 'Observed' ? '#10B981' : '#8B5CF6', fontWeight: '700', flexShrink: 0 }}>[{p.type}]</span>
              </div>
            ))}
          </div>
        </div>

        {/* Motivations */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <TrendingUp size={16} color="#10B981" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Underlying Motivations & Desired Outcomes
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {motivations.map((m, i) => (
              <div key={i} style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '12.5px', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <span>{m.text}</span>
                <span style={{ fontSize: '10px', color: m.type === 'Observed' ? '#10B981' : '#8B5CF6', fontWeight: '700', flexShrink: 0 }}>[{m.type}]</span>
              </div>
            ))}
          </div>
        </div>

        {/* Objections */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <ShieldAlert size={16} color="#F59E0B" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Conversion Objections (High Friction)
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {objections.map((o, i) => (
              <div key={i} style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '12.5px', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <span>{o.text}</span>
                <span style={{ fontSize: '10px', color: o.type === 'Observed' ? '#10B981' : '#8B5CF6', fontWeight: '700', flexShrink: 0 }}>[{o.type}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insufficient Data Section (Adhering to strict rule) */}
      <DataUnavailableBanner 
        metricName="Private Audience Demographics (Age/Gender/City split)" 
        message="Follower demographics and geographic distribution require private Instagram Graph API OAuth authentication. Unverified demographic claims are never simulated."
      />

      {/* Strategic Insight */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Audience Psychology & Conversion Strategy"
      />
    </div>
  );
}
