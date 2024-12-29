// import React from 'react'
// import Eventtype from "./eventtype";
// import { Routes, Route, Navigate } from "react-router-dom";
// import EventDetail from './EventDetail';
// import Eventfrom from './eventfrom';
// export default function index() {
//   return (
//     <Routes>
//     <Route path="eventtype" element={<Eventtype />} />
//     <Route path="/EventDetail" element={<EventDetail/>}/> Event Detail Route
//     <Route path="/eventfrom" element={<Eventfrom/>}/> Event Detail Route
//     {/* <Route path="/" element={<EventForm onSubmit={handleEventSubmit} />} /> */}
  
//   </Routes>
//   )
// }
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';  // Import from react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles
import Eventtype from "./eventtype";
import EventDetail from './EventDetail';
import Eventfrom from './eventfrom';
import Event from './event';
import Header from "../navbar/Header";
import Footer from "../navbar/footer";


export default function Index() {
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate(); // For navigation after form submission

  const handleEventSubmit = (newEvent) => {
    // Handle the event submission (you can also store the event data here)
    setEventData(newEvent);

    // Show success toast (with checkmark icon)
    toast.success('Event Created Successfully!');

    // Redirect after 2 seconds (for toast visibility)
    setTimeout(() => {
      navigate('/hero'); // Adjust the path based on your needs
    }, 2000);
  };

  return (
    <>
      {/* Render the toast container */}
 
      <Header />
     
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
<main>
      <Routes>
        <Route path="eventtype" element={<Eventtype />} />
        <Route path="/EventDetail" element={<EventDetail />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/eventfrom" element={<Eventfrom onSubmit={handleEventSubmit} />} />
        {/* Add more routes as necessary */}
      </Routes>
      
      </main>
     
        
    </>
  );
}
