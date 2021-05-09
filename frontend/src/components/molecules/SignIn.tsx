import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <form action="submit">
    <label htmlFor="password">
      <input type="text" />
    </label>
    <button type="button">Sign in</button>
    <Link to="/signup">Sign up</Link>
  </form>
);

export default SignIn;
