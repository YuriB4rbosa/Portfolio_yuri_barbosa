import { useReveal } from '../hooks/useReveal'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="card reveal" ref={ref}>
      {project.image && (
        <img className="card-shot" src={project.image} alt={`Captura de tela do projeto ${project.title}`} loading="lazy" />
      )}
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
      <div className="card-links">
        <a className="card-link" href={project.href} target="_blank" rel="noopener noreferrer">
          Ver demo ↗
        </a>
        {project.repo && (
          <a className="card-link" href={project.repo} target="_blank" rel="noopener noreferrer">
            Código ↗
          </a>
        )}
      </div>
    </div>
  )
}
