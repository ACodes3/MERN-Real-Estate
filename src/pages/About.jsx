import 'fa-icons';
import React from 'react';
import "./About.css";
import headerImg from "./img/aboutus-banner.png";
import companyImg from "./img/company.jpg";

export const About = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alterations in some injected humour`
  return (
    <div>
      <div className="header">
      <div className="overlay"></div>
      <img src={headerImg} alt="Header Background" className="background-image" />
      <h1 className="header-text">Contact</h1>
      </div>
      <div className='about-back'>
      <div className="about-us">
      <img src={companyImg} alt="Company" className="company-image" />
      <h1>About Us</h1>
      <p>
        Welcome to MERN Real Estate Booking, where we revolutionize the way you experience real estate. Established with a vision to streamline the property booking process, we are committed to providing an unparalleled booking experience for both buyers and sellers.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to simplify the real estate booking process, making it seamless, transparent, and efficient. We believe that finding your dream property or listing your home should be an experience filled with ease and confidence. With cutting-edge technology and a dedicated team, we strive to redefine industry standards.
      </p>
      <h2>What Sets Us Apart</h2>
      <p>
        Innovative Technology: We harness the power of advanced technology to connect buyers and sellers in real-time. Our platform is designed with user-friendly features that offer a comprehensive view of properties, allowing you to make informed decisions.
      </p>
      <p>
        Personalized Service: We understand that every client has unique needs. Our experienced team of real estate experts is dedicated to providing personalized support, ensuring you receive tailored solutions that match your specific requirements.
      </p>
      <p>
        Transparency and Trust: Transparency is at the core of our operations. We believe in open communication, honest transactions, and building trust with our clients. You can rely on us to navigate the complexities of the real estate market with integrity.
      </p>
      <p>
        Global Reach, Local Expertise: With a global presence and a deep understanding of local markets, we offer a unique advantage to both buyers and sellers. Whether you're looking for a property in a bustling city or a serene countryside, we have the expertise to guide you.
      </p>
    </div>
    <section className='section-white'>
      <div className='container-ser'>
        <div className='row'>

          <div className='col-md-12 text-center'>
            <h2 className='section-title'>
              The Agents Behind MERN Real Estate Booking
            </h2>
            <p className='section-subtitle'>{message}</p>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className='team-img' alt="pic"/>
              <h3>JOHN HAWKINS</h3>
              <div className='team-info'>
                <p>Head of SEO</p>
                <p> Berlin, Germany</p>
                <ul className='team-icon'>
                <li><a href='#' className='twitter'><i className='fa-brands fa-square-twitter'></i></a></li>
                <li><a href='#' className='pinterest'><i className='fa-brands fa-pinterest'></i></a></li>
                <li><a href='#' className='facebook'><i className='fa-brands fa-facebook'></i></a></li>
                <li><a href='#' className='dribbble'><i className='fa-brands fa-linkedin'></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className='team-img' alt="pic"/>
              <h3>AMANDA GRACE</h3>
              <div className='team-info'>
                <p>Head of MARKETING</p>
                <p> Stockholm, Sweden</p>
                <ul className='team-icon'>
                <li><a href='#' className='twitter'><i className='fa-brands fa-square-twitter'></i></a></li>
                <li><a href='#' className='pinterest'><i className='fa-brands fa-pinterest'></i></a></li>
                <li><a href='#' className='facebook'><i className='fa-brands fa-facebook'></i></a></li>
                <li><a href='#' className='dribbble'><i className='fa-brands fa-linkedin'></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className='team-img' alt="pic"/>
              <h3>MARKO POLIO</h3>
              <div className='team-info'>
                <p>Head of DEPARTMENTS</p>
                <p> Lisbon, Portugal</p>
                <ul className='team-icon'>
                <li><a href='#' className='twitter'><i className='fa-brands fa-square-twitter'></i></a></li>
                <li><a href='#' className='pinterest'><i className='fa-brands fa-pinterest'></i></a></li>
                <li><a href='#' className='facebook'><i className='fa-brands fa-facebook'></i></a></li>
                <li><a href='#' className='dribbble'><i className='fa-brands fa-linkedin'></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}
