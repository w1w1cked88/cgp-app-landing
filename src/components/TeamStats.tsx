import { motion, type Variants } from 'framer-motion'
import CountUp from './ui/CountUp'

const STATS = [
  { to: 7, plus: false, lbl: 'человек в команде', tick: 'TEAM' },
  { to: 30, plus: true, lbl: 'проектов запущено', tick: 'PROJECTS' },
  { to: 5, plus: true, lbl: 'лет на рынке', tick: 'YEARS' },
  { to: 1, plus: false, lbl: 'общая цель', tick: 'MISSION' },
]

const cell: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function TeamStats() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">
            <span className="idx">03</span> Команда
          </span>
          <h2>Небольшая команда — большой результат</h2>
          <p>Мы разные, но нас объединяет любовь к делу, внимание к деталям и стремление делать продукт лучше каждый день.</p>
        </div>

        <motion.div
          className="stats"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {STATS.map((s) => (
            <motion.div className="stat" key={s.lbl} variants={cell}>
              <span className="tick">{s.tick}</span>
              <div className="num">
                <CountUp to={s.to} />
                {s.plus && <span className="plus">+</span>}
              </div>
              <div className="lbl">{s.lbl}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
