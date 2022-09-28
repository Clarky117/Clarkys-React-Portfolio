import React from 'react'
import entPic from '../my-work/images/5-ent-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function ExpressNoteTaker() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Express Note Taker
                </h1>
                <p className="section__subtitle section__subtitle--intro">Connected backend to Express</p>
                <img src={entPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p>A short paragraph about the item</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/Express-Note-Taker">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://clarkys-express-note-taker.herokuapp.com/">Note Taker <i className="fa-solid fa-pen-to-square"></i></a>
                    </p>

                </div>

            </section>

        </div>
    )
}
