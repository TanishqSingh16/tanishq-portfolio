import { ArrowRight, Camera, Megaphone, PenTool } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { PROFILE_IMAGE } from '../data/portfolioData'

export default function About() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" title="About Me" />
      <div className="about-grid reveal">
        <div className={`portrait-wrap${imageFailed ? ' image-error' : ''}`}>
          <div className="portrait-accent" aria-hidden="true" />
          <img src={PROFILE_IMAGE} alt="Temporary professional profile photo placeholder" loading="lazy" onError={() => setImageFailed(true)} />
          {imageFailed && <div className="portrait-fallback"><Camera size={54} /><span>Profile photo</span></div>}
          <div className="portrait-tag portrait-tag-one"><Megaphone size={18} /><span>Social Media</span></div>
          <div className="portrait-tag portrait-tag-two"><PenTool size={18} /><span>Content &amp; Creative</span></div>
        </div>
        <div className="about-copy">
          <p className="about-lead">Digital Marketing &amp; Social Media professional with hands-on experience in managing company social media platforms, content planning, digital campaigns, Meta Ads, lead generation, SEO, website-related digital activities, and creative content production.</p>
          <div className="about-focus">
            <article><span className="focus-icon"><Megaphone size={20} /></span><div><h3>Social Media &amp; Campaigns</h3><p>Social media management, content planning, digital campaigns, Meta Ads and lead generation.</p></div></article>
            <article><span className="focus-icon"><PenTool size={20} /></span><div><h3>Creative &amp; Digital</h3><p>SEO, website-related digital marketing and creative content production.</p></div></article>
          </div>
          <a href="#contact" className="text-link">Let&apos;s work together <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}
