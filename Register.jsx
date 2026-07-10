import React, { useState } from 'react';
import './Register.css';

function Register({ onRegister, goToLogin }) {
  const [form, setForm] = useState({ fullName: '', email: '', mobile: '', password: '', confirmPassword: '', address: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    let tempErrors = {};
    if(!form.fullName) tempErrors.fullName = "Required";
    if(!form.email) tempErrors.email = "Required";
    if(!form.mobile) tempErrors.mobile = "Required";
    if(!form.password) tempErrors.password = "Required";
    if(form.password !== form.confirmPassword) tempErrors.confirmPassword = "Not matching";
    if(!form.address) tempErrors.address = "Required";
    setErrors(tempErrors);
    if(Object.keys(tempErrors).length === 0) onRegister(form);
  }

  return (
    <div className="auth-wrapper">
      <h1 className="app-name">BiteGo 🚀</h1>
      <div className="auth-box">
        <h2>REGISTER</h2>
        <p className="subtitle">Create Your Account</p>
        
        <div className="form-row">
          <label>Full Name *</label>
          <input name="fullName" placeholder="Enter full name" onChange={e => setForm({...form, fullName: e.target.value})} />
          <span className="error">{errors.fullName}</span>
        </div>
        <div className="form-row">
          <label>Email *</label>
          <input name="email" placeholder="Enter email" onChange={e => setForm({...form, email: e.target.value})} />
          <span className="error">{errors.email}</span>
        </div>
        <div className="form-row">
          <label>Mobile *</label>
          <input name="mobile" placeholder="Enter mobile" onChange={e => setForm({...form, mobile: e.target.value})} />
          <span className="error">{errors.mobile}</span>
        </div>
        <div className="form-row">
          <label>Password *</label>
          <input type="password" name="password" placeholder="Enter password" onChange={e => setForm({...form, password: e.target.value})} />
          <span className="error">{errors.password}</span>
        </div>
        <div className="form-row">
          <label>Confirm Password *</label>
          <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={e => setForm({...form, confirmPassword: e.target.value})} />
          <span className="error">{errors.confirmPassword}</span>
        </div>
        <div className="form-row">
          <label>Delivery Address *</label>
          <textarea name="address" placeholder="Enter address" onChange={e => setForm({...form, address: e.target.value})}></textarea>
          <span className="error">{errors.address}</span>
        </div>

        <button className="auth-btn" onClick={handleSubmit}>Register</button>
        <p className="switch-link" onClick={goToLogin}>Already have an account? Login here</p>
      </div>
    </div>
  )
}
export default Register;