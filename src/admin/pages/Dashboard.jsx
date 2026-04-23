import { useState, useEffect } from "react"

export default function Dashboard() {

    const [events, setEvents] = useState([])

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
                setEvents(data.length)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }

        fetchEvents();
    }, [])

    return (
        <div className="dashboard">
            <h1>Analytics</h1>
            <p>Total Events: {events}</p>
        </div>
    )
}