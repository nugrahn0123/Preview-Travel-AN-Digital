const quotes = [
  {
    text: '"Dari visa sampai rundown harian, semuanya rapi. Tim kami tinggal datang dan menikmati acara."',
    cite: '- Nadya, HR Manager',
    delay: '',
  },
  {
    text: '"Saya suka karena jadwal fleksibel, tapi tetap disiplin waktu. Liburan keluarga jadi tenang."',
    cite: '- Raka, Entrepreneur',
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
            {q.text}
            <cite>{q.cite}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
