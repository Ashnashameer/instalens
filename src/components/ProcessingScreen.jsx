import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  FastForward, 
  Cpu, 
  Camera,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import InstaLensLogo from './InstaLensLogo';

const STAGES = [
  { id: 1, label: 'Reading profile', detail: 'Parsing public profile bio, credentials, category, and account overview' },
  { id: 2, label: 'Collecting available posts', detail: 'Gathering public carousels, single images, and post timestamps' },
  { id: 3, label: 'Collecting reels', detail: 'Cataloging video formats, durations, view metrics, and cover frames' },
  { id: 4, label: 'Analyzing captions', detail: 'Evaluating first-line hooks, storytelling structure, messaging, and CTAs' },
  { id: 5, label: 'Classifying content', detail: 'Mapping posts into 17 strategic content pillars and audience funnel stages' },
  { id: 6, label: 'Comparing performance', detail: 'Benchmarking engagement rates, view distributions, and interaction curves' },
  { id: 7, label: 'Finding top-performing content', detail: 'Identifying breakout reels and top 10 high-impact assets' },
  { id: 8, label: 'Generating strategic insights', detail: 'Deriving competitor content gaps, hook playbooks, and actionable recommendations' }
];

export default function ProcessingScreen({ profile, onComplete }) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    // Staged progression timer - smoothly traverses the 8 stages
    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 700);
          return prev;
        }
      });
    }, 850);

    return () => clearInterval(interval);
  }, [profile, onComplete]);

  const progressPercentage = Math.round(((currentStageIndex + 1) / STAGES.length) * 100);
  const username = profile?.username || 'instagram';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      position: 'relative',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Background Soft Sky Blue Glow (Landing page palette, no pink) */}
      <div style={{
        position: 'absolute',
        width: '540px',
        height: '380px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(186, 230, 253, 0.22) 45%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        width: '100%',
        maxWidth: '680px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Brand Header on Top */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <InstaLensLogo size={36} showText={true} />
        </div>

        {/* Profile Card & Title */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 20px 48px -12px rgba(15, 23, 42, 0.08)',
          padding: '28px 32px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={profile?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'} 
                alt={username}
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2.5px solid #0284C7',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.15)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: -2,
                right: -2,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#0284C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #FFFFFF'
              }}>
                <Camera size={10} color="#FFFFFF" />
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0284C7' }}>
                Profile Intelligence
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', margin: '2px 0 0 0', letterSpacing: '-0.02em' }}>
                Analyzing @{username}...
              </h2>
              <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0 0' }}>
                Deriving strategy, hooks, and content patterns from public profile data
              </p>
            </div>
          </div>

          {/* Quick Skip Button */}
          <button 
            id="btn-fast-forward-processing"
            onClick={onComplete}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '9999px',
              backgroundColor: '#F1F5F9',
              border: '1px solid #E2E8F0',
              color: '#334155',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0';
              e.currentTarget.style.color = '#0F172A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.color = '#334155';
            }}
          >
            <FastForward size={14} />
            <span>Skip to Results</span>
          </button>
        </div>

        {/* Progress Bar & Current Active Step */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 20px 48px -12px rgba(15, 23, 42, 0.08)',
          padding: '28px 32px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Loader2 size={16} className="animate-spin text-sky-600" />
              <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#0F172A' }}>
                Step {currentStageIndex + 1} of 8: {STAGES[currentStageIndex].label}
              </span>
            </div>
            <span style={{
              fontSize: '14px',
              fontWeight: '800',
              color: '#0284C7'
            }}>
              {progressPercentage}%
            </span>
          </div>

          {/* Bar */}
          <div style={{
            height: '8px',
            backgroundColor: '#F1F5F9',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginBottom: '16px'
          }}>
            <div style={{
              height: '100%',
              width: `${progressPercentage}%`,
              background: 'linear-gradient(90deg, #0284C7 0%, #38BDF8 50%, #818CF8 100%)',
              borderRadius: '9999px',
              transition: 'width 0.4s ease-out'
            }} />
          </div>

          <div style={{
            fontSize: '12.5px',
            color: '#64748B',
            lineHeight: 1.5,
            backgroundColor: '#F8FAFC',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid #E2E8F0'
          }}>
            <strong style={{ color: '#0F172A' }}>Currently processing:</strong> {STAGES[currentStageIndex].detail}
          </div>
        </div>

        {/* The 8 Stages Checklist Display */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 20px 48px -12px rgba(15, 23, 42, 0.08)',
          padding: '24px 32px'
        }}>
          <div style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#64748B',
            marginBottom: '16px'
          }}>
            Analysis Progress
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '10px'
          }}>
            {STAGES.map((stage, idx) => {
              const isPast = idx < currentStageIndex;
              const isCurrent = idx === currentStageIndex;
              const isFuture = idx > currentStageIndex;

              return (
                <div 
                  key={stage.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    backgroundColor: isCurrent ? '#F0F9FF' : 'transparent',
                    border: isCurrent ? '1px solid #BAE6FD' : '1px solid transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    {isPast ? (
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    ) : isCurrent ? (
                      <Loader2 size={16} className="text-sky-600 animate-spin" />
                    ) : (
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '1.5px solid #CBD5E1'
                      }} />
                    )}
                  </div>

                  <span style={{
                    fontSize: '12.5px',
                    fontWeight: isCurrent ? '700' : isPast ? '600' : '400',
                    color: isCurrent ? '#0284C7' : isPast ? '#0F172A' : '#94A3B8'
                  }}>
                    {stage.id}. {stage.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Privacy Note */}
          <div style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '11.5px',
            color: '#94A3B8'
          }}>
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Analyzing legitimate public Instagram data without invasive scraping.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
