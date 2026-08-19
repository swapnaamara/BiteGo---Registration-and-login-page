import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, goToRegister, users }) {
  
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(u => u.email === form.email && u.password === form.password);
    
    if(user){
      onLogin(user.fullName);
    } else {
      setError("Invalid Email or Password");
    }
  }

  return (
    <div className="auth-wrapper">
      <h1 className="app-name">BiteGo 🚀</h1>
      <div className="login-box">
        <h2>LOGIN</h2>
        <p className="subtitle">Welcome Back</p>

        <div className="form-row">
          <label>Email *</label>
          <input name="email" placeholder="Enter email" onChange={e => setForm({...form, email: e.target.value})} />
        </div>
        <div className="form-row">
          <label>Password *</label>
          <input type="password" name="password" placeholder="Enter password" onChange={e => setForm({...form, password: e.target.value})} />
        </div>

        {error && <p className="login-error">{error}</p>}
        <button className="auth-btn" onClick={handleLogin}>Login</button>
        <p className="switch-link" onClick={goToRegister}>Don't have an account? Register here</p>
      </div>
    </div>
  )
}
export default Login;
