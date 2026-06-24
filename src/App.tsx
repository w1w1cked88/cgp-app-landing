import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Cases from './components/Cases'
import Stats from './components/Stats'
import Process from './components/Process'
import TechStack from './components/TechStack'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Cases />
        <Stats />
        <Process />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
