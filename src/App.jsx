import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './Pages/Client/Home';
import './index.css';
import Login from './Pages/Admin/Login';
import Dashboard from './Pages/Admin/Dashboard';
import Form from './Pages/Client/Form';
import ChatBot from './Pages/Client/Chatbot';


const Layout = () => {
  const location = useLocation(); // This hook can only be used inside Router

  return (
    <>
      {/* Conditionally render Navbar based on the current path */}
      {
        location.pathname !== '/admin' &&
        location.pathname !== '/dashboard' &&
        location.pathname !== '/form'
        && <Navbar />
      }
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout /> {/* Render Layout component which contains the Navbar logic */}
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />

        {/* Admin Route */}
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;