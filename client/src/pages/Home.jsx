import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Fitness Blog</h1>
      {!Auth.loggedIn() ? (
        <div>
          <h4>Sign in to access your account:</h4>
          <h4>Sign up to register</h4>
          <Link className="btn btn-lg btn-primary m-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-lg btn-primary m-2" to="/signup">
            Sign Up
          </Link>
        </div>
      ) : (
        <div>
          <h4>Make a post</h4>
          <Link className="btn btn-lg btn-primary m-2" to="/AddWorkout">
            Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
