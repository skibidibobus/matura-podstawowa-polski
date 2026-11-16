import React, { useState } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import { askAiAssistant, isMonetizationEnabled } from '../api/monetization.js';

export default function AiAssistantWidget({ token, lessonTitle = '' }) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Cześć! Jestem Twoim asystentem maturalnym AI. Zapytaj mnie o dowolną lekturę, motyw, epokę lub rozprawkę z kursu.',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isMonetizationEnabled() || !token) return null;

  async function handleSend(e) {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setError('');
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setQuestion('');
    setLoading(true);

    try {
      const res = await askAiAssistant(token, { question: trimmed, lessonTitle });
      setMessages((prev) => [...prev, { role: 'assistant', text: res.answer }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 18px',
            borderRadius: 999,
            border: 'none',
            background: '#2563eb',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)',
          }}
        >
          <Sparkles size={18} />
          Asystent AI
        </button>
      ) : (
        <div
          style={{
            width: 360,
            maxWidth: 'calc(100vw - 32px)',
            height: 480,
            background: '#0f172a',
            color: '#f8fafc',
            borderRadius: 16,
            border: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0,0,0,0.45)',
          }}
        >
          <div
            style={{
              padding: '12px 16px',
              background: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
              <Bot size={18} color="#60a5fa" />
              Asystent Maturalny AI
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              aria-label="Zamknij czat"
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 12px',
                  borderRadius: 12,
                  background: m.role === 'user' ? '#2563eb' : '#1e293b',
                  fontSize: 14,
                  lineHeight: 1.45,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {m.text}
              </div>
            ))}
            {loading && <div style={{ fontSize: 13, color: '#94a3b8' }}>Asystent pisze...</div>}
            {error && <div style={{ fontSize: 13, color: '#f87171' }}>{error}</div>}
          </div>

          <form
            onSubmit={handleSend}
            style={{ padding: 10, borderTop: '1px solid #334155', display: 'flex', gap: 8 }}
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Zadaj pytanie o kurs..."
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid #334155',
                background: '#0f172a',
                color: '#f8fafc',
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                border: 'none',
                background: '#2563eb',
                color: '#fff',
                cursor: 'pointer',
              }}
              aria-label="Wyślij"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
