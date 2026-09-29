import { ArrowUpRight, Link2, Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { contactDetails } from '../data/portfolioData'

export default function Contact() {
  const sendMessage = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`From: ${form.get('name')} (${form.get('email')})\n\n${form.get('message')}`)
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading" title="Get In Touch" subtitle="Seeking opportunities in Social Media, Digital Marketing, Content Creation, Creative Marketing, Brand Marketing and Digital Content roles." />
      <div className="contact-layout reveal">
        <div className="contact-information">
          <h3>Contact Information</h3>
          <a className="contact-method" href={`mailto:${contactDetails.email}`}><span><Mail size={20} /></span><span><small>Email</small>{contactDetails.email}</span></a>
          <a className="contact-method" href={`tel:${contactDetails.phone}`}><span><Phone size={20} /></span><span><small>Phone</small>{contactDetails.phone}</span></a>
          <div className="contact-method"><span><MapPin size={20} /></span><span><small>Location</small>{contactDetails.location}</span></div>
          <a className="linkedin-link" href={contactDetails.linkedin} target="_blank" rel="noreferrer"><Link2 size={19} /> LinkedIn <ArrowUpRight size={15} /></a>
          <div className="contact-actions">
            <a href={`mailto:${contactDetails.email}`} className="button button-primary"><Mail size={17} />Email Me</a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="text-link">Connect on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendMessage}>
          <label>Name<input name="name" type="text" autoComplete="name" required /></label>
          <label>Email Address<input name="email" type="email" autoComplete="email" required /></label>
          <label>Message<textarea name="message" rows="4" required /></label>
          <button className="button button-primary" type="submit">Send Message <Send size={17} /></button>
        </form>
      </div>
    </section>
  )
}
