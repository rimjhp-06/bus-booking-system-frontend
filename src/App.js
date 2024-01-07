// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BusList from './components/BusList';
import UserList from './components/UserList';
import BookingList from './components/BookingList';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/buses" component={BusList} />
          <Route path="/users" component={UserList} />
          <Route path="/bookings" component={BookingList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
