const packages = [
  {
    img: 'https://images.unsplash.com/photo-1602002418082-dd4a76f7f7da?auto=format&fit=crop&w=900&q=80',
    alt: 'Resort mewah di Bali dengan kolam renang',
    title: 'Luxury Escape Bali 4D3N',
    desc: 'Private transport, resort beachfront, spa session, dan aktivitas premium.',
    tags: ['Private Trip', 'All-in Service'],
    delay: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60d?auto=format&fit=crop&w=900&q=80',
    alt: 'Pemandangan kanal dan arsitektur klasik Eropa',
    title: 'Europe Signature 10D9N',
    desc: 'Rute efisien 5 kota populer Eropa dengan jadwal seimbang antara tur dan free time.',
    tags: ['Best Seller', 'Visa Assistance'],
    delay: 'delay-1',
  },
  {
    img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
    alt: 'Kegiatan team building di area pantai',
    title: 'Corporate Retreat Lombok 3D2N',
    desc: 'Paket team bonding plus meeting support untuk produktivitas tim yang lebih solid.',
    tags: ['Corporate', 'Custom Agenda'],
    delay: 'delay-2',
  },
]

export default function Packages() {
  return (
    <section className="section container" id="paket">
      <div className="section-head reveal">
        <p className="kicker">Paket unggulan</p>
        <h2>Pilih pengalaman yang sesuai gaya perjalanan Anda.</h2>
      </div>
      <div className="cards">
        {packages.map((pkg) => (
          <article key={pkg.title} className={`card reveal${pkg.delay ? ' ' + pkg.delay : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="card-image" src={pkg.img} alt={pkg.alt} loading="lazy" />
            <h3>{pkg.title}</h3>
            <p>{pkg.desc}</p>
            <div className="tag-row">
              {pkg.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
