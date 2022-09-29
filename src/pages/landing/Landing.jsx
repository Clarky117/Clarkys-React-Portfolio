import React from 'react'
import AboutMe from '../../components/about-me/AboutMe'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import MyServices from '../../components/my-services/MyServices'
import MyWork from '../../components/my-work/MyWork'

export default function Landing() {

  // nav bar, do last as will require different manipulation

  // intro section
  // done

  // my services
  // done

  // about me
  // done

  // my work
  // done

  // footer
  // done

  return (

    // you can wrap layouts around your pages;

    // <BaseLayout>

    <div>
   
      <Header></Header>
      <Intro></Intro>
      <MyServices></MyServices>
      <AboutMe></AboutMe>
      <MyWork></MyWork>
      <Footer></Footer>

    </div>

    // </BaseLayout>

  )
}
