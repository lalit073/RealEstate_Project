import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');

  const notify = () => toast("Please Enter!");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email_id: email,
      password: password,
      contact: contact,
      address: address,
      role: role
    };

    try {
      await axios.post('http://localhost:8585/register', newUser);
      window.alert('You are registered!');
      clearFormFields();
    } catch (error) {
      console.error('Registration error:', error);
      window.alert('Registration failed. Please try again.');
    }

    navigate('/signin');
  };

  const clearFormFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setContact('');
    setAddress('');
    setRole('');
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Role</label>
        <select
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="owner">Owner</option>
          <option value="user">User</option>
        </select>
         
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button onClick={notify}>Sign Up</button>

      </form>
    </div>
  );
};

export default SignUp;
