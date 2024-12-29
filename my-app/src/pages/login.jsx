

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './loginApp.scss'; // Import the same SCSS file as used in RegisterPage



import 'bootstrap/dist/css/bootstrap.min.css';







const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple submissions

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/pages/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, save JWT in memory (or cookies)
        console.log('Login successful', data);
        // Example: save token in localStorage or cookies
        localStorage.setItem('token', data.token);
        // Redirect the user to the home/dashboard page
        navigate('/'); // Use navigate instead of history.push
      } else {
        // Handle invalid credentials
        setError(data.message || 'Invalid credentials, please try again');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Server error, please try again later');
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter your email'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
               placeholder='Enter your password'
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p>
          Don't have an account? <a href="./register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

