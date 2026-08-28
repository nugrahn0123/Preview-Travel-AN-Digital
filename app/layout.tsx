import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Arunika Travel | Jelajah Tanpa Ribet',
  description:
    'Trip planner profesional untuk keluarga & korporat. Itinerary custom, hotel strategis, dan handling dokumen oleh tim berpengalaman.',
  openGraph: {
    title: 'Arunika Travel | Jelajah Tanpa Ribet',
    description:
      'Trip planner profesional untuk keluarga & korporat. Itinerary custom, hotel strategis, dan handling dokumen.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Arunika Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arunika Travel | Jelajah Tanpa Ribet',
    description: 'Trip planner profesional untuk keluarga & korporat.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <div className="site-shell">
          {children}
        </div>
        <ScrollReveal />
      </body>
    </html>
  )
}
