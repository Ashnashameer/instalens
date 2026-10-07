import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import TutorialModal from './TutorialModal';

export default function LandingPage({ onAnalyzeClick, onExploreDemoClick, isModalOpen = false }) {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Subtle interactive parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // -1 to 1
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="landing-white-container"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* =========================================================================
          1. CLEAN WHITE AMBIENT BACKGROUND WITH SUBTLE VOLUMETRIC AURA
          ========================================================================= */}
      
      {/* Soft ethereal ambient glow behind the hero */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 50%, rgba(224, 242, 254, 0.6) 0%, rgba(240, 249, 255, 0.3) 45%, #FFFFFF 75%)
          `,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Subtle animated floating aura */}
      <div 
        style={{
          position: 'absolute',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(186, 230, 253, 0.08) 45%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'ambientPulse 8s ease-in-out infinite alternate'
        }}
      />

      {/* =========================================================================
          2. TOP NAVIGATION (Clean Minimal Editorial)
          ========================================================================= */}
      <header 
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '36px 56px 0 56px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Top-Left Navigation Links */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          {['HOME', 'ABOUT US', 'FEATURES', 'CONTACT'].map((item, index) => (
            <button
              key={item}
              onClick={onExploreDemoClick}
              style={{
                background: 'none',
                border: 'none',
                padding: '4px 0',
                color: index === 0 ? '#0F172A' : '#64748B',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'color 0.25s ease, transform 0.25s ease',
                position: 'relative',
                fontFamily: "'Outfit', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0284C7';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = index === 0 ? '#0F172A' : '#64748B';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Top-Right Segmented Capsule (Sign Up / Sign In) */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(241, 245, 249, 0.9)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '9999px',
            padding: '3px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
          }}
        >
          <button
            onClick={onAnalyzeClick}
            style={{
              backgroundColor: '#0F172A',
              border: 'none',
              color: '#FFFFFF',
              padding: '8px 22px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.25)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E293B';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 132, 199, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0F172A';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.25)';
            }}
          >
            Get Started
          </button>

          <button
            onClick={onExploreDemoClick}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#334155',
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0284C7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#334155';
            }}
          >
            Analyze Instagram
          </button>
        </div>
      </header>

      {/* =========================================================================
          3. SIDE VERTICAL ACCENTS (2026 on left, Socials on right)
          ========================================================================= */}
      
      {/* Left Vertical Element: 2026 */}
      <div 
        style={{
          position: 'absolute',
          left: '56px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          pointerEvents: 'none'
        }}
      >
        <span 
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.24em',
            color: '#94A3B8',
            fontFamily: "'Outfit', sans-serif"
          }}
        >
          2026
        </span>
        <div 
          style={{
            width: '1px',
            height: '42px',
            background: 'linear-gradient(180deg, #CBD5E1 0%, rgba(203, 213, 225, 0.2) 100%)'
          }}
        />
      </div>

      {/* Right Vertical Element: Minimalist Social Glyphs */}
      <div 
        style={{
          position: 'absolute',
          right: '56px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        {[
          { label: 'f', tip: 'Facebook' },
          { label: '𝕏', tip: 'Twitter / X' },
          { label: '♪', tip: 'TikTok' }
        ].map((icon) => (
          <button
            key={icon.label}
            title={icon.tip}
            onClick={onExploreDemoClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '4px',
              transition: 'all 0.25s ease',
              fontFamily: "'Inter', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0284C7';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94A3B8';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {icon.label}
          </button>
        ))}
      </div>

      {/* =========================================================================
          4. HERO STAGE (Centerpiece Composition with Depth Layering)
          ========================================================================= */}
      <main 
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: isModalOpen ? 'none' : 'auto',
          opacity: isModalOpen ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* -------------------------------------------------------------
            LAYER 1 (BEHIND): GIANT UPPERCASE "INSTALENS" WATERMARK TYPOGRAPHY
            ------------------------------------------------------------- */}
        <div 
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
            zIndex: 1,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.4s ease-out',
            width: '100%',
            maxWidth: '1240px',
            boxSizing: 'border-box'
          }}
        >
          <h1 
            style={{
              margin: 0,
              padding: 0,
              fontSize: 'clamp(3.5rem, 8.8vw, 8.2rem)',
              fontFamily: "'Syne', 'Outfit', sans-serif",
              fontWeight: '900',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              lineHeight: 1,
              userSelect: 'none',
              textAlign: 'center',
              /* Clean architectural translucent gradient on white */
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.09) 0%, rgba(30, 58, 105, 0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 18px rgba(2, 132, 199, 0.06))',
              opacity: 0.95
            }}
          >
            INSTALENS
          </h1>
        </div>

        {/* -------------------------------------------------------------
            LAYER 2 (FOREGROUND): CLEAN 3D LIGHT-BLUE GLASS ORB
            ------------------------------------------------------------- */}
        {/* -------------------------------------------------------------
            LAYER 2 (FOREGROUND): INSTAGRAM-STYLE ICON COMPOSITION
            (Grey curved square squircle + Center 3D Glass Lens + Top-Right Viewfinder Lens)
            ------------------------------------------------------------- */}
        <div 
          onClick={onExploreDemoClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            zIndex: 20,
            pointerEvents: 'auto',
            width: 'min(72vmin, 480px)',
            height: 'min(72vmin, 480px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transform: `
              translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)
              scale(${isHovered ? 1.03 : 1})
            `,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease'
          }}
          title="Click to explore InstaLens AI Analysis Hub"
        >
          {/* Subtle Ambient Glow behind the Instagram Icon */}
          <div 
            style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: '28%',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(186, 230, 253, 0.12) 50%, transparent 72%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              transform: isHovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              opacity: isHovered ? 1 : 0.65
            }}
          />

          {/* Floating Levitation Container */}
          <div 
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              animation: 'heroEyeballFloat 7s ease-in-out infinite alternate',
              filter: `
                drop-shadow(0 20px 45px rgba(15, 23, 42, 0.10))
                drop-shadow(0 0 ${isHovered ? '30px' : '15px'} rgba(56, 189, 248, ${isHovered ? '0.45' : '0.22'}))
              `
            }}
          >
            {/* 1. The Grey Curved Square (Instagram Squircle Outline) */}
            <svg 
              viewBox="0 0 460 460"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'visible'
              }}
            >
              <rect 
                x="14" 
                y="14" 
                width="432" 
                height="432" 
                rx="124" 
                ry="124" 
                fill="none" 
                stroke="#8A92A0" 
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'stroke 0.3s ease, filter 0.3s ease',
                  stroke: isHovered ? '#6B7280' : '#8A92A0'
                }}
              />
            </svg>

            {/* 2. Top-Right Small Blue Glass Flash/Viewfinder Lens */}
            <div 
              style={{
                position: 'absolute',
                top: '11%',
                right: '11%',
                width: '15%',
                height: '15%',
                borderRadius: '50%',
                filter: 'drop-shadow(0 4px 14px rgba(15, 23, 42, 0.16))',
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            >
              <img 
                src="/orb_white_clean.png" 
                alt="Instagram Flash Viewfinder" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* 3. Center Main 3D Blue Glass Lens */}
            <div 
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '65%',
                height: '65%',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/orb_white_clean.png" 
                alt="InstaLens Camera Lens" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  pointerEvents: 'none',
                  display: 'block',
                  filter: 'drop-shadow(0 14px 30px rgba(15, 23, 42, 0.12))'
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================================
          5. BOTTOM EDITORIAL & GLASSMORPHIC INTERACTIVE ELEMENTS
          ========================================================================= */}
      <footer 
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '0 56px 48px 56px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Bottom-Left Editorial Block */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxWidth: '300px'
          }}
        >
          {/* Thin Vertical Line */}
          <div 
            style={{
              width: '1.5px',
              height: '18px',
              background: 'linear-gradient(180deg, #0284C7 0%, rgba(2, 132, 199, 0.15) 100%)',
              marginLeft: '2px',
              marginBottom: '2px'
            }}
          />

          {/* Glowing Dot + ABOUT US */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span 
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#0284C7',
                boxShadow: '0 0 8px rgba(2, 132, 199, 0.7)'
              }}
            />
            <span 
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.22em',
                color: '#0284C7',
                textTransform: 'uppercase',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              ABOUT US
            </span>
          </div>

          {/* Editorial Subtitle on 2 lines */}
          <p 
            style={{
              margin: '2px 0 0 0',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: 1.45,
              color: '#334155',
              letterSpacing: '0.01em',
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            We generate aesthetic<br />pictures for you
          </p>
        </div>

        {/* Bottom-Right Translucent Glassmorphism Button: "Watch A Tutorial →" */}
        <div>
          <button
            onClick={() => setIsTutorialOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '13px 26px',
              borderRadius: '9999px',
              color: '#0F172A',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05), 0 0 20px rgba(2, 132, 199, 0.1)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.55)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.08), 0 0 30px rgba(2, 132, 199, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.25)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.05), 0 0 20px rgba(2, 132, 199, 0.1)';
            }}
          >
            <span>Watch A Tutorial</span>
            <div 
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(2, 132, 199, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0284C7'
              }}
            >
              <Play className="w-2.5 h-2.5 fill-current" />
            </div>
          </button>
        </div>
      </footer>

      {/* =========================================================================
          6. INTERACTIVE TUTORIAL MODAL
          ========================================================================= */}
      <TutorialModal 
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
        onLaunchDemo={() => {
          setIsTutorialOpen(false);
          onExploreDemoClick();
        }}
      />
    </div>
  );
}
