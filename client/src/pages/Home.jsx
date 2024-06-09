import Auth from "../utils/auth";
import { Link } from "react-router-dom";
const Home = () => {
  // const isloggedin = true;

  return (
    <div>
      <h1>Welcome to Fitness Blog</h1>
      {/* {!Auth.loggedIn() ? (
        
        <div className="centered-div">
        <div className="centered-content">
        <h4>Sign in to access your account</h4>
        <h4>Log in and share your routine</h4>
        <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
        <Link className="btn btn-lg btn-primary m-2" to="/signup">
                Sign up
              </Link>
        </div>
      </div>
      ) : ( */}
      <div>
        <h4>Make a post</h4>
        <Link className="btn btn-lg btn-primary m-2" to="/">
          Post
        </Link>
       
      </div>
      {/* )} */}
    </div>
  );
};

export default Home;
