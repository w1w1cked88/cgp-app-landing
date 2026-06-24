const COLS = [
  {
    title: 'Компания',
    links: [
      { label: 'Услуги', href: '#services' },
      { label: 'Кейсы', href: '#cases' },
      { label: 'Команда', href: '#team' },
      { label: 'Процесс', href: '#process' },
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
                <rect x="2" y="2" width="28" height="28" rx="8" fill="#A3E635" />
                <path d="M21 12a6 6 0 1 0 0 8" stroke="#0a0b0c" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span>
                <b>CGP</b>
                <span className="dot-app">.app</span>
              </span>
            </a>
            <p>
              Продуктовая команда, которая создаёт мобильные приложения, которыми
              пользуются миллионы.
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
          <span>Сделано с лаймом в каждой детали</span>
        </div>
      </div>
    </footer>
  )
}
