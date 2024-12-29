// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss'
// import Logo from '../assests/logo.jpeg'

// const Header = () => {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <img src={Logo} alt="Logo" width="50" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/services">Services</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-primary text-white rounded-pill px-4" to="/book">Book Now</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; // Ensure your SCSS is imported
import Logo from '../assests/logo.jpeg';

const Header = () => {
  return (
    <header className="custom-header">
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-3 custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../events/EventDetail">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../events/eventtype">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../events/event">Contact</Link>
              </li>
              {/* Login button and Book Now button */}
              <li className="nav-item d-flex justify-content-end">
                <Link className="nav-link btn btn-light text-dark rounded-pill px-4 me-2" to="../pages/login">
                  Login
                </Link>
                <Link className="nav-link btn btn-custom text-white rounded-pill px-4" to="../events/event">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
