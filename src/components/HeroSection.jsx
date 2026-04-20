import './HeroSection.css'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
    const navigate = useNavigate()
    return (
        <div className="hero-section">
            <h1>Welcome to EventCamp</h1>
            <p>Your ultimate destination for discovering and attending amazing events in your city. Explore a wide range of events, from music festivals to tech conferences, and find the perfect one for you.</p>

            <div className="hero-buttons">
                <button className="explore-button" onClick={() => navigate('/events')}>Explore Events</button>
                <button className="create-button" onClick={() => navigate('/contact')}>Create Event</button>
            </div>
        </div>
    )
}