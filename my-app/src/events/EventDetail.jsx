import React from 'react';
import './EventDetail.scss';
import logo from '../assests/logo.jpeg'
import { Link } from 'react-router-dom'; 
const EventAboutPage = () => {
  return (
    <div className="event-about-container">
      {/* Image Section */}
      <div className="event-about-image">
        <img
          src={logo}
          alt="Umar Hotel"
        />
      </div>

      {/* Details Section */}
      <div className="event-about-info">
        <h1>Umar Hotel ★★★★★</h1>
        <p className="event-about-description">
          Welcome to Umar Hotel, a luxurious 5-star destination offering
          world-class amenities and breathtaking views. Whether you're here for
          leisure or business, we ensure an unforgettable stay filled with
          comfort and sophistication.
        </p>
        <p><strong>Date Established:</strong> 2020</p>
        <p><strong>Location:</strong> Downtown City Center</p>
        <h3>Facilities:</h3>
        <ul>
          <li>Free Wi-Fi</li>
          <li>Swimming Pool</li>
          <li>Fine Dining Restaurants</li>
          <li>Exclusive Spa Services</li>
          <li>Conference Halls</li>
        </ul>
        <Link to="/">
              <button className="event-details-button">Book Now</button>
            </Link>
      </div>
    </div>
  );
};

export default EventAboutPage;




