import type { Metadata } from 'next'
import { DM_Serif_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Arunika Travel | Jelajah Tanpa Ribet',
  description: 'Landing page bisnis travel untuk paket liburan domestik dan internasional dengan layanan premium.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${dmSerif.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="site-shell">
          {children}
        </div>
        <ScrollReveal />
      </body>
    </html>
  )
}
