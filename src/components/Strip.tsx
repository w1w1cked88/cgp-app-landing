const CLIENTS = [
  'Northwave',
  'Lumio',
  'Vesta',
  'Kasta',
  'Orbital',
  'Pulse Labs',
  'Nimbus',
  'Foundry',
]

function Dot() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="12" height="12" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="7" r="2" fill="currentColor" />
    </svg>
  )
}

/** Trust strip — infinite marquee of client logos. */
export default function Strip() {
  const items = [...CLIENTS, ...CLIENTS]
  return (
    <div className="strip">
      <div className="wrap strip-inner">
        <span className="strip-label">Нам доверяют</span>
        <div className="marquee-mask">
          <div
            className="marquee-row"
            style={{ animation: 'marqueeX 28s linear infinite' }}
          >
            {items.map((c, i) => (
              <span className="lg" key={i}>
                <Dot />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marqueeX{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
