import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import '../assets/css/LoginSignUp.css'


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        chest: formState.chest,
        arms: formState.arms,
        waist: formState.waist,
        inseam: formState.inseam,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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

      <div class='loginCard'>
        <h2 class='loginTitle'>New Users</h2>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2 fields">
          <label htmlFor="firstName"></label>
          <input
            className='loginField'
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 fields">
          <label htmlFor="lastName"></label>
          <input
            className='loginField'
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 fields">
          <label htmlFor="email"></label>
          <input
            className='loginField'
            placeholder="email@domain.com"
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
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
                    <div >
            <p class='measureTitleLogin'>New User Measurements</p>
          </div>
        </div>

        <div class='measureCard'>


          <div className="measureFields">
            <label class='measureTitleText' htmlFor="chest">Chest </label>
            <input
              className='measureField'
              placeholder="  e.g.42in"
              name="chest"
              type="chest"
              id="chest"
              onChange={handleChange}
            />
          </div>
          <div className="measureFields">
            <label class='measureTitleText' htmlFor="pwd">Arms</label>
            <input
              className='measureField'
              placeholder="e.g. 42in"
              name="arms"
              type="arms"
              id="arms"
              onChange={handleChange}
            />
          </div>
          <div className="measureFields">
            <label class='measureTitleText' htmlFor="waist">Waist</label>
            <input
              className='measureField'
              placeholder="e.g. 32in"
              name="waist"
              type="waist"
              id="waist"
              onChange={handleChange}
            />
          </div>
          <div className="measureFields">
            <label class='measureTitleText' htmlFor="legs">Inseam</label>
            <input
              className='measureField'
              placeholder="e.g. 32in"
              name="inseam"
              type="inseam"
              id="inseam"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-end loginButton">
          <button type="submit" class='loginBtn'>Sign Up</button>
        </div>
      </form>
      <div>
      <div class='signUpRedirect'>Already a member?</div>
      <Link to="/login" class='goToLogin'>← Go to Login</Link>
      </div>


    </div>
  );
}

export default Signup;