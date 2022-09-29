import React from 'react'
import wotPic from '../my-work/images/1-wot-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function WorkoutTracker() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <span className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;</span>Work Out Tracker
                </h1>
                <p className="section__subtitle section__subtitle--intro">Group project</p>
                <img src={wotPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p className='portfolio-item-summary'>Created by
                    <a href="https://github.com/Flipper5001"> Filipe</a>,
                    <a href="https://github.com/aliceveenathomas"> Alice </a>
                    and I.</p>
                <p className='portfolio-item-summary'>Projects play a key role in our journey to
                    become full stack developers, as a full stack developer it is imperitive to be
                    able to work collaboratively with other developers. With this body of work we
                    aim to showcase how we can seemlessly come together as a whole and work towards
                    a common goal.</p>
                <p className='portfolio-item-summary'>As a group, we initially brainstormed ideas, wire framed
                    via Figma. Used the job board provided by Github to assign tasks, and identified what dev
                    dependancies and packages were required.</p>
                <p className='portfolio-item-summary'>Following the MVC architecture we split 3 ways, Filipe started
                    on Models, Alice on Controllers, and myself on View, using Handlebars.</p>
                <p className='portfolio-item-summary'>During the course of production we were able to find time to catch
                    up over zoom every day to stay informed and updated on progress, and allowed us to employ agile
                    methodology in development.</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Flipper5001/workout_tracker">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://r7-workout-tracker.herokuapp.com/login">Our App <i className="fa-solid fa-dumbbell"></i></a>
                    </p>

                </div>
            </section>

        </div>
    )
}
