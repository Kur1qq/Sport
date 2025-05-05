import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <h1>Sportmn</h1>
                    </a>
                </div>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li className="dropdown">
                        <a href="#">СПОРТУУД</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Сагсанбөмбөг</a></li>
                            <li><a href="#">Бөх</a></li>
                            <li><a href="#">Cs2</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">МЭДЭЭ </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Сагсанбөмбөг</a></li>
                            <li><a href="#">Бөх</a></li>
                            <li><a href="#">Cs2</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">ТЭМЦЭЭНҮҮД</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Сагсанбөмбөг</a></li>
                            <li><a href="#">Бөх</a></li>
                            <li><a href="#">Cs2</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">ТАМИРЧИД </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Сагсанбөмбөг</a></li>
                            <li><a href="#">Бөх</a></li>
                            <li><a href="#">Cs2</a></li>    
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">ТОГЛОЛТУУД</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Сагсанбөмбөг</a></li>
                            <li><a href="#">Бөх</a></li>
                            <li><a href="#">Cs2</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="navbar-search">
                    <input type="text" placeholder="Хайх..." />
                </div>

                <Link to="/register">
                    <button className="Sign-in">Бүртгүүлэх</button>
                </Link>
                <Link to="/Login">
                    <button className="Login">Нэвтрэх</button>
                </Link>

                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <span>&#10005;</span>
                    ) : (
                        <span>&#9776;</span>
                    )}
                </div>
            </div>
        </nav>
    );
}
