import { LogoMark } from './icons'

const COLS = [
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Проекты', href: '#cases' },
      { label: 'Команда', href: '#team' },
      { label: 'Процесс', href: '#process' },
    ],
  },
  {
    title: 'Услуги',
    links: [
      { label: 'Мобильная разработка', href: '#about' },
      { label: 'UI/UX дизайн', href: '#about' },
      { label: 'Бэкенд', href: '#about' },
      { label: 'Аналитика', href: '#about' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'hello@cgp.app', href: 'mailto:hello@cgp.app' },
      { label: 'Telegram', href: 'https://t.me/cgp_app' },
      { label: 'Связаться', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-16">
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[90%] -translate-x-1/2 rounded-full bg-iris/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold">
              <LogoMark className="h-9 w-9" />
              <span className="text-heading">
                CGP<span className="text-gradient">.APP</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Продуктовая команда, которая создаёт мобильные приложения, которыми
              пользуются миллионы.
            </p>
            <div className="mt-5 flex gap-3">
              {['TG', 'IG', 'BE', 'in'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold text-muted transition-colors hover:text-heading"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-heading">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-violet-bright"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-7 text-sm text-faint sm:flex-row">
          <span>© {2026} CGP.APP — Продуктовая команда</span>
          <span>Создаём продукты с ❤ в каждой детали</span>
        </div>
      </div>
    </footer>
  )
}
