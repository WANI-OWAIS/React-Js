import React from 'react';
import Home from './components/Home';
import User from './components/User';
import UserDetail from './components/UserDetail'; // New component for individual user
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='pt-4 w-3/4 mx-auto bg-gray-100 min-h-screen'>
        <nav className='my-6 flex justify-center space-x-6 bg-white p-4 rounded shadow'>
          <Link to="/" className='text-blue-500 hover:text-blue-700 font-semibold'>Home</Link>
          <Link to="/user" className='text-blue-500 hover:text-blue-700 font-semibold'>User</Link>
          <Link to="/about" className='text-blue-500 hover:text-blue-700 font-semibold'>About</Link>
        </nav>

        <div className='bg-white p-6 rounded shadow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<UserDetail />} /> {/* Handle dynamic user routes */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
