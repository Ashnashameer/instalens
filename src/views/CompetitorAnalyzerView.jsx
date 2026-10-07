import React, { useState, useMemo } from 'react';
import { 
  GitCompare, 
  Plus, 
  Trash2,
  Sparkles,
  Link as LinkIcon,
  CheckCircle2, 
  AlertCircle, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Eye,
  Bookmark,
  Award,
  Zap,
  Check,
  Clipboard,
  ExternalLink,
  Users,
  Compass
} from 'lucide-react';
import ConfidenceBadge from '../components/ConfidenceBadge';
import InstaLensLogo from '../components/InstaLensLogo';
import { PRESET_COMPETITORS, buildDynamicCompetitor, runMultiCompetitorAnalysis } from '../utils/competitorAnalytics';
import { validateInstagramUrl } from '../utils/profileGenerator';

export default function CompetitorAnalyzerView({ analytics, onBackToHub }) {
  // Competitor URL inputs state: allows adding multiple competitors (Competitor 1, Competitor 2, ...)
  const [competitorInputs, setCompetitorInputs] = useState([
    'https://www.instagram.com/scaler.official/',
    'https://www.instagram.com/upgrad_edu/',
    'https://www.instagram.com/almabetter/'
  ]);
  const [analyzedCompetitors, setAnalyzedCompetitors] = useState(() => PRESET_COMPETITORS);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'mix' | 'monthly' | 'top-content' | 'patterns' | 'gap' | 'insights' | 'landscape'

  // Run multi-competitor analysis calculations
  const report = useMemo(() => {
    return runMultiCompetitorAnalysis(analyzedCompetitors);
  }, [analyzedCompetitors]);

  const handleInputChange = (index, value) => {
    const updated = [...competitorInputs];
    updated[index] = value;
    setCompetitorInputs(updated);
  };

  const handleAddCompetitorRow = () => {
    if (competitorInputs.length >= 6) return;
    setCompetitorInputs(prev => [...prev, '']);
  };

  const handleRemoveCompetitorRow = (index) => {
    if (competitorInputs.length <= 1) return;
    setCompetitorInputs(prev => prev.filter((_, i) => i !== index));
  };

  const handleAnalyzeCompetitors = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);

    const validCompetitors = competitorInputs
      .filter(input => input.trim().length > 0)
      .map(input => buildDynamicCompetitor(input));

    setTimeout(() => {
      if (validCompetitors.length > 0) {
        setAnalyzedCompetitors(validCompetitors);
      }
      setIsAnalyzing(false);
    }, 600);
  };

  const handleLoadPresetGroup = (group) => {
    if (group === 'edtech') {
      setCompetitorInputs([
        'https://www.instagram.com/scaler.official/',
        'https://www.instagram.com/upgrad_edu/',
        'https://www.instagram.com/almabetter/'
      ]);
      setAnalyzedCompetitors(PRESET_COMPETITORS);
    }
  };

  const subTabs = [
    { id: 'overview', label: '1. Competitor Overview' },
    { id: 'mix', label: '2. Content Mix Comparison' },
    { id: 'monthly', label: '3. Monthly Strategy Shifts' },
    { id: 'top-content', label: '4. Top 10 Content' },
    { id: 'patterns', label: '5. Cross-Competitor Patterns' },
    { id: 'gap', label: '6. Content Gap & White Space' },
    { id: 'insights', label: '7. Strategic Lessons' },
    { id: 'landscape', label: '8. Final Landscape Report' }
  ];

  return (
    <div style={{ padding: '32px', maxWidth: '1440px', margin: '0 auto', fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5' }}>
              PART 2 • MULTI-ACCOUNT BENCHMARK
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
              COMPETITOR ANALYSIS & STRATEGY BENCHMARK
            </span>
            <ConfidenceBadge type="CALCULATED" size="sm" />
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
            Competitor Analysis
          </h1>
          <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
            Compare multiple Instagram profiles, discover cross-competitor viral patterns, analyze month-wise content shifts, and uncover white-space opportunities.
          </p>
        </div>

        {onBackToHub && (
          <button
            onClick={onBackToHub}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(79, 70, 229, 0.08)',
              color: '#4F46E5',
              border: '1px solid rgba(79, 70, 229, 0.25)',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>← Back to Hub</span>
          </button>
        )}
      </div>

      {/* =========================================================================
          COMPETITOR INPUT SECTION (Multiple URLs + Add Another Competitor)
          ========================================================================= */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid rgba(79, 70, 229, 0.25)',
          borderRadius: '20px',
          padding: '24px 28px',
          marginBottom: '28px',
          boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3.5px',
            background: 'linear-gradient(90deg, #4F46E5 0%, #818CF8 50%, #6366F1 100%)'
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(79, 70, 229, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F46E5' }}>
              <GitCompare size={18} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                Add Competitor
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                Compare multiple Instagram profiles without manually keying in metrics.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={() => handleLoadPresetGroup('edtech')}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.08)',
                padding: '4px 10px',
                borderRadius: '9999px',
                border: '1px solid rgba(79, 70, 229, 0.2)',
                cursor: 'pointer'
              }}
            >
              Reset to Top 3 Tech Bootcamps
            </button>
          </div>
        </div>

        {/* Dynamic Multi-Competitor Form */}
        <form onSubmit={handleAnalyzeCompetitors}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {competitorInputs.map((val, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#4F46E5', minWidth: '95px' }}>
                  Competitor {idx + 1}:
                </span>
                <div style={{ position: 'relative', flex: 1 }}>
                  <LinkIcon size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#4F46E5' }} />
                  <input 
                    type="text"
                    value={val}
                    onChange={(e) => handleInputChange(idx, e.target.value)}
                    placeholder="[ Paste Instagram Profile URL ]"
                    style={{
                      width: '100%',
                      padding: '10px 12px 10px 36px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                {competitorInputs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveCompetitorRow(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#EF4444',
                      cursor: 'pointer',
                      padding: '6px',
                      borderRadius: '6px'
                    }}
                    title="Remove competitor"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            {competitorInputs.length < 5 ? (
              <button
                type="button"
                onClick={handleAddCompetitorRow}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px dashed var(--border-medium)',
                  color: '#4F46E5',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                <Plus size={14} />
                <span>+ Add Another Competitor</span>
              </button>
            ) : <div />}

            <button
              type="submit"
              disabled={isAnalyzing}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '12px',
                backgroundColor: '#4F46E5',
                color: '#FFFFFF',
                border: 'none',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)'
              }}
            >
              <Sparkles size={16} />
              <span>{isAnalyzing ? 'Analyzing Competitors...' : 'Analyze Competitors'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Sub Tabs Navigation */}
      <div 
        style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '12px',
          marginBottom: '28px',
          overflowX: 'auto'
        }}
      >
        {subTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '7px 15px',
              borderRadius: '9999px',
              border: activeTab === tab.id ? '1px solid #4F46E5' : '1px solid transparent',
              backgroundColor: activeTab === tab.id ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
              color: activeTab === tab.id ? '#4F46E5' : 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* =========================================================================
          SECTION 1: COMPETITOR OVERVIEW TABLE
          ========================================================================= */}
      {activeTab === 'overview' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 01
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Competitor Overview Comparison Matrix
              </h2>
            </div>
            <ConfidenceBadge type="CALCULATED" size="sm" />
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '12px 14px' }}>Metric</th>
                  {analyzedCompetitors.map((c, i) => (
                    <th key={i} style={{ padding: '12px 14px', color: 'var(--text-primary)', fontWeight: '800' }}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Followers</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px', fontWeight: '700', color: '#4F46E5' }}>
                      {c.followers.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Posts Analyzed</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px' }}>{c.totalPosts}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Posting Frequency</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px' }}>{c.postingFrequency}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Average Views / Content</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px', fontWeight: '700' }}>{c.avgViews.toLocaleString()}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Engagement Rate</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px', color: '#10B981', fontWeight: '700' }}>{c.avgEngagement}</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Placement Content %</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px' }}>{c.placementShare}%</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Promotional Content %</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px' }}>{c.promotionalShare}%</td>
                  ))}
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Educational Content %</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px' }}>{c.educationalShare}%</td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '10px 14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Influencer Collabs %</td>
                  {analyzedCompetitors.map((c, i) => (
                    <td key={i} style={{ padding: '10px 14px' }}>{c.influencerShare}%</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 2: COMPETITOR CONTENT MIX
          ========================================================================= */}
      {activeTab === 'mix' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 02
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Competitor Content Mix (% Breakdown)
              </h2>
            </div>
            <ConfidenceBadge type="CALCULATED" size="sm" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${analyzedCompetitors.length}, 1fr)`, gap: '16px' }}>
            {analyzedCompetitors.map((c, ci) => (
              <div key={ci} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', padding: '18px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 12px 0' }}>
                  {c.name}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                  {[
                    { label: 'Placement', val: c.placementShare, color: '#10B981' },
                    { label: 'Promotional', val: c.promotionalShare, color: '#F59E0B' },
                    { label: 'Educational', val: c.educationalShare, color: '#0284C7' },
                    { label: 'Student Content', val: c.studentShare, color: '#8B5CF6' },
                    { label: 'Influencer / Collab', val: c.influencerShare, color: '#EC4899' },
                    { label: 'Career Advice', val: c.careerShare, color: '#059669' },
                    { label: 'Founder / Faculty', val: (c.founderShare || 0) + (c.facultyShare || 0), color: '#6366F1' },
                    { label: 'Events & Workshop', val: c.eventShare, color: '#14B8A6' },
                    { label: 'Entertainment / Meme', val: c.entertainmentShare, color: '#D97706' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontWeight: '700', color: item.color }}>{item.val}%</span>
                        <div style={{ width: '40px', height: '5px', backgroundColor: 'var(--border-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${item.val * 2}%`, height: '100%', backgroundColor: item.color }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 3: COMPETITOR MONTHLY ANALYSIS
          ========================================================================= */}
      {activeTab === 'monthly' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 03
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Month-by-Month Strategy Shifts
              </h2>
            </div>
            <ConfidenceBadge type="CALCULATED" size="sm" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {analyzedCompetitors.map((c, ci) => (
              <div key={ci} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', padding: '16px' }}>
                <h3 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
                  {c.name} — Monthly Strategy Breakdown
                </h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                        <th style={{ padding: '6px 10px' }}>Month</th>
                        <th style={{ padding: '6px 10px' }}>Posts</th>
                        <th style={{ padding: '6px 10px' }}>Reels</th>
                        <th style={{ padding: '6px 10px' }}>Total</th>
                        <th style={{ padding: '6px 10px' }}>Placement</th>
                        <th style={{ padding: '6px 10px' }}>Promotional</th>
                        <th style={{ padding: '6px 10px' }}>Educational</th>
                        <th style={{ padding: '6px 10px' }}>Influencer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(c.monthlyData || []).map((m, mi) => (
                        <tr key={mi} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                          <td style={{ padding: '6px 10px', fontWeight: '700', color: 'var(--text-primary)' }}>{m.month}</td>
                          <td style={{ padding: '6px 10px' }}>{m.posts}</td>
                          <td style={{ padding: '6px 10px' }}>{m.reels}</td>
                          <td style={{ padding: '6px 10px', fontWeight: '700', color: '#4F46E5' }}>{m.total}</td>
                          <td style={{ padding: '6px 10px' }}>{m.placement}</td>
                          <td style={{ padding: '6px 10px' }}>{m.promotional}</td>
                          <td style={{ padding: '6px 10px' }}>{m.educational}</td>
                          <td style={{ padding: '6px 10px' }}>{m.influencer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 4: COMPETITOR TOP CONTENT
          ========================================================================= */}
      {activeTab === 'top-content' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 04
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Top-Performing Reels & Carousels per Competitor
              </h2>
            </div>
            <ConfidenceBadge type="OBSERVED" size="sm" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {analyzedCompetitors.map((c, ci) => (
              <div key={ci} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', padding: '18px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 12px 0' }}>
                  {c.name} — Top Viral Content
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
                  {(c.topReels || []).map((r, ri) => (
                    <div key={ri} style={{ backgroundColor: 'var(--bg-card)', padding: '12px 14px', borderRadius: '8px', fontSize: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: '800', color: '#4F46E5' }}>{r.format} • {r.category}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{r.date}</span>
                      </div>
                      <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>"{r.hook}"</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>
                        <strong>{r.views.toLocaleString()} views</strong> • {r.likes.toLocaleString()} likes • {r.comments.toLocaleString()} comments
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '4px' }}>CTA: {r.cta}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 5: CROSS-COMPETITOR PATTERN ANALYSIS
          ========================================================================= */}
      {activeTab === 'patterns' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 05
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Cross-Competitor Pattern Analysis
              </h2>
            </div>
            <ConfidenceBadge type="INFERRED" size="sm" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {report.crossPatterns.map((pat, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '10px', padding: '16px', borderLeft: '4px solid #4F46E5' }}>
                <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-primary)' }}>
                  Pattern {idx + 1}: {pat.pattern}
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: '6px 0' }}>
                  <strong>Observed Evidence:</strong> {pat.evidence}
                </div>
                <div style={{ fontSize: '12px', color: '#4F46E5', fontWeight: '600' }}>
                  <strong>Actionable Playbook:</strong> {pat.actionableTakeaway}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 6: COMPETITOR CONTENT GAP
          ========================================================================= */}
      {activeTab === 'gap' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 06
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Competitor Content Gap & White Space Opportunities
              </h2>
            </div>
            <ConfidenceBadge type="INFERRED" size="sm" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
                What Every Competitor is Doing:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.contentGapMatrix.whatEveryCompetitorIsDoing.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#4F46E5', marginBottom: '8px' }}>
                What Our Institute Does That Competitors Don't:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.contentGapMatrix.whatOurInstituteIsDoingThatCompetitorsArent.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#EF4444', marginBottom: '8px' }}>
                What Competitors Do That We Don't:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.contentGapMatrix.whatCompetitorsAreDoingThatOurInstituteIsnt.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '16px', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#10B981', marginBottom: '8px' }}>
                Untapped White-Space Opportunities:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.contentGapMatrix.untappedOpportunities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 7: STRATEGIC LESSONS
          ========================================================================= */}
      {activeTab === 'insights' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 07
              </span>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Competitor Strategic Lessons & Differentiation
              </h2>
            </div>
            <ConfidenceBadge type="INFERRED" size="sm" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {report.competitorInsights.map((ci, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', padding: '18px', borderLeft: '4px solid #4F46E5' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                  {ci.name}
                </h3>
                <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  <strong>Core Strength:</strong> {ci.strongestStrategy}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px', fontSize: '12px' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '10px', borderRadius: '8px' }}>
                    <strong style={{ color: '#10B981' }}>What we can learn:</strong>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)' }}>{ci.whatWeCanLearn}</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '10px', borderRadius: '8px' }}>
                    <strong style={{ color: '#EF4444' }}>What we should NOT copy:</strong>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)' }}>{ci.whatWeShouldNotCopy}</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '10px', borderRadius: '8px' }}>
                    <strong style={{ color: '#4F46E5' }}>Where to differentiate:</strong>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)' }}>{ci.whereWeCanDifferentiate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 8: FINAL LANDSCAPE REPORT
          ========================================================================= */}
      {activeTab === 'landscape' && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '2px solid rgba(79, 70, 229, 0.3)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#FFFFFF', backgroundColor: '#4F46E5', padding: '2px 8px', borderRadius: '4px' }}>
                SECTION 08
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                Competitive Landscape Executive Report
              </h2>
            </div>
            <ConfidenceBadge type="INFERRED" size="sm" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)' }}>MOST ACTIVE COMPETITOR</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{report.finalLandscapeReport.mostActiveCompetitor}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)' }}>MOST CONTENT-HEAVY</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '4px' }}>{report.finalLandscapeReport.mostContentHeavyCompetitor}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#10B981' }}>MOST PLACEMENT-FOCUSED</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#10B981', marginTop: '4px' }}>{report.finalLandscapeReport.mostPlacementFocusedCompetitor}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#F59E0B' }}>MOST PROMOTIONAL</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#F59E0B', marginTop: '4px' }}>{report.finalLandscapeReport.mostPromotionalCompetitor}</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '18px', borderRadius: '10px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
              Strategic Competitive Landscape Summary:
            </h3>
            <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {report.finalLandscapeReport.strongestContentPattern}
            </p>
            <div style={{ fontSize: '12.5px', color: '#4F46E5', fontWeight: '700' }}>
              <strong>Biggest Market Opportunity:</strong> {report.finalLandscapeReport.biggestOpportunityForOurInstitute}
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(79, 70, 229, 0.06)', border: '1px solid rgba(79, 70, 229, 0.2)', padding: '16px', borderRadius: '10px' }}>
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#4F46E5', marginBottom: '6px' }}>
              Recommended Strategic Direction:
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.45 }}>
              {report.finalLandscapeReport.recommendedStrategicDirection}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
