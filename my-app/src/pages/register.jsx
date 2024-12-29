// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
// import './registerApp.scss'; // Ensure your custom SCSS is imported for custom styles

// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (name === '' || email === '' || password === '' || confirmPassword === '') {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Perform registration logic, like calling your backend API
//     setError('');
//     setSuccessMessage('Registration successful!');
//     console.log('Registering:', { name, email, password });
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '450px', borderRadius: '15px' }}>
//         <div className="card-body">
//           <h4 className="card-title text-center mb-4">Register</h4>

//           {error && <div className="alert alert-danger">{error}</div>}
//           {successMessage && <div className="alert alert-success">{successMessage}</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Full Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//               />
//             </div>

//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary btn-lg">Register</button>
//             </div>

//             <div className="text-center mt-3">
//               <small>Already have an account? <a href="../pages/login" className="text-decoration-none">Login</a></small>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// // src/pages/RegisterPage.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (email === '' || password === '') {
//       setError('Please fill in both email and password');
//       return;
//     }

//     try {
//       // Send POST request to backend register route
//       const response = await axios.post('http://localhost:3000/register', { email, password });
//       setSuccessMessage('Registration successful!');
//       console.log('Registered successfully:', response.data);

//       // Redirect to login page
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000); // Redirect after 2 seconds
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong!');
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '450px', borderRadius: '15px' }}>
//         <div className="card-body">
//           <h4 className="card-title text-center mb-4">Register</h4>

//           {error && <div className="alert alert-danger">{error}</div>}
//           {successMessage && <div className="alert alert-success">{successMessage}</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary btn-lg">Register</button>
//             </div>

//             <div className="text-center mt-3">
//               <small>Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></small>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;











//final




// // src/pages/RegisterPage.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';
// import './registerApp.scss'

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (email === '' || password === '' || confirmPassword === '') {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       // Send POST request to backend register route
//       const response = await axios.post('http://localhost:3000/register', { email, password });
//       setSuccessMessage('Registration successful! Please log in.');
//       console.log('Registered successfully:', response.data);

//       // Redirect to login page after a short delay
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000); // Redirect after 2 seconds
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong!');
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '450px', borderRadius: '15px' }}>
//         <div className="card-body">
//           <h4 className="card-title text-center mb-4">Register</h4>

//           {/* Display error or success messages */}
//           {error && <div className="alert alert-danger">{error}</div>}
//           {successMessage && <div className="alert alert-success">{successMessage}</div>}

//           <form onSubmit={handleSubmit}>
//             {/* Email Input */}
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Password Input */}
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//             </div>

//             {/* Confirm Password Input */}
//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//               />
//             </div>

//             {/* Register Button */}
//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary btn-lg">Register</button>
//             </div>

//             {/* Link to Login Page */}
//             <div className="text-center mt-3">
//               <small>Already have an account? <Link to="../login" className="text-decoration-none">Login</Link></small>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;








import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './registerApp.scss';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send POST request to backend register route
      const response = await axios.post('http://localhost:3000/pages/register', { email, password });
      setSuccessMessage('🎉 Registration successful! Redirecting you to the Home page...');
      console.log('Registered successfully:', response.data);

      // Clear error state in case there were previous errors
      setError('');

      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate('/'); // Redirect to the home page
      }, 3000); // 3-second delay for user to read the message
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '450px', borderRadius: '15px' }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Register</h4>

          {/* Display error or success messages */}
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>

            {/* Register Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">Register</button>
            </div>

            {/* Link to Login Page */}
            <div className="text-center mt-3">
              <small>Already have an account? <Link to="../login" className="text-decoration-none">Login</Link></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
