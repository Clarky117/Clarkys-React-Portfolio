import React from 'react'
import tpgPic from '../my-work/images/2-tpg-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function TeamProfileGenerator() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <span className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Team Profile<br></br>
                    <span className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Generator
                </h1>

                <p className="section__subtitle section__subtitle--intro">Node application</p>
                <img src={tpgPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p className='portfolio-item-summary'>When working as part of a team, especially in an
                    environment dominated by computers it is important to be able to automate simple tasks.
                    Doing so allows for better time management capabilities. In this case, forming a new team
                    and quickly being able to take in employee information, and generate a usable html
                    document accessable to entire team allows all involved to hit the ground running with
                    included github profile and email address.</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>
                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/Team-Profile-Generator" target="_blank">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://www.youtube.com/watch?v=3YZ2iaGAK9I" target="_blank">Youtube <i className="fa-brands fa-youtube"></i></a>
                    </p>
                </div>
            </section>

        </div>
    )
}
