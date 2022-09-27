import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Intro from './intro/Intro'

export default function BaseLayout(props) {
  return (
    <div>
        {/* header */}
        <Header></Header>
        {/* intro */}
        <Intro></Intro>

        {/* content */}
        {props.children}

        {/* footer */}
        <Footer></Footer>


    </div>
  )
}
