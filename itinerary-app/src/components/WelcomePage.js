import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Itinerary Planner</h1>
      <button onClick={goToLogin} style={{ margin: '10px' }}>Login</button>
      <button onClick={goToRegister} style={{ margin: '10px' }}>Register</button>
    </div>
  );
}

export default WelcomePage;
