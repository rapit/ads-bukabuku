import React, { useState } from "react";
import './Register.css';
import Login from "../Login/Login";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [showRegister, setShowLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleLogin = () => {
        setShowLogin(true);
      };
    
        const handleFormSwitch = (form) => {
        setShowLogin(form === 'Login');
      };
    
        if (showRegister) {
        return <Login onFormSwitch={handleFormSwitch} />;
      }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input className="kotak" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email"></label>
            <input className="kotak" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password"></label>
            <input className="kotak" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Create Account and Log In</button>
        </form>
        <button className="link-btn" onClick={handleLogin}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;