import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  reverse?: boolean
  duration?: number
}

/** Infinite horizontal marquee; pauses on hover. Content is duplicated for a seamless loop. */
export default function Marquee({
  children,
  className = '',
  reverse = false,
  duration = 32,
}: Props) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div
        className="flex shrink-0 items-center gap-5 pr-5 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
