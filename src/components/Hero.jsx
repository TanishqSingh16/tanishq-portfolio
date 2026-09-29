import { ArrowDown, ArrowRight, Download, Link2, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactDetails, RESUME_PATH } from '../data/portfolioData'

const focusPhrases = ['Social Media Management', 'Content Planning', 'Digital Campaigns', 'Creative Content Production']

export default function Hero() {
  const [phrase, setPhrase] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? focusPhrases[0] : '')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let phraseIndex = 0
    let characterIndex = 0
    let removing = false
    let timer
    const type = () => {
      const currentPhrase = focusPhrases[phraseIndex]
      setPhrase(currentPhrase.slice(0, characterIndex))
      if (!removing && characterIndex === currentPhrase.length) {
        removing = true
        timer = window.setTimeout(type, 1250)
        return
      }
      if (removing && characterIndex === 0) {
        removing = false
        phraseIndex = (phraseIndex + 1) % focusPhrases.length
        timer = window.setTimeout(type, 240)
        return
      }
      characterIndex += removing ? -1 : 1
      timer = window.setTimeout(type, removing ? 35 : 72)
    }
    type()
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="welcome-chip"><span /> Welcome to my portfolio</div>
        <h1 id="hero-title"><span className="hero-hello">Hi, I&apos;m</span><span className="hero-name">Tanishq Kumar Singh</span></h1>
        <p className="hero-role">Digital Marketing &amp; Social Media Professional</p>
        <p className="hero-typing"><span>{phrase}</span><i aria-hidden="true" /></p>
        <p className="hero-intro">Creative and hands-on digital marketing professional with experience in social media management, content planning, digital campaigns, Meta Ads, lead generation, SEO, website-related digital activities, and creative content production.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View My Work <ArrowRight size={18} /></a>
          <a href="#contact" className="button button-secondary">Let&apos;s Connect</a>
          <a href={RESUME_PATH} download className="button button-secondary">Download Resume <Download size={18} /></a>
        </div>
        <div className="hero-socials" aria-label="Contact links">
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link2 size={19} /></a>
          <a href={`mailto:${contactDetails.email}`} aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
    </section>
  )
}
