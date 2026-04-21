export default function EventCard({event}) {

    return(
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.date} | {event.location}</p>
                <p>Categories:{event.category}</p>
                <p>Created by: {event.createdBy}</p>
            </div>
            <div className="event-actions">
                <button>View Details</button>
                <button>Add to list</button>
            </div>
        </div>
    )
}