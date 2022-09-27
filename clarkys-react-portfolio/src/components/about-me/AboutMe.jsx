import React from 'react'
import './AboutMe.css'
import beachPic from './beach.jpg'

export default function AboutMe() {
  return (
    // <!-- about me -->
    <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based out of Perth WA</p>

        <div className="about-me__body">
            <p>Full-stack web developer honing skills in JavaScript, NodeJS, and DataBases including MySql and NoSQL.
                I am passionate about developing apps and the code that makes them run, with a focus on
                clean user experience, intuitive, and responsive design. Known for a calm demeanor and
                an enjoyment of working in collaborative settings, my aim in each group project has been
                to apply an agile development approach and help everyone excel in their strengths.
                I am passionate and motivated about all aspects of web development. Also a family man,
                cricketer, and good mate. Look forward to being a part of your team!</p>
        </div>

        {/* <!-- find image --> */}
        {/* <!-- image dimensions are 244 x 406 --> */}
        <img src={beachPic} alt="me and brooklyn at beach" className="about-me__img"/>

    </section>
  )
}
