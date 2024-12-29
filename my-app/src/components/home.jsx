



import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Home.scss';
const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = () => {
    navigate('../events/EventDetail'); // Navigate to the event details page
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Our Event</h1>
          <p className="hero-subtitle">Unforgettable Experiences Await</p>
          <button className="cta-button" onClick={handleDiscoverMore}>Discover More</button>
        </div>
      </section>
    </div>
  );
};
export default Home;