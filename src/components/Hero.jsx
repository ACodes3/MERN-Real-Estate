import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from "../pages/img/hero-image.png";
import "./hero.css";

const Hero = () => {
    const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  }


  return (
    <div class="hero-container">
    <div class="flexColStart">
        <h1>Discover Your Most Suitable Property</h1>
        <p>Find a variety of properties that suit you very easily. </p>
        <div className="button-group">
            <button className="hero-button" onClick={() => handleButtonClick('/booking')}>Booking</button>
            <button className="hero-button" onClick={() => handleButtonClick('/listing')}>Listing</button>
            <button className="hero-button" onClick={() => handleButtonClick('/contact')}>Contact</button>
          </div>
    </div>
    <div class="image-container">
        <img src={HeroImg} alt="Image Description"/>
    </div>
</div>

  )
}

export default Hero