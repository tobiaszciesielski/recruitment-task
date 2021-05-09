import React from 'react';

const SignUp = () => (
  <form action="submit">
    <label htmlFor="firstName">
      <input type="text" />
    </label>
    <label htmlFor="secondName">
      <input type="text" />
    </label>
    <label htmlFor="password">
      <input type="text" />
    </label>
    <button type="submit">Sign up</button>
  </form>
);

export default SignUp;
