import React, { useState } from 'react';
import { 
  Camera, 
  UserCheck, 
  Image as ImageIcon, 
  Film, 
  Flame, 
  PenTool, 
  Hash, 
  BarChart3, 
  GitCompare, 
  ArrowRight, 
  Plus,
  Layers,
  Users,
  Compass,
  Target
} from 'lucide-react';
import InstaLensLogo from './InstaLensLogo';

export default function AnalysisHub({ 
  onSelectAnalysis, 
  onBackHome, 
  onOpenModal,
  activeProfile
}) {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // 8 Analysis Cards as specified in the editorial design brief
  // Styled as small squircle squares matching the visual reference with soft pastel tones
  const cards = [
    // CARD 1: Profile Analyzer (Pale Blue)
    {
      id: 'profile-analyzer',
      title: 'Profile Analyzer',
      description: 'Understand the complete content strategy of an Instagram profile.',
      label: 'PROFILE',
      tab: 'overview',
      buttonText: 'Analyze',
      icon: <UserCheck className="w-3.5 h-3.5 text-sky-600" />,
      accentColor: '#0284C7',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #F4F9FF 48%, #E0F2FE 100%)',
      borderColor: 'rgba(186, 230, 253, 0.45)',
      glowColor: 'rgba(186, 230, 253, 0.65)',
      shadowColor: 'rgba(2, 132, 199, 0.16)'
    },

    // CARD 2: Post Analyzer (Soft Pink)
    {
      id: 'post-analyzer',
      title: 'Post Analyzer',
      description: 'Understand what a post communicates, who it targets, and how effectively it performs.',
      label: 'POST',
      tab: 'content-analysis',
      buttonText: 'Analyze',
      icon: <ImageIcon className="w-3.5 h-3.5 text-pink-600" />,
      accentColor: '#DB2777',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #FFF5F8 48%, #FCE7F3 100%)',
      borderColor: 'rgba(251, 207, 232, 0.45)',
      glowColor: 'rgba(251, 207, 232, 0.65)',
      shadowColor: 'rgba(219, 39, 119, 0.16)'
    },

    // CARD 3: Reel Analyzer (Very Light Purple / Lavender)
    {
      id: 'reel-analyzer',
      title: 'Reel Analyzer',
      description: 'Break down hooks, topics, messaging, format and performance.',
      label: 'REEL',
      tab: 'format-analysis',
      buttonText: 'Analyze',
      icon: <Film className="w-3.5 h-3.5 text-purple-600" />,
      accentColor: '#7C3AED',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #FAF7FF 48%, #EDE9FE 100%)',
      borderColor: 'rgba(221, 214, 254, 0.45)',
      glowColor: 'rgba(221, 214, 254, 0.65)',
      shadowColor: 'rgba(124, 58, 237, 0.16)'
    },

    // CARD 4: Performance (Soft Coral / Peach)
    {
      id: 'performance-analyzer',
      title: 'Performance',
      description: 'Find the most viewed, liked, commented, shared and engaging content.',
      label: 'PERFORMANCE',
      tab: 'performance',
      buttonText: 'Analyze',
      icon: <BarChart3 className="w-3.5 h-3.5 text-orange-600" />,
      accentColor: '#EA580C',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #FFF9F5 48%, #FED7AA 100%)',
      borderColor: 'rgba(254, 215, 170, 0.45)',
      glowColor: 'rgba(254, 215, 170, 0.65)',
      shadowColor: 'rgba(234, 88, 12, 0.16)'
    },

    // CARD 5: Trending Content (Soft Yellow)
    {
      id: 'trending-content',
      title: 'Trending Content',
      description: 'Discover emerging topics, formats and content patterns.',
      label: 'TRENDS',
      tab: 'topics',
      buttonText: 'Explore',
      icon: <Flame className="w-3.5 h-3.5 text-amber-600" />,
      accentColor: '#D97706',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #FEFDF2 48%, #FEF08A 100%)',
      borderColor: 'rgba(254, 240, 138, 0.50)',
      glowColor: 'rgba(254, 240, 138, 0.70)',
      shadowColor: 'rgba(217, 119, 6, 0.16)'
    },

    // CARD 6: Caption Analyzer (Pale Green)
    {
      id: 'caption-analyzer',
      title: 'Caption Analyzer',
      description: 'Understand hooks, messaging, tone, CTAs and persuasion.',
      label: 'CAPTION',
      tab: 'why-it-worked',
      buttonText: 'Analyze',
      icon: <PenTool className="w-3.5 h-3.5 text-emerald-600" />,
      accentColor: '#059669',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #F4FDF7 48%, #DCFCE7 100%)',
      borderColor: 'rgba(187, 247, 208, 0.45)',
      glowColor: 'rgba(187, 247, 208, 0.65)',
      shadowColor: 'rgba(5, 150, 105, 0.16)'
    },

    // CARD 7: Hashtag Intelligence (Ice Cyan)
    {
      id: 'hashtag-analyzer',
      title: 'Hashtag Intelligence',
      description: 'Discover the hashtags being used most and how they relate to the content.',
      label: 'HASHTAGS',
      tab: 'topics',
      buttonText: 'Analyze',
      icon: <Hash className="w-3.5 h-3.5 text-cyan-600" />,
      accentColor: '#0891B2',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #F4FDFF 48%, #CFFAFE 100%)',
      borderColor: 'rgba(165, 243, 252, 0.45)',
      glowColor: 'rgba(165, 243, 252, 0.65)',
      shadowColor: 'rgba(8, 145, 178, 0.16)'
    },

    // CARD 8: Compare (Soft Periwinkle / Slate Indigo)
    {
      id: 'competitor-comparison',
      title: 'Compare',
      description: 'Compare Instagram profiles and discover what each competitor does better.',
      label: 'COMPETITOR',
      tab: 'compare',
      buttonText: 'Compare',
      icon: <GitCompare className="w-3.5 h-3.5 text-indigo-600" />,
      accentColor: '#4F46E5',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #F4F6FF 48%, #C7D2FE 100%)',
      borderColor: 'rgba(199, 210, 254, 0.45)',
      glowColor: 'rgba(199, 210, 254, 0.65)',
      shadowColor: 'rgba(79, 70, 229, 0.16)'
    },

    // CARD 9: Content Analyzer (Soft Teal / Mint)
    {
      id: 'content-analyzer',
      title: 'Content Analyzer',
      description: 'Classify content into 17 strategic pillars, intent, and funnel stages.',
      label: 'CONTENT',
      tab: 'content-analyzer',
      buttonText: 'Analyze',
      icon: <Layers className="w-3.5 h-3.5 text-teal-600" />,
      accentColor: '#0D9488',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #F0FDFA 48%, #CCFBF1 100%)',
      borderColor: 'rgba(204, 251, 241, 0.50)',
      glowColor: 'rgba(204, 251, 241, 0.70)',
      shadowColor: 'rgba(13, 148, 136, 0.16)'
    },

    // CARD 10: Audience Analyzer (Soft Violet)
    {
      id: 'audience-analyzer',
      title: 'Audience Analyzer',
      description: 'Understand target audience intent, anxieties, and emotional drivers.',
      label: 'AUDIENCE',
      tab: 'audience-analyzer',
      buttonText: 'Analyze',
      icon: <Users className="w-3.5 h-3.5 text-purple-600" />,
      accentColor: '#9333EA',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #FAF5FF 48%, #F3E8FF 100%)',
      borderColor: 'rgba(243, 232, 255, 0.50)',
      glowColor: 'rgba(243, 232, 255, 0.70)',
      shadowColor: 'rgba(147, 51, 234, 0.16)'
    },

    // CARD 11: Content Gaps (Soft Warm Amber)
    {
      id: 'content-gaps',
      title: 'Content Gaps',
      description: 'Discover neglected topics, ignored needs, and white-space opportunities.',
      label: 'GAPS',
      tab: 'content-opportunities',
      buttonText: 'Explore',
      icon: <Target className="w-3.5 h-3.5 text-amber-600" />,
      accentColor: '#D97706',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #FFFBEB 48%, #FEF3C7 100%)',
      borderColor: 'rgba(254, 243, 199, 0.50)',
      glowColor: 'rgba(254, 243, 199, 0.70)',
      shadowColor: 'rgba(217, 119, 6, 0.16)'
    },

    // CARD 12: Strategy & Recommendations (Soft Emerald)
    {
      id: 'strategy',
      title: 'Strategy & Ideas',
      description: '35 strategic recommendations and prioritized Impact × Effort action plan.',
      label: 'STRATEGY',
      tab: 'strategic-recommendations',
      buttonText: 'Explore',
      icon: <Compass className="w-3.5 h-3.5 text-emerald-600" />,
      accentColor: '#059669',
      cardBg: 'linear-gradient(150deg, #FFFFFF 0%, #ECFDF5 48%, #D1FAE5 100%)',
      borderColor: 'rgba(209, 250, 229, 0.50)',
      glowColor: 'rgba(209, 250, 229, 0.70)',
      shadowColor: 'rgba(5, 150, 105, 0.16)'
    }
  ];

  // 4 Columns for the asymmetric staggered editorial rhythm (3 cards each)
  const columns = [
    { topOffset: '0px', items: [cards[0], cards[4], cards[8]] },
    { topOffset: '56px', items: [cards[1], cards[5], cards[9]] },
    { topOffset: '-12px', items: [cards[2], cards[6], cards[10]] },
    { topOffset: '44px', items: [cards[3], cards[7], cards[11]] }
  ];

  return (
    <div 
      className="instalens-editorial-page"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Soft Ambient Blurred Pastel Atmosphere in Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(224, 242, 254, 0.4) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(252, 231, 243, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(254, 240, 138, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 80% 80%, rgba(220, 252, 231, 0.3) 0%, transparent 45%)
          `
        }} 
      />

      {/* =========================================================================
          TOP NAVIGATION HEADER
          ========================================================================= */}
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 56px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Brand Left */}
        <button
          onClick={onBackHome}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: 0
          }}
          title="Return to Landing Page"
        >
          <InstaLensLogo size={36} showText={true} />
        </button>

        {/* Navigation Center */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          <button
            onClick={onBackHome}
            style={{
              background: 'none',
              border: 'none',
              padding: '6px 0',
              color: '#64748B',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
          >
            Home
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              padding: '6px 0',
              color: '#0F172A',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            Analyze
            <span 
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '1.5px',
                backgroundColor: '#0F172A',
                borderRadius: '2px'
              }}
            />
          </button>

          <button
            onClick={() => onSelectAnalysis('compare', 'competitor-comparison')}
            style={{
              background: 'none',
              border: 'none',
              padding: '6px 0',
              color: '#64748B',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
          >
            Compare
          </button>
        </nav>

        {/* Right Action: Active Profile Indicator + New Analysis Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {activeProfile && (
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px 4px 5px',
                backgroundColor: 'rgba(241, 245, 249, 0.9)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                borderRadius: '9999px',
                fontSize: '11.5px',
                color: '#334155'
              }}
              title={`Current analyzed profile: @${activeProfile.username}`}
            >
              <img 
                src={activeProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'} 
                alt={activeProfile.username} 
                style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{ fontWeight: '700', color: '#0F172A' }}>@{activeProfile.username}</span>
              <span style={{ color: '#059669', fontSize: '9.5px', fontWeight: '800', backgroundColor: '#ECFDF5', padding: '1px 5px', borderRadius: '4px' }}>
                ANALYZED
              </span>
            </div>
          )}

          <button
            onClick={onOpenModal}
            id="btn-hub-new-analysis"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              padding: '7px 16px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.01em',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E293B';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0F172A';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Plus className="w-3 h-3" />
            <span>Analyze New Profile</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT AREA
          ========================================================================= */}
      <main 
        style={{
          flex: 1,
          maxWidth: '1340px',
          width: '100%',
          margin: '0 auto',
          padding: '48px 48px 64px 48px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* UPPER-LEFT EDITORIAL HEADLINE BLOCK */}
        <div style={{ maxWidth: '640px', marginBottom: '56px' }}>
          {/* Small Section Label */}
          <div 
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#94A3B8',
              marginBottom: '18px'
            }}
          >
            2 Section
          </div>

          {/* Very Large, Thin, Modern Sans-Serif Heading */}
          <h1 
            style={{
              margin: '0 0 20px 0',
              fontSize: 'clamp(42px, 5.2vw, 64px)',
              fontWeight: '300',
              letterSpacing: '-0.035em',
              lineHeight: 1.06,
              color: '#0F172A',
              fontFamily: "'Inter', -apple-system, sans-serif"
            }}
          >
            Analyze Instagram<br />
            <span style={{ fontWeight: '400', letterSpacing: '-0.04em' }}>with clarity.</span>
          </h1>

          {/* Supporting Text: Small, Light, Generous Whitespace */}
          <p 
            style={{
              margin: 0,
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: 1.65,
              color: '#64748B',
              maxWidth: '430px'
            }}
          >
            Choose what you want to understand.<br />
            From individual posts to complete profiles,<br />
            discover the patterns behind Instagram content.
          </p>
        </div>

        {/* =======================================================================
            ASYMMETRIC COMPOSITION OF FLOATING SQUIRCLE ANALYSIS CARDS
            - Staggered vertical heights (no standard symmetrical grid)
            - Small rounded square cards directly inspired by the uploaded reference
            - Soft blurred pastel gradient glow near the bottom / beneath
            ======================================================================= */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            alignItems: 'start',
            marginTop: '20px'
          }}
        >
          {columns.map((col, colIdx) => (
            <div 
              key={colIdx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                marginTop: col.topOffset
              }}
            >
              {col.items.map((card) => {
                const isHovered = hoveredCardId === card.id;

                return (
                  <div
                    key={card.id}
                    onClick={() => onSelectAnalysis(card.tab, card.id)}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '250px',
                      aspectRatio: '1 / 1',
                      margin: '0 auto',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Soft Blurred Pastel Gradient Glow Behind / Near Bottom */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '-12px',
                        left: '12%',
                        right: '12%',
                        height: '52px',
                        background: card.glowColor,
                        filter: 'blur(26px)',
                        borderRadius: '50%',
                        zIndex: 0,
                        opacity: isHovered ? 0.95 : 0.55,
                        transform: isHovered ? 'scale(1.15) translateY(4px)' : 'scale(1)',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Squircle Card Surface (Directly inspired by uploaded reference image) */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        borderRadius: '34px',
                        background: card.cardBg,
                        border: isHovered 
                          ? `1px solid ${card.accentColor}` 
                          : `1px solid ${card.borderColor}`,
                        boxShadow: isHovered 
                          ? `0 18px 36px -10px ${card.shadowColor}, 0 2px 8px rgba(0, 0, 0, 0.02)` 
                          : '0 8px 22px -6px rgba(0, 0, 0, 0.03), 0 2px 6px rgba(0, 0, 0, 0.01)',
                        padding: '22px 20px 18px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxSizing: 'border-box',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Top Row: Small Minimal Label + Micro Icon */}
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span 
                          style={{
                            fontSize: '10px',
                            fontWeight: '600',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#64748B'
                          }}
                        >
                          {card.label}
                        </span>

                        <div 
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(6px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)'
                          }}
                        >
                          {card.icon}
                        </div>
                      </div>

                      {/* Middle: Title & Short Minimal Description */}
                      <div style={{ margin: 'auto 0 8px 0' }}>
                        <h2 
                          style={{
                            margin: '0 0 5px 0',
                            fontSize: '16.5px',
                            fontWeight: '700',
                            letterSpacing: '-0.025em',
                            color: '#0F172A',
                            fontFamily: "'Inter', sans-serif"
                          }}
                        >
                          {card.title}
                        </h2>

                        <p 
                          style={{
                            margin: 0,
                            fontSize: '11px',
                            fontWeight: '400',
                            lineHeight: 1.42,
                            color: '#64748B'
                          }}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* Bottom Action: Frosted Capsule Pill Button (Matching "Log Mood" in reference) */}
                      <div 
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.78)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255, 255, 255, 0.9)',
                          borderRadius: '9999px',
                          padding: '7px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          width: '100%',
                          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.02)',
                          boxSizing: 'border-box',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        <span 
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            letterSpacing: '0.01em',
                            color: isHovered ? card.accentColor : '#334155',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          {card.buttonText}
                        </span>

                        <ArrowRight 
                          className="w-3 h-3"
                          style={{
                            color: card.accentColor,
                            transform: isHovered ? 'translateX(2px)' : 'translateX(0)',
                            transition: 'transform 0.2s ease'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>

      {/* =========================================================================
          BOTTOM UNDERSTATED AREA
          ========================================================================= */}
      <footer 
        style={{
          borderTop: '1px solid rgba(15, 23, 42, 0.04)',
          padding: '24px 56px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div 
          style={{
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.06em',
            color: '#475569'
          }}
        >
          Analyze. Understand. Compare.
        </div>

        <div 
          style={{
            fontSize: '10.5px',
            fontWeight: '400',
            letterSpacing: '0.04em',
            color: '#94A3B8'
          }}
        >
          Powered by InstaLens AI
        </div>
      </footer>
    </div>
  );
}
