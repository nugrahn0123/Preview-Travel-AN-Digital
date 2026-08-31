import ContactForm from './ContactForm'

export default function CTA() {
  return (
    <section className="section container cta-band reveal" id="konsultasi">
      <div>
        <p className="kicker">Konsultasi gratis, tanpa syarat</p>
        <h2>Ceritakan destinasi impian Anda — proposal tiba dalam 24 jam, gratis dan tanpa komitmen.</h2>
      </div>
      <ContactForm />
    </section>
  )
}
