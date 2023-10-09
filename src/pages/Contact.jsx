import emailjs from '@emailjs/browser';
import GoogleMapReact from 'google-map-react';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
import headerImg from "./img/contact-banner.png";
import fbImage from "./img/facebook-app-symbol.png";
import instaImage from "./img/instagram.png";
import linkedInImage from "./img/linkedin.png";
import locationImage from "./img/location.png";
import emailImage from "./img/mail.png";
import phoneImage from "./img/phone-call.png";
import pintImage from "./img/pinterest.png";
import twitterImage from "./img/twitter.png";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const userId = process.env.REACT_APP_USER_ID;

  
      emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        toast.error("Error sending email. Please try again later.");
      })

      .finally(() => {
        setIsSending(false);
      });
  };


    const defaultProps = {
        center: {
          lat: 51.5074,
          lng: -0.1278
        },
        zoom: 11
      };
  return (
    <div>
      <div className="header">
      <div className="overlay"></div>
      <img src={headerImg} alt="Header Background" className="background-image" />
      <h1 className="header-text">Contact</h1>
    </div>
    <section>
    <div className="container">
      <div className="contactInfo">
        <div>
            <h2>Contact Info</h2>
            <ul className='info'>
                <li>
                    <span><img src={locationImage} alt="location"></img></span>
                    <span>
                        1234 Street name and number
                        State / Country
                        Postal Code
                    </span>
                </li>
                <li>
                    <span><img src={emailImage} alt="email"></img></span>
                    <span>
                        email@lorem.com
                    </span>
                </li>
                <li>
                    <span><img src={phoneImage} alt="phone"></img></span>
                    <span>
                        +0123456789
                    </span>
                </li>
            </ul>
        </div>
        <ul className='sci'>
            <li><a href="#"><img src={fbImage}></img></a></li>
            <li><a href="#"><img src={instaImage}></img></a></li>
            <li><a href="#"><img src={twitterImage}></img></a></li>
            <li><a href="#"><img src={pintImage}></img></a></li>
            <li><a href="#"><img src={linkedInImage}></img></a></li>
        </ul>
      </div>
      <div className="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Send a Message</h2>
        <div className='formBox'>
            <div className='inputBox w50'>
                <input type='text' required name="from_name"></input>
                <span>First Name</span>
            </div>
            <div className='inputBox w50'>
                <input type='text' required name="from_last_name"></input>
                <span>Last Name</span>
            </div>
            <div className='inputBox w50'>
                <input type='email' required name="from_email"></input>
                <span>Email Address</span>
            </div>
            <div className='inputBox w50'>
                <input type='text'required name="from_tel_num"></input>
                <span>Mobile Number</span>
            </div>
            <div className='inputBox w100'>
                <textarea required name="message"></textarea>
                <span>Write your message here...</span>
            </div>
            <div className='inputBox w100'>
            <input type="submit" value={isSending ? "Sending..." : "Send"} disabled={isSending} />
            </div>
        </div>
        </form>
      </div>
    </div>
  </section>
  <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={51.5074}
          lng={-0.1278}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

  </div>

);
}
