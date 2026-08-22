import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Projetos</div>
            <h2 className="section-title">O que venho construindo</h2>
          </div>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
