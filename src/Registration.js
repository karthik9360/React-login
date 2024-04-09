import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('confirmPassword:', confirmpassword); */
  };
  const handleRedirect = () => {
    window.location.href = '/';
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label><br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label><br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label><br />
          Confirm Password:
          <input
            type="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label><br />
        <button onClick={handleRedirect}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
