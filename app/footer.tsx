'use client'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'claro',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'oscuro',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'del sistema',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="inline-flex rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-800">
      {THEMES_OPTIONS.map((option) => {
        const isActive = option.id === theme

        return (
          <button
            key={option.id}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition-colors duration-100 hover:text-zinc-950 focus-visible:outline-2 data-[active=true]:bg-white data-[active=true]:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[active=true]:bg-zinc-950 dark:data-[active=true]:text-zinc-50"
            type="button"
            aria-label={`Cambiar al tema ${option.label}`}
            aria-pressed={isActive}
            data-active={isActive}
            onClick={() => setTheme(option.id)}
          >
            {option.icon}
          </button>
        )
      })}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="https://github.com/julianbrochero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2026 Julián Brochero.</span>
            <span>Full Stack Developer · Software Engineer</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
