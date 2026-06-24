type Props = { className?: string }

/** Soft animated aurora blobs — pure CSS, GPU-friendly. */
export default function AuroraBackground({ className = '' }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-[20%] left-[8%] h-[55vh] w-[55vh] rounded-full bg-iris/25 blur-[130px] animate-aurora" />
      <div
        className="absolute top-[10%] right-[2%] h-[50vh] w-[50vh] rounded-full bg-fuchsia/20 blur-[140px] animate-aurora"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute bottom-[-15%] left-[35%] h-[45vh] w-[45vh] rounded-full bg-indigo/20 blur-[150px] animate-aurora"
        style={{ animationDelay: '-11s' }}
      />
    </div>
  )
}
