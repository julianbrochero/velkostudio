import BackgroundShaders from '@/components/ui/background-shaders'
import { LiquidButton } from '@/components/ui/liquid-glass-button'

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-5rem)] w-full items-center justify-center overflow-hidden bg-zinc-100 p-2 pt-0 text-white sm:p-3 sm:pt-0 dark:bg-zinc-950"
      style={{ marginTop: 0 }}
    >
      <div className="relative flex min-h-[calc(100svh-6rem)] w-full items-center overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-1 shadow-black/35 ring-white/5 sm:min-h-[calc(100svh-6.5rem)] sm:rounded-[2.75rem]">
        <BackgroundShaders className="opacity-75 grayscale" />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 44% 20%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 24%, transparent 50%)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.34) 48%, rgba(0,0,0,0.92) 100%)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-screen"
          style={{
            backgroundImage:
              'radial-gradient(circle at 28% 12%, rgba(255,255,255,0.9), transparent 18%), radial-gradient(circle at 68% 38%, rgba(255,255,255,0.35), transparent 22%)',
          }}
        />

        <div className="relative z-10 flex min-h-[calc(100svh-6rem)] w-full flex-col justify-between px-6 pt-24 pb-9 sm:min-h-[calc(100svh-6.5rem)] sm:px-10 md:px-14 md:pt-28 md:pb-12">
          <div className="grid flex-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.36fr)]">
            <div className="space-y-0">
              <div className="flex items-start">
                <h1
                  className="leading-[0.82] font-black tracking-[-0.06em] text-white drop-shadow-2xl"
                  style={{ fontSize: 'clamp(78px, 23vw, 260px)' }}
                >
                  VELkO
                </h1>
                <sup className="mt-3 ml-2 text-[clamp(32px,7vw,92px)] leading-none font-black text-white">
                  ®
                </sup>
              </div>

              <p
                className="text-right leading-none font-black tracking-[-0.04em] text-white md:pr-[18%]"
                style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}
              >
                Studio
              </p>
            </div>

            <div className="space-y-3 text-sm leading-tight font-medium tracking-wide text-white/65 sm:text-base md:justify-self-end md:text-left">
              <p>Software a medida</p>
              <p>Automatizaciones</p>
              <p>Experiencias web</p>
              <p>Integraciones para equipos</p>
            </div>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[minmax(0,0.62fr)_auto]">
            <p className="max-w-xl text-base leading-7 text-balance text-white/70 sm:text-lg">
              Software, automatizaciones y experiencias web para equipos que
              quieren moverse con precisión.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <LiquidButton
                asChild
                size="xl"
                className="rounded-full px-7 text-white"
              >
                <a href="#contacto">Hablemos</a>
              </LiquidButton>
              <LiquidButton
                asChild
                size="xl"
                className="rounded-full px-7 text-zinc-100"
              >
                <a href="#proyectos">Ver proyectos</a>
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
