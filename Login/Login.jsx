import React, { useState } from "react";
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/checklogin", {
        email: email,
        password: pass,
      });
      if (response.data.success) {
        // Berhasil login, alihkan halaman secara manual
        window.location.href = "/book";
      } else {
        console.log("Login gagal");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-header-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input className="kotak" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input className="kotak" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button type="submit">Log In</button>
        </form>
        <Link to="/register" className='link-btn'>Don't have an account? Register here.</Link>
      </div>
    </div>
  );
}
export default Login;
