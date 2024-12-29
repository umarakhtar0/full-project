

import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCardImage,
  MDBCarouselCaption,
  MDBContainer
} from 'mdb-react-ui-kit';
import './hero.scss'; // Assuming this contains styles for the Hero component
import Home from './home'; // Import your Home component
import EventTypes from '../events/eventtype';
import EventForm from '../events/eventfrom';
import EventDetail from '../events/EventDetail'

export default function Hero() {
  return (
    <div>
      {/* Carousel Section (Top of the page) */}
      <MDBContainer className="py-0 px-0">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem className='active'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp'
              alt='...'
              position='top'
              className="d-block w-100"
              style={{ height: '40vh', objectFit: 'cover' }} // Slightly decreased height, full width
            />
            <MDBCarouselCaption className="text-center">
              <h5>Welcome to Our Website</h5>
              <p>Discover stunning events and enjoy in our website.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCardImage
              src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp'
              alt='...'
              position='top'
              className="d-block w-100"
              style={{ height: '40vh', objectFit: 'cover' }} // Slightly decreased height, full width
            />
            <MDBCarouselCaption className="text-center">
              <h5>Explore the Beauty</h5>
              <p>Experience the finest visuals from around the world.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCardImage
              src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp'
              alt='...'
              position='top'
              className="d-block w-100"
              style={{ height: '40vh', objectFit: 'cover' }} // Slightly decreased height, full width
            />
            <MDBCarouselCaption className="text-center">
              <h5>Unforgettable Views</h5>
              <p>Take a journey through breathtaking views and scenes.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>

      {/* Home Section Content after Hero */}
      <Home /> {/* Add your Home component here */}
    
      {/* Event Types Section */}
      <div className="event-types-wrapper">
        <EventTypes />
      </div>
      <div className="event-detail">
        <EventDetail/>
      </div>
      <div className="event-form">
        <EventForm/>
      </div>
     
    </div>
    
  );
}
