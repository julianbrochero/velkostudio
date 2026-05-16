'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Bot, Code2, Settings2, ShoppingCart } from 'lucide-react'
import IntroScreen from '@/components/IntroScreen'
import HeroSection from '@/components/HeroSection'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { PROJECTS, WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, x: -64, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.16,
    },
  },
}

const VARIANTS_SECTION_ITEM = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -46 : 46,
    filter: 'blur(10px)',
  }),
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const TRANSITION_SECTION = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1],
}

const SERVICES = [
  {
    title: 'SaaS y plataformas web',
    description:
      'Productos digitales escalables para pymes y emprendedores: plataformas, paneles privados y herramientas web listas para operar.',
    icon: Code2,
  },
  {
    title: 'Automatizaciones y bots',
    description:
      'Flujos automáticos, integraciones y bots para reducir tareas repetitivas en ventas, soporte y operación.',
    icon: Bot,
  },
  {
    title: 'E-commerce',
    description:
      'Configuración, diseño y optimización de tiendas online, páginas de venta y catálogos para convertir mejor.',
    icon: ShoppingCart,
  },
  {
    title: 'Sistemas internos',
    description:
      'Herramientas a medida para gestionar datos, equipos, procesos y reportes sin depender de planillas frágiles.',
    icon: Settings2,
  },
]

type ProjectPreviewProps = {
  name: string
  accent: string
  image?: string
}

function ProjectPreview({ name, accent, image }: ProjectPreviewProps) {
  if (image) {
    return (
      <div
        className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-950"
        aria-label={`Vista previa del proyecto ${name}`}
      >
        <Image
          alt={`Captura de la página ${name}`}
          className="h-full w-full object-cover"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          src={image}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
      </div>
    )
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br ${accent}`}
      aria-label={`Vista previa del proyecto ${name}`}
    >
      <div className="absolute inset-x-5 top-5 h-2 rounded-full bg-white/70 dark:bg-zinc-800/80" />
      <div className="absolute top-10 right-5 left-5 grid grid-cols-3 gap-2">
        <div className="h-12 rounded-md bg-white/70 dark:bg-zinc-800/80" />
        <div className="h-12 rounded-md bg-white/50 dark:bg-zinc-800/60" />
        <div className="h-12 rounded-md bg-white/60 dark:bg-zinc-800/70" />
      </div>
      <div className="absolute right-5 bottom-5 left-5 space-y-2">
        <div className="h-2 w-3/4 rounded-full bg-zinc-900/15 dark:bg-white/20" />
        <div className="h-2 w-1/2 rounded-full bg-zinc-900/10 dark:bg-white/15" />
      </div>
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [introGone, setIntroGone] = useState(false)

  return (
    <>
      {!introGone && <IntroScreen onComplete={() => setIntroGone(true)} />}
      <motion.main
        className="space-y-24"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <HeroSection />
        </div>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
        >
          <div className="flex-1">
            <p className="text-zinc-600 dark:text-zinc-400">
              Creamos productos digitales que resuelven problemas reales, desde
              plataformas SaaS hasta automatizaciones a medida. Estamos en
              Argentina y trabajamos con empresas que quieren software que
              realmente funcione.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="servicios"
          variants={VARIANTS_SECTION}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
        >
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-medium tracking-[0.24em] text-zinc-500 uppercase dark:text-zinc-500">
                Qué hacemos
              </p>
              <h3 className="text-lg font-medium">Servicios</h3>
            </div>
            <p className="hidden max-w-xs text-right text-sm text-zinc-500 md:block dark:text-zinc-500">
              Soluciones concretas para vender, operar y automatizar mejor.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.title}
                  custom={index}
                  variants={VARIANTS_SECTION_ITEM}
                  className="group relative overflow-hidden rounded-2xl bg-zinc-100/70 p-[1px] transition-colors duration-200 hover:bg-zinc-300/80 dark:bg-zinc-800/60 dark:hover:bg-zinc-700/80"
                >
                  <div className="relative h-full rounded-[15px] bg-white/85 p-5 dark:bg-zinc-950/90">
                    <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="proyectos"
          variants={VARIANTS_SECTION}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
        >
          <h3 className="mb-5 text-lg font-medium">Proyectos seleccionados</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                custom={index}
                variants={VARIANTS_SECTION_ITEM}
                className="space-y-2"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectPreview
                    name={project.name}
                    accent={project.accent}
                    image={project.image}
                  />
                </div>
                <div className="px-1">
                  {project.link ? (
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                    </a>
                  ) : (
                    <h4 className="font-base font-[450] text-zinc-900 dark:text-zinc-50">
                      {project.name}
                    </h4>
                  )}
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experiencia"
          variants={VARIANTS_SECTION}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
        >
          <h3 className="mb-5 text-lg font-medium">Experiencia</h3>
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job, index) => (
              <motion.a
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                custom={index}
                href={job.link}
                key={job.id}
                rel="noopener noreferrer"
                target="_blank"
                variants={VARIANTS_SECTION_ITEM}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contacto"
          variants={VARIANTS_SECTION}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
        >
          <h3 className="mb-5 text-lg font-medium">Contacto</h3>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            ¿Tenés un proyecto en mente? Hablemos en{' '}
            <a
              className="underline dark:text-zinc-300"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex items-center justify-start space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </>
  )
}
