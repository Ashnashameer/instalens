import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  Link as LinkIcon, 
  Clipboard, 
  Check, 
  ShieldCheck,
  Camera
} from 'lucide-react';
import InstaLensLogo from './InstaLensLogo';
import { resolveProfileFromInput, validateInstagramUrl } from '../utils/profileGenerator';

export default function ProfileInputModal({ isOpen, onClose, onStartAnalysis }) {
  const [inputUrl, setInputUrl] = useState('');
  const [hasPasted, setHasPasted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setError('');
      setHasPasted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setInputUrl(text);
          setHasPasted(true);
          setError('');
          setTimeout(() => setHasPasted(false), 2000);
        }
      }
    } catch (err) {
      // Clipboard permission fallback
    }
  };

  const handleQuickSelect = (handle) => {
    setInputUrl(`https://www.instagram.com/${handle}/`);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputUrl.trim();
    if (!query) {
      setError('Please paste an Instagram profile URL (e.g., https://www.instagram.com/growthacademy.ai/)');
      return;
    }

    const validation = validateInstagramUrl(query);
    if (!validation.isValid) {
      setError(validation.error || 'Please enter a valid Instagram profile URL.');
      return;
    }

    try {
      const resolvedProfile = resolveProfileFromInput(validation.username);
      onStartAnalysis(resolvedProfile);
    } catch (err) {
      setError('Could not process profile data. Please verify the URL and try again.');
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        zIndex: 999999,
        transform: 'translateZ(0)',
        willChange: 'transform',
        isolation: 'isolate',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="modal-card animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          boxShadow: '0 24px 64px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(15, 23, 42, 0.06)',
          padding: '36px 36px 32px 36px',
          position: 'relative',
          boxSizing: 'border-box',
          overflow: 'hidden',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        {/* Subtle Ambient Pastel Top Glow */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #0284C7 0%, #38BDF8 50%, #0EA5E9 100%)'
          }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E2E8F0';
            e.currentTarget.style.color = '#0F172A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F1F5F9';
            e.currentTarget.style.color = '#64748B';
          }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon + Title */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
            <InstaLensLogo size={42} showText={false} />

            <div>
              <span 
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#0284C7'
                }}
              >
                Profile Intelligence
              </span>
              <h2 
                style={{
                  margin: 0,
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#0F172A',
                  letterSpacing: '-0.02em'
                }}
              >
                Analyze Instagram Profile
              </h2>
            </div>
          </div>

          <p 
            style={{
              margin: 0,
              fontSize: '13.5px',
              color: '#64748B',
              lineHeight: 1.5
            }}
          >
            Paste an Instagram profile URL to automatically derive followers, posts, captions, reels, hashtags, and performance patterns.
          </p>
        </div>

        {/* Form Input Area */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label 
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '600',
                color: '#334155',
                marginBottom: '8px'
              }}
            >
              Instagram Profile URL
            </label>

            <div 
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  left: '16px',
                  color: '#94A3B8',
                  display: 'flex',
                  alignItems: 'center',
                  pointerEvents: 'none'
                }}
              >
                <LinkIcon className="w-4 h-4" />
              </div>

              <input 
                type="text"
                autoFocus
                value={inputUrl}
                onChange={(e) => {
                  setInputUrl(e.target.value);
                  if (error) setError('');
                }}
                placeholder="https://www.instagram.com/example/"
                style={{
                  width: '100%',
                  padding: '14px 90px 14px 44px',
                  backgroundColor: '#F8FAFC',
                  border: error ? '1.5px solid #EF4444' : '1.5px solid #CBD5E1',
                  borderRadius: '16px',
                  fontSize: '14px',
                  color: '#0F172A',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  if (!error) e.target.style.borderColor = '#0284C7';
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(2, 132, 199, 0.12)';
                }}
                onBlur={(e) => {
                  if (!error) e.target.style.borderColor = '#CBD5E1';
                  e.target.style.backgroundColor = '#F8FAFC';
                  e.target.style.boxShadow = 'none';
                }}
              />

              {/* Paste Button */}
              <button
                type="button"
                onClick={handlePaste}
                style={{
                  position: 'absolute',
                  right: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '10px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: hasPasted ? '#059669' : '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
                title="Paste from clipboard"
              >
                {hasPasted ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pasted!</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3.5 h-3.5 text-slate-500" />
                    <span>Paste</span>
                  </>
                )}
              </button>
            </div>

            {error && (
              <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#EF4444' }}>
                {error}
              </p>
            )}
          </div>

          {/* Quick Select Presets / Popular Accounts */}
          <div style={{ marginBottom: '26px' }}>
            <span 
              style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#64748B',
                marginBottom: '10px'
              }}
            >
              Or try a sample profile URL:
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { handle: 'growthacademy.ai', label: '@growthacademy.ai', tag: 'AI Careers' },
                { handle: 'lumina_skincare', label: '@lumina_skincare', tag: 'Skincare' },
                { handle: 'alexrivera.tech', label: '@alexrivera.tech', tag: 'Tech Systems' },
                { handle: 'nike', label: '@nike', tag: 'Athletics' },
                { handle: 'hubspot', label: '@hubspot', tag: 'B2B SaaS' }
              ].map((item) => (
                <button
                  key={item.handle}
                  type="button"
                  onClick={() => handleQuickSelect(item.handle)}
                  style={{
                    backgroundColor: inputUrl.includes(item.handle) ? '#E0F2FE' : '#F1F5F9',
                    border: inputUrl.includes(item.handle) ? '1px solid #0284C7' : '1px solid rgba(15, 23, 42, 0.06)',
                    borderRadius: '9999px',
                    padding: '5px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: inputUrl.includes(item.handle) ? '#0284C7' : '#334155',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!inputUrl.includes(item.handle)) {
                      e.currentTarget.style.backgroundColor = '#E2E8F0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!inputUrl.includes(item.handle)) {
                      e.currentTarget.style.backgroundColor = '#F1F5F9';
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ fontSize: '10px', color: '#64748B', fontWeight: '500' }}>
                    • {item.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            id="btn-analyze-profile-submit"
            style={{
              width: '100%',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '16px',
              padding: '14px 20px',
              fontSize: '14px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px -4px rgba(15, 23, 42, 0.25)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E293B';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(15, 23, 42, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0F172A';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(15, 23, 42, 0.25)';
            }}
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Analyze Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Security & Data Scope Assurance */}
        <div 
          style={{
            marginTop: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            color: '#94A3B8',
            fontSize: '11px',
            textAlign: 'center'
          }}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Legitimate public Instagram analysis. Private account insights require connected authorization.</span>
        </div>
      </div>
    </div>
  );
}
