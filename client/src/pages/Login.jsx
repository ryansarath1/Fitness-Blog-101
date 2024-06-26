import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="col-12 col-lg-10 d-flex flex-column align-center mb-4">
      <div className="card" style={{backdropFilter: "blur(10px) "}}>
        <h1 className="card-header bg-dark text-light p-2">
          Welcome to Fitness Paradise
        </h1>
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        <div className="card-body">
          <form onSubmit={handleFormSubmit} >
            <div className="form-group">
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-block btn-info"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
          </form>
          {error ? (<h6 style={{color: 'darkred'}}>please fix inputs</h6>): ''}
          {/* )} */}
        </div>
      </div>
      <Link to="/signup" className="btn btn-info">
        dont have an account click here.
      </Link>
    </div>
  );
};

export default Login;
