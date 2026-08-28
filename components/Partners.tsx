const partners = ['Skyline Group', 'Mandala Edu', 'Ruang Cipta', 'Evergreen Corp', 'Nusa Venture', 'Artha Prima']

export default function Partners() {
  return (
    <section className="partners container reveal">
      <p>Dipercaya oleh komunitas traveler, sekolah, dan perusahaan:</p>
      <div className="partner-grid">
        {partners.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </section>
  )
}
