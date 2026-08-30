const features = [
  {
    icon: '✦',
    title: 'Itinerary Berbasis Data',
    desc: 'Rute disusun berdasarkan tren trafik, peak season, dan preferensi wisatawan — bukan template generik.',
    delay: '',
  },
  {
    icon: '◎',
    title: 'Travel Concierge 24/7',
    desc: 'Tim standby di WhatsApp dan telepon untuk perubahan jadwal, darurat, hingga rekomendasi restoran lokal.',
    delay: 'delay-1',
  },
  {
    icon: '◆',
    title: 'Harga Transparan',
    desc: 'Invoice detail sebelum DP. Tidak ada biaya tambahan kejutan setelah Anda setuju.',
    delay: 'delay-2',
  },
  {
    icon: '→',
    title: 'Dokumen & Visa Handling',
    desc: 'Visa, asuransi perjalanan, dan dokumen keberangkatan diurus lengkap — Anda hanya perlu foto dan KTP.',
    delay: 'delay-3',
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
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
