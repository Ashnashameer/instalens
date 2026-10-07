import React, { useState } from 'react';
import { 
  Flame, 
  Eye, 
  Heart, 
  MessageSquare, 
  TrendingUp, 
  Sparkles, 
  ArrowUpRight,
  Filter
} from 'lucide-react';

export default function PerformanceView({ analytics, onSelectPost }) {
  const [activeMetricTab, setActiveMetricTab] = useState('views'); // 'views', 'likes', 'comments', 'engagement'
  const { topPerformers } = analytics;

  let currentList = topPerformers.mostViewed;
  let metricLabel = 'Views';
  let metricIcon = Eye;
  let metricColor = 'var(--accent-cyan)';

  if (activeMetricTab === 'likes') {
    currentList = topPerformers.mostLiked;
    metricLabel = 'Likes';
    metricIcon = Heart;
    metricColor = 'var(--danger)';
  } else if (activeMetricTab === 'comments') {
    currentList = topPerformers.mostCommented;
    metricLabel = 'Comments';
    metricIcon = MessageSquare;
    metricColor = 'var(--accent-ig-start)';
  } else if (activeMetricTab === 'engagement') {
    currentList = topPerformers.highestEngagement;
    metricLabel = 'Engagement';
    metricIcon = TrendingUp;
    metricColor = 'var(--success)';
  }

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <Flame size={24} color="var(--accent-ig-mid)" />
          Top-Performing Content Performance
        </h1>
        <p className="section-description">
          Rank and inspect the highest-performing content assets across specific interaction vectors. Click any item to inspect its AI anatomical breakdown and hook mechanics.
        </p>
      </div>

      {/* Metric Selector Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setActiveMetricTab('views')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeMetricTab === 'views' ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-card)',
            color: activeMetricTab === 'views' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
            border: activeMetricTab === 'views' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Eye size={16} /> Most Viewed
        </button>

        <button
          onClick={() => setActiveMetricTab('likes')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeMetricTab === 'likes' ? 'rgba(239, 68, 68, 0.15)' : 'var(--bg-card)',
            color: activeMetricTab === 'likes' ? '#F87171' : 'var(--text-secondary)',
            border: activeMetricTab === 'likes' ? '1px solid #F87171' : '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Heart size={16} /> Most Liked
        </button>

        <button
          onClick={() => setActiveMetricTab('comments')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeMetricTab === 'comments' ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-card)',
            color: activeMetricTab === 'comments' ? 'var(--warning)' : 'var(--text-secondary)',
            border: activeMetricTab === 'comments' ? '1px solid var(--warning)' : '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <MessageSquare size={16} /> Most Commented
        </button>

        <button
          onClick={() => setActiveMetricTab('engagement')}
          style={{
            padding: '10px 18px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeMetricTab === 'engagement' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
            color: activeMetricTab === 'engagement' ? 'var(--success)' : 'var(--text-secondary)',
            border: activeMetricTab === 'engagement' ? '1px solid var(--success)' : '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <TrendingUp size={16} /> Highest Engagement Rate
        </button>
      </div>

      {/* Content Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {currentList.map((post, rank) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="glass-panel"
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            {/* Top Rank Badge & Meta */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: rank === 0 ? 'var(--gradient-ig)' : 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#FFFFFF'
                }}>
                  #{rank + 1}
                </span>
                <span className={`format-tag ${post.format}`}>{post.format}</span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: metricColor, fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                {activeMetricTab === 'views' && <span>{post.views?.toLocaleString()} Views</span>}
                {activeMetricTab === 'likes' && <span>{post.likes?.toLocaleString()} Likes</span>}
                {activeMetricTab === 'comments' && <span>{post.comments?.toLocaleString()} Comments</span>}
                {activeMetricTab === 'engagement' && <span>{post.engagementRate}% Eng</span>}
                <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Hook text */}
            <div style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.45,
              marginBottom: '10px'
            }}>
              "{post.hook}"
            </div>

            {/* Pillar & Topic badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <span className="category-badge">Pillar: {post.pillar}</span>
              <span className="category-badge" style={{ color: 'var(--accent-indigo)' }}>#{post.topic}</span>
            </div>

            {/* Metrics Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '6px',
              padding: '8px',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.72rem',
              textAlign: 'center',
              marginBottom: '14px'
            }}>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Views</span>
                <strong style={{ color: 'var(--text-primary)' }}>{post.views?.toLocaleString()}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Likes</span>
                <strong style={{ color: 'var(--text-primary)' }}>{post.likes?.toLocaleString()}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Comments</span>
                <strong style={{ color: 'var(--text-primary)' }}>{post.comments?.toLocaleString()}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Eng. Rate</span>
                <strong style={{ color: 'var(--success)' }}>{post.engagementRate}%</strong>
              </div>
            </div>

            {/* Short AI explanation */}
            <div style={{
              marginTop: 'auto',
              padding: '10px 12px',
              borderRadius: 'var(--radius-xs)',
              background: 'rgba(0, 242, 254, 0.05)',
              border: '1px solid rgba(0, 242, 254, 0.15)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.45
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '4px' }}>
                <Sparkles size={12} />
                <span>AI Performance Diagnosis</span>
              </div>
              {post.whyItWorked ? post.whyItWorked.hookAnalysis : `High topical alignment with target demographic (${post.targetAudience?.substring(0, 50)}...).`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
