import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <header className="header">
            <nav>
                <Link to='/' className="logo">
                    Floweri <i class="fas fa-fan"></i>
                </Link>
                <ul className={click ? "menu active" : "menu"}>
                    <li className="menu-item">
                        <Link to='/products' className="menu-link">Products</Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/contact' className="menu-link">Contact</Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/about' className="menu-link">About</Link>
                    </li>
                </ul>
                <div className="hamburger-menu" onClick={handleClick}>
                    <i className={click ? 'fas fa-times ': 'fas fa-bars'} />
                </div>
            </nav>
        </header>
    )
}

export default Header
