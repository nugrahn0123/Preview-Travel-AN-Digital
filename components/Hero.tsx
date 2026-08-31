import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy reveal">
        <p className="trust-badge">★ Terpercaya sejak 2018 &nbsp;·&nbsp; IATA Certified</p>
        <p className="kicker">Trip planner tepercaya untuk keluarga &amp; korporat</p>
        <h1>Perjalanan impian Anda, dieksekusi sampai detail terkecil.</h1>
        <p className="lead">
          Dari itinerary anti-ribet, pemesanan hotel strategis, sampai handling dokumen perjalanan,
          semua ditangani tim profesional agar Anda tinggal fokus menikmati momen.
        </p>
        <div className="hero-cta">
          <Link className="btn" href="#konsultasi">Rancang Perjalanan Sekarang</Link>
          <Link className="btn btn-ghost" href="#paket">Lihat Paket Favorit</Link>
        </div>
        <div className="mini-stats">
          <article>
            <h3>7.200+</h3>
            <p>Traveler puas</p>
          </article>
          <article>
            <h3>42</h3>
            <p>Negara tujuan</p>
          </article>
          <article>
            <h3>4.9/5</h3>
            <p>Rating layanan</p>
          </article>
          <article>
            <h3>12 Thn</h3>
            <p>Pengalaman</p>
          </article>
          <article>
            <h3>120+</h3>
            <p>Destinasi tersedia</p>
          </article>
        </div>
      </div>
      <div className="hero-media reveal delay-1">
        <figure className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Pemandangan laut tropis untuk inspirasi liburan"
            loading="eager"
          />
        </figure>
        <div className="hero-card">
          <p className="card-top">Paket Paling Dicari</p>
          <h2>Japan Golden Route 7D6N</h2>
          <ul>
            <li>Tokyo · Fuji · Kyoto · Osaka</li>
            <li>Hotel bintang 4 + breakfast</li>
            <li>Guide berbahasa Indonesia</li>
            <li>Airport transfer & JR Pass</li>
          </ul>
          <div className="price-row">
            <div>
              <small>Mulai dari</small>
              <strong>Rp 19.500.000</strong>
            </div>
            <Link href="#konsultasi" className="btn btn-small">Cek Jadwal</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
