import React from 'react'
import './Intro.css';
import profilePic from './profile-pic.jpg';

export default function intro() {
  return (
    // <!-- intro -->
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hey, I am <strong>Dan Clark</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Full Stack Developer</p>
        <img src={profilePic} alt="profile pic" className="intro__img"/>
    </section>
  )
}
