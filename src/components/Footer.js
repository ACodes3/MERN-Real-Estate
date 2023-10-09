import React from 'react';
import facebook from "../pages/img/facebook-app-symbol.png";
import instagram from "../pages/img/instagram.png";
import linkedin from "../pages/img/linkedin.png";
import twitter from "../pages/img/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>
                    <h4>For Business</h4>
                    <a href='/agents'>
                        <p>Agents</p>
                    </a>
                    <a href='/ensurance'>
                        <p>Ensurance</p>
                    </a>
                    <a href='/rentals'>
                        <p>Rentals</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                <h4>Resources</h4>
                    <a href='/resource'>
                        <p>Resource Center</p>
                    </a>
                    <a href='/testimonials'>
                        <p>Testimonials</p>
                    </a>
                    <a href='/indexes'>
                        <p>Rental Indexes</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                <h4>Company</h4>
                    <a href='/about'>
                        <p>About us</p>
                    </a>
                    <a href='/about'>
                        <p>Our Mission</p>
                    </a>
                    <a href='/about'>
                        <p>Our Agents</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                <h4>Career</h4>
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                <h4>Coming Soon on</h4>
                    <div className='socialmedia'>
                        <p><img src={facebook} alt=""></img></p>
                        <p><img src={twitter} alt=""></img></p>
                        <p><img src={linkedin} alt=""></img></p>
                        <p><img src={instagram} alt=""></img></p>
                    </div>
                </div>
            </div>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} MERN Real Estate Booking.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/terms'><div><p>Privacy Policy</p></div></a>
                    <a href='/terms'><div><p>Security & Cookies</p></div></a>
                    <a href='/terms'><div><p>Website Disclaimer</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}
