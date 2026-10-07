import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Eye, 
  Heart, 
  MessageSquare, 
  Bookmark, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';

export default function ContentPillarsView({ analytics, onSelectPost }) {
  const { contentPillars, profile } = analytics;

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <Layers size={24} color="var(--accent-ig-start)" />
          Discovered Content Pillars
        </h1>
        <p className="section-description">
          Rather than relying solely on static categories, InstaLens uses semantic clustering across captions and transcripts to discover the recurring content pillars that anchor this account's brand strategy.
        </p>
      </div>

      {/* Pillars Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        {contentPillars.map((pillar, idx) => (
          <div 
            key={pillar.name} 
            className="glass-panel"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Badge & Share */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div>
                <span className="badge badge-high" style={{ fontSize: '0.7rem', marginBottom: '6px' }}>
                  Pillar #{idx + 1} • {pillar.percentage}% of Content
                </span>
                <h3 style={{ fontSize: '1.3rem', margin: '4px 0 0', color: 'var(--text-primary)' }}>
                  {pillar.name}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--accent-cyan)'
                }}>
                  {pillar.count}
                </span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Posts</div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              marginBottom: '18px'
            }}>
              {pillar.description}
            </p>

            {/* Performance Metrics Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              padding: '12px',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Views</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {pillar.avgViews?.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Likes</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {pillar.avgLikes?.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Comments</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {pillar.avgComments?.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Eng. Rate</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--success)', marginTop: '2px' }}>
                  {pillar.avgEngagement}%
                </div>
              </div>
            </div>

            {/* Example Posts Preview */}
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Top Performing Example Posts
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {pillar.examplePosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => onSelectPost(post)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                        <span className={`format-tag ${post.format}`} style={{ fontSize: '0.65rem', padding: '1px 5px' }}>
                          {post.format}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        "{post.hook}"
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontSize: '0.75rem', fontWeight: 600 }}>
                      <span>{post.views?.toLocaleString()}</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
