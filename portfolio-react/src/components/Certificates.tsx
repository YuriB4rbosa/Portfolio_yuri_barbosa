import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useReveal } from '../hooks/useReveal'
import { certificates } from '../data'
import type { Certificate } from '../types'

function isImage(href: string) {
  return /\.(png|jpe?g|webp|gif)(\?.*)?$/i.test(href)
}

function CertificateModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const files = cert.files ?? []
  const [index, setIndex] = useState(0)
  const current = files[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div
        className="cert-modal"
        role="dialog"
        aria-modal="true"
        aria-label={cert.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cert-modal-head">
          <div>
            <div className="cert-institution">{cert.institution}</div>
            <div className="cert-modal-title">{cert.title}</div>
          </div>
          <div className="cert-modal-actions">
            <a href={current.href} target="_blank" rel="noopener noreferrer">
              Abrir em nova aba ↗
            </a>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar">
              ✕
            </button>
          </div>
        </div>
        {files.length > 1 && (
          <div className="cert-tabs" role="tablist">
            {files.map((f, i) => (
              <button
                key={f.href}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={i === index ? 'active' : ''}
                onClick={() => setIndex(i)}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
        <div className="cert-modal-body">
          {isImage(current.href) ? (
            <img src={current.href} alt={`${current.label}: ${cert.title}`} />
          ) : (
            <iframe key={current.href} src={current.href} title={`${current.label}: ${cert.title}`} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function Certificates() {
  const ref = useReveal<HTMLElement>()
  const [selected, setSelected] = useState<Certificate | null>(null)

  return (
    <section id="certificados" className="reveal" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">CERTIFICADOS</div>
            <h2 className="section-title">Alguns dos meus certificados ao longo dos estudos</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <div className="cert-item" key={cert.title}>
              <div className="cert-institution">{cert.institution}</div>
              <h4>{cert.title}</h4>
              <div className="cert-date">{cert.date}</div>
              {cert.files?.length ? (
                <button type="button" className="cert-link" onClick={() => setSelected(cert)}>
                  {cert.files.length > 1 ? `Ver certificados (${cert.files.length}) ↗` : 'Ver certificado ↗'}
                </button>
              ) : (
                <a className="cert-link" href={cert.href} target="_blank" rel="noopener noreferrer">
                  Ver certificado ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {selected && <CertificateModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
