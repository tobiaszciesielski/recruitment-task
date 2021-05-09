import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <>
    <h1>Welcome</h1>
    <Link to="/profile">Edit Profile</Link>
    <Link to="/">Log out</Link>
  </>
);

export default Dashboard;
