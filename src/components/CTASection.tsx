import { useState } from 'react'
import Reveal from './ui/Reveal'
import AuroraBackground from './ui/AuroraBackground'
import { IconArrow, IconCheck } from './icons'

const EMAIL = 'hello@cgp.app'
const TELEGRAM = 'https://t.me/cgp_app'

export default function CTASection() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Заявка с сайта CGP.APP — ${name || 'без имени'}`
    const body = `Имя: ${name}\nКонтакт: ${contact}\n\nЗадача:\n${message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const field =
    'w-full rounded-2xl border border-line bg-bg/60 px-5 py-3.5 text-heading placeholder:text-faint outline-none transition-colors focus:border-violet/60'

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
            <AuroraBackground className="opacity-70" />
            <div
              className="pointer-events-none absolute inset-0 grid-bg opacity-30"
              aria-hidden="true"
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="chip">Свяжитесь с нами</span>
                <h2 className="mt-5 text-3xl sm:text-5xl">
                  Готовы обсудить <br />
                  <span className="text-gradient">ваш проект?</span>
                </h2>
                <p className="mt-5 max-w-md text-lg text-body">
                  Расскажите об идее — вернёмся с оценкой, сроками и планом запуска
                  в течение одного рабочего дня.
                </p>

                <ul className="mt-7 space-y-3">
                  {[
                    'Бесплатная консультация и оценка',
                    'Прозрачные сроки и стоимость',
                    'Поддержка после запуска',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-body">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-iris to-fuchsia text-white">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${EMAIL}`} className="btn-ghost text-sm">
                    {EMAIL}
                  </a>
                  <a href={TELEGRAM} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
                    Telegram
                  </a>
                </div>
              </div>

              <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-muted">Как вас зовут?</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Имя"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-muted">Email или Telegram</label>
                    <input
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="you@example.com / @username"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-muted">О проекте</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Коротко опишите идею или задачу"
                      className={`${field} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Отправить заявку
                    <IconArrow className="h-[18px] w-[18px]" />
                  </button>
                  <p className="text-center text-xs text-faint">
                    Нажимая кнопку, вы соглашаетесь с обработкой данных.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
