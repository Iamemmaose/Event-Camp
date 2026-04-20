import EventCard from "./EventCard";

export default function EventListing({events}) {
    return(
        <div className="event-listing"> 
        {Object.entries(events).map(([eventId, event]) => (
            <EventCard key={eventId} event={event} />
        ))}
        </div>
    )
}