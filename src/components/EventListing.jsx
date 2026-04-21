import EventCard from "./EventCard";

export default function EventListing({ events }) {
    return (
        <div className="event-listing"> 
        {Object.entries(events).map(([key, event]) => (
            <EventCard event={event} eventKey={key} />
            ))}
        </div>
    )
}