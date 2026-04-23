import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditEvent() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [imgError, setImgError] = useState(false)
    const [cat1, setCat1] = useState('')
    const [cat2, setCat2] = useState('')
    const [image, setImage] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [createdAt, setCreatedAt] = useState('')

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`http://localhost:5000/events/${id}`)
                const data = await response.json()
                setTitle(data.title)
                setLocation(data.location)
                setDescription(data.description)
                setDate(data.date)
                setCat1(data.categories[0] || '')
                setCat2(data.categories[1] || '')
                setImage(data.image)
                setCreatedBy(data.createdBy)
                setCreatedAt(data.createdAt)
            } catch (error) {
                console.error('Error fetching event:', error)
            }
        }

        fetchEvent()
    }, [id])

    const handleEditEvent = async (e) => {
        e.preventDefault()

        const updatedCategory = [cat1, cat2].filter(Boolean)
        const updatedEvent = {
            id,
            title,
            location,
            description,
            date,
            categories: updatedCategory,
            image,
            createdAt: new Date().toISOString(),
            createdBy
        }

        try {
            await fetch(`http://localhost:5000/events/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedEvent)
            })
            navigate('/admin/manage-events')
        } catch (error) {
            console.error('Error updating event:', error)
        }

    }



    return (
        <div className="edit-event">
            <h2>Edit Event</h2>
            <p>This is the Edit Event page. Here you can edit the details of an existing event.</p>


            <form className="form" onSubmit={handleEditEvent}>
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
                                onChange={(e) => {
                                    setImage(e.target.value)
                                    setImgError(false)
                                }}
                                style={{ width: '300px', height: '200px' }}
                            />
                        ) : (
                            <p style={{ color: 'red' }}>Invalid image URL</p>
                        )}
                    </>
                )}
                <label htmlFor="createdBy">Created By</label>
                <input type="text" id="createdBy" placeholder="Created By" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required />

                <button type='submit'>Edit Event </button>
            </form>
        </div>
    )
}