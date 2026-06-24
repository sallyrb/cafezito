import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg viewBox="0 0 64 64" className={styles.logoIcon}>
          <defs>
            <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" />
              <stop offset="100%" stopColor="#e08e0b" />
            </linearGradient>
          </defs>
          <ellipse cx="32" cy="48" rx="18" ry="6" fill="#d4a574" opacity="0.3" />
          <path d="M16 20 Q14 45 20 48 L44 48 Q50 45 48 20 Z" fill="url(#cupGradient)" />
          <ellipse cx="32" cy="20" rx="16" ry="5" fill="#f5a623" />
          <ellipse cx="32" cy="20" rx="14" ry="4" fill="#8b4513" opacity="0.3" />
          <path d="M48 28 Q58 28 58 38 Q58 48 48 48" fill="none" stroke="#e08e0b" strokeWidth="4" strokeLinecap="round" />
          <path d="M20 16 Q22 10 26 14" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <circle cx="28" cy="34" r="2" fill="#fff" opacity="0.3" />
        </svg>
      </div>
      <div className={styles.branding}>
        <h1 className={styles.title}>Nosso Cafezinho</h1>
        <p className={styles.slogan}>Nosso diário de cafés</p>
      </div>
    </header>
  );
}
