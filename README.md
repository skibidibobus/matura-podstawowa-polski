# Matura Podstawowa z Języka Polskiego

Kompleksowe repozytorium do przygotowania się do egzaminu maturalnego z języka polskiego na poziomie podstawowym (część pisemna i ustna). Projekt łączy ustrukturyzowane materiały merytoryczne w formacie Markdown z interaktywną aplikacją webową oraz lekkim backendem do śledzenia postępów.

## Struktura repozytorium

- `00_PLAN_NAUKI.md` – `08_SZCZEGOLOWY_PLAN_KURSU_MATURALNEGO.md` — materiały powtórkowe obejmujące technikę pracy z arkuszem, notatkę syntetyzującą, epoki literackie, lektury obowiązkowe, matrycę motywów, konstrukcję rozprawki oraz szczegółowy plan kursu.
- `pytania ustne/` — zestawy pytań jawnych i opracowań do matury ustnej pogrupowane poziomami (`poziom_01_antyk_renesans.md` – `poziom_08_totalitaryzm_wspolczesnosc.md`).
- `matura-app/` — aplikacja frontendowa (React 19 + Vite) z interaktywnymi modułami nauki, quizami, zadaniami z arkusza i symulacją pytań ustnych.
- `server/` — serwer backendowy (Node.js) obsługujący autoryzację (JWT) oraz trwały zapis postępów użytkownika.
- `render.yaml` — konfiguracja wdrożenia backendu na platformie Render.

## Wymagania

- Node.js w wersji `>= 20.0.0`
- npm

## Uruchomienie lokalne

### 1. Backend (`server/`)

```bash
cd server
npm start
```

Zmienne środowiskowe wykorzystywane przez serwer:
- `ADMIN_PASSWORD` — hasło dostępu
- `JWT_SECRET` — klucz podpisu tokenów JWT
- `PORT` — port nasłuchu serwera (opcjonalnie)

### 2. Frontend (`matura-app/`)

```bash
cd matura-app
npm install
npm run dev
```

Aplikacja uruchomi się w trybie deweloperskim (domyślnie pod adresem `http://localhost:5173`).

Budowanie wersji produkcyjnej:

```bash
cd matura-app
npm run build
npm run preview
```

## Testy

Testy backendu (wbudowany runner `node --test`):

```bash
cd server
npm test
```

Testy aplikacji frontendowej:

```bash
cd matura-app
npm test
```

## Wdrożenie

Backend jest przygotowany do wdrożenia jako usługa Node.js na platformie Render na podstawie pliku `render.yaml` (`rootDir: server`, `startCommand: npm start`), z automatycznie generowanymi zmiennymi `ADMIN_PASSWORD` oraz `JWT_SECRET`.
