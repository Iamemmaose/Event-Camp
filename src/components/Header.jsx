import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {
     
    const navigate = useNavigate()

    return(
        <header>
            <div className="logo" onClick={() => navigate('/')}>
            <img src='eventcamp-logo.svg' alt="EventCamp Logo" width="50" height="50" /><span>EventCamp</span>
            </div>
            <ul className = "nav-links">
                <li><NavLink to="/" end className={({isActive}) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
                <li><NavLink to="/events" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Events</NavLink></li>
                <li><NavLink to="/event-list" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Event List</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></li>
            </ul>
        </header>
    )
}
