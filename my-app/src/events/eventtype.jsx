import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './EventTypes.scss';

const EventTypes = () => {
  return (
    <section className="event-types">
      <h2 className="event-types-title">Our Exciting Events</h2>
      <div className="event-type-cards">
        {/* Event 1 */}
        <div className="event-type" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKF_YlFFlKS6AQ8no0Qs_xM6AkjvwFwP61og&s")' }}>
          <div className="event-type-overlay">
            <div className="event-type-title">Event 1</div>
            <p className="event-type-description">Join us for a wonderful experience at Event 1!</p>
            <Link to="../events/EventDetail">
              <button className="event-details-button">Learn More</button>
            </Link>
          </div>
        </div>
        
        {/* Event 2 */}
        <div className="event-type" style={{ backgroundImage: 'url("https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg")' }}>
          <div className="event-type-overlay">
            <div className="event-type-title">Event 2</div>
            <p className="event-type-description">Experience the thrill at Event 2!</p>
            <Link to="../events/EventDetail">
              <button className="event-details-button">Learn More</button>
            </Link>
          </div>
        </div>
        
        {/* Event 3 */}
        <div className="event-type" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg")' }}>
          <div className="event-type-overlay">
            <div className="event-type-title">Event 3</div>
            <p className="event-type-description">Don't miss out on Event 3!</p>
            <Link to="../events/EventDetail">
              <button className="event-details-button">Learn More</button>
            </Link>
          </div>
        </div>
        
        {/* Event 4 */}
        <div className="event-type" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLn2kS2AtNE9honTpcg5p4JnbRAa3ccsjRw&s")' }}>
          <div className="event-type-overlay">
            <div className="event-type-title">Event 4</div>
            <p className="event-type-description">Get ready for Event 4!</p>
            <Link to="../events/EventDetail">
              <button className="event-details-button">Learn More</button>
            </Link>
          </div>
        </div>
        
        {/* Event 5 */}
        <div className="event-type" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDDIUkOvaXGOy3TwETFMXGyNtVG0zKcZywg&s")' }}>
          <div className="event-type-overlay">
            <div className="event-type-title">Event 5</div>
            <p className="event-type-description">Exciting moments await at Event 5!</p>
            <Link to="../events/EventDetail">
              <button className="event-details-button">Learn More</button>
            </Link>
          </div>
        </div>
        
        {/* Event 6 */}
        <div className="event-type" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKF_YlFFlKS6AQ8no0Qs_xM6AkjvwFwP61og&s")' }}>
          <div className="event-type-overlay">
            <div className="event-type-title">Event 6</div>
            <p className="event-type-description">Be a part of Event 6!</p>
            <Link to="../events/EventDetail">
              <button className="event-details-button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
