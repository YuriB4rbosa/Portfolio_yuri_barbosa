import type { Project, Fact, Certificate, SkillGroup, TerminalLine, ExperienceItem } from './types'

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
  { label: 'FORMAÇÃO', value: 'Eng. de Software — UCB (cursando desde ago/2026)' },
  { label: 'ANTERIOR', value: 'Análise e Desenvolvimento de Sistemas — UCB' },
]

export const factsAfterExperience: Fact[] = [
  { label: 'FOCO ATUAL', value: 'Análise de dados · Python · SQL · PowerBI' },
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
    description: 'Espaço reservado — Em busca de uma nova experiência!',
    placeholder: true,
  },
]


// Capturas ficam em public/projetos/
const shot = (file: string) => `${import.meta.env.BASE_URL}projetos/${file}`

export const projects: Project[] = [
  {
    index: '01',
    title: 'HabitStack',
    description:
      'Aplicação para criação e acompanhamento de hábitos diários, com foco em consistência e visualização de progresso ao longo do tempo.',
    tags: ['Python', 'React', 'PostgreSQL'],
    href: 'https://habitstack-web.vercel.app/login',
    repo: 'https://github.com/YuriB4rbosa/Sistema-de-Rotina',
    image: shot('habitstack.jpg'),
  },
  {
    index: '02',
    title: 'Gym Manager API',
    description:
      'Curso técnico de desenvolvedor de sistemas. API REST para gestão de academias — cadastro de alunos, planos e treinos, estruturada com boas práticas de back-end.',
    tags: ['Python', 'REST', 'SQLite', 'Flask'],
    href: 'https://gym-manager-api-8lp9.onrender.com/',
    repo: 'https://github.com/YuriB4rbosa/Gym-Manager-API',
    image: shot('gym-manager.jpg'),
  },
  {
    index: '03',
    title: 'Scheduler API',
    description:
      'API REST de agendamento para pequenos negócios, que impede sobreposição de horários. Autenticação JWT, Swagger, testes e CI.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
    href: 'https://scheduler-api-3mdo.onrender.com/docs',
    repo: 'https://github.com/YuriB4rbosa/scheduler-api',
    image: shot('scheduler-api.jpg'),
  },
]

// Os arquivos ficam em public/certificados/
const cert = (file: string) => `${import.meta.env.BASE_URL}certificados/${file}`

export const certificates: Certificate[] = [
  {
    title: 'Python do zero ao avançado (141.5h)',
    institution: 'Udemy',
    date: '11/2026',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a098c2ab-7ecb-4839-84bb-073eefda95e7.jpg',
  },
  {
    title: 'SQL (Basic) - HackerRank (20h)',
    institution: 'HackerRank',
    date: '08/2026',
    href: 'https://www.hackerrank.com/certificates/cade84fb345d',
  },
  {
    title: 'Fundamentos de Git e GitHub - UCB (20h)',
    institution: 'TIC em Trilhas — UCB',
    date: '08/2026',
    files: [
      { label: 'Certificado 1', href: cert('Meus_Certificados1.pdf') },
      { label: 'Certificado 2', href: cert('Meus_Certificados2.pdf') },
      { label: 'Certificado 3', href: cert('Meus_Certificados3.pdf') },
    ],
  },
  {
    title: 'Universidade Catolica de Brasília — UCB (2000h)',
    institution: 'Universidade Catolica de Brasília — UCB',
    date: '05/2026',
    files: [{ label: 'Certificado', href: cert('certificado_conclusao_ads.pdf') }],
  },
  {
    title: 'python (Basic) - Fundação Bradesco (18h)',
    institution: 'Fundação Bradesco',
    date: '01/2026',
    files: [{ label: 'Certificado', href: cert('Python.pdf') }],
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Dados & Análise', skills: ['SQL', 'PostgreSQL', 'MySQL', 'Pandas', 'PowerBI'] },
  { title: 'Back-end', skills: ['Python', 'Django', 'Flask', 'APIs REST'] },
  { title: 'Front-end', skills: ['React', 'TypeScript', 'Figma'] },
  { title: 'Ferramentas', skills: ['Git & GitHub', 'Selenium', 'CLion', 'DataGrip', 'VSCode'] },
  { title: 'Soft Skills', skills: ['Trabalho em equipe', 'Boa comunicação', 'Observador'] },
]
