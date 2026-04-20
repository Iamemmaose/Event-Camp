import HeroSection from "../components/HeroSection"
import EventListing from "../components/EventListing"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import './Home.css'


export default function Home() {
    const navigate = useNavigate()
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`https://event-listing-fd519-default-rtdb.firebaseio.com/events.json`)
                if(!response.ok) {
                    throw new Error(`Failed to fetch events`)
                }
                const data =  await response.json()
                const eventsArray = Object.values(data || {})
                setEvents(eventsArray.slice(0,4))
            } catch(error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    },[])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

    return (
        <div className= "home">
            <HeroSection />

            <div className = 'event-title'>
                <h2>Events</h2>
                <div className="see-more">
                    <hr />
                    <p onClick={() => navigate('/events')}>See more <span>&#10132;</span></p>
                </div>
            </div>

                <EventListing events={events} />
            
        </div>
    )
}