import React from 'react';
import { AlertCircle, Link2, Database } from 'lucide-react';

/**
 * DataUnavailableBanner
 * Adheres strictly to the user requirement:
 * "Never create fake Instagram metrics.
 * If real Instagram/API data is unavailable, clearly display:
 * 'Data unavailable' or 'Connect Instagram / provide data to unlock this analysis.'
 * Do not simulate real results."
 */
export default function DataUnavailableBanner({
  metricName = 'This metric',
  message = 'Data unavailable — Connect Instagram / provide data to unlock this analysis.',
  onConnectClick
}) {
  return (
    <div 
      style={{
        backgroundColor: 'rgba(234, 88, 12, 0.06)',
        border: '1px dashed rgba(234, 88, 12, 0.35)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        margin: '16px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div 
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'rgba(234, 88, 12, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#EA580C'
          }}
        >
          <AlertCircle size={16} />
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>
            {metricName}: Data Unavailable
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {message}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={onConnectClick || (() => alert('Instagram Graph API connection module: In production, this launches the Meta OAuth dialog to pull private insights (Reach, Profile visits, Demographic age/gender distribution).'))}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            border: 'none',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Link2 size={13} />
          <span>Connect Instagram API</span>
        </button>
      </div>
    </div>
  );
}
