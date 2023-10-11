import React from 'react';
import Header from "../Booking/Header/Header";
import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import MailList from '../components/mailList/MailList';
import PropertyList from '../components/propertyList/PropertyList';
import "./booking.css";

export const Booking = () => {
  return (
    <div>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
    </div>
    </div>
  )
}
