'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/app/header'
import { Footer } from '@/app/footer'

export function LayoutFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter)]">
      <div
        className={`relative mx-auto w-full flex-1 px-4 sm:px-5 lg:px-6 ${
          isHome ? 'max-w-none pt-0' : 'max-w-6xl pt-20'
        }`}
      >
        {isHome ? null : <Header />}
        {children}
        {isHome ? null : <Footer />}
      </div>
    </div>
  )
}
