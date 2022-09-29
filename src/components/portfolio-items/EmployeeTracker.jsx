import React from 'react'
import etPic from '../my-work/images/4-et-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'

export default function EmployeeTracker() {
    return (
        <div>

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Employee Tracker
                </h1>
                <p className="section__subtitle section__subtitle--intro">MySQL database using Sequelize</p>
                <img src={etPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p className='portfolio-item-summary'>As a business owner who isn't a developer, it is very important
                    to be able to view and manage the departments, roles, and employees within the company so planning and
                    organisation within the business becomes an easier part of the role.</p>
                <p className='portfolio-item-summary'>In this command line application using Node and the Inquirer package,
                    we interact with the user and can perform CRUD operations on the employees, roles, and departments.</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>

                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/Employee-Tracker">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://www.youtube.com/watch?v=U5KXLzqG16o">Youtube <i className="fa-brands fa-youtube"></i></a>
                    </p>

                </div>

            </section>

        </div>
    )
}
