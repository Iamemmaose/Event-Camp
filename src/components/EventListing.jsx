import EventCard from "./EventCard";

export default function EventListing({ events }) {

    return (
        <div className="event-listing">
            {events.length > 0 ? (
                <>
                    {events.map((events) => (
                        <EventCard key={events.id} event={events} />
                    ))}
                </>

            ) : (
            <>
            <p>No events available.</p>
            </>
            )
            }
        </div>
    )
}