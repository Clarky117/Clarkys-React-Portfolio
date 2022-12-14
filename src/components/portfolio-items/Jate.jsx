import jatePic from '../my-work/images/7-jate-890.png'
import itemBgPic from './geometric-portfolio-item.jpg'
import './PortfolioItem.css'

export default function Jate() {
    return (
        <div>

            {/* altered intro with portfolio item pic */}
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    Jate Text Editor
                </h1>
                <p className="section__subtitle section__subtitle--intro">Progressive Web App</p>
                <img src={jatePic} alt="portfolio-item-pic" className="intro__img" />
            </section>

            {/* paragraph about work */}
            <section className='portfolio-item-individual'>

                <p className='portfolio-item-summary'>This text editor known as Jate, runs in the browser,
                    and is a single-page application that meets PWA criteria. Jate features a number of data persistence
                    techniques that serve as redundancy in case an option is not supported in the browser, also has
                    functionality offline.</p>
                {/* background pic */}
                <img src={itemBgPic} alt="geometric-background" className='portfolio-item-pic' />
                {/* link to repo */}

                <div className='portfolio-item-display'>
                    <p className='portfolio-item-links'>
                        <a href="https://github.com/Clarky117/JATE-PWA-Text-Editor" target="_blank">Github <i className="fa-brands fa-github"></i></a>
                    </p>
                    {/* link to deployed app or youtube video */}
                    <p className='portfolio-item-links'>
                        <a href="https://clarkys-jate.herokuapp.com/" target="_blank">Jate App <i className="fa-solid fa-globe"></i></a>
                    </p>
                </div>

            </section>

        </div>
    )
}
