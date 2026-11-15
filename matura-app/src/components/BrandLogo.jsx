export function BrandLogo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <defs>
        <linearGradient id="mpBgGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1b2232" />
          <stop offset="100%" stopColor="#0f141e" />
        </linearGradient>
        <linearGradient id="mpGoldGrad" x1="16" y1="14" x2="48" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="16"
        fill="url(#mpBgGrad)"
        stroke="#f59e0b"
        strokeOpacity="0.45"
        strokeWidth="2.5"
      />
      <path
        d="M16 22C16 19.8 17.8 18 20 18H30V45H20C17.8 45 16 43.2 16 41V22Z"
        stroke="url(#mpGoldGrad)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M48 22C48 19.8 46.2 18 44 18H34V45H44C46.2 45 48 43.2 48 41V22Z"
        stroke="url(#mpGoldGrad)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M32 13L36.5 23L32 31L27.5 23L32 13Z" fill="url(#mpGoldGrad)" />
      <circle cx="32" cy="22.5" r="1.7" fill="#0f141e" />
    </svg>
  );
}
