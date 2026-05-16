type Project = {
  name: string
  description: string
  link?: string
  image?: string
  accent: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Gestify',
    description:
      'SaaS de gestión para pymes argentinas: ventas, inventario, caja, presupuestos y reportes en una plataforma web pensada para el mercado local.',
    image: '/gestify.png',
    link: 'https://gestify.ar',
    accent:
      'from-emerald-500/20 via-sky-500/10 to-zinc-100 dark:from-emerald-400/15 dark:via-sky-400/10 dark:to-zinc-900',
    id: 'project1',
  },
  {
    name: 'Líneas Rectas',
    description:
      'Configuración de página de ventas y e-commerce para una fábrica de muebles de melamina, con catálogo claro, trabajos a medida y canales de contacto directos.',
    image: '/lineasrectas.png',
    link: 'https://lineasrectas.com.ar',
    accent:
      'from-rose-500/20 via-amber-500/10 to-zinc-100 dark:from-rose-400/15 dark:via-amber-400/10 dark:to-zinc-900',
    id: 'project2',
  },
  {
    name: 'Asist App',
    description:
      'Aplicación profesional de asistencia para un preparador físico, con check-in por DNI, panel de administración y reportes de sesiones para seguir el rendimiento.',
    accent:
      'from-orange-500/20 via-violet-500/10 to-zinc-100 dark:from-orange-400/15 dark:via-violet-400/10 dark:to-zinc-900',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'VELkO®',
    title: 'Fundador y desarrollador',
    start: '2024',
    end: 'Actualidad',
    link: 'https://velko.studio',
    id: 'work1',
  },
  {
    company: 'Independiente',
    title: 'Desarrollador freelance',
    start: '2022',
    end: 'Actualidad',
    link: 'mailto:brocherojulian72@gmail.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Explorando el cruce entre diseño, IA e ingeniería de diseño',
    description: 'Cómo la IA está cambiando la forma en que diseñamos',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Por qué dejé mi trabajo para crear mi propia empresa',
    description:
      'Una mirada en profundidad a la decisión de dejar mi trabajo y empezar mi propia empresa',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'Lo que aprendí en mi primer año como freelancer',
    description:
      'Un repaso de mi primer año trabajando freelance y lo que aprendí',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'Cómo exportar metadata desde MDX para SEO en Next.js',
    description:
      'Una guía para exportar metadata desde archivos MDX y aprovechar las funciones SEO de Next.js.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'WhatsApp',
    link: 'https://wa.me/5493534087718',
  },
  {
    label: 'Instagram',
    link: 'https://instagram.com/velko.studio',
  },
]

export const EMAIL = 'brocherojulian72@gmail.com'
