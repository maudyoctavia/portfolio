import React from 'react';
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import LinkedinIcon from '../../assets/linkedin.png';


const contact = () => {
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss ny work opportunities.</span>
            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://www.instagram.com/maudyoctavia_/profilecard/?igsh=ejk1b2M1ZGVncmJq">
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/maudy-octavia-s-6814222b2/" target="_blank" rel="noopener noreferrer"></a>
                    <img src={LinkedinIcon} alt="Linkedin" className="link" />
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default contact;