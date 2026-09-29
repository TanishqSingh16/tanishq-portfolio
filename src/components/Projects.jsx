import { academicProjects } from '../data/portfolioData'
import { ArrowUpRight, Compass, Utensils } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useState } from 'react'

function ProjectVisual({ project, isTravel }) {
  const [failed, setFailed] = useState(false)
  const VisualIcon = isTravel ? Compass : Utensils
  return (
    <div className={`project-art ${isTravel ? 'travel-art' : 'food-art'}${failed ? ' image-error' : ''}`}>
      {!failed && <img src={project.image} alt={`${isTravel ? 'Destination' : 'Food'} photograph used as a visual placeholder for ${project.title}`} loading="lazy" onError={() => setFailed(true)} />}
      {failed && <VisualIcon size={76} strokeWidth={1.15} aria-hidden="true" />}
      <span className="placeholder-label">Stock visual placeholder</span>
      <div className="art-caption">{project.title}</div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" title="Featured Projects" subtitle="Selected academic projects" />
      <div className="project-grid">
        {academicProjects.map((project, index) => (
          <article key={project.title} className="project-card reveal">
            <ProjectVisual project={project} isTravel={index === 0} />
            <div className="project-copy">
              <p className="project-index">{`0${index + 1}`} <span>{project.type ? `${project.type} · ` : ''}{project.date}</span></p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-detail-label">Project overview <ArrowUpRight size={16} /></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
