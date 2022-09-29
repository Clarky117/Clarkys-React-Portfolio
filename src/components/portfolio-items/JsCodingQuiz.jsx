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

                <p className='portfolio-item-summary'>When the user clicks the start button we dynamically
                    update the DOM using Javascript, a count down timer then starts in the upper right hand corner
                    of the screen, and the user is presented with the first of a series of questions which are displayed
                    one at a time, only updating once the question has been answered.</p>
                <p className='portfolio-item-summary'>If the users timer reaches 0 presenting no time left, the quiz
                    is ended. When the user answers all questions or the timer reaches 0, the user is presented with a
                    new screen, showing them their score and asking for initials to be submitted to the high score page.
                    Using local storage on the users device via Javascript, they are presented with a high score page unique
                    to their device. The user then has the ability to either wipe the high scores from local storage,
                    or return to the main menu via the 2 buttons displayed on that page.</p>

                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/JS-Coding-Quiz" target="_blank">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://clarky117.github.io/JS-Coding-Quiz/" target="_blank">Quiz <i className="fa-solid fa-question"></i></a>
                    </p>

                </div>

            </section>

        </div>
    )
}
