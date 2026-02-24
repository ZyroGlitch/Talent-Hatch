import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar'; // Import Navbar
import Home from './Pages/Home'; // Import Home
import FormPage from './Pages/FormPage'; // Import FormPage
import './index.css'; // Import global styles

function App() {
  return (
    <Router>
      {/* Navbar is always visible on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;