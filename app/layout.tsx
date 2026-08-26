import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Arunika Travel | Jelajah Tanpa Ribet',
  description: 'Landing page bisnis travel untuk paket liburan domestik dan internasional dengan layanan premium.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <div className="site-shell">
          {children}
        </div>
        <ScrollReveal />
      </body>
    </html>
  )
}
