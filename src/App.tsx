import { useEffect } from 'react'
import { initSmoothScroll } from './lib/smooth'
import { ScrollTrigger } from './lib/gsap'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'
import ProcessStrip from './components/ProcessStrip'
import Services from './components/Services'
import CasesH from './components/CasesH'
import TechMarquee from './components/TechMarquee'
import CtaBlock from './components/CtaBlock'
import SiteFooter from './components/SiteFooter'

export default function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll()
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => {
      cleanup()
      clearTimeout(t)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <div className="grid-bg" />
      <Navbar />
      <main>
        <HeroVideo />
        <ProcessStrip />
        <Services />
        <CasesH />
        <TechMarquee />
        <CtaBlock />
      </main>
      <SiteFooter />
    </>
  )
}
