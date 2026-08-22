import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { factsBeforeExperience, factsAfterExperience, mainExperience, moreExperiences } from '../data'

export default function About() {
  const textRef = useReveal<HTMLDivElement>()
  const factsRef = useReveal<HTMLDivElement>()
  const [expOpen, setExpOpen] = useState(false)

  return (
    <section id="sobre">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Sobre</div>
            <h2 className="section-title">Yuri Barbosa</h2>
          </div>
        </div>

        <div className="sobre-grid">
          <div className="sobre-text reveal" ref={textRef}>
            <p>
              Comecei minha trajetória em TI como estagiário dando suporte técnico de redes na{' '}
              <strong>Base Investimentos</strong>, onde aprendi a resolver problemas reais sob pressão. Esse
              contato direto com infraestrutura despertou meu interesse por entender o que acontece "por
              trás" dos sistemas — e me levou à programação.
            </p>
            <p>
              Concluí o curso de <strong>Análise e Desenvolvimento de Sistemas</strong> e agora sigo para a
              graduação em <strong>Engenharia de Software</strong> na Universidade Católica de Brasília. No
              caminho, venho construindo projetos próprios em Python.
            </p>
            <p>
              Hoje meu foco é Análise de Dados: Python,SQL e PowerBI.
            </p>
          </div>

          <div className="facts reveal" ref={factsRef}>
            {factsBeforeExperience.map((fact) => (
              <div className="fact" key={fact.label}>
                <span className="fact-k">{fact.label}</span>
                <span className="fact-v">{fact.value}</span>
              </div>
            ))}

            <button
              className="fact-toggle"
              aria-expanded={expOpen}
              aria-controls="expWrap"
              onClick={() => setExpOpen((v) => !v)}
            >
              <span className="fact-k">{mainExperience.label}</span>
              <span className="fact-v">{mainExperience.value}</span>
              <span className="fact-caret">+</span>
            </button>

            <div className={`exp-wrap${expOpen ? ' open' : ''}`} id="expWrap">
              <div className="exp-inner">
                {moreExperiences.map((item) => (
                  <div className={`exp-item${item.placeholder ? ' exp-placeholder' : ''}`} key={item.title}>
                    <div className="exp-item-title">{item.title}</div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {factsAfterExperience.map((fact) => (
              <div className="fact" key={fact.label}>
                <span className="fact-k">{fact.label}</span>
                <span className="fact-v">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
