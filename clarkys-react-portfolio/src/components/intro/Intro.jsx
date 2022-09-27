import React from 'react'
import './Intro.css';
import profilePic from './profile-pic.jpg';

export default function intro() {
  return (
    // <!-- intro -->
    <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hey, I am <strong>Dan Clark</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Full Stack Developer</p>
        {/* <!-- find image --> */}
        {/* <!-- image dimensions are 313 x 313 --> */}
        <img src={profilePic} alt="profile pic" class="intro__img"/>
    </section>
  )
}
