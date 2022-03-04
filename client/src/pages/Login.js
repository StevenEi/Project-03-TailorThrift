import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../assets/css/LoginSignUp.css'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">

      <div className='loginCard'>
        <h2 class='loginTitle'>Registered customers</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2 fields">
            <label htmlFor="email"></label>
            <input
              className='loginField topfield'
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 fields">
            <label htmlFor="pwd"></label>
            <input
              className='loginField'
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          {Auth.loggedIn() ? (<div className="flex-row flex-end logoutButton">
            <button type="submit" class='logoutBtn' onClick={() => Auth.logout()}>Logout</button>
          </div>) : (<div className="flex-row flex-end loginButton">
            <button type="submit" class='loginBtn'>Login</button>
          </div>)}
        </form>
      </div>
      <div className='redirectSection'>
        <div class='loginRedirect'>Not a member?</div>
        <Link to="/signup" class='goToSignUp'><span>←</span> Go To Signup</Link>
      </div>
    </div>
  );
}

export default Login;
