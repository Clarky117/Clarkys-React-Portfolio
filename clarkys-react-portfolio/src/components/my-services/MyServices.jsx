import React from 'react'
import './MyServices.css'

export default function MyServices() {
  return (
    // <!-- my services -->
    <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">

            <div className="service">
                <h3>JavaScript</h3>
                <p>This is my preferred language along with its many libraries.
                    Comfortable manipulating the DOM on the front end right through to 
                    setting up full stack web applications.
                </p>
            </div>

            <div className="service">
                <h3>Node</h3>
                <p>Have acquired plenty of practise setting up full stack and back end applications
                     by using Node and Express. In doing so have become familiar with reading 
                     new documentation and implementing new libraries that can be utilised through node. 
                </p>
            </div>

            <div className="service">
                <h3>Databases</h3>
                <p>Enjoy playing with data in either a structured or non structured environmemt. 
                    Have used libraries such as MySQL2 and Mongoose to create models and perform 
                    CRUD operations on user data. Insomnia is my app of choice for testing end points.
                </p>
            </div>

        </div> 
        {/* <!-- /services--> */}

        <a href="#work" className="btn">My Work</a>

    </section>
  )
}
