import React from 'react';
import { 
  Film, 
  Layers, 
  Image as ImageIcon, 
  BarChart3, 
  TrendingUp, 
  Bookmark, 
  Eye, 
  Share2 
} from 'lucide-react';

export default function FormatAnalysisView({ analytics }) {
  const { formatBreakdown, profile } = analytics;

  const maxViews = Math.max(...formatBreakdown.map((f) => f.avgViews || 1));
  const maxEngagement = Math.max(...formatBreakdown.map((f) => f.avgEngagement || 1));

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <Film size={24} color="var(--accent-ig-mid)" />
          Content Format Performance Benchmark
        </h1>
        <p className="section-description">
          Compares Reels, Multi-Slide Carousels, and Static Images across key distribution variables: discovery view reach, bookmark save density, and overall audience engagement.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Format Efficiency Comparison Table</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Direct benchmark across {profile.postsCount} analyzed assets
            </span>
          </div>
          <span className="badge badge-real">Format Metrics</span>
        </div>

        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Format</th>
                <th>Posts</th>
                <th>Volume %</th>
                <th>Avg Views</th>
                <th>Avg Likes</th>
                <th>Avg Comments</th>
                <th>Avg Saves</th>
                <th>Avg Engagement</th>
              </tr>
            </thead>
            <tbody>
              {formatBreakdown.map((fmt) => (
                <tr key={fmt.format}>
                  <td>
                    <span className={`format-tag ${fmt.format}`} style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                      {fmt.format}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{fmt.posts}</td>
                  <td>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt.percentage}%</span>
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    {fmt.avgViews?.toLocaleString()}
                  </td>
                  <td>{fmt.avgLikes?.toLocaleString()}</td>
                  <td>{fmt.avgComments?.toLocaleString()}</td>
                  <td style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {fmt.avgSaves?.toLocaleString()}
                  </td>
                  <td>
                    <span className="badge badge-high" style={{ fontSize: '0.75rem' }}>
                      {fmt.avgEngagement}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Comparison Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginBottom: '28px' }}>
        {/* Chart 1: Average Views by Format */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Eye size={18} color="var(--accent-ig-start)" />
            Average Views by Format (Discovery Reach)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {formatBreakdown.map((fmt) => {
              const barWidth = Math.round((fmt.avgViews / maxViews) * 100);
              return (
                <div key={fmt.format}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600 }}>{fmt.format}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      {fmt.avgViews?.toLocaleString()} views
                    </span>
                  </div>
                  <div style={{ height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${barWidth}%`,
                      background: fmt.format === 'Reel' ? 'var(--gradient-ig)' : (fmt.format === 'Carousel' ? 'var(--gradient-cyan)' : 'var(--text-muted)'),
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart 2: Average Engagement Rate */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={18} color="var(--success)" />
            Average Engagement Rate by Format
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {formatBreakdown.map((fmt) => {
              const barWidth = Math.round((fmt.avgEngagement / maxEngagement) * 100);
              return (
                <div key={fmt.format}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600 }}>{fmt.format}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--success)', fontWeight: 700 }}>
                      {fmt.avgEngagement}%
                    </span>
                  </div>
                  <div style={{ height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${barWidth}%`,
                      background: 'linear-gradient(90deg, #10B981, #00F2FE)',
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Strategic Format Takeaways */}
      <div className="glass-panel" style={{ padding: '24px', background: 'rgba(0,0,0,0.2)' }}>
        <h4 style={{ fontSize: '0.95rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
          Strategic Format Synthesis
        </h4>
        <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          <strong>Reels</strong> serve as the primary algorithmic discovery mechanism for this account, driving maximum top-of-funnel non-follower impressions. Concurrently, <strong>Carousels</strong> achieve significantly higher bookmark save rates per view, acting as authoritative evergreen reference assets that train the algorithm on audience retention. Single static images represent the lowest-performing format and should be transitioned into multi-slide breakdowns.
        </p>
      </div>
    </div>
  );
}
