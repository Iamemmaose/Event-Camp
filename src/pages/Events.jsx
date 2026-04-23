import { useState, useEffect } from 'react'
import EventListing from '../components/EventListing'

export default function Events() {

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`http://localhost:5000/events`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (!response.ok) {
                    throw new Error("Failed to fetch events")
                }
                
                const data = await response.json()
                const eventArrays = Object.values(data || {})
                setEvents(eventArrays)
            } catch(error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
         }
         fetchEvents();
    }, [])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>


    return (
        <div className='event'>
          <EventListing events={events}/>
        </div>
    )
}