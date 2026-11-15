import { useEffect, useState } from 'react';
import { RefreshCw, Trophy } from 'lucide-react';
import { apiClient } from '../api/client';

const RANKING_TABS = [
  { id: 'all', label: 'Łączny (Wszystkie kursy)' },
  { id: 'kurs', label: 'Kurs Główny' },
  { id: 'probna', label: 'Sprint 7h' },
  { id: 'ustna', label: 'Matura Ustna' },
];

export function RankingView({ activeCourse, currentUserId }) {
  const [scope, setScope] = useState(activeCourse || 'all');
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRanking = async (targetScope) => {
    setLoading(true);
    setError('');
    try {
      const data = await apiClient.getPublicLeaderboard(targetScope);
      setLeaderboard(data.leaderboard || []);
    } catch (err) {
      setError(err.message || 'Nie udało się pobrać rankingu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRanking(scope);
  }, [scope]);

  const maxXp = Math.max(100, ...leaderboard.map((u) => u.stats?.xp || 0));

  return (
    <div className="ranking-view">
      <div className="ranking-tabs-bar" role="tablist" aria-label="Zakres rankingu">
        {RANKING_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={scope === tab.id}
            className={`ranking-tab-btn ${scope === tab.id ? 'active' : ''}`}
            onClick={() => setScope(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <button
          type="button"
          className="check-note-btn"
          style={{ marginLeft: 'auto' }}
          onClick={() => fetchRanking(scope)}
          disabled={loading}
        >
          <RefreshCw size={13} />
          Odśwież
        </button>
      </div>

      {error && <div className="modal-error">{error}</div>}

      {loading ? (
        <div className="empty-state-box">Ładowanie rankingu...</div>
      ) : leaderboard.length === 0 ? (
        <div className="empty-state-box">Brak uczniów w rankingu.</div>
      ) : (
        <div className="ranking-list ranking-list-full">
          {leaderboard.map((u) => {
            const xp = u.stats?.xp || 0;
            const pct = Math.min(100, Math.round((xp / maxXp) * 100));
            const isSelf = currentUserId && u.id === currentUserId;
            const rankClass = u.rank <= 3 ? `rank-${u.rank}` : '';
            return (
              <div key={u.id} className={`ranking-row ${isSelf ? 'is-self' : ''}`}>
                <div className="ranking-row-main">
                  <div className={`rank-badge ${rankClass}`}>#{u.rank}</div>
                  <div className="ranking-user-info">
                    <div className="user-row-name">
                      <strong>{u.displayName}</strong>
                      {isSelf && <span className="note-badge">Ty</span>}
                      <span className="xp-pill">{xp} XP</span>
                    </div>
                    <div className="ranking-progress-track" aria-hidden="true">
                      <div className="ranking-progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="user-row-stats">
                      Notatki: <strong>{u.stats?.notesCount || 0}</strong> • Fiszki umiem:{' '}
                      <strong>{u.stats?.knownCards || 0}</strong> • Quizy:{' '}
                      <strong>{u.stats?.quizzesTaken || 0}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="ranking-footnote">
        <Trophy size={14} />
        <span>
          Ranking publiczny pokazuje wyłącznie imiona uczniów (bez konta administratora i bez loginów).
        </span>
      </div>
    </div>
  );
}
