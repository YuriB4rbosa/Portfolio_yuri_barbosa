import Terminal from './Terminal'
import { terminalLines } from '../data'
import { handleSmoothScrollClick } from '../utils/smoothScroll'

export default function Hero() {
  return (
    <main className="wrap hero">
      <div>
        <div className="eyebrow">Brasília, DF · Disponível para oportunidades</div>
        <h1 className="hero-title">
          Desenvolvedor <em>Python</em>.
        </h1>
        <p className="hero-sub">
          Estudante de Engenharia de Software, focado em Análise de Dados — com Python, SQL e PowerBI.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projetos" onClick={handleSmoothScrollClick}>
            Ver projetos
          </a>
          <a className="btn btn-ghost" href="#contato" onClick={handleSmoothScrollClick}>
            Entrar em contato
          </a>
        </div>
      </div>

      <Terminal lines={terminalLines} />
    </main>
  )
}
