import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ManageEvents() {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`http://localhost:5000/events/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setEvents(data)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }

        fetchEvents()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm(`Are your sure`))
            try {
                await fetch(`http://localhost:5000/events/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                setEvents(events.filter(event => event.id !== id))
            } catch (error) {
                console.error('Error deleting event:', error)
            }
    }


    return (
        <div className="manage-events">
            <h1>Manage Events</h1>
            <p>Total Events: {events.length}</p>
            <button className="add-event-btn" onClick={() => navigate(`/admin/add-new-event`)}>Add New Event</button>

            <div className="manage-list">
                {events.map((event) => (
                    <div key={event.id} className="manage-item">
                        <h3>{event.title}</h3>
                        <p>Categories: {event.categories?.join(' ')}</p>
                        <p>Location: {event.location}</p>
                        <button className="edit-btn" onClick={() => navigate(`/admin/edit-event/${event.id}`)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}