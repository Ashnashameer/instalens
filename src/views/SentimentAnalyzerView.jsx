import React from 'react';
import { 
  Smile, 
  Meh, 
  Frown, 
  HelpCircle, 
  Heart, 
  AlertTriangle, 
  Sparkles, 
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function SentimentAnalyzerView({ analytics }) {
  const sentimentAnalysis = analytics?.sentimentAnalysis;

  if (!sentimentAnalysis) return null;

  const { 
    sentimentBreakdown, 
    themes, 
    whatPeopleLike, 
    whatPeopleDislike, 
    whatPeopleWant, 
    whatPeopleAreConfusedAbout, 
    strategicInsight 
  } = sentimentAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#10B981' }}>
            MODULE 13
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            AUDIENCE FEEDBACK & SENTIMENT RADAR
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Sentiment Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Comment stream sentiment classification, thematic objection analysis, and structured diagnosis of what followers like, dislike, want, and question.
        </p>
      </div>

      {/* Sentiment Breakdown Ratio Bar */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>
            Audience Sentiment Distribution
          </span>
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: '700' }}>
            {sentimentBreakdown.positive}% Positive Affinity
          </span>
        </div>

        {/* Visual Progress Bar */}
        <div style={{ display: 'flex', height: '14px', borderRadius: '7px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ width: `${sentimentBreakdown.positive}%`, backgroundColor: '#10B981' }} title={`Positive: ${sentimentBreakdown.positive}%`} />
          <div style={{ width: `${sentimentBreakdown.neutral}%`, backgroundColor: '#94A3B8' }} title={`Neutral: ${sentimentBreakdown.neutral}%`} />
          <div style={{ width: `${sentimentBreakdown.negative}%`, backgroundColor: '#EF4444' }} title={`Negative: ${sentimentBreakdown.negative}%`} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#10B981', fontWeight: '700', fontSize: '14px' }}>
              <Smile size={16} />
              <span>{sentimentBreakdown.positive}% Positive</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Praise, curriculum interest, gratitude</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#94A3B8', fontWeight: '700', fontSize: '14px' }}>
              <Meh size={16} />
              <span>{sentimentBreakdown.neutral}% Neutral</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Price inquiries, duration, syllabus questions</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#EF4444', fontWeight: '700', fontSize: '14px' }}>
              <Frown size={16} />
              <span>{sentimentBreakdown.negative}% Skeptical</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Placement doubts, fee objections</div>
          </div>
        </div>
      </div>

      {/* 4 Pillars: What People Like, Dislike, Want, Confused About */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* What People Like */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Heart size={16} color="#10B981" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#10B981', margin: 0 }}>
              What People Like
            </h3>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {whatPeopleLike.map((item, i) => (
              <li key={i} style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What People Dislike */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <AlertTriangle size={16} color="#EF4444" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#EF4444', margin: 0 }}>
              What People Dislike
            </h3>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {whatPeopleDislike.map((item, i) => (
              <li key={i} style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What People Want */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(2, 132, 199, 0.3)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Sparkles size={16} color="#0284C7" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0284C7', margin: 0 }}>
              What People Want
            </h3>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {whatPeopleWant.map((item, i) => (
              <li key={i} style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What People Are Confused About */}
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <HelpCircle size={16} color="#F59E0B" />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#F59E0B', margin: 0 }}>
              What People Are Confused About
            </h3>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {whatPeopleAreConfusedAbout.map((item, i) => (
              <li key={i} style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Thematic Breakdown Table */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
          Comment Themes & Verbatim Voice-of-Customer
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {themes.map((t, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)' }}>{t.theme}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>({t.percentage}% of comments)</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '4px' }}>
                  Sample: {t.sample}
                </div>
              </div>

              <span 
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  backgroundColor: t.sentiment === 'Positive' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: t.sentiment === 'Positive' ? '#10B981' : '#F59E0B'
                }}
              >
                {t.sentiment}
              </span>
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
        title="Audience Trust & Objection Mitigation Strategy"
      />
    </div>
  );
}
