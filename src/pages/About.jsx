import { useNavigate } from 'react-router-dom'
import './About.css'

export default function About() {
  const navigate = useNavigate()

  return (
    <main className="about-page">
      <section className="page-header">
        <div>
          <p className="lead">
            EventCamp is a modern event discovery platform built to help organizers showcase gatherings, help attendees find memorable experiences, and empower communities to connect.
          </p>
          <h1>
            Professional event management, thoughtful planning, and a polished attendee experience.
          </h1>
          <p className="lead">
            Designed with clarity, accessibility, and memorable visuals in mind, this project brings events to life with intuitive navigation, curated listings, and reliable administration tools.
          </p>
          <button className="cta-button" onClick={() => navigate('/events')}>
            Explore Events
          </button>
        </div>

        <img
          className="hero-image"
          src="/eventcamp-logo.svg"
          alt="EventCamp project preview"
        />
      </section>

      <section className="content-blocks">
        <article className="content-card">
          <h2>About EventCamp</h2>
          <p>
            EventCamp is crafted for event organizers and attendees who want a clean and engaging way to browse, manage, and promote gatherings.
            The interface is built around a polished design system, simple workflows, and a responsive layout that works beautifully on every screen.
          </p>
        </article>

        <article className="content-card">
          <h2>Our approach</h2>
          <p>
            We focus on consistency, usability, and trust. Every detail is chosen to support clear content hierarchy, strong brand presence, and an inviting user experience.
            From the event dashboard to attendee-facing listings, EventCamp creates a dependable environment for growing communities.
          </p>
        </article>

        <div className="grid-three">
          <div className="stat-card">
            <strong>Structured</strong>
            <span>Clear page sections and intuitive navigation</span>
          </div>
          <div className="stat-card">
            <strong>Branded</strong>
            <span>Consistent styling with CSS variables and soft visual contrast</span>
          </div>
          <div className="stat-card">
            <strong>Professional</strong>
            <span>Designed for modern event management workflows</span>
          </div>
        </div>
      </section>
    </main>
  )
}
