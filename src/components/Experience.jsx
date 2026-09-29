import { experienceTimeline } from '../data/portfolioData'
import { BriefcaseBusiness, CalendarDays } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const item = experienceTimeline[0]
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading" title="Experience" subtitle="Professional experience" />
      <div className="experience-layout reveal">
        <div className="experience-rail"><span className="experience-node"><BriefcaseBusiness size={21} /></span></div>
        <article className="experience-entry">
          <div className="experience-meta"><span><CalendarDays size={16} /> {item.period}</span></div>
          <h3>{item.company}</h3>
          <p className="experience-role">{item.role}</p>
          <ul className="responsibility-list">{item.responsibilities.map((point) => <li key={point}>{point}</li>)}</ul>
        </article>
      </div>
    </section>
  )
}
