import { useReveal } from '../hooks/useReveal'
import { skillGroups } from '../data'
import type { SkillGroup } from '../types'

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="skill-group reveal" ref={ref}>
      <h4>{group.title}</h4>
      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Skills</div>
            <h2 className="section-title">Ferramentas que uso</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroupCard group={group} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
