import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Layers,
  LogIn,
  LogOut,
  Mic,
  Moon,
  Sparkles,
  Sun,
  Trophy,
  Zap,
} from 'lucide-react';
import { apiClient } from '../api/client';
import { BrandLogo } from './BrandLogo';

const COURSE_CARDS = [
  {
    id: 'probna',
    badge: '7 bloków • Sprint',
    title: 'Matura Próbna (Sprint 7h)',
    icon: Zap,
    description:
      'Szybkie i konkretne przygotowanie do matury pisemnej: technika arkusza, notatka syntetyzująca, 11 epok, lektury z gwiazdką, matryce motywów i rozprawka na 35/35 pkt.',
    highlights: ['15 przekrojowych notatek', '168 fiszek powtórkowych', '112 pytań testowych CKE'],
  },
  {
    id: 'kurs',
    badge: '10 działów • Kompendium',
    title: 'Kurs Główny',
    icon: BookOpen,
    description:
      'Pełne kompendium od Antyku po Współczesność i wypracowanie. Rozbudowane opracowania wszystkich lektur, konteksty filozoficzne, pojęcia i pułapki egzaminacyjne.',
    highlights: ['10 pełnych działów CKE', 'Szczegółowe opracowania lektur', 'Ponad 200 pytań z wyjaśnieniami'],
  },
  {
    id: 'ustna',
    badge: '8 poziomów • 76 pytań',
    title: 'Matura Ustna',
    icon: Mic,
    description:
      'Komplet 76 pytań jawnych CKE (2026–2028) podzielony na 8 poziomów. Każde pytanie ma gotowy schemat wypowiedzi: Teza → 3 Argumenty → Kontekst.',
    highlights: ['76 pytań jawnych CKE', '76 rozbudowanych fiszek', '48 pytań sprawdzających'],
  },
];

export function WelcomePage({
  theme,
  onToggleTheme,
  authUser = null,
  onLoginSuccess,
  onReturnToCourse,
  onLogout,
  onEnterGuest,
  onOpenRanking,
}) {
  const [authTab, setAuthTab] = useState('login'); // 'login' | 'trial'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [trialName, setTrialName] = useState('');
  const [trialLogin, setTrialLogin] = useState('');
  const [trialPassword, setTrialPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) return;
    setLoading(true);
    setError('');
    try {
      const data = await apiClient.login(username.trim(), password);
      onLoginSuccess(data);
    } catch (err) {
      setError(err.message || 'Nieprawidłowy login lub hasło.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterTrial = async (e) => {
    e.preventDefault();
    if (!trialName.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await apiClient.registerTrial({
        displayName: trialName.trim(),
        username: trialLogin.trim() || undefined,
        password: trialPassword.trim() || undefined,
      });
      onLoginSuccess(data);
    } catch (err) {
      setError(err.message || 'Nie udało się utworzyć konta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="welcome-shell">
      <header className="welcome-topbar">
        <div className="welcome-brand">
          <BrandLogo size={38} />
          <div>
            <strong>Matura z Polskiego</strong>
            <span>Formuła 2023 • CKE 2026–2028</span>
          </div>
        </div>

        <div className="welcome-topbar-actions">
          <button type="button" className="secondary-btn" onClick={onOpenRanking}>
            <Trophy size={15} />
            Rankingi uczniów
          </button>
          <button
            type="button"
            className="secondary-btn"
            onClick={onToggleTheme}
            aria-label="Zmień motyw"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            {theme === 'dark' ? 'Jasny' : 'Ciemny'}
          </button>
        </div>
      </header>

      <main className="welcome-main">
        <section className="welcome-hero">
          <div className="welcome-hero-copy">
            <div className="welcome-kicker">
              <Sparkles size={14} />
              <span>Kompleksowa platforma maturalna</span>
            </div>
            <h1>Przygotuj się do matury z polskiego bez chaosu i lania wody</h1>
            <p className="welcome-lead">
              Wszystkie notatki zgodne z wytycznymi CKE, interaktywne fiszki z pulą powtórek,
              quizy tłumaczące najczęstsze pułapki oraz automatyczna synchronizacja postępów na
              Twoim koncie.
            </p>

            <div className="welcome-perks">
              <span>
                <CheckCircle2 size={15} /> Zapis postępów w chmurze
              </span>
              <span>
                <Layers size={15} /> 3 dedykowane kursy
              </span>
              <span>
                <Trophy size={15} /> Rankingi Top 10 z każdego kursu
              </span>
            </div>
          </div>

          <div className="welcome-login-card">
            {authUser ? (
              <>
                <div className="welcome-login-header">
                  <h2>Witaj, {authUser.displayName}!</h2>
                  <p>Jesteś już zalogowany. Twój postęp jest zsynchronizowany i bezpieczny.</p>
                </div>
                <div className="welcome-logged-actions">
                  <button
                    type="button"
                    className="primary-btn welcome-submit-btn"
                    onClick={onReturnToCourse}
                  >
                    <ArrowRight size={16} />
                    Wróć do kursu
                  </button>
                  <button type="button" className="secondary-btn welcome-logout-btn" onClick={onLogout}>
                    <LogOut size={15} />
                    Wyloguj się
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="auth-mode-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={authTab === 'login'}
                    className={`auth-mode-tab ${authTab === 'login' ? 'active' : ''}`}
                    onClick={() => {
                      setAuthTab('login');
                      setError('');
                    }}
                  >
                    Mam konto
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={authTab === 'trial'}
                    className={`auth-mode-tab ${authTab === 'trial' ? 'active' : ''}`}
                    onClick={() => {
                      setAuthTab('trial');
                      setError('');
                    }}
                  >
                    Darmowe konto 24h
                  </button>
                </div>

                {authTab === 'login' ? (
                  <>
                    <div className="welcome-login-header">
                      <h2>Zaloguj się do kursu</h2>
                      <p>Wpisz dane swojego konta, aby odblokować kursy i zapisać postęp.</p>
                    </div>

                    {error && <div className="auth-error">{error}</div>}

                    <form className="auth-form" onSubmit={handleLogin}>
                      <label className="auth-field">
                        <span>Login</span>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Login"
                          autoComplete="username"
                          required
                        />
                      </label>

                      <label className="auth-field">
                        <span>Hasło</span>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Hasło"
                          autoComplete="current-password"
                          required
                        />
                      </label>

                      <button type="submit" className="primary-btn welcome-submit-btn" disabled={loading}>
                        <LogIn size={16} />
                        {loading ? 'Logowanie...' : 'Zaloguj się i rozpocznij naukę'}
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <div className="welcome-login-header">
                      <h2>Odblokuj wszystkie kursy na 24h</h2>
                      <p>Utwórz darmowe konto jednorazowe na 1 dzień i przetestuj pełny dostęp do wszystkich 3 kursów.</p>
                    </div>

                    {error && <div className="auth-error">{error}</div>}

                    <form className="auth-form" onSubmit={handleRegisterTrial}>
                      <label className="auth-field">
                        <span>Imię / Nazwa *</span>
                        <input
                          type="text"
                          value={trialName}
                          onChange={(e) => setTrialName(e.target.value)}
                          placeholder="Twoje imię lub pseudonim"
                          required
                        />
                      </label>

                      <label className="auth-field">
                        <span>Login (opcjonalnie)</span>
                        <input
                          type="text"
                          value={trialLogin}
                          onChange={(e) => setTrialLogin(e.target.value)}
                          placeholder="Zostaw puste, jeśli ma się wygenerować"
                          autoComplete="username"
                        />
                      </label>

                      <label className="auth-field">
                        <span>Hasło (opcjonalnie)</span>
                        <input
                          type="password"
                          value={trialPassword}
                          onChange={(e) => setTrialPassword(e.target.value)}
                          placeholder="Min. 4 znaki lub zostaw puste"
                          autoComplete="new-password"
                        />
                      </label>

                      <button type="submit" className="primary-btn welcome-submit-btn" disabled={loading}>
                        <Sparkles size={16} />
                        {loading ? 'Tworzenie konta...' : 'Utwórz konto na 1 dzień (Free)'}
                      </button>
                    </form>
                  </>
                )}

                <div className="welcome-guest-row">
                  <span>Chcesz najpierw tylko zobaczyć układ?</span>
                  <button type="button" className="welcome-guest-link" onClick={onEnterGuest}>
                    Podgląd jako gość →
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="welcome-courses-section">
          <div className="welcome-section-head">
            <h2>Co znajdziesz w środku?</h2>
            <p>Trzy uzupełniające się kursy dopasowane do czasu i celu Twoich przygotowań.</p>
          </div>

          <div className="welcome-courses-grid">
            {COURSE_CARDS.map((course) => {
              const Icon = course.icon;
              return (
                <article key={course.id} className="welcome-course-card">
                  <div className="welcome-course-top">
                    <span className="welcome-course-icon">
                      <Icon size={18} />
                    </span>
                    <span className="note-badge">{course.badge}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <ul className="welcome-course-list">
                    {course.highlights.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
