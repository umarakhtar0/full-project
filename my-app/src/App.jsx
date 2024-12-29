// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'antd/dist/reset.css';
import Routes from './routes.js';
import Loader from './assests/loader.jsx'; // Ensure the path is correct



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state (e.g., data fetching)
    const load = async () => {
      try {
        // Simulate a loading process for 5 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error during loading:', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <>

      {loading ? (
        <Loader /> // Display the loader while loading
      ) : (
        <Routes /> // Display routes when not loading
      )}
     

    </>
  );
}

export default App;