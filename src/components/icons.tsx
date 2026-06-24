import type { SVGProps } from 'react'

/* ===================== Brand mark ===================== */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <defs>
        <linearGradient id="cgp-g" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c5cff" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <path d="M32 3 54.5 16v32L32 61 9.5 48V16L32 3Z" fill="url(#cgp-g)" />
      <path d="M40 24a12 12 0 1 0 0 16" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="41" cy="32" r="3.4" fill="#fff" />
    </svg>
  )
}

/* ===================== Feature / UI icons (stroke = currentColor) ===================== */
type IcoProps = SVGProps<SVGSVGElement>
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export const IconMobile = (p: IcoProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M10.5 5.5h3" />
    <path d="m9.5 12 1.6 1.6L14 10.5" />
  </svg>
)
export const IconDesign = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M3 21s1-3 4-3 3.5 2 6 2c4 0 8-7 8-11a4 4 0 0 0-7-2.6" />
    <circle cx="7.5" cy="7.5" r="2.5" />
  </svg>
)
export const IconBackend = (p: IcoProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
)
export const IconAnalytics = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3.5-4 3 2.5L20 7" />
  </svg>
)
export const IconBulb = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
  </svg>
)
export const IconCode = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
    <path d="m13 6-2 12" />
  </svg>
)
export const IconRocket = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M5 16c-2 1-3 5-3 5s4-1 5-3M13 4c4-2 8 0 8 0s2 4 0 8c-1.5 3-5 5.5-7 6l-5-5c.5-2 3-5.5 4-9Z" />
    <circle cx="14.5" cy="9.5" r="1.6" />
  </svg>
)
export const IconGrowth = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="m3 17 5-5 4 4 9-9" />
    <path d="M16 7h5v5" />
  </svg>
)
export const IconUsers = (p: IcoProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
    <path d="M16 5.2a3 3 0 0 1 0 5.6M18 20c0-2.4-1-4-2.5-5" />
  </svg>
)
export const IconStar = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  </svg>
)
export const IconTarget = (p: IcoProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
)
export const IconBolt = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
)
export const IconArrow = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)
export const IconCheck = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="m4 12 5 5L20 6" />
  </svg>
)
export const IconMenu = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const IconClose = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)
export const IconShield = (p: IcoProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

/* ===================== Tech logos (brand colours) ===================== */
type LogoProps = SVGProps<SVGSVGElement>

export const LogoSwift = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect width="24" height="24" rx="6" fill="#F05138" />
    <path
      d="M16.8 16.4c-2.1 1.2-5 1.3-7.9-.1-2.3-1-4.2-2.8-5.4-4.6 .6.5 1.3 1 2 1.4 2.8 1.7 5.6 1.8 7.6 1-2.8-2.2-5.2-5-7-7.3 .4.4.9.8 1.4 1.2 1.6 1.3 4.1 3 5.1 3.6-2.1-2.3-4-5.1-3.9-5 2.5 2.5 4.8 3.9 4.8 3.9 .1.1.2.1.2.2 .2-.5.4-1.3.4-2.1 0-1-.4-1.9-.4-1.9 0 0 1.4 1.7 1.3 4.2 .5.6 .8 1.7 .2 3.1 0 0 .7-.1 1 .7 0 0-.4-.1-.7.1 0 0 .9.4.6 1.6 0 0-.3-.6-.9-.6Z"
      fill="#fff"
    />
  </svg>
)
export const LogoKotlin = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <defs>
      <linearGradient id="kt" x1="22" y1="2" x2="2" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E44857" />
        <stop offset=".47" stopColor="#C711E1" />
        <stop offset="1" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
    <path d="M22 22H2V2h20L12 12l10 10Z" fill="url(#kt)" />
  </svg>
)
export const LogoFlutter = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M14.3 1.9 4.6 11.6l3 3 12.7-12.7h-6ZM14.3 11 9 16.3l3 3 3-3 5.3-5.3h-6Z" fill="#54C5F8" />
    <path d="M9 16.3 12 19.3l3-3h-6Z" fill="#01579B" />
  </svg>
)
export const LogoReact = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </g>
  </svg>
)
export const LogoNode = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M12 1.7 2.5 7v10L12 22.3 21.5 17V7L12 1.7Z" fill="#539E43" />
    <text x="12" y="15.2" textAnchor="middle" fontSize="6.6" fontWeight="700" fill="#fff" fontFamily="Manrope, sans-serif">
      JS
    </text>
  </svg>
)
export const LogoFirebase = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M4 18 7 3.3c.2-.7 1.1-.8 1.5-.2l2.2 4-1.5 2.6L4 18Z" fill="#FFC24A" />
    <path d="M4 18 9.2 9.7 11 12.5 4 18Z" fill="#FFA712" />
    <path d="m14.8 6.3-1.4-2.6c-.3-.6-1.1-.6-1.4 0L4 18l10.8-6.6 1.3-3c.2-.6.1-1.4-1.3-2.1Z" fill="#F4BD62" />
    <path d="M4 18 20 14.5 17.7 8c-.2-.6-.9-.8-1.4-.4L4 18Z" fill="#F6820C" />
    <path d="M4 18 12 22l8-3.4-1.3-4L4 18Z" fill="#FDE068" />
  </svg>
)
export const LogoTypeScript = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <text x="12.5" y="16.5" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fff" fontFamily="Manrope, sans-serif">
      TS
    </text>
  </svg>
)
export const LogoFigma = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M8.5 22a3.5 3.5 0 0 0 3.5-3.5V15H8.5a3.5 3.5 0 1 0 0 7Z" fill="#0ACF83" />
    <path d="M5 11.5A3.5 3.5 0 0 1 8.5 8H12v7H8.5A3.5 3.5 0 0 1 5 11.5Z" fill="#A259FF" />
    <path d="M5 4.5A3.5 3.5 0 0 1 8.5 1H12v7H8.5A3.5 3.5 0 0 1 5 4.5Z" fill="#F24E1E" />
    <path d="M12 1h3.5a3.5 3.5 0 1 1 0 7H12V1Z" fill="#FF7262" />
    <path d="M19 11.5A3.5 3.5 0 1 1 12 11.5a3.5 3.5 0 0 1 7 0Z" fill="#1ABCFE" />
  </svg>
)
export const LogoGraphQL = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <g stroke="#E10098" strokeWidth="1" fill="none">
      <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" />
      <path d="M12 3 4 16.5M12 3l8 13.5M4 7.5h16M12 3 4.2 16.3M12 3l7.8 13.3" />
    </g>
    {[
      [12, 3],
      [20, 7.5],
      [20, 16.5],
      [12, 21],
      [4, 16.5],
      [4, 7.5],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="1.7" fill="#E10098" />
    ))}
  </svg>
)
export const LogoApple = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="#fff" {...p}>
    <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3 .8 1.1 1.7 2.4 2.9 2.3 1.2-.1 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8ZM14.2 5.9c.6-.8 1-1.9.9-3-1 0-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1.1.1 2.2-.5 2.9-1.3Z" />
  </svg>
)

export const TECH = [
  { name: 'Swift', Logo: LogoSwift },
  { name: 'SwiftUI', Logo: LogoApple },
  { name: 'Kotlin', Logo: LogoKotlin },
  { name: 'Flutter', Logo: LogoFlutter },
  { name: 'React Native', Logo: LogoReact },
  { name: 'TypeScript', Logo: LogoTypeScript },
  { name: 'Node.js', Logo: LogoNode },
  { name: 'GraphQL', Logo: LogoGraphQL },
  { name: 'Firebase', Logo: LogoFirebase },
  { name: 'Figma', Logo: LogoFigma },
] as const
