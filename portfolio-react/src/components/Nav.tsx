import { useState } from 'react'
import { handleSmoothScrollClick } from '../utils/smoothScroll'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#certificados', label: 'Certificados' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScrollClick(e)
    setOpen(false)
  }

  return (
    <header>
      <nav className="wrap">
        <div className="logo">
          Printf("YuriBarbosa");
        </div>
        <div className="navlinks">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={handleSmoothScrollClick}>{l.label}</a>
          ))}
        </div>
        <a className="navcta" href="https://github.com/YuriB4rbosa" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <button
          type="button"
          className="navtoggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="navmobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <div className={`navmobile${open ? ' open' : ''}`} id="navmobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={onLinkClick}>{l.label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
