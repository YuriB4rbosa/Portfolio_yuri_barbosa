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

export interface FocusItem {
  tag: string
  title: string
  description: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface TerminalLine {
  text: string
  kind: 'prompt' | 'out'
}
