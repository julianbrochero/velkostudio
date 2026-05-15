import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://velko.studio/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'VELkO® — Experiencias web, automatizaciones y software',
    template: '%s | VELkO®',
  },
  description:
    'Creamos productos digitales que resuelven problemas reales. Plataformas SaaS, automatizaciones a medida y soluciones de e-commerce desde Argentina.',
  openGraph: {
    title: 'VELkO®',
    description: 'Experiencias web · Automatizaciones · Software',
    url: 'https://velko.studio',
    siteName: 'VELkO®',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
})

const interTight = Inter_Tight({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
