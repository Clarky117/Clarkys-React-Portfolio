import clffPic from '../my-work/images/9-clff-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'
import './PortfolioItem.css'

export default function ClarkysLocalFishFinder() {
    return (
        <div>

            {/* altered intro with portfolio item pic */}
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Local Fish Finder
                </h1>
                <p className="section__subtitle section__subtitle--intro">Perth</p>
                <img src={clffPic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p className='portfolio-item-summary'>After learning Node, Express, MongoDB and last but definitely not least, React, it
                    was time to put them together and develop a MERN application also using GraphQL. This project is something true to what I do in my spare
                    time. I have a few fish tanks and breed some cool fish. The local community is always coming across each other on gumtree
                    so the idea is to have a localised space to advertise directly with one another.</p>

                <p className='portfolio-item-summary'>Current completion is at 50% - everything implemented thus far is clean and polished, the back end is very robust.
                    Queries and Mutations all work fine in testing. Register user and login utilise Json Web Token and have been implemented on the front end. Logged in
                    users can also post. Further CRUD operations to be implemented on the front end, including the ability for the User to create a profile page.</p>

                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>
                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/local-fish-finder/" target="_blank">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://desolate-forest-33322.herokuapp.com/" target="_blank">My App <i className="fa-solid fa-globe"></i></a>
                    </p>
                </div>

            </section>

        </div>
    )
}
