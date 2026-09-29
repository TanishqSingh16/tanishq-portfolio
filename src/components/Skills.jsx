import { skillGroups } from '../data/portfolioData'
import { AtSign, CalendarDays, Camera, Code2, Database, FileSpreadsheet, FileText, Globe2, Megaphone, MessageCircle, PenTool, Radio, Search, Share2, Target, Video } from 'lucide-react'
import SectionHeading from './SectionHeading'

const skillIcons = [Share2, Camera, AtSign, Share2, CalendarDays, PenTool, FileText, Camera, Video, MessageCircle, Megaphone, Target, Search, Globe2, Radio, Code2, Code2, Code2, FileSpreadsheet, Database]

export default function Skills() {
  let iconIndex = 0
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading" title="My Skills" subtitle="Tools and capabilities from my hands-on work." />
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group reveal" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-grid">
              {group.skills.map((skill) => {
                const Icon = skillIcons[iconIndex++ % skillIcons.length]
                return <div className="skill-tile" key={skill}><Icon size={24} strokeWidth={1.7} /><span>{skill}</span></div>
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
