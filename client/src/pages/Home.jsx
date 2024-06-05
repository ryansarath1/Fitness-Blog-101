import AuthService from "../utils/auth";
import { Link } from 'react-router-dom';
const Home = () => {
  const isloggedin = AuthService.loggedIn();
  // const isloggedin = true;

  return (
    <div>
      <h1>Welcome to Fitness Blog</h1>
      {isloggedin ? (
        <div>I'm Logged In</div>
      ) : (
        <div>
          <p>Sign in to access your account:</p>
          <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
