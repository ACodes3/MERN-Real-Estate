import GoogleMapReact from 'google-map-react';
import React from 'react';
import "./Contact.css";
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
    const defaultProps = {
        center: {
          lat: 51.5074,
          lng: -0.1278
        },
        zoom: 11
      };
  return (
    <div>
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
        <h2>Send a Message</h2>
        <div className='formBox'>
            <div className='inputBox w50'>
                <input type='text' required></input>
                <span>First Name</span>
            </div>
            <div className='inputBox w50'>
                <input type='text' required></input>
                <span>Last Name</span>
            </div>
            <div className='inputBox w50'>
                <input type='email' required></input>
                <span>Email Address</span>
            </div>
            <div className='inputBox w50'>
                <input type='text' required></input>
                <span>Mobile Number</span>
            </div>
            <div className='inputBox w100'>
                <textarea required></textarea>
                <span>Write your message here...</span>
            </div>
            <div className='inputBox w100'>
                <input type='submit' value="Send"></input>
            </div>
        </div>
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
