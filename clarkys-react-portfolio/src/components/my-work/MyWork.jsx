import React from 'react'
import './MyWork.css'
// images
import wotPic from './images/1-wot-890.png'
import tpgPic from './images/2-tpg-890.png'
import jsccPic from './images/3-jscc-890.png'
import etPic from './images/4-et-890.png'
import entPic from './images/5-ent-890.png'
import ecbePic from './images/6-ecbe-890.png'
import jatePic from './images/7-jate-890.png'
import snPic from './images/8-sn-890.png'

export default function MyWork() {
  return (
    // <!-- my work -->
    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A range of my full stack, front end, and back end applications</p>

        <div className="portfolio">

            <a href="https://clarkys-jate.herokuapp.com/" className="portfolio__item">
                <img src={jatePic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://github.com/Clarky117/Social-Network" className="portfolio__item">
                <img src={snPic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://r7-workout-tracker.herokuapp.com/login" className="portfolio__item">
                <img src={wotPic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://github.com/Clarky117/Team-Profile-Generator" className="portfolio__item">
                <img src={tpgPic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://clarky117.github.io/JS-Coding-Quiz/" className="portfolio__item">
                <img src={jsccPic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://github.com/Clarky117/Employee-Tracker" className="portfolio__item">
                <img src={etPic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://clarkys-express-note-taker.herokuapp.com/" className="portfolio__item">
                <img src={entPic} alt="portfolio__image" className="portfolio__img"/>
            </a>

            <a href="https://github.com/Clarky117/E-Commerce-Back-End" className="portfolio__item">
                <img src={ecbePic} alt="portfolio__image" className="portfolio__img"/>
            </a>

        </div>

    </section>
  )
}
