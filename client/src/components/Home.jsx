import React from 'react';
import LoginForm from '../components/LoginForm';

function Home() {
  return (
    <div>
      <h1>Welcome to Fitness Blog</h1>
      <p>Sign in to access your account:</p>
      <LoginForm />
    </div>
  );
}

export default Home;
