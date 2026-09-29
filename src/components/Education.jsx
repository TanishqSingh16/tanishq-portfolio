import { educationTimeline } from '../data/portfolioData'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-heading">
      <SectionHeading id="education-heading" title="Education" />
      <div className="education-list reveal">
        {educationTimeline.map((item, index) => (
          <article key={`${item.title}-${item.institution}`} className="education-item">
            <span className="education-icon"><GraduationCap size={23} /></span>
            <div className="education-description"><span className="education-index">0{index + 1}</span><h3>{item.title}</h3>{item.institution && <p>{item.institution}</p>}</div>
            <span className="education-status">{item.status}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
