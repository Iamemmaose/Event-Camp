import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddEvent() {
    const [events, setEvents] = useState([])
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [categories, setCategories] = useState([])
    const [cat1, setCat1] = useState('')
    const [cat2, setCat2] = useState('')
    const [image, setImage] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [imgError, setImgError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
       const FetchEvents = async () => {
        try {
            const response = await fetch(`http://localhost:5000/events`)
            const data = await response.json()
            setEvents(data)
        } catch (error) {
            console.error('Error fetching events:', error)
        }
       }
    },[])


    const handleAddEvent = async (e) => {
        e.preventDefault()

        const updatedCategory = [cat1, cat2].filter(Boolean)
        const newEvent = {
            id: Date.now().toString(),
            title,
            location,
            description,
            date,
            createdAt: new Date().toISOString(),
            categories: updatedCategory,
            image,
            createdBy
        }

        try {
            await fetch(`http://localhost:5000/events/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEvent)
            })
            navigate('/admin/manage-events')
        } catch (error) {
            console.error('Error adding event:', error)
        }

        setEvents(prevEvents => [newEvent, ...prevEvents ])
    }

    return (
        <div className="add-event">
            <div className="add-event-header">
                <h2>Add Event</h2>
                <p>This is the Add Event page. Here you can add a new event to the system.</p>
            </div>

            <form className="form" onSubmit={handleAddEvent}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label htmlFor="date">Date & Time</label>
                <input type="datetime-local" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label htmlFor="cat1">Category 1</label>
                <input type="text" id="cat1" placeholder="Category 1" value={cat1} onChange={(e) => setCat1(e.target.value)} required />

                <label htmlFor="cat2">Category 2</label>
                <input type="text" id="cat2" placeholder="Category 2" value={cat2} onChange={(e) => setCat2(e.target.value)} required />

                <label htmlFor="image">Image URL</label>
                <input type="text" id="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                {image && (
                    <>
                        {!imgError ? (
                            <img
                                src={image}
                                alt="Event Preview"
                                onError={() => setImgError(true)}
                                style={{ width: '300px', height: '200px' }}
                            />
                        ) : (
                            <p style={{ color: 'red' }}>Invalid image URL</p>
                        )}
                    </>
                )}
                <label htmlFor="createdBy">Created By</label>
                <input type="text" id="createdBy" placeholder="Created By" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required />

                <button type='submit'>Add Event </button>
            </form>
        </div>
    )
}