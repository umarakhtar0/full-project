import React, { useState, useEffect } from 'react';
import './event.scss';
import logo from '../assests/image.jpeg';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    category: '',
  });
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    visibility: 'Public',
  });

  // Retrieve events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage whenever the events state changes
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEventCreate = (e) => {
    e.preventDefault();

    const newEventWithId = {
      ...newEvent,
      id: events.length + 1, // Assuming the ID is the next available number
    };

    setEvents((prevEvents) => [...prevEvents, newEventWithId]);

    // Clear the form after submission
    setNewEvent({
      title: '',
      description: '',
      date: '',
      location: '',
      visibility: 'Public',
    });
  };

  const handleEventDelete = (eventId) => {
    // Confirm before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
    }
  };

  const filteredEvents = events.filter((event) => {
    const matchesDate = filters.date ? event.date === filters.date : true;
    const matchesCategory = filters.category ? event.category === filters.category : true;
    return matchesDate && matchesCategory;
  });

  return (
    <div className="event-page">
      <section className="main-section">
        <div className="container">
          <h2 className="header">Create Events</h2>

          {/* Image Section after Header */}
          <div className="image-container">
            <img
              src={logo}
              alt="Event Showcase"
              className="image"
            />
          </div>

          {/* Event Cards */}
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image-container">
                  <img
                    src="https://via.placeholder.com/400x250"
                    alt={event.title}
                    className="event-image"
                  />
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <button
                  className="event-button"
                  onClick={() => alert(`More about ${event.title}`)}
                >
                  Learn More
                </button>
                <button
                  className="delete-event-button"
                  onClick={() => handleEventDelete(event.id)}
                >
                  Delete Event
                </button>
              </div>
            ))}
          </div>

          {/* Event Creation Section */}
          <div className="create-event-section">
            <h3>Create a New Event</h3>
            <form className="event-form" onSubmit={handleEventCreate}>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleEventChange}
                placeholder="Event Title"
                className="event-input"
                required
              />
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleEventChange}
                placeholder="Event Description"
                className="event-input"
                required
              ></textarea>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleEventChange}
                className="event-input"
                required
              />
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleEventChange}
                placeholder="Location"
                className="event-input"
                required
              />
              <select
                name="visibility"
                value={newEvent.visibility}
                onChange={handleEventChange}
                className="event-input"
                required
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <button type="submit" className="create-event-button">Create Event</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
