// src/components/BookingList.js
import React, { useState, useEffect } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            User: {booking.user.username} - Bus: {booking.bus.busName} - Seat Number: {booking.seatNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
