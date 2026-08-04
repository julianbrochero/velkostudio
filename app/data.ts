export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  description: string
  summary: string
  accent: string
  technologies: string[]
  metrics: string[]
  featured?: boolean
  image?: string
  links: ProjectLink[]
  id: string
}

export type AboutCard = {
  title: string
  value: string
  description: string
  id: string
}

export type TimelineEntry = {
  title: string
  subtitle: string
  start: string
  end: string
  description: string
  highlights: string[]
  link?: string
  id: string
}

export type StackCategory = {
  name: string
  items: string[]
  id: string
}

export type ProcessStep = {
  title: string
  description: string
  id: string
}

export type ContactLink = {
  label: string
  href: string
}

export const PERSONAL_INFO = {
  firstLine: 'Hola, soy',
  name: 'Julián Brochero',
  primaryRole: 'Full Stack Developer',
  secondaryRole: 'Software Engineer',
  summary:
    'Desarrollo aplicaciones web modernas, productos SaaS y sistemas para automatizar empresas.',
  bio: 'Técnico en Programación con experiencia en desarrollo de aplicaciones full stack y productos SaaS en producción. Trabajo con foco en performance, arquitectura clara, automatización de procesos y soluciones digitales pensadas para negocio.',
  email: 'brocherojulian72@gmail.com',
  phone: '+54 9 353 408-7718',
  location: 'Villa María, Córdoba, Argentina',
  github: 'https://github.com/julianbrochero',
  linkedin: 'https://linkedin.com/in/julian-brochero',
  whatsapp: 'https://wa.me/5493534087718',
  cvDownload: '/julian-brochero-cv.pdf',
  photo: '/julian-brochero-headshot.png',
} as const

export const HERO_STATS = [
  { value: '3+', label: 'años de experiencia' },
  { value: '4', label: 'proyectos reales' },
  { value: '1', label: 'SaaS en producción' },
  { value: '2', label: 'clientes activos' },
] as const

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: 'Experiencia',
    value: 'Full Stack end-to-end',
    description:
      'Construyo productos desde la arquitectura hasta el despliegue, incluyendo mantenimiento y mejora continua.',
    id: 'about-experience',
  },
  {
    title: 'Tecnologías',
    value: 'React, Next.js, Node y PostgreSQL',
    description:
      'Stack moderno para productos web, paneles internos, APIs, automatizaciones y software a medida.',
    id: 'about-tech',
  },
  {
    title: 'Educación',
    value: 'UTN + IES Siglo 21',
    description:
      'Formación técnica en programación y estudios actuales en administración de empresas orientados a producto y negocio.',
    id: 'about-education',
  },
  {
    title: 'Especialización',
    value: 'SaaS, automatización y sistemas internos',
    description:
      'Me enfoco en herramientas reales para vender, ordenar procesos y operar mejor con software propio.',
    id: 'about-specialization',
  },
]

export const TIMELINE: TimelineEntry[] = [
  {
    title: 'Desarrollador Full Stack Freelance',
    subtitle: 'Clientes locales y proyectos a medida',
    start: '2023',
    end: 'Presente',
    description:
      'Desarrollo aplicaciones full stack, software de escritorio y soluciones internas para negocios que necesitan digitalizar procesos.',
    highlights: [
      'Arquitectura, desarrollo, despliegue y mantenimiento.',
      'Apps con React, FastAPI, PostgreSQL y TypeScript.',
      'Automatización de tareas operativas y administrativas.',
    ],
    link: 'mailto:brocherojulian72@gmail.com',
    id: 'timeline-freelance',
  },
  {
    title: 'Gestify',
    subtitle: 'Producto SaaS / ERP para pymes argentinas',
    start: '2024',
    end: 'Presente',
    description:
      'Diseño y desarrollo de un sistema de gestión con ventas, inventario, caja, presupuestos y reportes para operación diaria.',
    highlights: [
      'Modelo de suscripción mensual.',
      'Clientes activos y uso en producción.',
      'Foco en experiencia simple para negocio local.',
    ],
    link: 'https://gestify.ar',
    id: 'timeline-gestify',
  },
  {
    title: 'Desarrollo Web & Gestión Digital',
    subtitle: 'Líneas Rectas Amoblamientos',
    start: '2023',
    end: '2025',
    description:
      'Desarrollé el sitio, mejoré el canal comercial y digitalicé procesos del negocio con un sistema propio de gestión.',
    highlights: [
      'Sitio orientado a ventas y catálogo.',
      'Implementación de Gestify para ventas e inventario.',
      'Mejora del flujo comercial y operativo.',
    ],
    link: 'https://lineasrectas.com.ar',
    id: 'timeline-lineasrectas',
  },
  {
    title: 'Educación',
    subtitle: 'UTN, IES Siglo 21 e Inst. La Santísima Trinidad',
    start: '2017',
    end: 'Presente',
    description:
      'Base técnica en programación y formación complementaria en administración para conectar software, procesos y negocio.',
    highlights: [
      'Técnico en Programación - UTN.',
      'Técnico en Administración de Empresas - IES Siglo 21.',
      'Bachiller - Inst. La Santísima Trinidad.',
    ],
    id: 'timeline-education',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Gestify',
    summary: 'Proyecto principal',
    description:
      'ERP SaaS para pymes argentinas con módulos de ventas, inventario, clientes, caja, presupuestos y reportes.',
    accent:
      'from-emerald-500/20 via-sky-500/12 to-zinc-100 dark:from-emerald-400/18 dark:via-sky-400/10 dark:to-zinc-900',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'ERP',
      'SaaS',
    ],
    metrics: ['Suscripción mensual', 'Uso en producción', 'Clientes activos'],
    featured: true,
    links: [
      { label: 'Demo', href: 'https://gestify.ar' },
      { label: 'GitHub', href: 'https://github.com/julianbrochero' },
    ],
    id: 'project-gestify',
  },
  {
    name: 'Sistema de Asistencia Deportiva',
    summary: 'Panel y operación diaria',
    description:
      'Plataforma web para registrar asistencia y estadísticas de entrenamientos, con panel administrativo y seguimiento por jugador.',
    accent:
      'from-violet-500/20 via-orange-500/12 to-zinc-100 dark:from-violet-400/18 dark:via-orange-400/10 dark:to-zinc-900',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Admin Panel'],
    metrics: ['Check-in por DNI', 'Métricas de sesiones', 'Operación interna'],
    links: [{ label: 'GitHub', href: 'https://github.com/julianbrochero' }],
    id: 'project-asist',
  },
  {
    name: 'Líneas Rectas',
    summary: 'Web comercial + digitalización',
    description:
      'Sitio de ventas y catálogo para una fábrica de muebles, acompañado por mejoras de gestión para ordenar procesos internos.',
    accent:
      'from-amber-500/18 via-rose-500/10 to-zinc-100 dark:from-amber-400/15 dark:via-rose-400/10 dark:to-zinc-900',
    technologies: ['HTML', 'CSS', 'JavaScript', 'UX', 'Conversión'],
    metrics: ['Catálogo claro', 'Canales de contacto', 'Flujo comercial'],
    links: [
      { label: 'Demo', href: 'https://lineasrectas.com.ar' },
      { label: 'GitHub', href: 'https://github.com/julianbrochero' },
    ],
    id: 'project-lineasrectas',
  },
  {
    name: 'Sistemas Internos a Medida',
    summary: 'Automatización para negocio',
    description:
      'Herramientas personalizadas para ventas, administración y operación, enfocadas en eliminar planillas frágiles y tareas repetitivas.',
    accent:
      'from-cyan-500/18 via-zinc-400/10 to-zinc-100 dark:from-cyan-400/16 dark:via-zinc-600/14 dark:to-zinc-900',
    technologies: ['Python', 'FastAPI', 'Docker', 'SQLAlchemy', 'Railway'],
    metrics: ['Procesos automáticos', 'Datos centralizados', 'Deploy simple'],
    links: [{ label: 'GitHub', href: 'https://github.com/julianbrochero' }],
    id: 'project-systems',
  },
]

export const STACK_CATEGORIES: StackCategory[] = [
  {
    name: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Vite',
    ],
    id: 'stack-frontend',
  },
  {
    name: 'Backend',
    items: ['FastAPI', 'Python', 'Node.js', 'REST APIs', 'SQLAlchemy'],
    id: 'stack-backend',
  },
  {
    name: 'Base de datos',
    items: ['PostgreSQL', 'Supabase', 'SQL', 'Prisma'],
    id: 'stack-database',
  },
  {
    name: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'Git', 'Vercel', 'Railway'],
    id: 'stack-devops',
  },
  {
    name: 'Herramientas',
    items: ['Jest', 'React Testing Library', 'Scrum', 'Agile', 'Figma'],
    id: 'stack-tools',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Descubrimiento',
    description:
      'Entiendo el problema, el flujo real del negocio y dónde el software puede ahorrar tiempo o mejorar resultados.',
    id: 'process-discovery',
  },
  {
    title: 'Diseño',
    description:
      'Defino estructura, experiencia y prioridades del producto manteniendo claridad visual y foco en uso real.',
    id: 'process-design',
  },
  {
    title: 'Desarrollo',
    description:
      'Construyo interfaces, APIs, base de datos e integraciones con una arquitectura simple de mantener.',
    id: 'process-development',
  },
  {
    title: 'Testing',
    description:
      'Valido flujos críticos, reviso errores y ajusto detalles antes de llevar el producto a producción.',
    id: 'process-testing',
  },
  {
    title: 'Deploy',
    description:
      'Publico con entornos claros, monitoreo básico y una configuración pensada para crecer sin fricción.',
    id: 'process-deploy',
  },
  {
    title: 'Mantenimiento',
    description:
      'Acompaño mejoras, nuevas funcionalidades y optimización continua según el uso real del producto.',
    id: 'process-maintenance',
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', href: `mailto:${PERSONAL_INFO.email}` },
  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin },
  { label: 'GitHub', href: PERSONAL_INFO.github },
  { label: 'WhatsApp', href: PERSONAL_INFO.whatsapp },
]
