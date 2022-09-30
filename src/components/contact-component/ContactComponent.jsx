import React from 'react'
import './ContactComponent.css'

export default function ContactComponent() {
    return (
        <div className='contact-container'>

            <form className='contact-form' target="_blank" action="https://formsubmit.co/89f6ce275554d2b5bd0823e19421452a" method="POST">

                <h2>Get In Touch</h2>
                <input type="text" id="name" placeholder='Your Name' required />
                <input type="email" id="email" placeholder='Your Email' required />
                <textarea name="message" id="message" placeholder='Your Message' rows="10" required></textarea>
                <button className='btn' type='submit'>Send</button>

            </form>

        </div>
    )
}
