import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    function handleOpenMenu() {
        setShowMenu(showMenu => !showMenu)
    }


    return (
        <header>
            <div className="logo" onClick={() => navigate('/')}>
                <img src='eventcamp-logo.svg' alt="EventCamp Logo" width="50" height="50" /><span>EventCamp</span>
            </div>
           
                <ul className="nav-links">
                    <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
                    <li><NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Events</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></li>
                    <li className="admin"><NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Admin</NavLink></li>
                </ul>
            <div className='menubar'><i className={`fa-solid ${showMenu ? 'fa-x' : 'fa-bars'}`} onClick={handleOpenMenu}></i>
            </div>

            {showMenu && (
                <ul className={`mobile-nav-links ${showMenu}`}>
                    <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
                    <li><NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Events</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></li>
                    <li className="admin"><NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Admin</NavLink></li>
                </ul>)}
        </header>
    )
}
