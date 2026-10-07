import React from 'react';
import { 
  BarChart3, 
  Flame, 
  Eye, 
  Heart, 
  MessageSquare, 
  Bookmark, 
  Share2, 
  TrendingUp, 
  AlertCircle, 
  Target,
  Zap
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';
import DataUnavailableBanner from '../components/DataUnavailableBanner';

export default function EngagementAnalyzerView({ analytics, onSelectPost }) {
  const engagementAnalysis = analytics?.engagementAnalysis;

  if (!engagementAnalysis) return null;

  const { metrics, formatComparison, engagementDrivers, strategicInsight } = engagementAnalysis;

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EA580C' }}>
            MODULE 07
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            MULTI-DIMENSIONAL ENGAGEMENT ENGINE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Engagement & Performance Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Actual metrics breakdown across views, likes, comments, shares, saves, and engagement rate. Cross-examines content types and behavioral engagement drivers.
        </p>
      </div>

      {/* Actual Available Metrics Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '20px'
        }}
      >
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
            <Eye size={14} color="#0284C7" />
            <span>Total Views</span>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '6px' }}>
            {metrics.views.value?.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {metrics.views.avg?.toLocaleString()} avg per post
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
            <Heart size={14} color="#EF4444" />
            <span>Total Likes</span>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '6px' }}>
            {metrics.likes.value?.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {metrics.likes.avg?.toLocaleString()} avg per post
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
            <MessageSquare size={14} color="#059669" />
            <span>Total Comments</span>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '6px' }}>
            {metrics.comments.value?.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {metrics.comments.avg?.toLocaleString()} avg per post
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
            <Share2 size={14} color="#8B5CF6" />
            <span>Total Shares</span>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '6px' }}>
            {metrics.shares.value?.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {metrics.shares.avg?.toLocaleString()} avg per post
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
            <Bookmark size={14} color="#D97706" />
            <span>Total Saves</span>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '6px' }}>
            {metrics.saves.value?.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {metrics.saves.avg?.toLocaleString()} avg per post
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
            <Flame size={14} color="#10B981" />
            <span>Avg Engagement</span>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#10B981', marginTop: '6px' }}>
            {metrics.engagementRate.value}%
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Calculated on actual data
          </div>
        </div>
      </div>

      {/* Data Unavailable Banner for Private Reach/Impressions */}
      {!metrics.reach.available && (
        <DataUnavailableBanner 
          metricName="Account Total Reach & Private Impressions" 
          message="Private reach and impression metrics require Meta Graph API business token authentication. In strict compliance with product guidelines, simulated reach is never displayed."
        />
      )}

      {/* Content Type Comparison Table: Reels vs Carousels vs Static */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          margin: '28px 0'
        }}
      >
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
          Content Type → Performance Comparison
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '10px 14px' }}>Content Format</th>
                <th style={{ padding: '10px 14px' }}>Posts Count</th>
                <th style={{ padding: '10px 14px' }}>Avg Views</th>
                <th style={{ padding: '10px 14px' }}>Avg Likes</th>
                <th style={{ padding: '10px 14px' }}>Avg Comments</th>
                <th style={{ padding: '10px 14px' }}>Avg Shares</th>
                <th style={{ padding: '10px 14px' }}>Avg Saves</th>
                <th style={{ padding: '10px 14px' }}>Avg Engagement</th>
              </tr>
            </thead>
            <tbody>
              {formatComparison.map((fmt) => (
                <tr key={fmt.format} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {fmt.format === 'Reel' ? '🎬 Reels' : fmt.format === 'Carousel' ? '📑 Carousels' : '🖼️ Static Posts'}
                  </td>
                  <td style={{ padding: '14px', color: 'var(--text-secondary)' }}>{fmt.count}</td>
                  <td style={{ padding: '14px', fontWeight: '700', color: '#0284C7' }}>{fmt.avgViews.toLocaleString()}</td>
                  <td style={{ padding: '14px' }}>{fmt.avgLikes.toLocaleString()}</td>
                  <td style={{ padding: '14px' }}>{fmt.avgComments.toLocaleString()}</td>
                  <td style={{ padding: '14px' }}>{fmt.avgShares.toLocaleString()}</td>
                  <td style={{ padding: '14px', fontWeight: '700', color: '#D97706' }}>{fmt.avgSaves.toLocaleString()}</td>
                  <td style={{ padding: '14px', fontWeight: '800', color: '#10B981' }}>{fmt.avgEngagement}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Behavioral Engagement Drivers: What generates attention, comments, saves, shares, leads */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 18px 0' }}>
          Behavioral Engagement Drivers (Algorithmic Attribution)
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', borderTop: '3px solid #0284C7' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#0284C7', textTransform: 'uppercase', marginBottom: '4px' }}>
              What Generates Attention (Views)
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
              {engagementDrivers.attention.driver}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {engagementDrivers.attention.detail}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', borderTop: '3px solid #059669' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', marginBottom: '4px' }}>
              What Generates Comments
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
              {engagementDrivers.comments.driver}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {engagementDrivers.comments.detail}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', borderTop: '3px solid #D97706' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#D97706', textTransform: 'uppercase', marginBottom: '4px' }}>
              What Generates Saves (Bookmarks)
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
              {engagementDrivers.saves.driver}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {engagementDrivers.saves.detail}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', borderTop: '3px solid #8B5CF6' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#8B5CF6', textTransform: 'uppercase', marginBottom: '4px' }}>
              What Generates Shares
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
              {engagementDrivers.shares.driver}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {engagementDrivers.shares.detail}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', borderTop: '3px solid #DB2777' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#DB2777', textTransform: 'uppercase', marginBottom: '4px' }}>
              What Generates Leads
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
              {engagementDrivers.leads.driver}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {engagementDrivers.leads.detail}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendation */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Engagement Architecture & Funnel Strategy"
      />
    </div>
  );
}
