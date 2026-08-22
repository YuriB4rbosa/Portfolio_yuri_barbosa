import { handleSmoothScrollClick } from '../utils/smoothScroll'

export default function Nav() {
  return (
    <header>
      <nav className="wrap">
        <div className="logo">
          Printf("YuriBarbosa");
        </div>
        <div className="navlinks">
          <a href="#sobre" onClick={handleSmoothScrollClick}>Sobre</a>
          <a href="#projetos" onClick={handleSmoothScrollClick}>Projetos</a>
          <a href="#skills" onClick={handleSmoothScrollClick}>Skills</a>
          <a href="#contato" onClick={handleSmoothScrollClick}>Contato</a>
        </div>
        <a className="navcta" href="https://github.com/YuriB4rbosa" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  )
}
