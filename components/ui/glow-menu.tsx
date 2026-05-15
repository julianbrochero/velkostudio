'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

const easeOut = [0.4, 0, 0.2, 1] as const

interface MenuItem {
  icon: LucideIcon | React.FC
  label: string
  href: string
  gradient: string
  iconColor: string
}

interface MenuBarProps {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (label: string) => void
  className?: string
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.8,
    transition: {
      opacity: { duration: 0.5, ease: easeOut },
      scale: {
        duration: 0.5,
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
      },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
}

const sharedTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export const MenuBar = React.forwardRef<HTMLElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick }, ref) => {
    const { resolvedTheme, theme } = useTheme()
    const isDarkTheme = (resolvedTheme ?? theme) === 'dark'

    return (
      <motion.nav
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-black/80 to-black/45 p-1.5 shadow-lg shadow-black/30 backdrop-blur-lg',
          className,
        )}
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="pointer-events-none absolute -inset-2 z-0 rounded-3xl"
          variants={navGlowVariants}
          style={{
            background: isDarkTheme
              ? 'radial-gradient(circle, transparent 0%, rgba(96,165,250,0.28) 30%, rgba(192,132,252,0.25) 60%, rgba(248,113,113,0.22) 90%, transparent 100%)'
              : 'radial-gradient(circle, transparent 0%, rgba(96,165,250,0.18) 30%, rgba(192,132,252,0.16) 60%, rgba(248,113,113,0.14) 90%, transparent 100%)',
          }}
        />
        <ul className="relative z-10 flex items-center gap-1 sm:gap-2">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.label === activeItem

            return (
              <motion.li key={item.label} className="relative">
                <a
                  href={item.href}
                  onClick={() => onItemClick?.(item.label)}
                  className="block w-full"
                >
                  <motion.div
                    className="group relative block overflow-visible rounded-xl"
                    style={{ perspective: '600px' }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-0"
                      variants={glowVariants}
                      animate={isActive ? 'hover' : 'initial'}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0,
                        borderRadius: '16px',
                      }}
                    />
                    <motion.div
                      className={cn(
                        'relative z-10 flex items-center gap-2 rounded-xl bg-transparent px-3 py-2 transition-colors sm:px-4',
                        isActive
                          ? 'text-white'
                          : 'text-zinc-400 group-hover:text-white',
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center bottom',
                      }}
                    >
                      <span
                        className={cn(
                          'transition-colors duration-300 group-hover:text-white',
                          isActive ? item.iconColor : 'text-white',
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="hidden text-sm font-medium sm:inline">
                        {item.label}
                      </span>
                    </motion.div>
                    <motion.div
                      className={cn(
                        'absolute inset-0 z-10 flex items-center gap-2 rounded-xl bg-transparent px-3 py-2 transition-colors sm:px-4',
                        isActive
                          ? 'text-white'
                          : 'text-zinc-400 group-hover:text-white',
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center top',
                        rotateX: 90,
                      }}
                    >
                      <span
                        className={cn(
                          'transition-colors duration-300 group-hover:text-white',
                          isActive ? item.iconColor : 'text-white',
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="hidden text-sm font-medium sm:inline">
                        {item.label}
                      </span>
                    </motion.div>
                  </motion.div>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    )
  },
)

MenuBar.displayName = 'MenuBar'
