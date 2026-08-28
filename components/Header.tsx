'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header container">
      <Link href="#" className="logo">
        <span className="logo-mark">A</span>
        <span className="logo-text">Arunika Travel</span>
      </Link>
      <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
        <Link href="#paket">Paket</Link>
        <Link href="#keunggulan">Keunggulan</Link>
        <Link href="#galeri">Galeri</Link>
        <Link href="#testimoni">Testimoni</Link>
        <Link href="#faq">FAQ</Link>
      </nav>
      <Link className="btn btn-small" href="#konsultasi">Konsultasi Gratis</Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Buka menu navigasi"
        aria-expanded={menuOpen}
      >
        Menu
      </button>
    </header>
  )
}
