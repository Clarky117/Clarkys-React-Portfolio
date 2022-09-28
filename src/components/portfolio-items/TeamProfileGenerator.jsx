import React from 'react'
import tpgPic from '../my-work/images/2-tpg-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function TeamProfileGenerator() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Team Profile Generator
                </h1>
                <p className="section__subtitle section__subtitle--intro">Node application summarising Employees</p>
                <img src={tpgPic} alt="portfolio-item-pic" className="intro__img" />
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
