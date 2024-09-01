import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await register(email, password);
      console.log('Registration successful:', response);
      toast.success('Registration successful! Redirecting to login...'); // Show success toast
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError(error.message || 'An error occurred during registration.');
      toast.error('Registration failed! Please try again.'); // Show error toast
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister} style={{ margin: '10px' }}>Register</button>
      <br />
      <button onClick={() => navigate('/login')} style={{ margin: '10px' }}>Login</button>
      
      <ToastContainer /> {/* This is where the toast notifications will appear */}
    </div>
  );
}

export default RegisterPage;
