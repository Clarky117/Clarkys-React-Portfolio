import React from 'react'
import jatePic from '../my-work/images/7-jate-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'
import './PortfolioItem.css'

export default function Jate() {
    return (
        <div>

            {/* altered intro with portfolio item pic */}
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Just Another Text Editor
                </h1>
                <p className="section__subtitle section__subtitle--intro">Progressive Web App</p>
                <img src={jatePic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p>A short paragraph about the item</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}
                <p>A link to the github repository</p>
                {/* link to deployed app or youtube video */}
                <p>a link to the deployed app or youtube video</p>

            </section>

        </div>
    )
}
