const quotes = [
  {
    text: '"Dari visa sampai rundown harian, semuanya rapi. Tim kami tinggal datang dan menikmati acara."',
    cite: '- Nadya, HR Manager · Jakarta',
    delay: '',
  },
  {
    text: '"Saya suka karena jadwal fleksibel, tapi tetap disiplin waktu. Liburan keluarga jadi tenang."',
    cite: '- Raka, Entrepreneur · Surabaya',
    delay: 'delay-1',
  },
  {
    text: '"Paket Europe-nya luar biasa — 5 kota, nol ribet. Semua sudah tersusun dan kami tinggal menikmati."',
    cite: '- Dian, Marketing Director · Bandung',
    delay: '',
  },
  {
    text: '"Corporate retreat di Lombok jadi momen terbaik tim kami tahun ini. Profesional dan tepat waktu."',
    cite: '- Budi, GM Operations · Bali',
    delay: 'delay-1',
  },
]

export default function Testimonials() {
  return (
    <section className="section container testimonials" id="testimoni">
      <div className="section-head reveal">
        <p className="kicker">Testimoni</p>
        <h2>Yang mereka rasakan setelah trip bersama kami.</h2>
      </div>
      <div className="quotes">
        {quotes.map((q) => (
          <blockquote key={q.cite} className={`reveal${q.delay ? ' ' + q.delay : ''}`}>
            <p className="stars">★★★★★</p>
            {q.text}
            <cite>{q.cite}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
