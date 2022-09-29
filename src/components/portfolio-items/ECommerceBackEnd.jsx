import React from 'react'
import ecbePic from '../my-work/images/6-ecbe-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function ECommerceBackEnd() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    E-Commerce DB
                </h1>
                <p className="section__subtitle section__subtitle--intro">MySQL database using Sequelize</p>
                <img src={ecbePic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p className='portfolio-item-summary'>E-Commerce in 2019 alone is estimated to be worth around $29 trillion,
                    and with sites such as Shopify and WooCommerce provide businesses of
                    all sizes with a suite of services.</p>
                <p className='portfolio-item-summary'>As a full stack developer it is beneficial to understand the fundamental
                    architecture of these platforms.</p>
                <p className='portfolio-item-summary'>Using Sequelize I have created the models and written routes to be tested
                    in Insomnia.</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/E-Commerce-Back-End" target="_blank">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://www.youtube.com/watch?v=FhVX_gJWQi0" target="_blank">Youtube <i className="fa-brands fa-youtube"></i></a>
                    </p>

                </div>

            </section>

        </div>
    )
}
