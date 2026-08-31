export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <p style={{ margin: 0, fontWeight: 700, color: 'var(--ink)', fontSize: '0.88rem' }}>Arunika Travel</p>
        <p style={{ margin: '0.25rem 0 0' }}>© 2026 · Jelajah tanpa ribet, hasil maksimal.</p>
      </div>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <a href="tel:+6281234567890">+62 812-3456-7890</a>
        <a href="mailto:hello@arunikatravel.id">hello@arunikatravel.id</a>
        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>
      </div>
    </footer>
  )
}
