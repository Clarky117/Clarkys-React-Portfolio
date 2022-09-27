import React from 'react'
import AboutMe from '../components/about-me/AboutMe'
import Footer from '../components/footer/Footer'
import Intro from '../components/intro/Intro'
import MyServices from '../components/my-services/MyServices'

export default function Landing() {

    // nav bar, do last as will require different manipulation

    // intro section
    // done

    // my services
    // done

    // about me
    // done

    // my work

    // footer
    // done

    // TODO: part of this page is going to move to layouts once i wrap my head around 
    // TODO: folder structure, most likely nav bar and footer will be base layout

  return (

    // you can wrap layouts around your pages;

    // <BaseLayout>

    <div>

        <Intro></Intro>
        <MyServices></MyServices>
        <AboutMe></AboutMe>
        {/* my work here */}
        <Footer></Footer>

    </div>


    // </BaseLayout>
  )
}
