import React from 'react';
import { 
  Hash, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';

export default function TopicAnalysisView({ analytics }) {
  const { topics, profile } = analytics;

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <Hash size={24} color="var(--accent-indigo)" />
          Recurring Topic Analysis
        </h1>
        <p className="section-description">
          Identifies the most discussed topics across all analyzed posts and Reels, quantifying how specific themes directly correlate with reach, comments, and engagement performance.
        </p>
      </div>

      {/* Topics Ranking Table */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Most Discussed Topics Ranking</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Ordered by total post volume across {profile.postsCount} analyzed assets
            </span>
          </div>
          <span className="badge badge-real">Dynamic Topic Modeling</span>
        </div>

        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Posts</th>
                <th>Share %</th>
                <th>Avg Views</th>
                <th>Avg Likes</th>
                <th>Avg Comments</th>
                <th>Avg Engagement</th>
                <th>Performance Tier</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((t) => {
                let badgeClass = 'badge-moderate';
                if (t.performanceLevel === 'High') badgeClass = 'badge-high';
                else if (t.performanceLevel === 'Above Avg') badgeClass = 'badge-above';
                else if (t.performanceLevel === 'Low') badgeClass = 'badge-low';

                return (
                  <tr key={t.topic}>
                    <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--accent-indigo)', marginRight: '4px' }}>#</span>
                      {t.topic}
                    </td>
                    <td>{t.count}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', minWidth: '38px' }}>{t.percentage}%</span>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: `${Math.min(100, t.percentage * 3)}%`, height: '100%', background: 'var(--accent-indigo)' }} />
                        </div>
                      </div>
                    </td>
                    <td>{t.avgViews?.toLocaleString()}</td>
                    <td>{t.avgLikes?.toLocaleString()}</td>
                    <td>{t.avgComments?.toLocaleString()}</td>
                    <td>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{t.avgEngagement}%</span>
                    </td>
                    <td>
                      <span className={`badge ${badgeClass}`}>{t.performanceLevel}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Topic Performance Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={16} color="var(--success)" />
            Highest View Yielding Topics
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[...topics].sort((a, b) => b.avgViews - a.avgViews).slice(0, 3).map((t) => (
              <div key={t.topic} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 'var(--radius-xs)', background: 'rgba(0,0,0,0.2)' }}>
                <span style={{ fontWeight: 600 }}>#{t.topic}</span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  {t.avgViews?.toLocaleString()} avg views
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={16} color="var(--accent-ig-start)" />
            Highest Comment Conversation Topics
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[...topics].sort((a, b) => b.avgComments - a.avgComments).slice(0, 3).map((t) => (
              <div key={t.topic} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 'var(--radius-xs)', background: 'rgba(0,0,0,0.2)' }}>
                <span style={{ fontWeight: 600 }}>#{t.topic}</span>
                <span style={{ color: 'var(--accent-ig-start)', fontWeight: 700 }}>
                  {t.avgComments?.toLocaleString()} avg comments
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
