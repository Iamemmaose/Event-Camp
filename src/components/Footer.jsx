import { Link, useNavigate } from "react-router-dom"
import './Footer.css'

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 onClick={() => navigate('/')} >Event Camp</h3>
                    <p>Where events come alive. Discover your next adventure.</p>        </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: info@eventcamp.com</p>
                    <p>Phone: +234 800 000 0000</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="socials">
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://instagram.com">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Event Camp. All rights reserved.</p>
            </div>
        </footer>
    )
}