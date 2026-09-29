import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, RESUME_PATH } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
      if (visible) setActive(`#${visible.target.id}`)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current
      document.documentElement.dataset.theme = next ? 'dark' : 'light'
      return next
    })
  }

  return (
    <header className="site-header" aria-label="Main navigation">
      <div className="header-inner">
      <a className="brand-mark" href="#top" aria-label="Tanishq Kumar Singh home">Tanishq<span>.</span></a>

      <nav className="desktop-nav" aria-label="Main navigation links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={`nav-link${active === item.href ? ' active' : ''}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button type="button" className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a className="resume-link" href={RESUME_PATH} download>
          Resume <Download size={17} />
        </a>
      </div>

      <button
        type="button"
        className="mobile-menu-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`nav-link${active === item.href ? ' active' : ''}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
      </div>
    </header>
  )
}
