import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="contact-page">
      <div className="contact-form">
        <h1>Contact Us</h1>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Need Help Creating an Event?</h2>
            <p>
              If you're looking to create and promote your event on EventCamp, get in touch with us! Provide details about your event in the message field below,
              including the event name, date, location, and any special requirements. Our team will review your request, contact you, and help you set up your event listing.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event or inquiry..."
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  )
}