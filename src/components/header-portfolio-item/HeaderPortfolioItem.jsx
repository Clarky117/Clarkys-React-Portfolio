import React from 'react'
import { Link } from 'react-router-dom'
import clarkyLogo from '../header/clarky-logo.png'

export default function HeaderPortfolioItem() {

    const navToggleAfterClick = () => {
        document.body.classList.toggle('nav-open');
    }

    const navLinksAfterClick = () => {
        document.body.classList.remove('nav-open');
    }

    return (
        <header>
            <div className="logo">
                <img src={clarkyLogo} alt="logo pic" />
            </div>
            <button onClick={navToggleAfterClick} className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    {/* need to sort out navigation bug */}
                    <li onClick={navLinksAfterClick} className="nav__item"><Link to="/" className="nav__link">Back</Link></li>
                    {/* <li onClick={navLinksAfterClick} className="nav__item"><Link to="/#services" className="nav__link">My Services</Link></li> */}
                    {/* <li onClick={navLinksAfterClick} className="nav__item"><Link to="/#about" className="nav__link">About Me</Link></li> */}
                    {/* <li onClick={navLinksAfterClick} className="nav__item"><Link to="/#work" className="nav__link">My Work</Link></li> */}
                </ul>
            </nav>
        </header>
    )

}
