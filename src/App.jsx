import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const BackgroundWave = lazy(() => import('./components/BackgroundWave.jsx'))

function App() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    revealNodes.forEach((node) => observer.observe(node))
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
      document.querySelector('.site-header')?.style.setProperty('--scroll-progress', `${progress}%`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="portfolio-shell">
      <Suspense fallback={<div className="scene-loading" aria-hidden="true" />}>
        <BackgroundWave />
      </Suspense>
      <Navbar />

      <main className="portfolio-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
