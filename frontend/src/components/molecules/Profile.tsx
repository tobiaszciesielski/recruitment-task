import React from 'react';

const Profile = () => (
  <form action="submit">
    <label htmlFor="firstName">
      <input type="text" />
    </label>
    <label htmlFor="lastName">
      <input type="text" />
    </label>
    <label htmlFor="password">
      <input type="text" />
    </label>
    <label htmlFor="confirmPassword">
      <input type="text" />
    </label>
    <button type="submit">Edit Profile</button>
  </form>
);

export default Profile;
