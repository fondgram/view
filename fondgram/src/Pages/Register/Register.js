import React, { useState } from 'react'
import "./Register.css"
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/UserRegistration/login', {
        email: email,
        password: password
      });
      const token = response.data.token;
      console.log("token: " + token)
      // Do something with the JWT token, such as storing it in local storage
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the login process
    }
    // Do something after the user has registered, such as redirecting to a new page
  };

  return (
    <div className='register__container'>
      <h1 className='website'>Fondgram</h1>
      <div className='register__page'>
        <div className="register">
          <img src={require("./assets/login.jpg")} alt="login" />
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" required />
            <label>
              <input type="date" name="birthDate" id="birthDate" placeholder="Birthday" required />
            </label>
            <input type="text" name="address" id="address" placeholder="Address" required />
            <input type="email" name="email" placeholder="Email" id="email" required />
            <input type="email" name="confirmEmail" placeholder="Confirm Email" id="confirmEmail" required />
            <input type="password" name="password" placeholder="Password" id="password" required />
            <button type="submit" className="register__button" id="submit" name="submit">Register</button>
            <p className="error"></p>
            <p>
              Have an account? <a href="/login"><b>Login Instead</b></a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register