export interface Project {
  index: string
  title: string
  description: string
  tags: string[]
  href: string
}

export interface Fact {
  label: string
  value: string
}

export interface ExperienceItem {
  title: string
  description: string
  placeholder?: boolean
}

export interface CertificateFile {
  label: string
  href: string
}

export interface Certificate {
  title: string
  institution: string
  date: string
  /** Link externo: abre em nova aba */
  href?: string
  /** Arquivos locais (PDF/imagem): abrem no modal, com abas se houver mais de um */
  files?: CertificateFile[]
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface TerminalLine {
  text: string
  kind: 'prompt' | 'out'
}
