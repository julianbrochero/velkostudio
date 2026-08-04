'use client'

import Image from 'next/image'
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { PERSONAL_INFO, STACK_CATEGORIES } from '@/app/data'

export default function HeroSection() {
  const heroSkills = STACK_CATEGORIES.slice(0, 3)

  return (
    <section
      className="relative px-0 pt-4 text-zinc-950 dark:text-zinc-50"
      style={{ marginTop: 0 }}
    >
      <div className="mx-auto w-full max-w-6xl px-1 sm:px-0">
        <div className="rounded-[2rem] border border-zinc-200 bg-white px-5 py-24 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:px-8 md:px-10 lg:px-12 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
          <div className="grid items-start gap-12 lg:grid-cols-[120px_minmax(0,0.95fr)_minmax(260px,0.7fr)] lg:gap-12">
            <div className="order-1 flex justify-start">
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.35rem] bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                <Image
                  src={PERSONAL_INFO.photo}
                  alt={`Fotografía de ${PERSONAL_INFO.name}`}
                  fill
                  priority
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-2 space-y-6">
              <div className="space-y-3">
                <h1
                  className="leading-[0.98] font-semibold tracking-[-0.06em] text-zinc-950 dark:text-zinc-50"
                  style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}
                >
                  {PERSONAL_INFO.name}
                </h1>

                <p
                  className="leading-none font-medium tracking-[-0.045em] text-zinc-700 dark:text-zinc-200"
                  style={{ fontSize: 'clamp(1.05rem, 2vw, 1.7rem)' }}
                >
                  {PERSONAL_INFO.primaryRole}
                </p>

                <p className="max-w-2xl text-[15px] leading-7 text-zinc-500 sm:text-base dark:text-zinc-400">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
                >
                  <Mail className="h-4 w-4" />
                  {PERSONAL_INFO.email}
                </a>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {PERSONAL_INFO.location}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <LiquidButton
                  asChild
                  size="lg"
                  className="w-full rounded-full px-5 text-zinc-900 sm:w-auto dark:text-zinc-50"
                >
                  <a href="#proyectos">
                    Ver proyectos
                    <ArrowDownRight className="h-4 w-4" />
                  </a>
                </LiquidButton>

                <LiquidButton
                  asChild
                  size="lg"
                  className="w-full rounded-full px-5 text-zinc-900 sm:w-auto dark:text-zinc-50"
                >
                  <a href={PERSONAL_INFO.cvDownload} download>
                    Descargar CV
                    <Download className="h-4 w-4" />
                  </a>
                </LiquidButton>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                  <LiquidButton
                    asChild
                    size="lg"
                    className="rounded-full px-4 text-zinc-900 dark:text-zinc-50"
                  >
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </LiquidButton>

                  <LiquidButton
                    asChild
                    size="lg"
                    className="rounded-full px-4 text-zinc-900 dark:text-zinc-50"
                  >
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </LiquidButton>
                </div>
              </div>
            </div>

            <div className="order-3">
              <div className="space-y-5">
                <div>
                  <h2 className="text-sm font-medium tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                    Core Skills
                  </h2>
                </div>

                <div className="space-y-4">
                  {heroSkills.map((category) => (
                    <div key={category.id} className="space-y-1.5">
                      <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                        {category.name}
                      </p>
                      <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                        {category.items.join('  ')}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
                  <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                    Resumen
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    3+ años construyendo aplicaciones web, SaaS y sistemas para
                    automatizar procesos reales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
