import React, { useState } from "react";
import './Register.css';
import { Login } from "../Login/Login";
import { Link } from 'react-router-dom';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  const handleLogin = () => {
    setShowLogin(true);
  };
    
  const handleFormSwitch = (form) => {
    setShowLogin(form === 'login');
  };
    
  if (showLogin) {
    return <Login onFormSwitch={handleFormSwitch} />;
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input className="kotak" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
        <label htmlFor="email"></label>
        <input className="kotak" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password"></label>
        <input className="kotak" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Create Account and Log In</button>
      </form>

    <Link to="/login" className='link-btn'>Already have an account? Login here.</Link>
  </div>
);
}

export default Register;