import { useEffect, useState } from 'react';
import { RefreshCw, Trophy } from 'lucide-react';
import { apiClient } from '../api/client';

const RANKING_TABS = [
  { id: 'top10', label: 'Top 10 (3 kursy)' },
  { id: 'all', label: 'Łączny (Wszystkie)' },
  { id: 'probna', label: 'Matura Próbna (7h)' },
  { id: 'kurs', label: 'Matura Główna' },
  { id: 'ustna', label: 'Matura Ustna' },
];

const THREE_COURSE_CARDS = [
  { id: 'probna', title: 'Top 10 — Matura Próbna (7h)' },
  { id: 'kurs', title: 'Top 10 — Matura Główna' },
  { id: 'ustna', title: 'Top 10 — Matura Ustna' },
];

export function RankingView({ currentUserId }) {
  const [scope, setScope] = useState('top10');
  const [leaderboard, setLeaderboard] = useState([]);
  const [topByCourse, setTopByCourse] = useState({ probna: [], kurs: [], ustna: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRanking = async (targetScope) => {
    setLoading(true);
    setError('');
    try {
      if (targetScope === 'top10') {
        const [p, k, u] = await Promise.all([
          apiClient.getPublicLeaderboard('probna'),
          apiClient.getPublicLeaderboard('kurs'),
          apiClient.getPublicLeaderboard('ustna'),
        ]);
        setTopByCourse({
          probna: (p.leaderboard || []).slice(0, 10),
          kurs: (k.leaderboard || []).slice(0, 10),
          ustna: (u.leaderboard || []).slice(0, 10),
        });
      } else {
        const data = await apiClient.getPublicLeaderboard(targetScope);
        setLeaderboard(data.leaderboard || []);
      }
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
        <div className="empty-state-box">Ładowanie rankingów...</div>
      ) : scope === 'top10' ? (
        <div className="ranking-top10-grid">
          {THREE_COURSE_CARDS.map((card) => {
            const list = topByCourse[card.id] || [];
            const cardMaxXp = Math.max(100, ...list.map((u) => u.stats?.xp || 0));
            return (
              <section key={card.id} className="ranking-course-card">
                <div className="ranking-course-head">
                  <h3>{card.title}</h3>
                  <button
                    type="button"
                    className="check-note-btn"
                    onClick={() => setScope(card.id)}
                  >
                    Pełny
                  </button>
                </div>

                {list.length === 0 ? (
                  <div className="empty-state-box">Brak uczniów.</div>
                ) : (
                  <div className="ranking-compact-list">
                    {list.map((u) => {
                      const xp = u.stats?.xp || 0;
                      const pct = Math.min(100, Math.round((xp / cardMaxXp) * 100));
                      const isSelf = currentUserId && u.id === currentUserId;
                      const rankClass = u.rank <= 3 ? `rank-${u.rank}` : '';
                      return (
                        <div key={u.id} className={`ranking-compact-row ${isSelf ? 'is-self' : ''}`}>
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
                              Notatki: {u.stats?.notesCount || 0} • Fiszki: {u.stats?.knownCards || 0} • Quizy:{' '}
                              {u.stats?.quizzesTaken || 0}
                              {(u.stats?.quizAttempts || 0) > (u.stats?.quizzesTaken || 0)
                                ? ` (${u.stats.quizAttempts} prób)`
                                : ''}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
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
                      {(u.stats?.quizAttempts || 0) > (u.stats?.quizzesTaken || 0)
                        ? ` (${u.stats.quizAttempts} prób)`
                        : ''}
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
