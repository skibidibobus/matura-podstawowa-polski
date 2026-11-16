import React, { useState } from 'react';
import { createCheckoutSession, isMonetizationEnabled } from '../api/monetization.js';

export default function MonetizationGate({ token, onClose }) {
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [error, setError] = useState('');

  if (!isMonetizationEnabled()) return null;

  async function handleBuy(planId) {
    setError('');
    setLoadingPlan(planId);
    try {
      const { url } = await createCheckoutSession(token, planId);
      if (url) window.location.href = url;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 680, margin: '0 auto' }}>
      <h2 style={{ marginBottom: 8 }}>Odblokuj pełny kurs maturalny</h2>
      <p style={{ color: '#94a3b8', marginBottom: 20 }}>
        Jednorazowa płatność (BLIK, Przelewy24, karta). Dostęp do samej matury.
      </p>
      {error && <p style={{ color: '#f87171', marginBottom: 12 }}>{error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        <div style={{ border: '1px solid #334155', borderRadius: 12, padding: 20 }}>
          <h3>Pakiet Podstawowy</h3>
          <p style={{ fontSize: 28, fontWeight: 700, margin: '8px 0' }}>129 zł</p>
          <p style={{ fontSize: 14, color: '#94a3b8' }}>Wszystkie moduły, Złoty Rdzeń, pytania ustne.</p>
          <button
            type="button"
            disabled={loadingPlan === 'basic'}
            onClick={() => handleBuy('basic')}
            style={{ marginTop: 14, width: '100%', padding: 10, borderRadius: 8, cursor: 'pointer' }}
          >
            {loadingPlan === 'basic' ? 'Przekierowanie...' : 'Wybierz Podstawowy'}
          </button>
        </div>

        <div style={{ border: '2px solid #2563eb', borderRadius: 12, padding: 20 }}>
          <h3>Pakiet PRO + Asystent AI</h3>
          <p style={{ fontSize: 28, fontWeight: 700, margin: '8px 0' }}>229 zł</p>
          <p style={{ fontSize: 14, color: '#94a3b8' }}>Pełny kurs + nielimitowany Asystent AI 24/7.</p>
          <button
            type="button"
            disabled={loadingPlan === 'pro'}
            onClick={() => handleBuy('pro')}
            style={{
              marginTop: 14,
              width: '100%',
              padding: 10,
              borderRadius: 8,
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {loadingPlan === 'pro' ? 'Przekierowanie...' : 'Wybierz PRO + AI'}
          </button>
        </div>
      </div>
      {onClose && (
        <button type="button" onClick={onClose} style={{ marginTop: 16 }}>
          Zamknij
        </button>
      )}
    </div>
  );
}
