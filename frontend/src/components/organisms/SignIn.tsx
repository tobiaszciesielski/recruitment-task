import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../templates/Layout';

const SignIn = () => (
  <Layout>
    <h1 style={{ color: 'red' }}>You need to login</h1>
    <button type="button">Sign in</button>
    <Link to="/signup">Sign up</Link>
  </Layout>
);

export default SignIn;
