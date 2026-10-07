import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Layers, 
  Bookmark, 
  Share2, 
  Eye, 
  Heart, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function PostAnalyzerView({ analytics, onSelectPost }) {
  const postAnalysis = analytics?.postAnalysis;
  const [selectedFormat, setSelectedFormat] = useState('ALL');

  if (!postAnalysis) return null;

  const { 
    totalStaticAndCarousels, 
    carouselsCount, 
    imagesCount, 
    carouselMetrics, 
    imageMetrics, 
    detailedEvaluations, 
    strategicInsight 
  } = postAnalysis;

  const filteredPosts = selectedFormat === 'ALL'
    ? detailedEvaluations
    : selectedFormat === 'Carousel'
      ? detailedEvaluations.filter((p) => p.format === 'Carousel')
      : detailedEvaluations.filter((p) => p.format === 'Image');

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#DB2777' }}>
            MODULE 04
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            STATIC & CAROUSEL DEEP DIVE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Post Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Detailed individual evaluation across topic, headline, design, readability, brand consistency, saveability, and causal performance explanations.
        </p>
      </div>

      {/* Format Comparison Cards: Carousels vs Static Single Images */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* Carousels Metric Card */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(219, 39, 119, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} color="#DB2777" />
              <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
                Multi-Slide Carousels ({carouselsCount})
              </span>
            </div>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
              High-Save Format
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center', margin: '14px 0' }}>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>{carouselMetrics.avgViews.toLocaleString()}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Avg Views</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#DB2777' }}>{carouselMetrics.avgSaves.toLocaleString()}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Avg Saves</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#10B981' }}>{carouselMetrics.avgEngagement}%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Avg Eng</div>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            Carousels achieve the highest bookmark rate on the account. Educational swipe decks trigger repeat reference visits.
          </p>
        </div>

        {/* Static Images Metric Card */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ImageIcon size={18} color="#64748B" />
              <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
                Single Static Posts ({imagesCount})
              </span>
            </div>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
              Low Retention
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center', margin: '14px 0' }}>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>{imageMetrics.avgViews.toLocaleString()}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Avg Views</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-muted)' }}>{imageMetrics.avgSaves.toLocaleString()}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Avg Saves</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#F59E0B' }}>{imageMetrics.avgEngagement}%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Avg Eng</div>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            Single static posts contribute low algorithmic dwell time. Recommended for phase-out or conversion into multi-slide swipe decks.
          </p>
        </div>
      </div>

      {/* Individual Posts Evaluation Ledger */}
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
          <div>
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              Individual Post Quality & Causal Explanations
            </h2>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Detailed audit across 8 strategic dimensions and causal breakdown of why each post performed well or poorly.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {['ALL', 'Carousel', 'Image'].map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: selectedFormat === fmt ? '1px solid #DB2777' : '1px solid var(--border-subtle)',
                  backgroundColor: selectedFormat === fmt ? 'rgba(219, 39, 119, 0.1)' : 'var(--bg-secondary)',
                  color: selectedFormat === fmt ? '#DB2777' : 'var(--text-secondary)',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {fmt === 'ALL' ? 'All Posts' : `${fmt}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Post Evaluation Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 20px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {/* Top Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span 
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      color: post.format === 'Carousel' ? '#DB2777' : '#64748B',
                      backgroundColor: post.format === 'Carousel' ? 'rgba(219, 39, 119, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {post.format}
                  </span>
                  <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {post.headline}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                  <span><strong style={{ color: 'var(--text-primary)' }}>{post.views.toLocaleString()}</strong> views</span>
                  <span><strong style={{ color: '#DB2777' }}>{post.saves.toLocaleString()}</strong> saves</span>
                  <span style={{ color: '#10B981', fontWeight: '700' }}>{post.engagementRate}% Eng</span>
                </div>
              </div>

              {/* Dimension Scores Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', fontSize: '11px', backgroundColor: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Hook Clarity:</span> <strong style={{ color: 'var(--text-primary)' }}>{post.hookScore}/100</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Design Quality:</span> <strong style={{ color: 'var(--text-primary)' }}>{post.designScore}/100</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Readability:</span> <strong style={{ color: 'var(--text-primary)' }}>{post.readabilityScore}/100</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Saveability:</span> <strong style={{ color: '#DB2777' }}>{post.saveability}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Shareability:</span> <strong style={{ color: '#0284C7' }}>{post.shareability}</strong></div>
              </div>

              {/* Causal Performance Explanation */}
              <div 
                style={{
                  backgroundColor: 'rgba(2, 132, 199, 0.05)',
                  borderLeft: '3px solid #0284C7',
                  padding: '10px 14px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45
                }}
              >
                <strong style={{ color: '#0284C7' }}>Why it performed this way:</strong> {post.performanceDiagnosis}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Static & Carousel Architecture"
      />
    </div>
  );
}
