import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Flame, 
  Repeat, 
  TrendingUp, 
  Layers, 
  Bookmark, 
  Share2, 
  Heart, 
  MessageSquare, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  Brain, 
  Target, 
  FileText,
  Clock,
  Zap,
  ShieldCheck
} from 'lucide-react';
import ConfidenceBadge from './ConfidenceBadge';
import { 
  getWhyItWentViralAnalysis, 
  getRecreationStrategy, 
  getSimilarContentPerformanceEstimate 
} from '../utils/analyticsEngine';

export default function ContentDetailDrawer({ post, onClose }) {
  const [activeTab, setActiveTab] = useState('VIRAL_ANALYSIS'); // 'VIRAL_ANALYSIS' | 'RECREATE' | 'ESTIMATE' | 'INSPECTION'

  if (!post) return null;

  const viralAnalysis = getWhyItWentViralAnalysis(post);
  const recreation = getRecreationStrategy(post);
  const estimate = getSimilarContentPerformanceEstimate(post);

  return (
    <div className="drawer-overlay" onClick={onClose} style={{ zIndex: 120 }}>
      <div 
        className="drawer-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '28px 32px',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          boxShadow: '-12px 0 48px rgba(15, 23, 42, 0.18)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: '800',
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: post.format === 'Reel' ? '#F3E8FF' : '#E0F2FE',
                color: post.format === 'Reel' ? '#7C3AED' : '#0284C7'
              }}>
                {post.format}
              </span>
              <ConfidenceBadge type="DIRECTLY OBSERVED" size="sm" />
              <span style={{ fontSize: '12px', color: '#64748B' }}>
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Content Intelligence Teardown
            </h2>
          </div>

          <button 
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '8px',
              background: '#F1F5F9',
              border: 'none',
              color: '#64748B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E2E8F0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4 Feature Tabs */}
        <div style={{
          display: 'flex',
          gap: '6px',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '12px',
          marginBottom: '24px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'VIRAL_ANALYSIS', label: 'Why Did This Go Viral?', icon: <Flame size={13} color="#EA580C" /> },
            { id: 'RECREATE', label: 'Can We Recreate This?', icon: <Repeat size={13} color="#0284C7" /> },
            { id: 'ESTIMATE', label: 'Performance Estimate', icon: <TrendingUp size={13} color="#10B981" /> },
            { id: 'INSPECTION', label: 'Post Inspection', icon: <FileText size={13} color="#64748B" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '9999px',
                border: activeTab === tab.id ? '1px solid #0F172A' : '1px solid #E2E8F0',
                backgroundColor: activeTab === tab.id ? '#0F172A' : '#F8FAFC',
                color: activeTab === tab.id ? '#FFFFFF' : '#475569',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* =========================================================================
            TAB 1: "WHY DID THIS GO VIRAL?" ANALYSIS (STEP 11)
            ========================================================================= */}
        {activeTab === 'VIRAL_ANALYSIS' && (
          <div className="animate-fade-in">
            {/* Observed Performance Metrics Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              padding: '14px',
              borderRadius: '16px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              marginBottom: '22px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Views</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
                  {post.views?.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Engagement</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
                  {post.engagementRate}%
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Saves</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0284C7', marginTop: '2px' }}>
                  {post.saves?.toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Shares</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#7C3AED', marginTop: '2px' }}>
                  {post.shares?.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Evidence-Based Reasons Box */}
            <div style={{
              backgroundColor: '#FFF7ED',
              border: '1px solid #FFEDD5',
              borderRadius: '16px',
              padding: '18px 20px',
              marginBottom: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Flame size={16} className="text-orange-600" />
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#C2410C', textTransform: 'uppercase' }}>
                    Why This Content Performed Well (Evidence-Based)
                  </span>
                </div>
                <ConfidenceBadge type="INFERRED" size="sm" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {viralAnalysis.topEvidenceReasons.map((reason, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#7C2D12', lineHeight: 1.5 }}>
                    <span style={{ fontWeight: '800', color: '#EA580C' }}>{idx + 1}.</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic & Audience Relevance */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#64748B', marginBottom: '4px' }}>
                  Topic Explored
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>
                  {viralAnalysis.topic}
                </div>
              </div>

              <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#64748B', marginBottom: '4px' }}>
                  Format Suitability
                </div>
                <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: 1.4 }}>
                  {viralAnalysis.formatSuitability}
                </div>
              </div>
            </div>

            {/* Hook Analysis */}
            <div style={{
              backgroundColor: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: '16px',
              padding: '16px 20px',
              marginBottom: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={14} className="text-sky-600" />
                  <span style={{ fontSize: '11.5px', fontWeight: '800', color: '#0369A1', textTransform: 'uppercase' }}>
                    Hook Breakdown ({viralAnalysis.hook.hookType})
                  </span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0284C7' }}>
                  Strength Score: {viralAnalysis.hook.hookStrengthScore}/100
                </span>
              </div>

              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', marginBottom: '6px', fontStyle: 'italic' }}>
                "{viralAnalysis.hook.firstLineHook}"
              </div>

              <div style={{ fontSize: '12px', color: '#0369A1', lineHeight: 1.45 }}>
                <strong>Why it arrested feed swipe:</strong> {viralAnalysis.hook.whyHookWorked}
              </div>
            </div>

            {/* Emotional Triggers & Virality Dimensions */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase', color: '#64748B', marginBottom: '8px' }}>
                Emotional Triggers Activated
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                {viralAnalysis.emotionalTriggers.map((trig, idx) => (
                  <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '10px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#0F172A' }}>{trig.trigger}</span>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: '#EA580C', backgroundColor: '#FFF7ED', padding: '1px 6px', borderRadius: '4px' }}>
                        {trig.strength}
                      </span>
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: 1.4 }}>
                      {trig.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shareability, Saveability & Commentability */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '18px' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#0284C7', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Saveability
                </div>
                <div style={{ fontSize: '11.5px', color: '#475569', lineHeight: 1.4 }}>
                  {viralAnalysis.saveability}
                </div>
              </div>

              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#7C3AED', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Shareability
                </div>
                <div style={{ fontSize: '11.5px', color: '#475569', lineHeight: 1.4 }}>
                  {viralAnalysis.shareability}
                </div>
              </div>

              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#059669', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Commentability
                </div>
                <div style={{ fontSize: '11.5px', color: '#475569', lineHeight: 1.4 }}>
                  {viralAnalysis.commentability}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: "CAN WE RECREATE THIS?" FEATURE (STEP 12)
            ========================================================================= */}
        {activeTab === 'RECREATE' && (
          <div className="animate-fade-in">
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '16px',
              padding: '18px 20px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Repeat size={16} className="text-sky-600" />
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#1E40AF', textTransform: 'uppercase' }}>
                  Underlying Strategy Extracted
                </span>
                <ConfidenceBadge type="INFERRED" size="sm" />
              </div>
              <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#1E3A8A' }}>
                "{recreation.underlyingStrategy}"
              </div>
              <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#3B82F6' }}>
                InstaLens never copies competitor posts. It extracts the proven psychological persuasion framework and adapts it directly to our institute's audience, courses, and positioning.
              </p>
            </div>

            {/* Adapted Idea for Our Institute */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #0284C7',
              borderRadius: '18px',
              padding: '22px',
              marginBottom: '22px',
              boxShadow: '0 8px 24px rgba(2, 132, 199, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', color: '#0284C7', textTransform: 'uppercase' }}>
                  ADAPTED FOR OUR INSTITUTE
                </span>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#0F172A', backgroundColor: '#F1F5F9', padding: '3px 8px', borderRadius: '6px' }}>
                  {recreation.adaptedIdeaForOurInstitute.recommendedFormat}
                </span>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0F172A', margin: '0 0 10px 0' }}>
                {recreation.adaptedIdeaForOurInstitute.headline}
              </h3>

              <div style={{
                backgroundColor: '#F8FAFC',
                padding: '12px 14px',
                borderRadius: '10px',
                borderLeft: '3px solid #0284C7',
                fontSize: '13px',
                fontStyle: 'italic',
                color: '#1E293B',
                marginBottom: '14px',
                lineHeight: 1.5
              }}>
                {recreation.adaptedIdeaForOurInstitute.hookScript}
              </div>

              {/* Sequential Production Breakdown */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#64748B', marginBottom: '6px' }}>
                  Execution Structure (0 to 60 seconds)
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {recreation.adaptedIdeaForOurInstitute.structure.map((step, idx) => (
                    <div key={idx} style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={13} className="text-sky-600" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '10px',
                padding: '10px 12px',
                fontSize: '12px',
                color: '#166534'
              }}>
                <strong>Recommended CTA:</strong> {recreation.adaptedIdeaForOurInstitute.ctaAction}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: SIMILAR CONTENT PERFORMANCE ESTIMATE (STEP 13)
            ========================================================================= */}
        {activeTab === 'ESTIMATE' && (
          <div className="animate-fade-in">
            {/* Top Score Banner */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '18px',
              padding: '20px 24px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.06em' }}>
                  ESTIMATED PERFORMANCE POTENTIAL
                </div>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#059669', marginTop: '2px' }}>
                  {estimate.estimatedPerformancePotential} Potential
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                  {estimate.strategicProbability}
                </div>
              </div>

              <ConfidenceBadge type="ESTIMATED" size="sm" />
            </div>

            {/* 8 Diagnostic Evidence Factors */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px',
              marginBottom: '22px'
            }}>
              {Object.entries(estimate.factors).map(([key, factor]) => {
                const labelMap = {
                  similarityToSuccessfulContent: 'Similarity to Successful Content',
                  audienceRelevance: 'Audience Relevance',
                  topicDemand: 'Topic Search Demand',
                  hookStrength: 'Hook Strength',
                  formatStrength: 'Format Strength',
                  brandFit: 'Brand Fit',
                  competitiveSaturation: 'Competitive Saturation',
                  executionDifficulty: 'Execution Difficulty'
                };

                return (
                  <div key={key} style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B' }}>
                        {labelMap[key] || key}
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: '#0284C7', backgroundColor: '#E0F2FE', padding: '1px 6px', borderRadius: '4px' }}>
                        {factor.rating}
                      </span>
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#334155', lineHeight: 1.4 }}>
                      {factor.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mandatory Disclaimer Box */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#991B1B',
              fontSize: '12px'
            }}>
              <AlertCircle size={15} className="text-red-600" style={{ flexShrink: 0 }} />
              <span><strong>Note:</strong> {estimate.disclaimer}</span>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: POST INSPECTION (STEPS 3, 4, 7, 8, 9)
            ========================================================================= */}
        {activeTab === 'INSPECTION' && (
          <div className="animate-fade-in">
            {/* Caption Text Box */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase', color: '#64748B' }}>
                  Caption Breakdown & Language
                </span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#7C3AED', backgroundColor: '#F3E8FF', padding: '2px 8px', borderRadius: '9999px' }}>
                  Language: {post.captionAnalysis?.language || 'English'}
                </span>
              </div>
              <div style={{
                padding: '14px',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                fontSize: '13px',
                color: '#334155',
                lineHeight: 1.6,
                whiteSpace: 'pre-line'
              }}>
                {post.caption}
              </div>
            </div>

            {/* Taxonomy Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '18px' }}>
              <div style={{ padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '10.5px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Content Pillar (17 Pillars)</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>{post.contentPillar || post.pillar}</div>
              </div>
              <div style={{ padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '10.5px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Funnel Stage</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0284C7', marginTop: '2px' }}>{post.funnelStage} ({post.audienceIntent})</div>
              </div>
              <div style={{ padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '10.5px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Reel Category (Step 5)</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#7C3AED', marginTop: '2px' }}>{post.reelCategory}</div>
              </div>
              <div style={{ padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '10.5px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Call To Action (CTA)</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#059669', marginTop: '2px' }}>"{post.captionAnalysis?.ctaAction || post.cta || 'Comment'}"</div>
              </div>
            </div>

            {/* OCR Extracted Post Text (Step 8) */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '14px 16px',
              marginBottom: '16px'
            }}>
              <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#64748B', marginBottom: '6px' }}>
                OCR Post Text & Communication Style (Step 8)
              </div>
              <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#0F172A', marginBottom: '4px' }}>
                Style: {post.postText?.communicationStyle || 'Number-based educational hook + career outcome messaging'}
              </div>
              <div style={{ fontSize: '11.5px', color: '#64748B' }}>
                Extracted Headline: "{post.postText?.headline || post.hook}" • Numbers: 2026, 3 Steps • Career keywords: Salary, Portfolio, Placement.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
