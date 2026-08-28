import ContactForm from './ContactForm'

export default function CTA() {
  return (
    <section className="section container cta-band reveal" id="konsultasi">
      <div>
        <p className="kicker">Mulai perjalanan Anda</p>
        <h2>Ceritakan destinasi impian Anda, kami kirim proposal dalam 24 jam.</h2>
      </div>
      <ContactForm />
    </section>
  )
}
