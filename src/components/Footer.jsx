import { Link2, Mail } from 'lucide-react'
import { contactDetails } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link2 size={18} /></a>
        <a href={`mailto:${contactDetails.email}`} aria-label="Email"><Mail size={18} /></a>
      </div>
      <p>Digital Marketing &amp; Social Media Professional</p>
      <p>Designed &amp; built for Tanishq Kumar Singh · © 2026</p>
    </footer>
  )
}
