// src/components/BusList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BusList.css';


const BusList = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch available buses from the backend
    axios.get('/api/buses')
      .then(response => setBuses(response.data))
      .catch(error => console.error('Error fetching buses:', error));
  }, []);

  return (
    <div className="bus-list-container">
      <h2>Bus List</h2>
      <ul className="bus-list">
        {buses.map((bus) => (
          <li key={bus.id} className="bus-card">
            <strong>{bus.busName}</strong>
            <p>Total Seats: {bus.totalSeats}</p>
            <p>Occupancy: {bus.currentOccupancy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusList;
