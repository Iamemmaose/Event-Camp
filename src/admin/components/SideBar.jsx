import { NavLink } from "react-router-dom"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div><NavLink to="/admin" end className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')}> Dashboard</NavLink></div>
                <div><NavLink to="/admin/manage-events" className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')}> Manage Events</NavLink></div>
            </div>
        </div>
    )
}