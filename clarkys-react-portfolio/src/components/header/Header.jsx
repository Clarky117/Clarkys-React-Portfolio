import React from 'react'
import './Header.css'
import clarkyLogo from './clarky-logo.png'

export default function Header() {

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
          <li onClick={navLinksAfterClick} className="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li onClick={navLinksAfterClick} className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
          <li onClick={navLinksAfterClick} className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
          <li onClick={navLinksAfterClick} className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
        </ul>
      </nav>
    </header>
  )
}
