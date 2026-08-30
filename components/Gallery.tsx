const items = [
  {
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pemandangan kota Tokyo di malam hari',
    title: 'Tokyo Night Pulse',
    desc: 'Kota yang tidak pernah tidur — itinerary kami pastikan Anda menikmati setiap momen.',
    delay: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80',
    alt: 'Panorama pegunungan Swiss dan danau',
    title: 'Swiss Alpine Calm',
    desc: 'Salju, danau, dan udara bersih — pengalaman yang sulit diulang tanpa panduan yang tepat.',
    delay: 'delay-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pantai Bali dengan sunset keemasan',
    title: 'Bali Sunset Story',
    desc: 'Sore di tepi laut dengan spa, sunset cruise, dan momen tenang bersama orang-orang terkasih.',
    delay: 'delay-2',
  },
]

export default function Gallery() {
  return (
    <section className="section container destination-gallery" id="galeri">
      <div className="section-head reveal">
        <p className="kicker">Inspirasi visual</p>
        <h2>Tiga destinasi, tiga cerita — mana yang memanggil Anda?</h2>
      </div>
      <div className="gallery-grid">
        {items.map((item) => (
          <article
            key={item.title}
            className={`gallery-item reveal${item.delay ? ' ' + item.delay : ''}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} loading="lazy" />
            <div className="gallery-caption">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
