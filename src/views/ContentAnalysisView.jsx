import React, { useState } from 'react';
import { 
  PieChart, 
  Layers, 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  Bookmark, 
  Sparkles,
  Filter,
  BarChart2
} from 'lucide-react';

const CATEGORY_COLORS = {
  'Educational': '#00F2FE',
  'Promotional': '#EF4444',
  'Entertainment': '#F59E0B',
  'Testimonial': '#10B981',
  'Career/Advice': '#6366F1',
  'Product/Service': '#EC4899',
  'Event': '#8B5CF6',
  'Behind the Scenes': '#38BDF8',
  'Founder/Personal Brand': '#F97316',
  'Community': '#14B8A6',
  'Other': '#64748B'
};

export default function ContentAnalysisView({ analytics, onSelectPost }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { contentDistribution, profile } = analytics;

  const filteredPosts = selectedCategory
    ? profile.posts.filter((p) => p.category === selectedCategory)
    : profile.posts.slice(0, 10);

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <PieChart size={24} color="var(--accent-cyan)" />
          Content Category Classification & Distribution
        </h1>
        <p className="section-description">
          Every piece of content across the analyzed period is classified into 11 strategic categories. All percentages and performance benchmarks are calculated dynamically from the underlying dataset.
        </p>
      </div>

      {/* Visual Chart & Distribution Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 420px) 1fr', gap: '24px', marginBottom: '28px' }}>
        {/* Dynamic Category Distribution Visual Card */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.05rem', margin: 0 }}>Distribution Breakdown</h3>
            <span className="badge badge-real" style={{ fontSize: '0.68rem' }}>100% Calculated</span>
          </div>

          {/* Stacked Progress Bar Representation */}
          <div style={{
            height: '14px',
            display: 'flex',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
            marginBottom: '20px',
            border: '1px solid var(--border-subtle)'
          }}>
            {contentDistribution.map((item) => (
              <div 
                key={item.name}
                style={{
                  width: `${item.percentage}%`,
                  background: CATEGORY_COLORS[item.name] || '#64748B',
                  transition: 'width 0.3s ease'
                }}
                title={`${item.name}: ${item.percentage}% (${item.count} posts)`}
              />
            ))}
          </div>

          {/* List of categories with dynamic percentages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '380px', overflowY: 'auto' }}>
            {contentDistribution.map((item) => {
              const isSelected = selectedCategory === item.name;
              const color = CATEGORY_COLORS[item.name] || '#64748B';
              return (
                <div 
                  key={item.name}
                  onClick={() => setSelectedCategory(isSelected ? null : item.name)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.15)',
                    border: isSelected ? `1px solid ${color}` : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: color }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item.name}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {item.count} posts
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: color,
                      minWidth: '45px',
                      textAlign: 'right'
                    }}>
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Performance Comparison Table */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem', margin: 0 }}>Performance by Content Category</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Averages per category across analyzed corpus
            </span>
          </div>

          <div className="data-table-wrapper" style={{ flex: 1 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Posts</th>
                  <th>Share</th>
                  <th>Avg Views</th>
                  <th>Avg Likes</th>
                  <th>Avg Engagement</th>
                </tr>
              </thead>
              <tbody>
                {contentDistribution.map((cat) => {
                  const color = CATEGORY_COLORS[cat.name] || '#64748B';
                  return (
                    <tr 
                      key={cat.name} 
                      className="clickable-row"
                      onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                      style={{
                        background: selectedCategory === cat.name ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                      }}
                    >
                      <td style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
                        {cat.name}
                      </td>
                      <td>{cat.count}</td>
                      <td>
                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                          {cat.percentage}%
                        </span>
                      </td>
                      <td>{cat.avgViews.toLocaleString()}</td>
                      <td>{cat.avgLikes.toLocaleString()}</td>
                      <td>
                        <span className="badge badge-high" style={{ fontSize: '0.72rem' }}>
                          {cat.avgEngagement}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Filtered Posts Explorer from Selected Category */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>
              {selectedCategory ? `Content in "${selectedCategory}" (${filteredPosts.length} posts)` : `Sample Content Across All Categories (Click any post to inspect details)`}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>
              Click any row or thumbnail to open the AI Deep Inspection Panel
            </p>
          </div>
          {selectedCategory && (
            <button 
              onClick={() => setSelectedCategory(null)}
              className="btn-outline btn-sm"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {filteredPosts.slice(0, 6).map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className={`format-tag ${post.format}`}>{post.format}</span>
                <span className="badge badge-high" style={{ fontSize: '0.7rem' }}>
                  {post.views?.toLocaleString()} views
                </span>
              </div>

              <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                "{post.hook}"
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4, flex: 1 }}>
                {post.caption?.substring(0, 90)}...
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.engagementRate}% Eng Rate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
