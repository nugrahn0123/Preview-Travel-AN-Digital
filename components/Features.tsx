const features = [
  {
    title: 'Itinerary Berbasis Data',
    desc: 'Rute dirancang dari tren trafik, cuaca, dan preferensi wisatawan agar waktu lebih efisien.',
    delay: '',
  },
  {
    title: 'Travel Concierge 24/7',
    desc: 'Tim support siap bantu perubahan mendadak, emergency handling, hingga rekomendasi lokal.',
    delay: 'delay-1',
  },
  {
    title: 'Harga Jelas Tanpa Biaya Tersembunyi',
    desc: 'Rincian biaya ditampilkan sejak awal agar keputusan Anda nyaman dan minim risiko.',
    delay: 'delay-2',
  },
]

export default function Features() {
  return (
    <section className="section container" id="keunggulan">
      <div className="section-head reveal">
        <p className="kicker">Kenapa Arunika</p>
        <h2>Eksekusi detail, komunikasi cepat, dan biaya transparan.</h2>
      </div>
      <div className="features">
        {features.map((f) => (
          <article key={f.title} className={`feature reveal${f.delay ? ' ' + f.delay : ''}`}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
