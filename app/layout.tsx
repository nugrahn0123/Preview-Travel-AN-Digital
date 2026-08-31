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
  title: 'Arunika Travel | Trip Planner Profesional Indonesia',
  description:
    'Jasa trip planner terpercaya untuk wisata keluarga, honeymoon, dan korporat. Itinerary custom, visa handling, hotel bintang, dan tim concierge 24/7.',
  openGraph: {
    title: 'Arunika Travel | Trip Planner Profesional Indonesia',
    description:
      'Jasa trip planner terpercaya untuk wisata keluarga, honeymoon, dan korporat. Itinerary custom, visa handling, hotel bintang.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Arunika Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arunika Travel | Trip Planner Profesional Indonesia',
    description: 'Jasa trip planner terpercaya untuk wisata keluarga, honeymoon, dan korporat.',
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
