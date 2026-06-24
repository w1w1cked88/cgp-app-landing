# CGP.APP — лендинг продуктовой команды

Современный адаптивный лендинг для продуктовой команды **CGP.APP** (разработка iOS/Android приложений)
с акцентом на анимированную hero-секцию.

## Стек

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (дизайн-токены через `@theme` в `src/index.css`)
- **Framer Motion** — entrance-каскады, scroll-reveal, mouse/scroll-parallax, mobile-меню
- **GSAP + ScrollTrigger** — scrub-анимация прогресс-линии в секции «Процесс»
- Hero-визуал (3D-команда) сгенерирован через Higgsfield → `public/img/hero.webp`

## Структура

```
src/
  components/
    Navbar, Hero, Features, Cases, Stats, Process, TechStack, CTASection, Footer
    icons.tsx            — бренд-марка, feature-иконки, tech-логотипы
    ui/                  — ParticleField, AuroraBackground, Reveal, MagneticButton,
                           Marquee, SpotlightCard, CountUp
  lib/gsap.ts            — единая регистрация ScrollTrigger
  index.css             — токены, палитра, шрифты, keyframes, component-классы
```

## Запуск

```bash
npm install
npm run dev        # дев-сервер (HMR)
npm run build      # прод-сборка в dist/
npm run preview    # предпросмотр прод-сборки
```

## Особенности

- **Hero**: aurora-фон + canvas particle-сеть с реакцией на курсор + параллакс по курсору и скроллу
  + плавающие glass-карточки + анимированный gradient-заголовок.
- **Mobile-first**, бургер-меню, поддержка `prefers-reduced-motion`.
- Все секции анимируются при появлении во вьюпорте (scroll-reveal).
- Форма в CTA открывает почтовый клиент (mailto) — замените на свой бэкенд/Telegram при необходимости.

## Что заменить под себя

- Контакты: `hello@cgp.app`, `t.me/cgp_app` (в `CTASection.tsx`, `Footer.tsx`).
- Кейсы (`Cases.tsx`), статистику команды (`Stats.tsx`), тексты — на реальные.
- Hero-картинку — на свою при необходимости (`public/img/hero.webp`).
