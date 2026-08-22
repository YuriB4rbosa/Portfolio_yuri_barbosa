import { useReveal } from '../hooks/useReveal'
import { focusItems } from '../data'

export default function Focus() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="foco" className="reveal" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">CERTIFICADOS</div>
            <h2 className="section-title">Alguns dos meus certificados ao longo dos estudos</h2>
          </div>
        </div>

        <div className="foco-grid">
          {focusItems.map((item) => (
            <div className="foco-item" key={item.title}>
              <div className="foco-tag">{item.tag}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
