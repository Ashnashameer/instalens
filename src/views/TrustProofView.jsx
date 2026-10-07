import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Code,
  Building2,
  FileCheck
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function TrustProofView({ analytics }) {
  const trustAnalysis = analytics?.trustAnalysis;

  if (!trustAnalysis) return null;

  const { trustScore, verifiedEvidence, missingProof, strategicInsight } = trustAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0284C7' }}>
            MODULE 14
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            CREDIBILITY & PROOF AUDIT
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Trust & Social Proof Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Inventory of documented student testimonials, alumni placements, capstone repositories, and verified institutional proof versus crucial missing evidence.
        </p>
      </div>

      {/* Trust Score Banner */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <div>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            INSTITUTIONAL TRUST SCORE
          </span>
          <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
            {trustScore} / 100 • Strong Foundation
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Backed by {verifiedEvidence.reduce((a, b) => a + b.count, 0)} observable proof assets across the feed.
          </div>
        </div>

        <div 
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'rgba(2, 132, 199, 0.1)',
            border: '3px solid #0284C7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: '900',
            color: '#0284C7'
          }}
        >
          {trustScore}
        </div>
      </div>

      {/* Two Column Layout: Verified Evidence vs Missing Proof */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        {/* Documented Evidence Inventory */}
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
              Verified Proof Inventory
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {verifiedEvidence.map((ev, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {ev.type}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
                    {ev.description}
                  </div>
                </div>

                <span 
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '800',
                    color: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    flexShrink: 0
                  }}
                >
                  {ev.count} Posts
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Proof Identification */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <AlertTriangle size={18} color="#EF4444" />
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Crucial Missing Proof Points
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {missingProof.map((m, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid #EF4444'
                }}
              >
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  {m.proof}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                  <strong style={{ color: '#EF4444' }}>Conversion Risk:</strong> {m.risk}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Social Proof & Credibility Strategy"
      />
    </div>
  );
}
