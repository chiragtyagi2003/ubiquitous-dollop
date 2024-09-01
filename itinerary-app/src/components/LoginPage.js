import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log('Login successful:', response);
      toast.success('Login successful!');
      setTimeout(() => navigate('/home'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError(error.message || 'An error occurred during login.');
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
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
      <button onClick={handleLogin} style={{ margin: '10px' }}>
        Login
      </button>
      <br />
      <button onClick={() => navigate('/register')} style={{ margin: '10px' }}>
        Register
      </button>
      
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
