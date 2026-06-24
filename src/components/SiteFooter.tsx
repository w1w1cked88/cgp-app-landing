const COLS = [
  {
    title: 'Компания',
    links: [
      { label: 'Услуги', href: '#services' },
      { label: 'Работы', href: '#cases' },
      { label: 'Процесс', href: '#process' },
      { label: 'Технологии', href: '#tech' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'hello@cgp.app', href: 'mailto:hello@cgp.app' },
      { label: 'Telegram', href: 'https://t.me/cgp_app' },
      { label: 'Обсудить проект', href: '#contact' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="foot-brand">
            <a href="#top" className="brand">
              <svg className="logomark" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="lmgF" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                    <stop className="logo-grad-1" />
                    <stop offset="1" className="logo-grad-2" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="28" height="28" rx="9" fill="url(#lmgF)" />
                <path d="M21 11.6a6.2 6.2 0 1 0 0 8.8" stroke="#fff" strokeWidth="3.1" strokeLinecap="round" />
              </svg>
              <span>
                <b>CGP</b>
                <span className="dot-app">.app</span>
              </span>
            </a>
            <p>
              Команда опытных разработчиков, создающих быстрые, надёжные и красивые
              мобильные приложения под iOS и Android.
            </p>
          </div>

          <div className="foot-cols">
            {COLS.map((c) => (
              <div className="foot-col" key={c.title}>
                <h4>{c.title}</h4>
                {c.links.map((l) => (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 CGP.APP — Продуктовая команда</span>
          <span>Сделано с любовью к деталям</span>
        </div>
      </div>
    </footer>
  )
}
