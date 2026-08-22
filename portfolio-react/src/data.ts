import type { Project, Fact, FocusItem, SkillGroup, TerminalLine, ExperienceItem } from './types'

export const terminalLines: TerminalLine[] = [
  { text: '$ whoami', kind: 'prompt' },
  { text: '> Yuri Barbosa', kind: 'out' },
  { text: '$ cat foco.txt', kind: 'prompt' },
  { text: '> Python · SQL · PowerBI', kind: 'out' },
  
  { text: '$ git log --oneline -3', kind: 'prompt' },
  { text: '> Cursando Eng. Software', kind: 'out' },
  { text: '> Formado em ADS', kind: 'out' },
  
]

export const factsBeforeExperience: Fact[] = [
  { label: 'FORMAÇÃO', value: 'Eng. de Software — UCB (início ago/2026)' },
  { label: 'ANTERIOR', value: 'Análise e Desenvolvimento de Sistemas — UCB' },
]

export const factsAfterExperience: Fact[] = [
  { label: 'FOCO ATUAL', value: 'Python · Back-end · Bancos de dados · PowerBI' },
  { label: 'LOCALIZAÇÃO', value: 'Brasília, DF — Brasil' },
  { label: 'GITHUB', value: 'github.com/YuriB4rbosa' },
]

export const mainExperience: Fact = {
  label: 'EXPERIÊNCIA',
  value: 'Suporte técnico de redes — Base Investimentos',
}

export const moreExperiences: ExperienceItem[] = [
  {
    title: '+ PRÓXIMA EXPERIÊNCIA',
    description:
      'Espaço reservado — Em busca de uma nova experiência!',
  },
  {
    title: '+ PRÓXIMA EXPERIÊNCIA',
    description: 'Espaço reservado — Em busca de uma nova experiência!',
    placeholder: true,
  },
]

export const projects: Project[] = [
  {
    index: '01',
    title: 'HabitStack',
    description:
      'Aplicação para criação e acompanhamento de hábitos diários, com foco em consistência e visualização de progresso ao longo do tempo.',
    tags: ['Python', 'React', 'PostgreSQL'],
    href: 'https://habitstack-web.vercel.app/login',
  },
  {
    index: '02',
    title: 'Gym Manager API',
    description:
      'Curso técnico de desenvolvedor de sistemas. API REST para gestão de academias — cadastro de alunos, planos e treinos, estruturada com boas práticas de back-end.',
    tags: ['Python', 'REST', 'SQlite', 'Flask'],
    href: 'https://gym-manager-api-8lp9.onrender.com/',
  },
  
]

export const focusItems: FocusItem[] = [
  {
    tag: 'Python do zero ao avançado Udemy',
    title: 'Python',
    description: 'Python – PySide6, Django, Selenium, Regexp, Testes, TDD, POO, Design Patterns GoF, algoritmos e programação (140h)',
  },
  {
    tag: 'Python Fundação Bradesco',
    title: 'Python',
    description: 'LINGUAGEM DE PROGRAMAÇÃO PYTHON - BÁSICO (20h)',
  },
  {
    tag: 'Git e GitHub TIC em Trilhas',
    title: 'Fundamentos de Git',
    description: 'Fundamentos de Git e GitHub do tic em trilhas pela UCB (20h)',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Back-end & Dados', skills: ['Python', 'Django', 'PostgreSQL', 'MySQL', 'Pandas'] },
  { title: 'Front-end', skills: ['React', 'TypeScript', 'Figma'] },
  { title: 'Ferramentas', skills: ['Git & GitHub', 'Selenium', 'Clion', 'DataGrip', 'VSCode'] },
  { title: 'Soft Skills', skills: ['Trabalho em equipe', 'Boa comunicação', 'Observador'] },
]
