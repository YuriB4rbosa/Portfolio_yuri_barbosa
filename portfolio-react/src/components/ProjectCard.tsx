import { useReveal } from '../hooks/useReveal'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="card reveal" ref={ref}>
      <div className="card-index">{project.index}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <a className="card-link" href={project.href} target="_blank" rel="noopener noreferrer">
        Ver repositório ↗
      </a>
    </div>
  )
}
