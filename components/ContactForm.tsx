'use client'

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label htmlFor="nama">Nama</label>
      <input id="nama" type="text" placeholder="Nama lengkap" required />
      <label htmlFor="kontak">Nomor WhatsApp</label>
      <input id="kontak" type="tel" placeholder="08xxxxxxxxxx" required />
      <label htmlFor="tujuan">Destinasi favorit</label>
      <input id="tujuan" type="text" placeholder="Contoh: Jepang, Bali, Turki" />
      <button className="btn" type="submit">Minta Proposal</button>
    </form>
  )
}
