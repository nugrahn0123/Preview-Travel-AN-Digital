const partners = ['Skyline Group', 'Mandala Edu', 'Ruang Cipta', 'Evergreen Corp', 'Nusa Venture', 'Artha Prima', 'Cahaya Digital', 'Semesta Karya', 'Garuda Inovasi']

export default function Partners() {
  return (
    <section className="partners container reveal">
      <p>Dipercaya lebih dari 60 perusahaan dan institusi pendidikan di seluruh Indonesia — dari startup hingga perusahaan multinasional:</p>
      <div className="partner-grid">
        {partners.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </section>
  )
}
