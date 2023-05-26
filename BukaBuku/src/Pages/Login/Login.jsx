import React, { useState } from "react";
import './Login.css'
import Register from "../Register/Register";
import Header from "../../Components/Header/Header";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  const handleRegister = () => {
    setShowRegister(true);
  };
  
  const handleFormSwitch = (form) => {
    setShowRegister(form === 'register');
  };
  
  if (showRegister) {
    return <Register onFormSwitch={handleFormSwitch} />;
  }

  return (
    <div classname="login-header-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input className="kotak" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label htmlFor="password"></label>
          <input className="kotak" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={handleRegister}>Don't have an account? Register here.</button>
      </div>
    </div>
  );
}

export default Login;