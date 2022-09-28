import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    // <!-- footer -->
    <footer className="footer">
        <a href="mailto:clarky117@outlook.com" className="footer__link">Clarky117@outlook.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/Clarky117/">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/clarky-enterprises/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
            {/* <!-- <li class="social-list__item"><a class="social-list__link" href=""></a></li> --> */}
            {/* <!-- <li class="social-list__item"><a class="social-list__link" href=""></a></li> --> */}
        </ul>
    </footer>
  )
}
