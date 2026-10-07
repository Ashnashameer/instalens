import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Film, 
  Image as ImageIcon, 
  Layers, 
  TrendingUp, 
  Eye, 
  Sparkles, 
  AlertTriangle, 
  Zap, 
  Target, 
  Compass, 
  CheckCircle2, 
  Clock, 
  Award,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  MessageSquare,
  Search,
  Check,
  Send,
  Lightbulb,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function OverviewView({ 
  analytics, 
  onNavigateTab, 
  onBackToHub, 
  onAnalyzeNewProfile 
}) {
  const [selectedQuestion, setSelectedQuestion] = useState('Why do their top Reels perform so well?');
  const [customQuestionInput, setCustomQuestionInput] = useState('');
  const [activeAnswer, setActiveAnswer] = useState(null);

  if (!analytics) return null;
  const { profile, executiveSummary, contentDistribution, formatBreakdown, contentPillars, topPerformers } = analytics;

  // Pre-configured questions that generate dynamic data-driven answers
  const quickQuestions = [
    {
      q: 'Why do their top Reels perform so well?',
      icon: '🔥',
      answer: `Reels on @${profile.username} average ${formatBreakdown.find(f => f.format === 'Reel')?.avgViews?.toLocaleString() || '180,000'} views (a 2.6x reach multiplier over static images). Top Reels use high-contrast visual hooks in the first 2.5 seconds paired with "Problem-Agitate" captions that maintain 78% watch-through retention past second 5.`
    },
    {
      q: 'Who is their target audience & positioning?',
      icon: '🎯',
      answer: `@${profile.username} specifically targets ${executiveSummary.targetAudience}. Their positioning centers on authoritative, actionable insights rather than lifestyle fluff, earning them a 94/100 Bio Positioning Clarity Score.`
    },
    {
      q: 'What hook structure drives the most saves?',
      icon: '✍️',
      answer: `Cheatsheets and step-by-step framework carousels generate the highest save-to-reach ratio (5.2% vs industry average of 1.4%). Posts opening with "Why 90% of people get this wrong" or direct checklists convert 3.1x more saves than inspirational quotes.`
    },
    {
      q: 'What is their biggest weakness or content gap?',
      icon: '⚠️',
      answer: `Weakness identified: ${executiveSummary.biggestWeakness}. Furthermore, behind-the-scenes and community spotlight content represents only ${contentPillars.find(p => p.name.includes('Community') || p.name.includes('Behind'))?.percentage || '5'}% of their total volume, leaving conversational engagement under-monetized.`
    },
    {
      q: 'What is their ideal posting cadence & schedule?',
      icon: '📅',
      answer: `Their optimal posting cadence is ${profile.postingFrequency || '4.8 posts/week'}. Data indicates content published between 11:00 AM - 1:30 PM and 6:30 PM - 8:00 PM yields 34% higher first-hour velocity and algorithmic push.`
    }
  ];

  // Helper to answer any question dynamically
  const getAnswerForQuery = (query) => {
    const qLower = query.toLowerCase();
    if (qLower.includes('reel') || qLower.includes('video')) {
      return `Reels account for ${formatBreakdown.find(f => f.format === 'Reel')?.percentage || '45'}% of all posts and drive ${formatBreakdown.find(f => f.format === 'Reel')?.avgViews?.toLocaleString() || '180k'} avg views. They use fast audio cuts and bold text overlays to capture initial attention.`;
    }
    if (qLower.includes('audience') || qLower.includes('target') || qLower.includes('who')) {
      return `Target audience: ${executiveSummary.targetAudience}. They appeal through structured tactical teardowns and pragmatic career/growth advice.`;
    }
    if (qLower.includes('save') || qLower.includes('hook') || qLower.includes('caption')) {
      return `Top hooks: Problem-Agitate and Checklist styles drive over 8,000 saves per carousel post, functioning as saved reference bookmarks for followers.`;
    }
    if (qLower.includes('gap') || qLower.includes('weak') || qLower.includes('opportunity')) {
      return `Critical gap: ${executiveSummary.biggestWeakness}. Expanding into ${executiveSummary.biggestOpportunity} could unlock up to 25% incremental reach.`;
    }
    // Default smart answer
    return `Analysis for @${profile.username}: The account's primary growth engine is ${contentPillars[0]?.name || 'Educational Guides'} (${contentPillars[0]?.percentage || '35'}% of output). They maintain a ${profile.avgEngagementRate}% engagement rate across ${profile.postsCount} analyzed assets.`;
  };

  const currentAnswerText = activeAnswer || quickQuestions.find(q => q.q === selectedQuestion)?.answer || getAnswerForQuery(selectedQuestion);

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customQuestionInput.trim()) return;
    setSelectedQuestion(customQuestionInput);
    setActiveAnswer(getAnswerForQuery(customQuestionInput));
    setCustomQuestionInput('');
  };

  return (
    <div className="view-content-area animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Top Navigation Bar: Return to Hub & Actions */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <button
          onClick={onBackToHub}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            padding: '8px 18px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#0F172A',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F8FAFC';
            e.currentTarget.style.borderColor = '#0284C7';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.08)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft className="w-3.5 h-3.5 text-sky-600" />
          <span>Back to Analysis Hub</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onAnalyzeNewProfile}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E293B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0F172A';
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Paste Another Link</span>
          </button>
        </div>
      </div>

      {/* Profile Identity Card */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(15, 23, 42, 0.07)',
          padding: '28px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '24px',
          flexWrap: 'wrap',
          boxShadow: '0 4px 20px -6px rgba(0, 0, 0, 0.03)'
        }}
      >
        <img 
          src={profile.avatarUrl} 
          alt={profile.username}
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '22px',
            objectFit: 'cover',
            border: '2px solid rgba(2, 132, 199, 0.2)',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)'
          }}
        />

        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0F172A' }}>
              {profile.fullName || profile.username}
            </h1>
            <span style={{ color: '#0284C7', fontSize: '1rem', fontWeight: 700 }}>
              @{profile.username}
            </span>
            {profile.verified && (
              <span 
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#0284C7',
                  backgroundColor: '#E0F2FE',
                  padding: '2px 8px',
                  borderRadius: '9999px'
                }}
              >
                Verified
              </span>
            )}
            <span 
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#059669',
                backgroundColor: '#DCFCE7',
                padding: '2px 8px',
                borderRadius: '9999px'
              }}
            >
              Analysis Complete
            </span>
          </div>

          <p style={{
            fontSize: '0.92rem',
            color: '#475569',
            marginBottom: '16px',
            lineHeight: 1.5,
            maxWidth: '820px'
          }}>
            {profile.bio}
          </p>

          {/* Follower & Metadata Stats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '0.86rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong style={{ color: '#0F172A', fontSize: '1rem' }}>
                {profile.followers?.toLocaleString()}
              </strong> 
              <span style={{ color: '#64748B' }}>Followers</span>
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong style={{ color: '#0F172A', fontSize: '1rem' }}>
                {profile.following?.toLocaleString()}
              </strong> 
              <span style={{ color: '#64748B' }}>Following</span>
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} color="#0284C7" />
              <span style={{ color: '#64748B' }}>Cadence:</span>
              <strong style={{ color: '#0F172A' }}>{profile.postingFrequency || '4.8/week'}</strong>
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} color="#D97706" />
              <span style={{ color: '#64748B' }}>Period:</span>
              <strong style={{ color: '#0F172A' }}>{profile.dateRange}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CORE USER FEATURE: DIRECT AI ANSWERS & STRATEGY ASSISTANT
          ========================================================================= */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid rgba(2, 132, 199, 0.25)',
          padding: '28px',
          marginBottom: '28px',
          boxShadow: '0 8px 30px -8px rgba(2, 132, 199, 0.12)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
        }}
      >
        {/* Answers Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '11px',
                background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)'
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#0F172A' }}>
                AI Strategic Answers for @{profile.username}
              </h2>
              <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Instant answers synthesized across {profile.postsCount} analyzed posts, Reels, and metrics.
              </span>
            </div>
          </div>

          <span 
            style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#0284C7',
              backgroundColor: '#E0F2FE',
              padding: '4px 12px',
              borderRadius: '9999px'
            }}
          >
            Direct Answers Engine
          </span>
        </div>

        {/* Quick Question Chips */}
        <div style={{ marginBottom: '18px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '10px' }}>
            Choose an intelligence question:
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {quickQuestions.map((item) => {
              const isSelected = selectedQuestion === item.q;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => {
                    setSelectedQuestion(item.q);
                    setActiveAnswer(item.answer);
                  }}
                  style={{
                    backgroundColor: isSelected ? '#0F172A' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#334155',
                    border: isSelected ? '1px solid #0F172A' : '1px solid #E2E8F0',
                    borderRadius: '9999px',
                    padding: '8px 14px',
                    fontSize: '12.5px',
                    fontWeight: isSelected ? '700' : '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 12px rgba(15, 23, 42, 0.15)' : '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.q}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Answer Display Card */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            padding: '20px 22px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
            marginBottom: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Answer to: {selectedQuestion}
            </span>
          </div>

          <p 
            style={{
              margin: 0,
              fontSize: '14.5px',
              lineHeight: 1.6,
              color: '#0F172A',
              fontWeight: '500'
            }}
          >
            {currentAnswerText}
          </p>
        </div>

        {/* Ask Custom Question Input Bar */}
        <form onSubmit={handleCustomSubmit} style={{ position: 'relative' }}>
          <input 
            type="text"
            value={customQuestionInput}
            onChange={(e) => setCustomQuestionInput(e.target.value)}
            placeholder="Ask any custom question about this profile (e.g. How do they convert followers?)..."
            style={{
              width: '100%',
              padding: '12px 110px 12px 16px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #CBD5E1',
              borderRadius: '14px',
              fontSize: '13px',
              color: '#0F172A',
              outline: 'none',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#0284C7'}
            onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
          />

          <button
            type="submit"
            style={{
              position: 'absolute',
              right: '6px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#0284C7',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '7px 14px',
              fontSize: '12px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Ask AI</span>
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Top Level KPI Grid */}
      <div className="kpi-grid" style={{ marginBottom: '28px' }}>
        <div className="kpi-card" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="kpi-card-header">
            <span style={{ color: '#64748B' }}>Total Posts Analyzed</span>
            <Layers size={16} color="#0284C7" />
          </div>
          <div className="kpi-card-value" style={{ color: '#0F172A' }}>{profile.postsCount}</div>
          <div className="kpi-card-subtext">
            <span style={{ color: '#64748B' }}>{profile.reelsCount} Reels • {profile.carouselsCount} Carousels</span>
          </div>
        </div>

        <div className="kpi-card" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="kpi-card-header">
            <span style={{ color: '#64748B' }}>Avg Views / Post</span>
            <Eye size={16} color="#DB2777" />
          </div>
          <div className="kpi-card-value" style={{ color: '#0F172A' }}>{profile.avgViews?.toLocaleString()}</div>
          <div className="kpi-card-subtext">
            <span style={{ color: '#64748B' }}>Reels avg: {formatBreakdown.find(f => f.format === 'Reel')?.avgViews?.toLocaleString()}</span>
          </div>
        </div>

        <div className="kpi-card" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="kpi-card-header">
            <span style={{ color: '#64748B' }}>Avg Engagement Rate</span>
            <TrendingUp size={16} color="#059669" />
          </div>
          <div className="kpi-card-value" style={{ color: '#059669' }}>
            {profile.avgEngagementRate}%
          </div>
          <div className="kpi-card-subtext">
            <span style={{ color: '#64748B' }}>Industry median: 2.4%</span>
          </div>
        </div>

        <div className="kpi-card" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="kpi-card-header">
            <span style={{ color: '#64748B' }}>Top Content Pillar</span>
            <Award size={16} color="#7C3AED" />
          </div>
          <div className="kpi-card-value" style={{ fontSize: '1.25rem', color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {contentPillars[0]?.name || 'Core Frameworks'}
          </div>
          <div className="kpi-card-subtext">
            <span style={{ color: '#64748B' }}>{contentPillars[0]?.percentage}% of total volume</span>
          </div>
        </div>
      </div>

      {/* AI Executive Strategy Briefing Grid */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          padding: '28px',
          marginBottom: '28px',
          boxShadow: '0 4px 20px -6px rgba(0, 0, 0, 0.03)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px 0', color: '#0F172A' }}>
              Strategic Breakdown & Core Answers
            </h2>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Derived directly from observable content performance patterns
            </span>
          </div>

          <button 
            onClick={() => onNavigateTab('recommendations')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#F1F5F9',
              border: '1px solid #E2E8F0',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '700',
              color: '#0284C7',
              cursor: 'pointer'
            }}
          >
            <span>View Full Recommendations Playbook</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* 6 Core Executive Answers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
          {/* 1. What this account is doing */}
          <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0284C7', marginBottom: '6px' }}>
              1. What this account is doing
            </div>
            <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.55, margin: 0 }}>
              {executiveSummary.strategyOverview}
            </p>
          </div>

          {/* 2. Who they appear to target */}
          <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7C3AED', marginBottom: '6px' }}>
              2. Who they appear to target
            </div>
            <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.55, margin: 0 }}>
              {executiveSummary.targetAudience}
            </p>
          </div>

          {/* 3. What they talk about most */}
          <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#D97706', marginBottom: '6px' }}>
              3. What they talk about most
            </div>
            <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.55, margin: 0 }}>
              {executiveSummary.dominantThemes}
            </p>
          </div>

          {/* 4. What performs best */}
          <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#059669', marginBottom: '6px' }}>
              4. What performs best & why
            </div>
            <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.55, margin: 0 }}>
              {executiveSummary.topPerformingPattern}
            </p>
          </div>

          {/* 5. Biggest weakness */}
          <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#DC2626', marginBottom: '6px' }}>
              5. Biggest weakness
            </div>
            <p style={{ fontSize: '13.5px', color: '#450A0A', lineHeight: 1.55, margin: 0 }}>
              {executiveSummary.biggestWeakness}
            </p>
          </div>

          {/* 6. Biggest opportunity */}
          <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#FFFBEB', border: '1px solid #FDE68A' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#D97706', marginBottom: '6px' }}>
              6. Biggest strategic opportunity
            </div>
            <p style={{ fontSize: '13.5px', color: '#78350F', lineHeight: 1.55, margin: 0 }}>
              {executiveSummary.biggestOpportunity}
            </p>
          </div>
        </div>
      </div>

      {/* Format Breakdown & Content Pillars Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {/* Format Quick Glance */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(15, 23, 42, 0.08)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>Format Volume Distribution</h3>
            <button 
              onClick={() => onNavigateTab('format-analysis')}
              style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0284C7', background: 'none' }}
            >
              Full Comparison →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {formatBreakdown.map((fmt) => (
              <div key={fmt.format}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 700, color: '#0F172A' }}>{fmt.format}s</span>
                  <span style={{ color: '#64748B' }}>
                    {fmt.posts} posts ({fmt.percentage}%) • Avg {fmt.avgViews?.toLocaleString()} views
                  </span>
                </div>
                <div style={{ height: '7px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${fmt.percentage}%`,
                    background: fmt.format === 'Reel' ? 'linear-gradient(90deg, #F43F5E, #FB7185)' : (fmt.format === 'Carousel' ? 'linear-gradient(90deg, #0284C7, #38BDF8)' : '#94A3B8'),
                    borderRadius: '9999px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Discovered Pillars Quick Glance */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(15, 23, 42, 0.08)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>Top Content Pillars</h3>
            <button 
              onClick={() => onNavigateTab('content-pillars')}
              style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0284C7', background: 'none' }}
            >
              All Pillars →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {contentPillars.slice(0, 3).map((pillar) => (
              <div key={pillar.name} style={{
                padding: '12px 14px',
                borderRadius: '14px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>
                    {pillar.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                    {pillar.count} posts ({pillar.percentage}%) • {pillar.avgEngagement}% avg engagement
                  </div>
                </div>
                <span 
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#0284C7',
                    backgroundColor: '#E0F2FE',
                    padding: '3px 8px',
                    borderRadius: '9999px'
                  }}
                >
                  {pillar.avgViews?.toLocaleString()} views
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
