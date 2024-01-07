// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Bus Booking</div>
      <nav className="nav">
        <div>
        <h1> Hello there!!</h1>
        <Link to="/buses" className="nav-link">Buses</Link>
        <Link to="/users" className="nav-link">Users</Link>
        <Link to="/bookings" className="nav-link">Bookings</Link> 
      </div>
      </nav>
    </header>
  );
};

export default Header;
