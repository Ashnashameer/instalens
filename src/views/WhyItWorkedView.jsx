import React, { useState } from 'react';
import { 
  Lightbulb, 
  Sparkles, 
  Target, 
  Brain, 
  Share2, 
  MessageSquare, 
  Bookmark, 
  ShieldAlert, 
  HelpCircle,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

export default function WhyItWorkedView({ analytics, onSelectPost }) {
  const { topPerformers } = analytics;
  const topReelsAndPosts = topPerformers.mostViewed.slice(0, 5);
  const [selectedPostId, setSelectedPostId] = useState(topReelsAndPosts[0]?.id);

  const activePost = topReelsAndPosts.find((p) => p.id === selectedPostId) || topReelsAndPosts[0];

  return (
    <div className="view-content-area animate-fade-in">
      {/* Header */}
      <div className="section-heading-box">
        <h1 className="section-title">
          <Lightbulb size={24} color="var(--accent-cyan)" />
          "Why Did It Perform Well?" Diagnostic Engine
        </h1>
        <p className="section-description">
          A core differentiator of InstaLens. AI deconstructs high-performing assets to isolate the causal drivers of audience watch-through, saves, and conversions.
        </p>
      </div>

      {/* Mandatory Disclaimer Alert on AI Hypotheses vs Observed Data */}
      <div style={{
        padding: '14px 18px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(99, 102, 241, 0.08)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        marginBottom: '24px'
      }}>
        <Brain size={20} color="var(--accent-indigo)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          <strong style={{ color: 'var(--text-primary)' }}>Scientific Integrity Principle:</strong>
          {' '}InstaLens explicitly separates <strong>Observed Data</strong> (verified view counts, comment counts, save rates, format specifications) from <strong>AI-Inferred Explanations</strong> (hook psychological taxonomy, emotional resonance, pain point matching). AI explanations represent algorithmic hypotheses based on benchmarked patterns, not unverified absolute causation.
        </div>
      </div>

      {/* Post Selector Strip */}
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '24px' }}>
        {topReelsAndPosts.map((post, idx) => {
          const isSelected = post.id === selectedPostId;
          return (
            <div
              key={post.id}
              onClick={() => setSelectedPostId(post.id)}
              style={{
                flex: '0 0 280px',
                padding: '14px 16px',
                borderRadius: 'var(--radius-sm)',
                background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-card)',
                border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className={`format-tag ${post.format}`}>{post.format}</span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  {post.views?.toLocaleString()} views
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                "{post.hook}"
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Pillar: {post.pillar}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Post In-Depth Breakdown */}
      {activePost && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 380px) 1fr', gap: '24px' }}>
          {/* Left Column: Post Snapshot & Observed Data */}
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Observed Data Asset
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                "{activePost.hook}"
              </h3>
            </div>

            <div style={{
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              <strong>Full Caption Snippet:</strong>
              <p style={{ marginTop: '4px', margin: '4px 0 0' }}>{activePost.caption}</p>
            </div>

            {/* Hard Metrics List */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Observed Performance Metrics
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                <div style={{ padding: '8px 12px', borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Verified Views</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{activePost.views?.toLocaleString()}</div>
                </div>
                <div style={{ padding: '8px 12px', borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Engagement Rate</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--success)' }}>{activePost.engagementRate}%</div>
                </div>
                <div style={{ padding: '8px 12px', borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Likes / Comments</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{activePost.likes?.toLocaleString()} / {activePost.comments?.toLocaleString()}</div>
                </div>
                <div style={{ padding: '8px 12px', borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Saves / Shares</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{activePost.saves?.toLocaleString()} / {activePost.shares?.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPost(activePost)}
              className="btn-outline btn-sm"
              style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
            >
              Open Full Inspection Drawer <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Right Column: AI Inferred Explanations on 8 Strategic Factors */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>AI Diagnostic Attribution Factors</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Hypothesized causal drivers synthesized by InstaLens NLP models
                </span>
              </div>
              <span className="badge badge-high">High Confidence Model</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              {/* Factor 1: Opening Hook */}
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-ig-start)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '6px' }}>
                  <Sparkles size={14} />
                  <span>1. Opening Hook Mechanics ({activePost.hookType})</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {activePost.whyItWorked?.hookAnalysis || 'Strong curiosity gap isolates a tangible tension or high-leverage pain point in the first 2 seconds.'}
                </p>
              </div>

              {/* Factor 2: Audience Pain Point */}
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '6px' }}>
                  <Target size={14} />
                  <span>2. Audience Pain Point Alignment</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Directly addresses {activePost.targetAudience?.toLowerCase()}. Translates vague anxieties into concrete, actionable steps.
                </p>
              </div>

              {/* Factor 3: Educational Value */}
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '6px' }}>
                  <CheckCircle2 size={14} />
                  <span>3. Educational Value & Utility</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Provides high informational density before introducing any call-to-action, generating a disproportionately high save-to-view ratio.
                </p>
              </div>

              {/* Factor 4: Emotional & Psychological Resonance */}
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-indigo)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '6px' }}>
                  <Brain size={14} />
                  <span>4. Emotional Appeal & Tone</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Tone is calibrated as {activePost.tone?.toLowerCase()} and authoritative. Validates audience challenges rather than condescending.
                </p>
              </div>

              {/* Factor 5: CTA Effectiveness */}
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--warning)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '6px' }}>
                  <MessageSquare size={14} />
                  <span>5. Call-To-Action (CTA) Friction</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  CTA prompt: "{activePost.cta}". Low psychological commitment encourages conversational comments, which Instagram algorithms reward with expanded reach.
                </p>
              </div>

              {/* Factor 6: Shareability & Virality */}
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#EC4899', fontWeight: 700, fontSize: '0.82rem', marginBottom: '6px' }}>
                  <Share2 size={14} />
                  <span>6. Social Shareability Potential</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {activePost.whyItWorked?.shareability || 'High peer recommendation value; viewers share with colleagues or friends facing identical professional challenges.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
