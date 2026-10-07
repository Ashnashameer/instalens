import React, { useState } from 'react';
import { 
  Layers, 
  TrendingUp, 
  AlertCircle, 
  HelpCircle, 
  Eye, 
  Heart, 
  MessageSquare, 
  Bookmark, 
  Flame,
  CheckCircle2,
  Filter
} from 'lucide-react';
import DataInsightActionCard from '../components/DataInsightActionCard';

export default function ContentAnalyzerView({ analytics, onSelectPost }) {
  const contentPillars17 = analytics?.contentPillars17;
  const [selectedPillarFilter, setSelectedPillarFilter] = useState('ALL');

  if (!contentPillars17) return null;

  const { 
    pillarsList, 
    activePillarsCount, 
    totalPillarsCount, 
    overusedPillars, 
    underusedPillars, 
    highPerformingPillars, 
    missingPillars, 
    strategicInsight 
  } = contentPillars17;

  const filteredPillars = selectedPillarFilter === 'ALL' 
    ? pillarsList 
    : selectedPillarFilter === 'ACTIVE' 
      ? pillarsList.filter((p) => !p.isMissing)
      : pillarsList.filter((p) => p.isMissing);

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#DB2777' }}>
            MODULE 02
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)' }}>
            17 CONTENT PILLARS ARCHITECTURE
          </span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          Content Analyzer
        </h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Comprehensive classification across all 17 strategic pillars. Evaluates content mix, frequency, overused versus missing categories, and ROI.
        </p>
      </div>

      {/* 4 Summary Diagnostic Cards: Overused, Underused, High-Performing, Missing */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        {/* High Performing */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <TrendingUp size={16} color="#10B981" />
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#10B981', letterSpacing: '0.08em' }}>
              High-Performing Pillars
            </span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
            {highPerformingPillars.length} Pillars
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            Top: <strong>{highPerformingPillars[0]?.name}</strong> ({highPerformingPillars[0]?.avgEngagement}% eng)
          </div>
        </div>

        {/* Overused */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <AlertCircle size={16} color="#EF4444" />
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#EF4444', letterSpacing: '0.08em' }}>
              Overused Pillars
            </span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
            {overusedPillars.length} Identified
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {overusedPillars.length > 0 ? `${overusedPillars[0]?.name} (${overusedPillars[0]?.percentage}% volume)` : 'Zero overused pillars detected'}
          </div>
        </div>

        {/* Underused */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Flame size={16} color="#F59E0B" />
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#F59E0B', letterSpacing: '0.08em' }}>
              Underused Pillars
            </span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
            {underusedPillars.length} Opportunities
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {underusedPillars.length > 0 ? `${underusedPillars[0]?.name} (High eng, low volume)` : 'Optimal allocation'}
          </div>
        </div>

        {/* Missing */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <HelpCircle size={16} color="#64748B" />
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.08em' }}>
              Missing Pillars
            </span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
            {missingPillars.length} / 17 Pillars
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {missingPillars.slice(0, 2).map((p) => p.name).join(', ')}...
          </div>
        </div>
      </div>

      {/* Filter Tabs & Content Mix Table */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
              17 Content Pillars Performance Matrix
            </h2>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Showing {filteredPillars.length} of {totalPillarsCount} standard pillars ({activePillarsCount} active in profile)
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {['ALL', 'ACTIVE', 'MISSING'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedPillarFilter(tab)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: selectedPillarFilter === tab ? '1px solid #DB2777' : '1px solid var(--border-subtle)',
                  backgroundColor: selectedPillarFilter === tab ? 'rgba(219, 39, 119, 0.1)' : 'var(--bg-secondary)',
                  color: selectedPillarFilter === tab ? '#DB2777' : 'var(--text-secondary)',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {tab === 'ALL' ? 'All 17 Pillars' : tab === 'ACTIVE' ? `Active (${activePillarsCount})` : `Missing (${missingPillars.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '16px' }}>
          {filteredPillars.map((pillar) => {
            const isMissing = pillar.isMissing;
            return (
              <div
                key={pillar.name}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: isMissing ? '1px dashed var(--border-subtle)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  opacity: isMissing ? 0.6 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-primary)' }}>
                      {pillar.name}
                    </span>
                    <span 
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        backgroundColor: isMissing ? 'rgba(100, 116, 139, 0.15)' : pillar.performanceTier === 'High Performing' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(2, 132, 199, 0.15)',
                        color: isMissing ? '#64748B' : pillar.performanceTier === 'High Performing' ? '#10B981' : '#0284C7'
                      }}
                    >
                      {isMissing ? 'Missing Pillar' : `${pillar.percentage}% mix`}
                    </span>
                  </div>

                  {!isMissing ? (
                    <>
                      {/* Metric Chips */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', margin: '12px 0', textAlign: 'center' }}>
                        <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '6px' }}>
                          <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-primary)' }}>{pillar.count}</div>
                          <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Posts</div>
                        </div>
                        <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '6px' }}>
                          <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-primary)' }}>{pillar.avgViews.toLocaleString()}</div>
                          <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Avg Views</div>
                        </div>
                        <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '6px' }}>
                          <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-primary)' }}>{pillar.avgSaves.toLocaleString()}</div>
                          <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Avg Saves</div>
                        </div>
                        <div style={{ backgroundColor: 'var(--bg-card)', padding: '6px', borderRadius: '6px' }}>
                          <div style={{ fontSize: '13px', fontWeight: '800', color: '#10B981' }}>{pillar.avgEngagement}%</div>
                          <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Eng Rate</div>
                        </div>
                      </div>

                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        <strong>Cadence:</strong> {pillar.frequency} • <strong>Tier:</strong> {pillar.performanceTier}
                      </div>

                      {/* Best Performing Post Snippet */}
                      {pillar.bestPerforming && (
                        <div 
                          onClick={() => onSelectPost && onSelectPost(pillar.bestPerforming)}
                          style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '8px 12px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-subtle)',
                            cursor: 'pointer',
                            marginTop: '8px'
                          }}
                        >
                          <div style={{ fontSize: '10px', fontWeight: '700', color: '#10B981', textTransform: 'uppercase', marginBottom: '2px' }}>
                            ★ Top Performer in Pillar
                          </div>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {pillar.bestPerforming.hook || pillar.bestPerforming.topic}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ padding: '16px 0', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      No published posts in this pillar yet. High opportunity to introduce {pillar.name.toLowerCase()} content to diversify feed and capture untapped audience search intent.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Insight */}
      <DataInsightActionCard 
        data={strategicInsight.data}
        insight={strategicInsight.insight}
        strategicMeaning={strategicInsight.strategicMeaning}
        action={strategicInsight.action}
        title="Content Pillars Portfolio Strategy"
      />
    </div>
  );
}
