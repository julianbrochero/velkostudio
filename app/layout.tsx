import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { WEBSITE_URL } from '@/lib/constants'
import { LayoutFrame } from '@/components/layout-frame'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Julián Brochero | Full Stack Developer',
    template: '%s | Julián Brochero',
  },
  description:
    'Portfolio de Julián Brochero, Full Stack Developer. Desarrollo aplicaciones web modernas, productos SaaS y sistemas para automatizar empresas.',
  openGraph: {
    title: 'Julián Brochero | Full Stack Developer',
    description:
      'Aplicaciones web modernas, productos SaaS y sistemas a medida con foco en producto, negocio y ejecución.',
    url: WEBSITE_URL,
    siteName: 'Julián Brochero',
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
          <LayoutFrame>{children}</LayoutFrame>
        </ThemeProvider>
      </body>
    </html>
  )
}
