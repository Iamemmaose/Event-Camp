export default function EventCard({event}) {

    const category = Object.values(event.category || {})

    return(
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.date} | {event.location}</p>
                <p>Categories:{category.join(' ')}</p>
                <p>Created by: {event.createdBy}</p>
            </div>
            <div className="event-actions">
                <button className="details-button">View Details</button>
                <button className="add-event-list">Add to list</button>
            </div>
        </div>
    )
}