import React from 'react';

/**
 * InstaLens Official Brand Logo
 * Replicates the landing page hero design:
 * - Grey curved square (Instagram squircle outline)
 * - 3D Blue Glass Camera Lens in the center
 * - Top-right small viewfinder lens
 * - Landing page typography & colors (Slate #0F172A + Ocean Sky Blue #0284C7, NO PINK)
 */
export default function InstaLensLogo({ 
  size = 32, 
  showText = false, 
  subtitle = null,
  textStyle = {},
  className = ''
}) {
  const iconSize = size;

  return (
    <div 
      className={`instalens-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${Math.max(8, Math.round(iconSize * 0.3))}px`,
        userSelect: 'none'
      }}
    >
      {/* Landing Page Camera Squircle Icon */}
      <div 
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          position: 'relative',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Grey Curved Square Squircle Outline */}
        <svg 
          viewBox="0 0 100 100" 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible'
          }}
        >
          <rect 
            x="6" 
            y="6" 
            width="88" 
            height="88" 
            rx="26" 
            ry="26" 
            fill="none" 
            stroke="#8A92A0" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>

        {/* Top-Right Small Blue Glass Viewfinder */}
        <div 
          style={{
            position: 'absolute',
            top: '13%',
            right: '13%',
            width: '17%',
            height: '17%',
            borderRadius: '50%',
            overflow: 'hidden',
            filter: 'drop-shadow(0 1px 3px rgba(15, 23, 42, 0.2))'
          }}
        >
          <img 
            src="/orb_white_clean.png" 
            alt="" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        {/* Center Main 3D Blue Glass Camera Lens */}
        <div 
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '64%',
            height: '64%',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src="/orb_white_clean.png" 
            alt="InstaLens" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 3px 8px rgba(2, 132, 199, 0.22))'
            }}
          />
        </div>
      </div>

      {/* Typography: Landing page colors (Slate + Sky Blue, NO PINK) */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <div 
            style={{
              fontSize: `${Math.max(15, Math.round(iconSize * 0.52))}px`,
              fontWeight: 800,
              fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: '-0.025em',
              color: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              ...textStyle
            }}
          >
            <span>Insta</span>
            <span style={{ color: '#0284C7', marginLeft: '1px' }}>Lens</span>
          </div>

          {subtitle && (
            <span 
              style={{
                fontSize: `${Math.max(10, Math.round(iconSize * 0.3))}px`,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#64748B',
                marginTop: '2px'
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
