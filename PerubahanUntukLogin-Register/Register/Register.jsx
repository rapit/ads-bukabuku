import React, { useState } from "react";
import axios from 'axios';
import './Register.css';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setName] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/pintubelakang", {
        email: email,
        password: pass,
        username: username,
      });
      handleLogin();
      console.log(email);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleLogin = () => {
    setShowLogin(true);
  };
    
  const handleFormSwitch = (form) => {
    setShowLogin(form === 'login');
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPass(value);
    } else if (name === "username") {
      setName(value);
    }
  };
  
  
  if (showLogin) {
    return <Login onFormSwitch={handleFormSwitch} />;
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input className="kotak" value={username} name="username" onChange={handleChange} id="username" placeholder="Full Name" />
        <label htmlFor="email"></label>
        <input className="kotak" value={email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password"></label>
        <input className="kotak" value={pass} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Create Account and Log In</button>
      </form>

    <Link to="/login" className='link-btn'>Already have an account? Login here.</Link>
  </div>
);
};

export default Register;
