import styles from './Hero.module.css';

export default function Hero({ onRegisterClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <h2 className={styles.heroTitle}>
            Porque nem todo café merece ser esquecido
          </h2>
          <p className={styles.heroText}>
            Um cafezinho pode melhorar o seu dia, mas não deixe que ele esvazie a sua carteira sem que você perceba. Registre todos eles.
          </p>
          <button className={styles.registerButton} onClick={onRegisterClick}>
            ☕ Adicionar Cafezinho
          </button>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.illustration}>
            <svg viewBox="0 0 400 400" className={styles.illustrationSvg}>
              <defs>
                <linearGradient id="heroCupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f8b595" />
                  <stop offset="100%" stopColor="#f5a623" />
                </linearGradient>
                <linearGradient id="heroCoffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6f4e37" />
                  <stop offset="100%" stopColor="#4a3728" />
                </linearGradient>
                <linearGradient id="heroCreamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff5e6" />
                  <stop offset="100%" stopColor="#ffe4c4" />
                </linearGradient>
              </defs>

              {/* Background circle */}
              <circle cx="200" cy="200" r="150" fill="#fff5f0" />
              <circle cx="200" cy="200" r="120" fill="#ffecd2" opacity="0.5" />

              {/* Main cup body */}
              <ellipse cx="200" cy="300" rx="80" ry="15" fill="#d4a574" opacity="0.3" />
              <path d="M130 150 Q120 280 140 310 L260 310 Q280 280 270 150 Z" fill="url(#heroCupGradient)" />

              {/* Cup rim */}
              <ellipse cx="200" cy="150" rx="70" ry="20" fill="#f5a623" />
              <ellipse cx="200" cy="150" rx="60" ry="16" fill="url(#heroCoffeeGradient)" />

              {/* Cream/latte art */}
              <ellipse cx="200" cy="150" rx="55" ry="13" fill="url(#heroCreamGradient)" />

              {/* Cute face */}
              <circle cx="180" cy="220" r="8" fill="#4a3728" />
              <circle cx="220" cy="220" r="8" fill="#4a3728" />
              <circle cx="182" cy="218" r="3" fill="#fff" />
              <circle cx="222" cy="218" r="3" fill="#fff" />
              <path d="M185 250 Q200 270 215 250" fill="none" stroke="#4a3728" strokeWidth="4" strokeLinecap="round" />

              {/* Blush */}
              <circle cx="165" cy="240" r="10" fill="#ffb6c1" opacity="0.5" />
              <circle cx="235" cy="240" r="10" fill="#ffb6c1" opacity="0.5" />

              {/* Cup handle */}
              <path d="M270 180 Q320 180 320 230 Q320 280 270 280" fill="none" stroke="#f5a623" strokeWidth="12" strokeLinecap="round" />

              {/* Coffee beans */}
              <g transform="translate(80, 100)">
                <ellipse cx="0" cy="0" rx="20" ry="12" fill="#5d4037" />
                <path d="M-10 0 Q0 -5 10 0 Q0 5 -10 0" fill="#3e2723" />
              </g>
              <g transform="translate(320, 120) rotate(30)">
                <ellipse cx="0" cy="0" rx="18" ry="10" fill="#5d4037" />
                <path d="M-8 0 Q0 -4 8 0 Q0 4 -8 0" fill="#3e2723" />
              </g>
              <g transform="translate(100, 280) rotate(-20)">
                <ellipse cx="0" cy="0" rx="15" ry="9" fill="#5d4037" />
                <path d="M-7 0 Q0 -3 7 0 Q0 3 -7 0" fill="#3e2723" />
              </g>

              {/* Hearts */}
              <path d="M60 200 Q60 180 75 180 Q90 180 90 200 Q90 220 60 240 Q30 220 30 200 Q30 180 45 180 Q60 180 60 200" fill="#ff8a80" opacity="0.6" />
              <path d="M340 220 Q340 205 350 205 Q360 205 360 220 Q360 235 340 250 Q320 235 320 220 Q320 205 330 205 Q340 205 340 220" fill="#ff8a80" opacity="0.5" transform="scale(0.7) translate(180, 100)" />

              {/* Steam */}
              <path d="M175 120 Q170 100 180 80" fill="none" stroke="#d4a574" strokeWidth="3" strokeLinecap="round" opacity="0.4">
                <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M175 120 Q170 100 180 80;M175 120 Q180 100 170 80;M175 120 Q170 100 180 80" />
              </path>
              <path d="M200 110 Q195 85 205 60" fill="none" stroke="#d4a574" strokeWidth="3" strokeLinecap="round" opacity="0.4">
                <animate attributeName="d" dur="2.5s" repeatCount="indefinite" values="M200 110 Q195 85 205 60;M200 110 Q205 85 195 60;M200 110 Q195 85 205 60" />
              </path>
              <path d="M225 115 Q220 95 230 75" fill="none" stroke="#d4a574" strokeWidth="3" strokeLinecap="round" opacity="0.4">
                <animate attributeName="d" dur="2.2s" repeatCount="indefinite" values="M225 115 Q220 95 230 75;M225 115 Q230 95 220 75;M225 115 Q220 95 230 75" />
              </path>

              {/* Decorative dots */}
              <circle cx="100" cy="150" r="5" fill="#ffb74d" opacity="0.6" />
              <circle cx="300" cy="150" r="4" fill="#ffb74d" opacity="0.5" />
              <circle cx="150" cy="320" r="6" fill="#ffb74d" opacity="0.4" />
              <circle cx="250" cy="330" r="4" fill="#ffb74d" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
