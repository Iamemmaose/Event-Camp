import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import '../Admin.css'

export default function AdminLayout() {
    return (
        <div className="admin-layout">
            <SideBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
} 