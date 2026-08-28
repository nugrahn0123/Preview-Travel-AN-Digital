'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success">
        <p>✓ Terima kasih! Tim kami akan menghubungi Anda dalam 24 jam.</p>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label htmlFor="nama">Nama</label>
      <input id="nama" type="text" placeholder="Nama lengkap" required />
      <label htmlFor="kontak">Nomor WhatsApp</label>
      <input id="kontak" type="tel" placeholder="08xxxxxxxxxx" required />
      <label htmlFor="tujuan">Destinasi favorit</label>
      <input id="tujuan" type="text" placeholder="Contoh: Jepang, Bali, Turki" />
      <label htmlFor="pesan">Ceritakan kebutuhan Anda</label>
      <textarea
        id="pesan"
        className="lead-form-textarea"
        placeholder="Jumlah peserta, tanggal rencana, preferensi khusus..."
        rows={3}
      />
      <button className="btn" type="submit">Minta Proposal Gratis</button>
    </form>
  )
}
