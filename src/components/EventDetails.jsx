import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './EventDetails.css'

export default function EventDetails() {

    const { id } = useParams()
    const [events, setEvents] = useState(null) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchEventDetail = async () => {
            try {
                const response = await fetch(`http://localhost:5000/events/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if(!response.ok) {
                    throw new Error(`Failed to fetch event details`)
                }
                const data = await response.json()
                setEvents(data)
            } catch(error) {
                setError(error.message)
            } finally {               
                setLoading(false) 
            }
        }

        fetchEventDetail();
    },[id])

    if(loading) return <div className="event-details-page"><div className="event-detail event-message">Loading...</div></div>
    if(error) return <div className="event-details-page"><div className="event-detail event-error">Error: {error}</div></div>
    if(!events) return <div className="event-details-page"><div className="event-detail event-message">No event found</div></div>

    const dateObj = new Date(events.date)
    const formattedDate = dateObj.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const formattedTime = dateObj.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    })

    return (
        <div className="event-details-page">
            {events && (
                <div className="event-detail">
                    <img src={events.image} alt={events.title} className="event-image" />
                    <h2>{events.title}</h2>
                    <p>{events.description}</p>
                    <p>Location: {events.location}</p>
                    <p>Categories: {events.categories?.join('  ')}</p>
                    <p>Created by: {events.createdBy}</p>
                    <p>Date: {formattedDate} by {formattedTime}</p>
                </div>
            )}
        </div>
    )
}