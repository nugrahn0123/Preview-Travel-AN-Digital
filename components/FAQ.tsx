const faqs = [
  {
    q: 'Apakah bisa custom itinerary?',
    a: 'Bisa. Kami justru merekomendasikan custom itinerary agar sesuai budget, gaya perjalanan, dan tujuan Anda.',
    delay: '',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'Pembayaran bertahap dengan invoice resmi: DP saat booking dan pelunasan sebelum keberangkatan.',
    delay: 'delay-1',
  },
  {
    q: 'Apakah ada pendamping selama trip?',
    a: 'Untuk paket grup tersedia tour leader. Paket private dapat menambahkan local guide sesuai kebutuhan.',
    delay: 'delay-2',
  },
  {
    q: 'Berapa lama waktu persiapan yang dibutuhkan?',
    a: 'Idealnya 2–4 minggu sebelum keberangkatan. Namun kami juga terbiasa menangani trip mendadak dalam 7 hari.',
    delay: '',
  },
  {
    q: 'Bagaimana kebijakan pembatalan dan refund?',
    a: 'Pembatalan lebih dari 14 hari sebelum keberangkatan mendapat refund penuh DP. Kurang dari 7 hari dikenakan biaya pembatalan 50%. Kami selalu prioritaskan solusi terbaik sesuai kondisi.',
    delay: 'delay-1',
  },
  {
    q: 'Apakah tersedia paket khusus perusahaan atau instansi?',
    a: 'Ya. Kami menyediakan paket corporate retreat, gathering, dan study tour dengan proposal, invoice resmi, serta laporan kegiatan. Hubungi kami untuk penawaran custom sesuai skala dan budget perusahaan Anda.',
    delay: 'delay-2',
  },
]

export default function FAQ() {
  return (
    <section className="section container faq" id="faq">
      <div className="section-head reveal">
        <p className="kicker">FAQ</p>
        <h2>Pertanyaan yang sering ditanyakan calon traveler.</h2>
      </div>
      {faqs.map((item) => (
        <details key={item.q} className={`reveal${item.delay ? ' ' + item.delay : ''}`}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  )
}
