'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  BriefcaseBusiness,
  FolderOpen,
  Home,
  Layers3,
  Mail,
  UserRound,
} from 'lucide-react'
import { MenuBar } from '@/components/ui/glow-menu'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeItem, setActiveItem] = useState('Inicio')

  const items = [
    {
      label: 'Inicio',
      href: '/',
      icon: Home,
      gradient:
        'radial-gradient(circle, rgba(56,189,248,0.28), transparent 70%)',
      iconColor: 'text-sky-300',
    },
    {
      label: 'Sobre mí',
      href: '/#sobre-mi',
      icon: UserRound,
      gradient:
        'radial-gradient(circle, rgba(250,204,21,0.22), transparent 70%)',
      iconColor: 'text-yellow-300',
    },
    {
      label: 'Proyectos',
      href: '/#proyectos',
      icon: FolderOpen,
      gradient:
        'radial-gradient(circle, rgba(168,85,247,0.26), transparent 70%)',
      iconColor: 'text-purple-300',
    },
    {
      label: 'Experiencia',
      href: '/#experiencia',
      icon: BriefcaseBusiness,
      gradient:
        'radial-gradient(circle, rgba(34,197,94,0.24), transparent 70%)',
      iconColor: 'text-emerald-300',
    },
    {
      label: 'Stack',
      href: '/#stack',
      icon: Layers3,
      gradient:
        'radial-gradient(circle, rgba(6,182,212,0.24), transparent 70%)',
      iconColor: 'text-cyan-300',
    },
    {
      label: 'Contacto',
      href: '/#contacto',
      icon: Mail,
      gradient:
        'radial-gradient(circle, rgba(248,113,113,0.24), transparent 70%)',
      iconColor: 'text-red-300',
    },
  ]

  return (
    <header
      className={
        isHome
          ? 'fixed top-4 right-0 left-0 z-40 mx-auto flex w-full justify-center px-4'
          : 'mb-8 flex justify-center'
      }
    >
      <MenuBar
        items={items}
        activeItem={activeItem}
        onItemClick={setActiveItem}
        className="max-w-[calc(100vw-2rem)]"
      />
    </header>
  )
}
