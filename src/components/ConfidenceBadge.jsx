import React from 'react';
import { CheckCircle, Calculator, Brain, Sparkles, AlertCircle } from 'lucide-react';

/**
 * ConfidenceBadge
 * Implements Step 19:
 * DIRECTLY OBSERVED | CALCULATED | INFERRED | ESTIMATED | UNAVAILABLE
 */
export default function ConfidenceBadge({ type = 'DIRECTLY OBSERVED', size = 'sm', style = {} }) {
  const configs = {
    'DIRECTLY OBSERVED': {
      label: 'DIRECTLY OBSERVED',
      description: 'Obtained directly from public Instagram profile / post data',
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.3)',
      color: '#059669',
      icon: <CheckCircle size={size === 'sm' ? 10 : 12} />
    },
    'CALCULATED': {
      label: 'CALCULATED',
      description: 'Mathematically derived from verified public observations',
      bg: 'rgba(2, 132, 199, 0.1)',
      border: 'rgba(2, 132, 199, 0.3)',
      color: '#0284C7',
      icon: <Calculator size={size === 'sm' ? 10 : 12} />
    },
    'INFERRED': {
      label: 'INFERRED',
      description: 'AI strategic interpretation synthesized from content evidence',
      bg: 'rgba(124, 58, 237, 0.1)',
      border: 'rgba(124, 58, 237, 0.3)',
      color: '#7C3AED',
      icon: <Brain size={size === 'sm' ? 10 : 12} />
    },
    'ESTIMATED': {
      label: 'ESTIMATED',
      description: 'Strategic probability estimate, not a guaranteed prediction',
      bg: 'rgba(217, 119, 6, 0.1)',
      border: 'rgba(217, 119, 6, 0.3)',
      color: '#D97706',
      icon: <Sparkles size={size === 'sm' ? 10 : 12} />
    },
    'UNAVAILABLE': {
      label: 'UNAVAILABLE',
      description: 'Not available from public profile data',
      bg: 'rgba(100, 116, 139, 0.1)',
      border: 'rgba(100, 116, 139, 0.3)',
      color: '#64748B',
      icon: <AlertCircle size={size === 'sm' ? 10 : 12} />
    }
  };

  const key = Object.keys(configs).find(k => k.toLowerCase() === (type || '').toLowerCase()) || 'DIRECTLY OBSERVED';
  const c = configs[key];

  return (
    <span 
      title={c.description}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: size === 'sm' ? '2px 7px' : '4px 10px',
        borderRadius: '9999px',
        backgroundColor: c.bg,
        border: `1px solid ${c.border}`,
        color: c.color,
        fontSize: size === 'sm' ? '9.5px' : '11px',
        fontWeight: '700',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        userSelect: 'none',
        lineHeight: 1.2,
        ...style
      }}
    >
      {c.icon}
      <span>{c.label}</span>
    </span>
  );
}
