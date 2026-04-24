import { useNavigate } from 'react-router-dom'

export default function EventCard({event}) {

    const navigate = useNavigate()

    const dateObj = new Date(event.date);

    const formattedDate = dateObj.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = dateObj.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    });

    return(
        <div className="event-card">
            <div className="event-imagebox">
                <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {formattedDate} by {formattedTime} </p>
                <p>Location: {event.location}</p>
                <p>Categories: {event.categories?.join('  ')}</p>
                <p>Created by: {event.createdBy}</p>
            </div>
            <div className="event-actions">
                <button onClick={() => navigate(`/events/${event.id}`)}> View Details</button>
            </div>
        </div>
    )
}