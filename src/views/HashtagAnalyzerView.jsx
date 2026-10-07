import React from 'react';
import { 
  Hash, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Target, 
  Eye, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function HashtagAnalyzerView({ analytics }) {
  const hashtagAnalysis = analytics?.hashtagAnalysis;

  if (!hashtagAnalysis) return null;

  const { 
    totalUniqueHashtags, 
    hashtagList, 
    relevantHashtags, 
    weakHashtags, 
    missingOpportunities, 
    strategicInsight 
  } = hashtagAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0891B2' }}>
            MODULE 06
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            RELEVANCE-FIRST DISCOVERY
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Hashtag Intelligence
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Relevance-first evaluation of branded, industry, career, and course hashtags. Filters vanity tags and exposes high-intent search keywords.
        </p>
      </div>

      {/* Top 3 Diagnostic Cards: Relevant, Weak, Missing */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* Relevant Hashtags */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <CheckCircle2 size={16} color="#10B981" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#10B981', margin: 0 }}>
              High-Relevance Hashtags
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {relevantHashtags.map((h, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ fontWeight: '700', color: '#0891B2' }}>{h.tag}</span>
                <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>({h.count}x)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weak / Overused Hashtags */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <AlertTriangle size={16} color="#EF4444" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#EF4444', margin: 0 }}>
              Weak / Overused Tags
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {weakHashtags.map((h, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid rgba(239, 68, 68, 0.2)'
                }}
              >
                <span style={{ fontWeight: '600', color: '#EF4444' }}>{h.tag}</span>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Low domain specificity</span>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Opportunities */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(2, 132, 199, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Sparkles size={16} color="#0284C7" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#0284C7', margin: 0 }}>
              Untapped Keyword Opportunities
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {missingOpportunities.map((m, i) => (
              <div key={i} style={{ fontSize: '12px', backgroundColor: 'var(--bg-secondary)', padding: '8px 10px', borderRadius: '6px' }}>
                <span style={{ fontWeight: '700', color: '#0284C7' }}>{m.tag}</span>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{m.intent}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Complete Hashtag Performance Ledger */}
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
          Hashtag Performance Ledger ({totalUniqueHashtags} Unique Tags Evaluated)
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12.5px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '10px 14px' }}>Hashtag</th>
                <th style={{ padding: '10px 14px' }}>Category</th>
                <th style={{ padding: '10px 14px' }}>Usage Frequency</th>
                <th style={{ padding: '10px 14px' }}>Avg Views Correlation</th>
                <th style={{ padding: '10px 14px' }}>Relevance Score</th>
                <th style={{ padding: '10px 14px' }}>Search Intent</th>
              </tr>
            </thead>
            <tbody>
              {hashtagList.map((h, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: '700', color: '#0891B2' }}>{h.tag}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                      {h.category}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--text-primary)' }}>{h.count} posts</td>
                  <td style={{ padding: '12px 14px', color: 'var(--text-primary)', fontWeight: '600' }}>{h.avgViews.toLocaleString()}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ color: h.relevanceScore >= 85 ? '#10B981' : '#F59E0B', fontWeight: '700' }}>
                      {h.relevanceScore}/100
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--text-muted)', fontSize: '11.5px' }}>{h.searchIntent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Semantic Search & Hashtag Strategy"
      />
    </div>
  );
}
