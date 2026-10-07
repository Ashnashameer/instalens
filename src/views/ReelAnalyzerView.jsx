import React, { useState } from 'react';
import { 
  Film, 
  Play, 
  Flame, 
  Eye, 
  Heart, 
  MessageSquare, 
  Bookmark, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  User, 
  Video,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';
import DataUnavailableBanner from '../components/DataUnavailableBanner';

export default function ReelAnalyzerView({ analytics, onSelectPost }) {
  const reelAnalysis = analytics?.reelAnalysis;
  const profile = analytics?.profile;
  const [selectedHookFilter, setSelectedHookFilter] = useState('ALL');

  if (!reelAnalysis || reelAnalysis.isUnavailable) {
    return (
      <div style={{ padding: '32px' }}>
        <DataUnavailableBanner metricName="Reel Analysis" message="No Reel data available for this profile." />
      </div>
    );
  }

  const { 
    totalReels, 
    percentageOfContent, 
    avgViews, 
    avgLikes, 
    avgComments, 
    avgShares, 
    avgSaves, 
    avgEngagement, 
    viewsPerFollowerRatio, 
    hookPerformance, 
    topReels, 
    successfulPatterns, 
    strategicInsight 
  } = reelAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7C3AED' }}>
            MODULE 03
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            SHORT-FORM VIDEO FORENSICS
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Reel Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Detailed diagnostics on 1–3s hooks, visual storytelling, creative packaging, views/follower multiplier, and algorithmic retention patterns.
        </p>
      </div>

      {/* Reel Metrics KPIs Banner */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Reels Published</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>{totalReels}</div>
          <div style={{ fontSize: '12px', color: '#7C3AED', marginTop: '2px' }}>{percentageOfContent}% of all posts</div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Reel Views</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>{avgViews.toLocaleString()}</div>
          <div style={{ fontSize: '12px', color: '#10B981', marginTop: '2px' }}>Primary discovery engine</div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Views / Follower Ratio</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#0284C7', marginTop: '4px' }}>{viewsPerFollowerRatio}x</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>High algorithmic reach</div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Saves / Reel</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#F59E0B', marginTop: '4px' }}>{avgSaves.toLocaleString()}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{avgComments} comments • {avgShares} shares</div>
        </div>
      </div>

      {/* Hook Architecture: 1-3 Second Opening Analysis */}
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
          <Sparkles size={18} color="#7C3AED" />
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
            1–3 Second Opening Hook Classification
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {hookPerformance.map((h, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                borderLeft: i === 0 ? '3px solid #10B981' : '3px solid var(--border-medium)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  {h.hookType}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {h.count} Reels
                </span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#7C3AED', marginBottom: '4px' }}>
                {h.avgViews.toLocaleString()} <span style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-secondary)' }}>avg views</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                <span>Watch Retention Score:</span>
                <strong style={{ color: h.estimatedRetentionScore >= 85 ? '#10B981' : '#F59E0B' }}>
                  {h.estimatedRetentionScore}/100
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patterns Among Successful Reels */}
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
          <CheckCircle2 size={18} color="#10B981" />
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
            Identified Patterns Among High-Performing Reels
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {successfulPatterns.map((p, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
                {p.pattern}
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Analyzed Reels Grid */}
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
          Top Analyzed Reels Teardown
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {topReels.map((reel) => (
            <div 
              key={reel.id}
              onClick={() => onSelectPost && onSelectPost(reel)}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#7C3AED', backgroundColor: 'rgba(124, 58, 237, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  {reel.pillar || 'Reel'}
                </span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#10B981' }}>
                  {reel.engagementRate}% Eng
                </span>
              </div>

              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '12px' }}>
                "{reel.hook}"
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', textAlign: 'center', fontSize: '11px', color: 'var(--text-secondary)' }}>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '4px' }}>
                  <div style={{ fontWeight: '800', color: 'var(--text-primary)' }}>{(reel.views || 0).toLocaleString()}</div>
                  <div style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>Views</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '4px' }}>
                  <div style={{ fontWeight: '800', color: 'var(--text-primary)' }}>{(reel.likes || 0).toLocaleString()}</div>
                  <div style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>Likes</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '4px' }}>
                  <div style={{ fontWeight: '800', color: 'var(--text-primary)' }}>{(reel.comments || 0).toLocaleString()}</div>
                  <div style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>Comments</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '4px' }}>
                  <div style={{ fontWeight: '800', color: 'var(--text-primary)' }}>{(reel.saves || 0).toLocaleString()}</div>
                  <div style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>Saves</div>
                </div>
              </div>

              <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                <span>CTA: {reel.cta?.slice(0, 32)}...</span>
                <span style={{ color: '#7C3AED', fontWeight: '600' }}>Inspect Teardown →</span>
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
        title="Reel Hook & Retention Playbook"
      />
    </div>
  );
}
