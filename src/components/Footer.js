import React from 'react'
import { ReactDOM } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedIn } from '@fortawesome/free-solid-svg-icons'
// import { Button } from '@mui/material';
import Button from './Button'

// import { Button } from '@mui/material'

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
        <h1>Thank You</h1>
        <div>
            <form>
                <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                <Button buttonStyle="btn--outline"> Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-link-wrapper'>
      <div className='footer-link-items'>
      <h2>Contact Us</h2>
                
                <Link to="#"> Contact</Link>
                <Link to="#">Support</Link>
                <Link to="#">Destinations</Link>
                <Link to="#">Sponsorships</Link>
            </div>
            <div className='footer-link-items' >  
            <h2>Social Media</h2>
                <Link to="https://www.facebook.com/sunnykumar.kumar.7967">Facebook</Link>
                <Link to="https://www.linkedin.com/in/sunny-kumar-35877a16a/">LinkedIn</Link>
                <Link to="https://github.com/sunny070"> Github</Link>
                <Link to="https://www.instagram.com/iam_.nyy_/">Instagram </Link>

            </div>
            
            </div>
            <div className='footer-link-icon'>
                
            <spna >  Copyright © 1998</spna>
                <Link to="https://www.facebook.com/sunnykumar.kumar.7967"> 
                <i className="fa-brands fa-facebook"></i>
                
                </Link>
                <Link to="https://www.linkedin.com/in/sunny-kumar-35877a16a/">
                <i className="fa-brands fa-linkedin"></i>
                
                </Link>
                <Link to="https://github.com/sunny070">
                <i className="fa-brands fa-github"></i>
                
                </Link >
                <Link to="https://www.instagram.com/iam_.nyy_/">
                <i className="fa-brands fa-instagram"></i>
                
                </Link>
                <Link to="">
                <i className="fa-brands fa-twitter"></i>
                
                </Link>

            </div>
    </div>
  )
}

export default Footer
