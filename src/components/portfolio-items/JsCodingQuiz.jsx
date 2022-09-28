import React from 'react'
import jsccPic from '../my-work/images/3-jscc-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'


export default function JsCodingQuiz() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    JS Coding Quiz
                </h1>
                <p className="section__subtitle section__subtitle--intro">Front end quiz</p>
                <img src={jsccPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p>A short paragraph about the item</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/JS-Coding-Quiz">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://clarky117.github.io/JS-Coding-Quiz/">Quiz <i className="fa-solid fa-question"></i></a>
                    </p>

                </div>

            </section>

        </div>
    )
}
