import React from 'react';
import { 
  X, 
  Play, 
  Sparkles, 
  Eye, 
  BarChart3, 
  TrendingUp, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Video
} from 'lucide-react';

export default function TutorialModal({ isOpen, onClose, onLaunchDemo }) {
  if (!isOpen) return null;

  const steps = [
    {
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      title: "1. Visual Profile Surveillance",
      desc: "InstaLens scans entire creator and brand feeds, categorizing multi-format posts into visual style archetypes."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-sky-400" />,
      title: "2. Content Intelligence & Pillars",
      desc: "Automatically extracts core thematic pillars, topics, format performance (Reels vs Carousels), and virality ratios."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />,
      title: "3. 'Why It Worked' Root Causes",
      desc: "Deconstructs hooks, watch-time psychology, emotional triggers, and audience retention patterns."
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-300" />,
      title: "4. Strategic Action Engine",
      desc: "Generates actionable START / STOP / CONTINUE directives and identified untapped audience content gaps."
    }
  ];

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      style={{ 
        zIndex: 200,
        backgroundColor: 'rgba(3, 7, 18, 0.82)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div 
        className="modal-content animate-fade-in" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '780px',
          width: '100%',
          backgroundColor: 'rgba(10, 16, 32, 0.88)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '24px',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 240, 255, 0.15)',
          overflow: 'hidden',
          padding: 0
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 32px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(90deg, rgba(14, 25, 52, 0.6) 0%, rgba(10, 16, 32, 0.3) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 242, 254, 0.12)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00F2FE'
            }}>
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h2 style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: '700', 
                color: '#F8FAFC',
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.04em'
              }}>
                InstaLens Cinematic Walkthrough
              </h2>
              <p style={{ margin: 0, fontSize: '13px', color: '#94A3B8' }}>
                AI-Powered Instagram Content Intelligence Platform
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              transition: 'color 0.2s, background-color 0.2s',
              display: 'flex'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Simulation Canvas */}
        <div style={{ padding: '32px' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '220px',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #091224 0%, #060B18 50%, #03060E 100%)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 50px rgba(0, 242, 254, 0.08)'
          }}>
            {/* Visual preview layers */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.18) 0%, transparent 60%)',
              pointerEvents: 'none'
            }} />
            
            <img 
              src="/eyeball_3d_transparent.png" 
              alt="Lens" 
              style={{
                width: '130px',
                height: '130px',
                objectFit: 'contain',
                opacity: 0.85,
                filter: 'drop-shadow(0 0 20px rgba(0, 242, 254, 0.4))'
              }}
            />

            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(5, 10, 24, 0.75)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00F2FE', boxShadow: '0 0 8px #00F2FE' }} />
              <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '500', letterSpacing: '0.06em' }}>
                LIVE DEMO ENGINE READY
              </span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginTop: '24px'
          }}>
            {steps.map((st, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  gap: '12px'
                }}
              >
                <div style={{
                  padding: '8px',
                  height: 'fit-content',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)'
                }}>
                  {st.icon}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#F1F5F9' }}>
                    {st.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#94A3B8', lineHeight: 1.45 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div style={{
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <span style={{ fontSize: '12px', color: '#64748B' }}>
              Full Profile Analysis V1 • Scalable to 1,000s of posts
            </span>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={onClose}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#CBD5E1',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              <button 
                onClick={() => {
                  onClose();
                  onLaunchDemo();
                }}
                style={{
                  padding: '10px 22px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
                  border: 'none',
                  color: '#090D16',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0, 242, 254, 0.35)'
                }}
              >
                <span>Launch Interactive Intelligence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
